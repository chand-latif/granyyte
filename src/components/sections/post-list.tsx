import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTopicForPost, type Post } from "@/lib/content/posts";
import { topics } from "@/content/topics";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/badge";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  const topic = getTopicForPost(post);

  return (
    // Cap the stagger: an uncapped index * 0.08 puts the twelfth card six
    // seconds out, and every card past that never appears at all.
    <Reveal delay={Math.min(index, 5) * 0.08}>
      <article className="group relative rounded-2xl border border-edge bg-surface p-8 transition-all duration-300 hover:border-lime/40 hover:bg-raised">
        <div className="flex items-center gap-3 font-mono text-xs text-faint">
          <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h2 className="mt-4 flex items-start justify-between gap-4 font-display text-2xl font-bold text-fg md:text-3xl">
          {/* Stretched link keeps the whole card clickable without nesting the
              topic link inside an anchor, which is invalid HTML. */}
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
          <ArrowUpRight className="mt-1.5 size-6 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
        </h2>

        <p className="mt-3 text-base leading-relaxed text-muted">{post.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {topic && (
            <Link
              href={`/blog/topic/${topic.slug}`}
              className="relative z-10 inline-flex items-center rounded-full border border-lime/30 bg-lime/5 px-3 py-1 font-mono text-xs text-lime transition-colors hover:border-lime/60 hover:bg-lime/10"
            >
              {topic.name}
            </Link>
          )}
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}

/** Topic row on /blog — the entry point into each hub. */
export function TopicNav({ activeSlug }: { activeSlug?: string }) {
  const live = topics.filter((t) => t.slug !== activeSlug);
  if (live.length === 0) return null;

  return (
    <nav aria-label="Blog topics" className="mb-10 flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`inline-flex items-center rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
          activeSlug
            ? "border-edge bg-surface text-muted hover:border-lime/40 hover:text-fg"
            : "border-lime/40 bg-lime/10 text-lime"
        }`}
      >
        All posts
      </Link>
      {live.map((topic) => (
        <Link
          key={topic.slug}
          href={`/blog/topic/${topic.slug}`}
          className="inline-flex items-center rounded-full border border-edge bg-surface px-4 py-1.5 font-mono text-xs text-muted transition-colors hover:border-lime/40 hover:text-fg"
        >
          {topic.name}
        </Link>
      ))}
    </nav>
  );
}

/**
 * Numbered pagination. Every page is a real, indexable, self-canonical URL —
 * infinite scroll would hide most of the archive from crawlers.
 */
export function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null;

  const href = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

  // Window the numbers: first, last, and the current page's neighbours. Listing
  // every page wraps into a wall of links once the archive passes ~15 pages,
  // and crawlers get to the deep pages through the sitemap and topic hubs anyway.
  const window = new Set<number>([1, totalPages, page - 1, page, page + 1]);
  const pages = [...window].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-14 flex flex-wrap items-center justify-center gap-2 border-t border-edge pt-10"
    >
      {page > 1 && (
        <Link
          href={href(page - 1)}
          rel="prev"
          className="rounded-full border border-edge bg-surface px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-lime/40 hover:text-fg"
        >
          Previous
        </Link>
      )}
      {pages.map((n, i) => (
        <span key={n} className="flex items-center gap-2">
          {i > 0 && n - pages[i - 1] > 1 && (
            <span className="font-mono text-xs text-faint" aria-hidden>
              …
            </span>
          )}
          <Link
            href={href(n)}
            aria-label={`Page ${n}`}
            aria-current={n === page ? "page" : undefined}
            className={`inline-flex size-9 items-center justify-center rounded-full border font-mono text-xs transition-colors ${
              n === page
                ? "border-lime/40 bg-lime/10 text-lime"
                : "border-edge bg-surface text-muted hover:border-lime/40 hover:text-fg"
            }`}
          >
            {n}
          </Link>
        </span>
      ))}
      {page < totalPages && (
        <Link
          href={href(page + 1)}
          rel="next"
          className="rounded-full border border-edge bg-surface px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-lime/40 hover:text-fg"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
