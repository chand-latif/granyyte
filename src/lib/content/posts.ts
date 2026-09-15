/**
 * The blog content layer.
 *
 * This module is the ONLY place that knows where posts come from. Pages, the
 * sitemap, the RSS feed, and every JSON-LD block import from here and never
 * touch src/content/posts/ directly.
 *
 * Today the source is MDX files in the repo, indexed at build time into
 * posts.generated.ts by scripts/build-posts-manifest.mjs. If that ever changes
 * — a git-backed CMS, or a headless one — the functions below get rewritten and
 * nothing downstream moves.
 *
 * The one deliberate exception is the post *body*, which is a bundler import in
 * src/app/blog/[slug]/page.tsx. See the note there before changing it; it is the
 * thing that has to move first if this blog ever grows past a few hundred posts.
 */

import { generatedPosts } from "@/content/posts.generated";
import { topics, type Topic } from "@/content/topics";

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO day, YYYY-MM-DD */
  date: string;
  /** ISO day. Set when a post is materially revised — drives dateModified. */
  updated?: string;
  /** Derived from word count at build time, never hand-typed. */
  readingTime: string;
  tags: string[];
  /** topics.ts slug. Exactly one per post. */
  hub: string;
  /** The query this post is meant to win. Unique across all posts. */
  targetKeyword: string;
  /** Money page this post should funnel to. Falls back to the hub's. */
  relatedService?: string;
  /** Card label for relatedService. Needed when it differs from the hub's page. */
  relatedServiceLabel?: string;
};

/** Newest first — the manifest is pre-sorted, but don't rely on that downstream. */
export const posts: Post[] = [...generatedPosts].sort((a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)
);

export const POSTS_PER_PAGE = 12;

export function getAllPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** The date Google should treat as this post's freshness signal. */
export function getPostModified(post: Post): string {
  return post.updated ?? post.date;
}

/**
 * Latest modification across a set of posts, for index pages that list them.
 *
 * Not the same as "the newest post": revising an old post changes the listing
 * too, and posts[] is ordered by publish date, so the most recently *modified*
 * post can sit anywhere in the array.
 */
export function getLatestModified(list: Post[]): string | undefined {
  return list.reduce<string | undefined>((latest, post) => {
    const modified = getPostModified(post);
    return !latest || modified > latest ? modified : latest;
  }, undefined);
}

export function getPostsByTopic(topicSlug: string): Post[] {
  return posts.filter((p) => p.hub === topicSlug);
}

/** Only hubs that actually have posts — an empty hub page is a thin page. */
export function getActiveTopics(): Topic[] {
  return topics.filter((t) => getPostsByTopic(t.slug).length > 0);
}

export function getTopicForPost(post: Post): Topic | undefined {
  return topics.find((t) => t.slug === post.hub);
}

/**
 * Same hub first, then most shared tags. Keeps every post linked to siblings so
 * nothing ends up reachable only from a deep pagination page.
 */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const post = getPost(slug);
  if (!post) return [];

  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score:
        (p.hub === post.hub ? 10 : 0) + p.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1));

  return scored.slice(0, limit).map((entry) => entry.post);
}

/** Chronological neighbours, so even an unrelated post is never a dead end. */
export function getAdjacentPosts(slug: string): { previous?: Post; next?: Post } {
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return {
    // posts[] is newest-first, so the *newer* neighbour sits at a lower index.
    next: posts[index - 1],
    previous: posts[index + 1],
  };
}

/**
 * The reverse of `relatedService`: given a service or landing page href, the
 * posts that point at it.
 *
 * Deriving this instead of hand-listing `relatedPosts` on every page means the
 * link back into the blog appears the moment a post is written, and can never
 * drift or point at a deleted post.
 */
export function getPostsForService(href: string, limit = 3): Post[] {
  const direct = posts.filter((p) => p.relatedService === href);
  const viaHub = posts.filter(
    (p) => !p.relatedService && getTopicForPost(p)?.relatedService === href
  );
  return [...direct, ...viaHub].slice(0, limit);
}

export function getTotalPages(): number {
  return Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
}

export function getPageOfPosts(page: number): Post[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}
