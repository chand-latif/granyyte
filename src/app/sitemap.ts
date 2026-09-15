import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { seoPages } from "@/content/seo-pages";
import { topics } from "@/content/topics";
import {
  getActiveTopics,
  getAllPosts,
  getLatestModified,
  getPostModified,
  getTotalPages,
} from "@/lib/content/posts";

/**
 * Bump when the marketing pages get a material content edit — not a style tweak.
 *
 * This used to be `new Date()`, which told Google every page changed on every
 * deploy. A lastmod that is always "today" is a lastmod search engines learn to
 * ignore, which then devalues the dates on pages that genuinely did change.
 * Blog URLs derive their own dates from post frontmatter instead.
 */
const CONTENT_UPDATED = new Date("2026-09-10");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const lastModified = CONTENT_UPDATED;

  /** Latest change across all posts — an edit to an old post still changes the index. */
  const latest = getLatestModified(posts);
  const blogUpdated = latest ? new Date(latest) : CONTENT_UPDATED;

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/work`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    {
      url: `${site.url}/blog`,
      lastModified: blogUpdated,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Location + affordability landing pages (root-level URLs)
  const landingPages: MetadataRoute.Sitemap = seoPages.map((p) => ({
    url: `${site.url}/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const workPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(getPostModified(p)),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Topic hubs carry their own copy and feed a money page, so they are worth
  // indexing — dated by the newest post they list.
  const activeTopics = new Set(getActiveTopics().map((t) => t.slug));
  const topicPages: MetadataRoute.Sitemap = topics
    .filter((t) => activeTopics.has(t.slug))
    .map((t) => {
      const topicLatest = getLatestModified(posts.filter((p) => p.hub === t.slug));
      return {
        url: `${site.url}/blog/topic/${t.slug}`,
        lastModified: topicLatest ? new Date(topicLatest) : blogUpdated,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });

  // Pagination pages 2..n. Page 1 is /blog, already listed above.
  const totalPages = getTotalPages();
  const paginationPages: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, totalPages - 1) },
    (_, i) => ({
      url: `${site.url}/blog/page/${i + 2}`,
      lastModified: blogUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })
  );

  return [
    ...staticPages,
    ...servicePages,
    ...landingPages,
    ...workPages,
    ...topicPages,
    ...blogPages,
    ...paginationPages,
  ];
}
