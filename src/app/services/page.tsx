import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/content/services";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { TechMarquee } from "@/components/sections/marquee";

export const metadata: Metadata = {
  title: "Services — Mobile Apps, Web Development & Custom Software",
  description:
    "Granyyte's services: mobile app development (iOS & Android), SEO-first web development, and custom software built around your workflows. Fixed pricing, real timelines.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="One team for the"
        accent="whole journey."
        description="Design, development, deployment, and beyond. Pick a discipline — or bring us an idea and we'll tell you exactly what it needs."
      />

      <section className="mx-auto max-w-6xl space-y-6 px-5 py-24 md:px-8 md:py-32">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid gap-8 rounded-2xl border border-edge bg-surface p-8 transition-all duration-300 hover:border-lime/40 hover:bg-raised md:grid-cols-[1fr_1.2fr] md:p-10"
              >
                <div>
                  <span className="flex size-14 items-center justify-center rounded-xl border border-edge bg-raised text-lime">
                    <Icon className="size-7" />
                  </span>
                  <h2 className="mt-6 flex items-center gap-3 font-display text-2xl font-bold text-fg md:text-3xl">
                    {service.title}
                    <ArrowUpRight className="size-6 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">{service.excerpt}</p>
                  <p className="mt-6 font-mono text-xs text-faint">{service.tech.join(" · ")}</p>
                </div>
                <ul className="grid content-center gap-3">
                  {service.deliverables.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          );
        })}
      </section>

      <TechMarquee />
      <CtaBand />
    </>
  );
}
