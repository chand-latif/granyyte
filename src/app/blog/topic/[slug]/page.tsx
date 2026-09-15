import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { getTopic } from "@/content/topics";
import { getActiveTopics, getPostsByTopic } from "@/lib/content/posts";
import { PageHeader } from "@/components/ui/page-header";
import { PostList, TopicNav } from "@/components/sections/post-list";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/ui/json-ld";
import { CtaBand } from "@/components/sections/cta-band";

/** Hubs are curated in topics.ts — an unknown topic slug 404s. */
export const dynamicParams = false;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  // Only hubs with posts. A hub page listing nothing is a thin page.
  return getActiveTopics().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: topic.metaTitle,
    description: topic.metaDescription,
    alternates: { canonical: `/blog/topic/${topic.slug}` },
  };
}

export default async function TopicPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const posts = getPostsByTopic(topic.slug);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}/blog/topic/${topic.slug}#collection`,
    name: topic.metaTitle,
    description: topic.metaDescription,
    url: `${site.url}/blog/topic/${topic.slug}`,
    isPartOf: { "@id": `${site.url}/blog#blog` },
    publisher: { "@id": `${site.url}/#organization` },
    hasPart: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${site.url}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: topic.name,
        item: `${site.url}/blog/topic/${topic.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={collectionJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <PageHeader
        label={topic.name}
        title={topic.title}
        accent={topic.accent}
        description={topic.headerDescription}
        specs={[
          { label: "Topic", value: topic.name },
          { label: "Articles", value: String(posts.length) },
          { label: "Written by", value: "Chand Latif" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <TopicNav activeSlug={topic.slug} />

        <Reveal>
          <div className="mb-14 border-l-2 border-lime/40 pl-6">
            {topic.intro.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted first:mt-0">
                {paragraph}
              </p>
            ))}
            <Link
              href={topic.relatedService}
              className="group mt-6 inline-flex items-center gap-2 font-mono text-sm text-lime transition-colors hover:text-fg"
            >
              {topic.relatedServiceLabel}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <PostList posts={posts} />
      </section>

      <CtaBand />
    </>
  );
}
