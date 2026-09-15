import type { Metadata } from "next";
import { site } from "@/config/site";
import { getAllPosts, getPageOfPosts, getTotalPages } from "@/lib/content/posts";
import { PageHeader } from "@/components/ui/page-header";
import { PostList, TopicNav, Pagination } from "@/components/sections/post-list";
import { JsonLd } from "@/components/ui/json-ld";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Blog: Insights on Apps, Web & Custom Software",
  description:
    "Practical guides on mobile app development, FlutterFlow, web platforms, and custom software, written by the people who ship them.",
  alternates: { canonical: "/blog" },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${site.url}/blog#blog`,
  name: `${site.name} Blog`,
  description:
    "Practical guides on mobile app development, FlutterFlow, web platforms, and custom software.",
  url: `${site.url}/blog`,
  publisher: { "@id": `${site.url}/#organization` },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const totalPages = getTotalPages();

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <PageHeader
        label="Blog"
        title="Notes from the"
        accent="build floor."
        description="Practical, no-fluff guides on mobile apps, web platforms, and custom software, written by the people who ship them."
        specs={[
          { label: "Topics", value: "Apps · Web · Software" },
          { label: "Articles", value: String(posts.length) },
          { label: "Written by", value: "Chand Latif" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <TopicNav />
        <PostList posts={getPageOfPosts(1)} />
        <Pagination page={1} totalPages={totalPages} />
      </section>

      <CtaBand />
    </>
  );
}
