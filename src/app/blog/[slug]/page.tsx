import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts, getPost } from "@/content/posts";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/badge";
import { JsonLd } from "@/components/ui/json-ld";
import { CtaBand } from "@/components/sections/cta-band";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
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

  const { default: PostContent } = await import(`@/content/posts/${slug}.mdx`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-44">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-lime"
          >
            <ArrowLeft className="size-4" /> All posts
          </Link>

          <header className="mt-10">
            <div className="flex items-center gap-3 font-mono text-xs text-faint">
              <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight text-fg md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-2">
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

      <CtaBand />
    </>
  );
}
