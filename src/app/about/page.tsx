import type { Metadata } from "next";
import Image from "next/image";
import { Award, Eye, Handshake, Rocket, BadgeCheck, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { Stats } from "@/components/sections/stats";
import { JsonLd } from "@/components/ui/json-ld";

export const metadata: Metadata = {
  title: `About — ${site.founder.name}, Founder of Granyyte`,
  description: `${site.founder.name} is a senior software engineer building mobile apps, web platforms, and custom software under the Granyyte name. Learn how I take products from idea to launch.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Rocket,
    title: "Ship, don't stall",
    description:
      "Ideas are cheap; launched products are not. I optimize everything around getting real software into real users' hands.",
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
      "Most of my clients stay for years. I win when your product wins — so I build like it's my own.",
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
  "@id": `${site.url}/#chand-latif`,
  name: site.founder.name,
  jobTitle: site.founder.role,
  worksFor: { "@id": `${site.url}/#organization` },
  knowsAbout: site.knowsAbout,
  sameAs: [site.founder.linkedin],
  url: `${site.url}/about`,
  image: `${site.url}/founder.jpg`,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHeader
        label="About"
        title="The developer who treats your product like"
        accent="its own."
        description="I started Granyyte because too many good ideas die between agencies that overpromise and freelancers who disappear. I'm the third option: senior execution, real reliability, and founder-level care on every build."
        specs={[
          { label: "Founded", value: "2026" },
          { label: "Led by", value: "Chand Latif" },
          { label: "Role", value: "Senior Software Engineer" },
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
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-display text-lg font-bold text-fg">{site.founder.name}</p>
                <p className="font-mono text-xs text-lime">{site.founder.role}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-lime/25 bg-base/50 px-2.5 py-1 font-mono text-[10px] text-muted backdrop-blur">
                  <span className="size-1.5 rounded-full bg-lime" aria-hidden />
                  {site.founder.certification}
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {/* <p className="font-mono text-sm text-lime">01 — The founder</p> */}
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
              Hi, I&apos;m {site.founder.name}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a senior software engineer and full-stack developer based in Sialkot,
                Pakistan, and I&apos;ve spent years shipping apps for clients across Europe, the
                Middle East, and North America — marketplaces, wellness platforms, B2B tools, and
                CRMs. Granyyte is the name I design, build, and launch under.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-3 rounded-xl border border-edge bg-surface px-5 py-4">
                <Award className="size-6 shrink-0 text-lime" />
                <div>
                  <p className="font-medium text-fg">Senior Software Engineer</p>
                  <p className="text-xs text-muted">Full-stack — mobile, web &amp; custom software</p>
                </div>
              </div>
              <a
                href={site.founder.certificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-edge bg-surface px-5 py-4 transition-colors hover:border-lime/40"
              >
                <BadgeCheck className="size-6 shrink-0 text-lime" />
                <div>
                  <p className="font-medium text-fg transition-colors group-hover:text-lime">
                    {site.founder.certification}
                  </p>
                  <p className="text-xs text-muted">FlutterFlow Certified</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certification */}
      <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-lime/20 bg-surface p-8 md:p-10">
            <div className="absolute inset-0 bg-lime-glow opacity-70" aria-hidden />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-lime/30 bg-raised text-lime">
                  <BadgeCheck className="size-7" />
                </span>
                <div>
                  <p className="font-mono text-sm text-lime">02 — Certification</p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-fg md:text-3xl">
                    {site.founder.certification}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    Officially certified by FlutterFlow — validated skills in designing
                    and shipping production-grade Mobile Applications
                  </p>
                </div>
              </div>
              <a
                href={site.founder.certificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-edge-strong px-6 py-3 font-medium text-fg transition-all duration-300 hover:border-lime hover:text-lime md:self-auto"
              >
                View credential
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Stats />

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 font-mono text-sm text-lime">03 — What I stand for</p>
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
