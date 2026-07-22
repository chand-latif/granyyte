import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { seoPages, getSeoPage, sialkotGeo, sialkotKnowsAbout } from "@/content/seo-pages";
import { getService } from "@/content/services";
import { projects } from "@/content/projects";
import { site } from "@/config/site";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/ui/json-ld";
import { WorkGrid } from "@/components/sections/work-grid";
import { CtaBand } from "@/components/sections/cta-band";

type Params = { slug: string };

// Only the slugs defined in seo-pages.ts exist — everything else 404s.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return seoPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function SeoLandingPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const service = getService(page.relatedService);
  const related = projects.filter((p) => page.relatedProjects.includes(p.slug));
  const otherSialkotPages = page.localBusiness
    ? seoPages.filter((p) => p.localBusiness && p.slug !== page.slug)
    : [];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.metaTitle,
    serviceType: page.metaTitle,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
    },
    areaServed: "Worldwide",
    url: `${site.url}/${page.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: page.metaTitle,
        item: `${site.url}/${page.slug}`,
      },
    ],
  };

  // Sialkot cluster only — invisible local-ranking signal (JSON-LD is never
  // rendered as page copy), so it doesn't affect the site's international feel.
  const localBusinessJsonLd = page.localBusiness
    ? {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${site.url}/${page.slug}#local`,
        name: site.name,
        url: `${site.url}/${page.slug}`,
        image: `${site.url}/logo.png`,
        telephone: site.contact.phone,
        priceRange: "$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sialkot",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: sialkotGeo.latitude,
          longitude: sialkotGeo.longitude,
        },
        areaServed: { "@type": "City", name: "Sialkot" },
        knowsAbout: sialkotKnowsAbout,
        sameAs: [site.socials.linkedin, site.socials.facebook].filter(Boolean),
      }
    : null;

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {localBusinessJsonLd && <JsonLd data={localBusinessJsonLd} />}

      <PageHeader
        label={page.label}
        title={page.title}
        accent={page.accent}
        description={page.headerDescription}
        specs={page.specs}
      />

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Reveal>
            <p className="mb-4 font-mono text-sm text-lime">01 — Overview</p>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            {service && (
              <Link
                href={`/services/${service.slug}`}
                className="mt-8 inline-flex items-center gap-2 font-medium text-lime transition-colors hover:text-fg"
              >
                Explore the full {service.shortTitle.toLowerCase()} service
                <ArrowUpRight className="size-4" />
              </Link>
            )}
          </Reveal>
          {page.pricing && (
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-edge bg-surface p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-faint">
                  Honest pricing
                </p>
                <ul className="mt-5 space-y-4">
                  {page.pricing.map((tier, i) => (
                    <li
                      key={tier.range}
                      className={
                        i < page.pricing!.length - 1 ? "border-b border-edge pb-4" : undefined
                      }
                    >
                      <p className="font-mono text-sm font-medium text-lime">{tier.range}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{tier.deliverable}</p>
                    </li>
                  ))}
                </ul>
                {page.pricingNote && (
                  <p className="mt-6 border-t border-edge pt-5 text-xs leading-relaxed text-faint">
                    {page.pricingNote}
                  </p>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Why points */}
      <section className="border-y border-edge bg-surface/60">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-sm text-lime">02 — Why Granyyte</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
                {page.whyTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {page.whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={(i % 2) * 0.1}>
                <div className="flex h-full gap-5 rounded-2xl border border-edge bg-base p-7">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-edge bg-raised text-lime">
                    <Check className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-fg">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 font-mono text-sm text-lime">03 — FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
              Straight answers
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {page.faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={(i % 2) * 0.1}>
              <div className="h-full rounded-2xl border border-edge bg-surface p-7">
                <h3 className="font-display text-lg font-bold text-fg">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="border-t border-edge">
          <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
            <Reveal>
              <div className="mb-12 max-w-2xl">
                <p className="mb-4 font-mono text-sm text-lime">04 — Proof of work</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
                  Shipped from Pakistan, live worldwide
                </h2>
              </div>
            </Reveal>
            <WorkGrid projects={related} />
          </div>
        </section>
      )}

      {/* Sialkot cluster cross-link — minimal, contained to these 3 pages only */}
      {otherSialkotPages.length > 0 && (
        <div className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
          <p className="font-mono text-xs text-faint">
            Also in Sialkot:{" "}
            {otherSialkotPages.map((p, i) => (
              <span key={p.slug}>
                <Link href={`/${p.slug}`} className="text-muted transition-colors hover:text-lime">
                  {p.label}
                </Link>
                {i < otherSialkotPages.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      )}

      <CtaBand />
    </>
  );
}
