import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  getAdjacentPosts,
  getRelatedPosts,
  getTopicForPost,
  type Post,
} from "@/lib/content/posts";
import { Reveal } from "@/components/ui/reveal";

/**
 * Everything that keeps a post from being a dead end: the money page it feeds,
 * three siblings, and chronological neighbours. Without this a post is only
 * reachable from a pagination page and passes its link equity nowhere.
 */
export function RelatedPosts({ post }: { post: Post }) {
  const related = getRelatedPosts(post.slug);
  const { previous, next } = getAdjacentPosts(post.slug);
  const topic = getTopicForPost(post);

  const serviceHref = post.relatedService ?? topic?.relatedService;
  // A post can point somewhere other than its hub's money page, and then the
  // hub's label would describe the wrong page.
  const serviceLabel =
    post.relatedServiceLabel ??
    (serviceHref === topic?.relatedService ? topic?.relatedServiceLabel : undefined) ??
    "See how we can help";

  return (
    <section className="mx-auto max-w-3xl px-5 pb-8 md:px-8">
      {serviceHref && (
        <Reveal>
          <Link
            href={serviceHref}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-lime/25 bg-lime/5 p-6 transition-all duration-300 hover:border-lime/60 hover:bg-lime/10"
          >
            <span>
              <span className="block font-mono text-xs text-lime">Related service</span>
              <span className="mt-1 block font-display text-lg font-bold text-fg transition-colors group-hover:text-lime">
                {serviceLabel}
              </span>
            </span>
            <ArrowUpRight className="size-5 shrink-0 text-lime transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      )}

      {related.length > 0 && (
        <Reveal delay={0.05}>
          <div className="mt-12">
            <h2 className="font-mono text-sm text-lime">
              <span aria-hidden>{"// "}</span>Keep reading
            </h2>
            <ul className="mt-5 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex items-start justify-between gap-4 rounded-xl border border-edge bg-surface p-5 transition-all duration-300 hover:border-lime/40 hover:bg-raised"
                  >
                    <span>
                      <span className="block font-display text-base font-bold text-fg transition-colors group-hover:text-lime">
                        {item.title}
                      </span>
                      <span className="mt-1 block font-mono text-xs text-faint">
                        {item.readingTime}
                      </span>
                    </span>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      {(previous || next) && (
        <Reveal delay={0.1}>
          <nav
            aria-label="More posts"
            className="mt-8 grid gap-3 border-t border-edge pt-8 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={`/blog/${previous.slug}`}
                className="group rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-lime/40"
              >
                <span className="flex items-center gap-2 font-mono text-xs text-faint">
                  <ArrowLeft className="size-3.5" /> Older
                </span>
                <span className="mt-2 block font-display text-sm font-bold text-fg transition-colors group-hover:text-lime">
                  {previous.title}
                </span>
              </Link>
            ) : (
              // Holds the first grid column so a lone "Newer" card stays right,
              // but must not occupy a row in the single-column mobile stack.
              <span className="hidden sm:block" />
            )}
            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="group rounded-xl border border-edge bg-surface p-5 text-right transition-colors hover:border-lime/40 sm:col-start-2"
              >
                <span className="flex items-center justify-end gap-2 font-mono text-xs text-faint">
                  Newer <ArrowRight className="size-3.5" />
                </span>
                <span className="mt-2 block font-display text-sm font-bold text-fg transition-colors group-hover:text-lime">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        </Reveal>
      )}
    </section>
  );
}
