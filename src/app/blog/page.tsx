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
    "Practical guides on mobile app development, FlutterFlow, web platforms, and custom software — written by the team that ships them.",
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
        title={
          <>
            Notes from the <span className="text-lime">build floor</span>
          </>
        }
        description="No fluff, no recycled listicles — practical answers to the questions founders actually ask us."
      />
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
      <CtaBand />
    </>
  );
}
