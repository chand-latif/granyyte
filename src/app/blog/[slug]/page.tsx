import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  getAllPosts,
  getPost,
  getPostModified,
  getTopicForPost,
} from "@/lib/content/posts";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/badge";
import { JsonLd } from "@/components/ui/json-ld";
import { RelatedPosts } from "@/components/sections/related-posts";
import { CtaBand } from "@/components/sections/cta-band";

/** Every post is known at build time — unknown slugs 404 instead of trying an import. */
export const dynamicParams = false;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: getPostModified(post),
      tags: post.tags,
      url: `${site.url}/blog/${post.slug}`,
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // NOTE: this template literal makes the bundler compile *every* MDX file into
  // this route's graph. Fine at this size, and it is what keeps the route fully
  // static. Past a few hundred posts this is the first thing to change: compile
  // the body at request time and prerender only a subset via generateStaticParams.
  const { default: PostContent } = await import(`@/content/posts/${slug}.mdx`);

  const topic = getTopicForPost(post);
  const modified = getPostModified(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: modified,
    image: `${site.url}/blog/${post.slug}/opengraph-image`,
    author: {
      "@type": "Person",
      "@id": `${site.url}/#chand-latif`,
      name: site.founder.name,
      url: `${site.url}/about`,
    },
    publisher: { "@id": `${site.url}/#organization` },
    isPartOf: { "@id": `${site.url}/blog#blog` },
    ...(topic ? { articleSection: topic.name } : {}),
    keywords: post.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      ...(topic
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: topic.name,
              item: `${site.url}/blog/topic/${topic.slug}`,
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: topic ? 4 : 3,
        name: post.title,
        item: `${site.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <article className="mx-auto max-w-3xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-44">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-lime"
          >
            <ArrowLeft className="size-4" /> All posts
          </Link>

          <header className="mt-10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-faint">
              <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
              {post.updated && post.updated !== post.date && (
                <>
                  <span aria-hidden>·</span>
                  <span className="text-lime">
                    Updated {dateFormat.format(new Date(post.updated))}
                  </span>
                </>
              )}
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight text-fg md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {topic && (
                <Link
                  href={`/blog/topic/${topic.slug}`}
                  className="inline-flex items-center rounded-full border border-lime/30 bg-lime/5 px-3 py-1 font-mono text-xs text-lime transition-colors hover:border-lime/60 hover:bg-lime/10"
                >
                  {topic.name}
                </Link>
              )}
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </header>

          <div className="mt-4 border-t border-edge pt-4">
            <PostContent />
          </div>
        </Reveal>
      </article>

      <RelatedPosts post={post} />

      <CtaBand />
    </>
  );
}
