import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getActiveTopics, getTopicForPost, type Post } from "@/lib/content/posts";
import { Reveal } from "@/components/ui/reveal";

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
    <Reveal delay={Math.min(index % 3, 2) * 0.08} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:bg-raised hover:shadow-[0_18px_40px_-24px_var(--color-lime)]">
        {/* Lime hairline that draws across the top on hover */}
        <span
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden
        />

        <div className="flex items-center justify-between gap-3">
          {topic ? (
            <Link
              href={`/blog/topic/${topic.slug}`}
              className="relative z-10 inline-flex max-w-[70%] items-center truncate rounded-full border border-lime/30 bg-lime/5 px-2.5 py-0.5 font-mono text-[10px] text-lime transition-colors hover:border-lime/60 hover:bg-lime/10"
            >
              {topic.name}
            </Link>
          ) : (
            <span />
          )}
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-faint">
            {post.readingTime}
          </span>
        </div>

        <h2 className="mt-5 font-display text-lg font-bold leading-snug text-fg transition-colors duration-300 group-hover:text-lime md:text-xl">
          {/* Stretched link keeps the whole card clickable without nesting the
              topic link inside an anchor, which is invalid HTML. */}
          <Link href={`/blog/${post.slug}`} className="line-clamp-3 after:absolute after:inset-0">
            {post.title}
          </Link>
        </h2>

        <p className="mb-6 mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{post.description}</p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-edge pt-4">
          <time dateTime={post.date} className="font-mono text-[11px] text-faint">
            {dateFormat.format(new Date(post.date))}
          </time>
          <span
            className="flex size-8 items-center justify-center rounded-full border border-edge-strong text-faint transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-ink"
            aria-hidden
          >
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </article>
    </Reveal>
  );
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}

/** Topic row on /blog — the entry point into each hub. */
export function TopicNav({ activeSlug }: { activeSlug?: string }) {
  // Only hubs with posts: an empty hub has no page, so linking it would 404.
  const live = getActiveTopics().filter((t) => t.slug !== activeSlug);
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
