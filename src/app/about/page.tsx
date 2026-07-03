import type { Metadata } from "next";
import Image from "next/image";
import { Award, Eye, Handshake, Rocket } from "lucide-react";
import { site } from "@/config/site";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { Stats } from "@/components/sections/stats";
import { JsonLd } from "@/components/ui/json-ld";

export const metadata: Metadata = {
  title: "About Us — The Team Behind Granyyte",
  description: `Granyyte is a software development agency founded by ${site.founder.name}, a certified FlutterFlow expert. Learn how we build mobile apps, web platforms, and custom software that ships.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Rocket,
    title: "Ship, don't stall",
    description:
      "Ideas are cheap; launched products are not. We optimize everything around getting real software into real users' hands.",
  },
  {
    icon: Eye,
    title: "Radical visibility",
    description:
      "Weekly demo builds, honest timelines, and no jargon walls. You always know exactly where your project stands.",
  },
  {
    icon: Handshake,
    title: "Partners, not vendors",
    description:
      "Most of our clients stay for years. We win when your product wins — so we build like it's our own.",
  },
  {
    icon: Award,
    title: "Certified craft",
    description:
      "Certified expertise, modern stacks, and code you fully own. No lock-in, no shortcuts, no legacy from day one.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.founder.name,
  jobTitle: site.founder.role,
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
  sameAs: site.founder.linkedin,
  url: `${site.url}/about`,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHeader
        label="About"
        title="The agency that treats your product like"
        accent="its own."
        description="Granyyte exists because too many good ideas die between agencies that overpromise and freelancers who disappear. We're the third option: senior execution, agency reliability, founder-level care."
        specs={[
          { label: "Founded", value: "2026" },
          { label: "Led by", value: "Chand Latif" },
          { label: "Certified", value: "FlutterFlow Expert" },
        ]}
      />

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
          <Reveal>
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-edge bg-surface">
              <Image
                src="/founder.jpg"
                alt={`${site.founder.name}, ${site.founder.role} of ${site.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Readability gradient for the name plate */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-base via-base/60 to-transparent"
                aria-hidden
              />
              {/* Corner ticks */}
              <span className="absolute left-3 top-3 size-5 border-l-2 border-t-2 border-lime/70" aria-hidden />
              <span className="absolute right-3 top-3 size-5 border-r-2 border-t-2 border-lime/70" aria-hidden />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-bold text-fg">{site.founder.name}</p>
                  <p className="font-mono text-xs text-lime">{site.founder.role}</p>
                </div>
                <span className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-edge bg-base/70 px-2.5 py-1 font-mono text-[10px] text-muted backdrop-blur">
                  <span className="size-1.5 rounded-full bg-lime animate-pulse-dot" />
                  Founder
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-sm text-lime">01 — The founder</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
              From certified expert to agency founder
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Granyyte was founded by {site.founder.name}, a certified FlutterFlow developer and
                full-stack engineer who spent years shipping apps for clients across Europe, the
                Middle East, and North America — marketplaces, wellness platforms, B2B tools, and
                CRMs.
              </p>
              <p>
                The pattern he kept seeing: clients burned by agencies that hand projects to
                juniors, or by freelancers who vanish mid-build. Granyyte was built as the
                antidote — an agency where the standard of work is set by the person whose name is
                on the door.
              </p>
              <p>
                Today the team designs, builds, and launches software end to end: UI/UX, frontend,
                backend, integrations, and deployment across iOS, Android, and the web.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-edge bg-surface px-5 py-4">
              <Award className="size-6 shrink-0 text-lime" />
              <div>
                <p className="font-medium text-fg">{site.founder.certification}</p>
                <p className="text-xs text-muted">Official FlutterFlow certification</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 font-mono text-sm text-lime">02 — What we stand for</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
              The principles behind every build
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={(i % 2) * 0.1}>
                <div className="flex h-full gap-5 rounded-2xl border border-edge bg-surface p-7">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-edge bg-raised text-lime">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-fg">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
