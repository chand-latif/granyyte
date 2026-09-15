import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageOfPosts, getTotalPages } from "@/lib/content/posts";
import { PageHeader } from "@/components/ui/page-header";
import { PostList, TopicNav, Pagination } from "@/components/sections/post-list";
import { CtaBand } from "@/components/sections/cta-band";

/** Page 1 lives at /blog; this route covers 2..n only. */
export const dynamicParams = false;

type Params = { n: string };

export function generateStaticParams(): Params[] {
  const total = getTotalPages();
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { n } = await params;
  const page = Number(n);
  return {
    title: `Blog: Insights on Apps, Web & Custom Software (Page ${page})`,
    description:
      "Practical guides on mobile app development, FlutterFlow, web platforms, and custom software, written by the people who ship them.",
    // Each page self-canonicals. Pointing page 2+ at /blog is the classic
    // mistake — it tells Google the posts listed here don't exist.
    alternates: { canonical: `/blog/page/${page}` },
  };
}

export default async function BlogPaginatedPage({ params }: { params: Promise<Params> }) {
  const { n } = await params;
  const page = Number(n);
  const totalPages = getTotalPages();

  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound();

  return (
    <>
      <PageHeader
        label={`Blog · Page ${page}`}
        title="Notes from the"
        accent="build floor."
        description="Practical, no-fluff guides on mobile apps, web platforms, and custom software, written by the people who ship them."
        specs={[
          { label: "Topics", value: "Apps · Web · Software" },
          { label: "Page", value: `${page} of ${totalPages}` },
          { label: "Written by", value: "Chand Latif" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
        <TopicNav />
        <PostList posts={getPageOfPosts(page)} />
        <Pagination page={page} totalPages={totalPages} />
      </section>

      <CtaBand />
    </>
  );
}
