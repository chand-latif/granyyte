import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Target, Lightbulb, TrendingUp } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/badge";
import { StoreButtons } from "@/components/ui/store-buttons";
import { JsonLd } from "@/components/ui/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { WorkGrid } from "@/components/sections/work-grid";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: `${project.tagline}. How Granyyte designed, built, and shipped ${project.name} for ${project.platforms.join(" & ")}.`,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

const sections = [
  { key: "problem", label: "The problem", icon: Target },
  { key: "solution", label: "What we built", icon: Lightbulb },
  { key: "outcome", label: "The outcome", icon: TrendingUp },
] as const;

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${site.url}/work/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      {/* Case study hero */}
      <section className="relative overflow-hidden border-b border-edge bg-dot-grid">
        <div className="absolute inset-0 bg-lime-glow" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-44">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-lime"
            >
              <ArrowLeft className="size-4" /> All work
            </Link>
            <p className="mt-8 font-mono text-sm text-lime">{project.category}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-fg md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {project.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.platforms.map((p) => (
                <Tag key={p}>{p}</Tag>
              ))}
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <StoreButtons links={project.links} className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Cover — real app icon on the branded gradient */}
      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
        <Reveal>
          <div
            className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-edge bg-gradient-to-br ${project.cover} bg-raised md:aspect-[16/7]`}
          >
            <div className="absolute inset-0 bg-dot-grid" aria-hidden />
            {project.icon ? (
              <Image
                src={project.icon}
                alt={`${project.name} app icon`}
                width={240}
                height={240}
                className="relative size-36 rounded-[22%] shadow-2xl ring-1 ring-white/10 md:size-48"
              />
            ) : (
              <span className="relative font-display text-8xl font-bold text-fg/15 md:text-9xl">
                {project.mark}
              </span>
            )}
          </div>
        </Reveal>
      </section>

      {/* Problem → Solution → Outcome */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <Reveal key={section.key} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-edge bg-surface p-8">
                  <span className="flex size-12 items-center justify-center rounded-xl border border-edge bg-raised text-lime">
                    <Icon className="size-6" />
                  </span>
                  <h2 className="mt-6 font-display text-xl font-bold text-fg">{section.label}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project[section.key]}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* More work */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <div className="mb-12">
            <p className="mb-4 font-mono text-sm text-lime">More work</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
              Keep exploring
            </h2>
          </div>
        </Reveal>
        <WorkGrid projects={others} />
      </section>

      <CtaBand />
    </>
  );
}
