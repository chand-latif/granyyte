import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { services, getService } from "@/content/services";
import { projects } from "@/content/projects";
import { site } from "@/config/site";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/badge";
import { JsonLd } from "@/components/ui/json-ld";
import { WorkGrid } from "@/components/sections/work-grid";
import { CtaBand } from "@/components/sections/cta-band";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projects.filter((p) => service.relatedProjects.includes(p.slug));

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
    },
    areaServed: "Worldwide",
    url: `${site.url}/services/${service.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <PageHeader label="Services" title={service.title} description={service.intro} />

      {/* Deliverables + tech */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Reveal>
            <p className="mb-4 font-mono text-sm text-lime">01 — What you get</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
              Everything included
            </h2>
            <ul className="mt-8 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-muted">
                  <Check className="mt-1 size-5 shrink-0 text-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-edge bg-surface p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-faint">
                Technologies
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-faint">
                Engagement
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex justify-between border-b border-edge pb-3">
                  <span>Proposal turnaround</span>
                  <span className="text-fg">1–2 days</span>
                </li>
                <li className="flex justify-between border-b border-edge pb-3">
                  <span>Typical delivery</span>
                  <span className="text-fg">2–4 weeks</span>
                </li>
                <li className="flex justify-between border-b border-edge pb-3">
                  <span>Pricing</span>
                  <span className="text-fg">Fixed, scoped upfront</span>
                </li>
                <li className="flex justify-between">
                  <span>Code ownership</span>
                  <span className="text-fg">100% yours</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-edge bg-surface/60">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-sm text-lime">02 — FAQ</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
                Common questions
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {service.faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-2xl border border-edge bg-base p-7">
                  <h3 className="font-display text-lg font-bold text-fg">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-sm text-lime">03 — Related work</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
                Built with this expertise
              </h2>
            </div>
          </Reveal>
          <WorkGrid projects={related} />
        </section>
      )}

      <CtaBand />
    </>
  );
}
