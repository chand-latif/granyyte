/**
 * Generates src/content/posts.generated.ts from the frontmatter of every
 * src/content/posts/*.mdx file. Runs from `prebuild` and `predev`.
 *
 * Why generate instead of reading files at request time: the blog listing,
 * sitemap, feed, and generateStaticParams all need post metadata, and a plain
 * static array keeps those routes fully static with no runtime fs access. Only
 * the post body is loaded per-page.
 *
 * This script is also the guard rail. It fails the build on a missing required
 * field, an unknown hub, or two posts targeting the same keyword — the last one
 * being the likeliest way a large blog quietly cannibalises its own rankings.
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const POSTS_DIR = join(root, "src", "content", "posts");
const OUT_FILE = join(root, "src", "content", "posts.generated.ts");
const TOPICS_FILE = join(root, "src", "content", "topics.ts");
const SEO_PAGES_FILE = join(root, "src", "content", "seo-pages.ts");

const WORDS_PER_MINUTE = 200;
const REQUIRED = ["title", "description", "date", "tags", "hub", "targetKeyword"];

const errors = [];
const warnings = [];

/**
 * Pulls slug values out of a content module without importing TypeScript.
 * Both files declare them as `slug: "…"` object literals.
 */
function slugsFrom(file) {
  const src = readFileSync(file, "utf8");
  return [...src.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
}

function readingTime(body) {
  // Fenced code is scanned, not read at prose speed — drop it from the count.
  const prose = body.replace(/```[\s\S]*?```/g, "").trim();
  const words = prose.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}

function isIsoDate(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

const topicSlugs = slugsFrom(TOPICS_FILE);
const seoSlugs = slugsFrom(SEO_PAGES_FILE);

const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
if (files.length === 0) errors.push("No .mdx files found in src/content/posts/");

const posts = [];

for (const file of files) {
  const slug = basename(file, ".mdx");
  const { data, content } = matter(readFileSync(join(POSTS_DIR, file), "utf8"));
  const where = `posts/${file}`;

  for (const key of REQUIRED) {
    if (data[key] === undefined || data[key] === "") {
      errors.push(`${where}: missing required frontmatter field "${key}"`);
    }
  }

  // gray-matter parses bare YAML dates into Date objects; we want the raw ISO day.
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date;
  const updated =
    data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : data.updated;

  if (date !== undefined && !isIsoDate(date)) {
    errors.push(`${where}: "date" must be YYYY-MM-DD, got ${JSON.stringify(data.date)}`);
  }
  if (updated !== undefined && !isIsoDate(updated)) {
    errors.push(`${where}: "updated" must be YYYY-MM-DD, got ${JSON.stringify(data.updated)}`);
  }
  if (updated && date && updated < date) {
    errors.push(`${where}: "updated" (${updated}) is before "date" (${date})`);
  }
  if (data.hub && !topicSlugs.includes(data.hub)) {
    errors.push(
      `${where}: unknown hub "${data.hub}". Add it to src/content/topics.ts first. ` +
        `Known hubs: ${topicSlugs.join(", ")}`
    );
  }
  if (data.tags && (!Array.isArray(data.tags) || data.tags.length === 0)) {
    errors.push(`${where}: "tags" must be a non-empty array`);
  }

  posts.push({
    slug,
    title: data.title,
    description: data.description,
    date,
    ...(updated ? { updated } : {}),
    readingTime: readingTime(content),
    tags: data.tags ?? [],
    hub: data.hub,
    targetKeyword: data.targetKeyword,
    ...(data.relatedService ? { relatedService: data.relatedService } : {}),
    ...(data.relatedServiceLabel ? { relatedServiceLabel: data.relatedServiceLabel } : {}),
  });
}

// --- Keyword registry -------------------------------------------------------
// Two posts chasing one query split their own signals and neither wins.
const byKeyword = new Map();
for (const post of posts) {
  const key = String(post.targetKeyword ?? "").trim().toLowerCase();
  if (!key) continue;
  if (byKeyword.has(key)) {
    errors.push(
      `Duplicate targetKeyword "${post.targetKeyword}" in posts/${post.slug}.mdx and ` +
        `posts/${byKeyword.get(key)}.mdx — these two posts would cannibalise each other. ` +
        `Narrow one of them.`
    );
  } else {
    byKeyword.set(key, post.slug);
  }
}

// A post aimed at a commercial query already owned by a landing page is a
// warning, not an error: sometimes the informational angle is genuinely distinct.
for (const post of posts) {
  const key = String(post.targetKeyword ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
  if (seoSlugs.includes(key)) {
    warnings.push(
      `posts/${post.slug}.mdx targets "${post.targetKeyword}", which is also the landing page ` +
        `/${key}. Make sure the post answers a different question than the page sells.`
    );
  }
}

posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));

for (const warning of warnings) console.warn(`[posts] warning: ${warning}`);

if (errors.length > 0) {
  console.error(`\n[posts] Manifest build failed with ${errors.length} error(s):\n`);
  for (const error of errors) console.error(`  • ${error}`);
  console.error("");
  process.exit(1);
}

const file = `// AUTO-GENERATED by scripts/build-posts-manifest.mjs — do not edit by hand.
// Source of truth is the frontmatter in src/content/posts/*.mdx.
// Regenerate with \`npm run posts:build\` (also runs from prebuild/predev).

import type { Post } from "@/lib/content/posts";

export const generatedPosts: Post[] = ${JSON.stringify(posts, null, 2)};
`;

writeFileSync(OUT_FILE, file, "utf8");
console.log(`[posts] wrote ${posts.length} post(s) to src/content/posts.generated.ts`);
