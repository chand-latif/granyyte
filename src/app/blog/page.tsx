import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/content/posts";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/badge";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Blog — Insights on Apps, Web & Custom Software",
  description:
    "Practical guides on mobile app development, FlutterFlow, web platforms, and custom software — written by the engineer who ships them.",
  alternates: { canonical: "/blog" },
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Notes from the"
        accent="build floor."
        description="Practical guides on apps, web, and custom software — in the works."
        specs={[
          { label: "Topics", value: "Apps · Web · Software" },
          { label: "Status", value: "Coming soon" },
          { label: "Written by", value: "Chand Latif" },
        ]}
      />

      {posts.length === 0 ? (
        <section className="mx-auto max-w-3xl px-5 py-28 text-center md:px-8 md:py-40">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-edge bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted">
              <span className="size-1.5 rounded-full bg-lime animate-pulse-dot" />
              In the works
            </span>
            <h2 className="mt-8 font-display text-5xl font-bold tracking-tight text-fg md:text-7xl">
              Coming <span className="text-lime">soon</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
              I&apos;m writing practical, no-fluff guides on mobile apps, web platforms, and custom
              software. Check back shortly — or reach out if there&apos;s something you&apos;d like
              me to cover.
            </p>
          </Reveal>
        </section>
      ) : (
        <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-edge bg-surface p-8 transition-all duration-300 hover:border-lime/40 hover:bg-raised"
                >
                  <div className="flex items-center gap-3 font-mono text-xs text-faint">
                    <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-4 flex items-start justify-between gap-4 font-display text-2xl font-bold text-fg md:text-3xl">
                    {post.title}
                    <ArrowUpRight className="mt-1.5 size-6 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{post.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
