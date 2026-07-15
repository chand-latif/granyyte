import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Lock, Target, Lightbulb, TrendingUp } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/badge";
import { StoreButtons } from "@/components/ui/store-buttons";
import { ProjectCover } from "@/components/sections/project-cover";
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
    title: project.metaTitle ?? `${project.name} — Case Study`,
    description:
      project.metaDescription ??
      `${project.tagline}. How I designed, built, and shipped ${project.name} for ${project.platforms.join(" & ")}.`,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

const sections = [
  { key: "problem", label: "The problem", icon: Target },
  { key: "solution", label: "What I built", icon: Lightbulb },
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

  // Apps → SoftwareApplication (richer result); web projects → CreativeWork.
  const isApp = project.platforms.some((p) => p === "iOS" || p === "Android");
  const coverImage = project.icon ?? project.screenshot ?? project.logo;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": isApp ? "SoftwareApplication" : "CreativeWork",
    name: project.name,
    description: project.tagline,
    url: `${site.url}/work/${project.slug}`,
    ...(coverImage ? { image: `${site.url}${coverImage}` } : {}),
    creator: { "@id": `${site.url}/#organization` },
    ...(isApp
      ? {
          applicationCategory: "MobileApplication",
          operatingSystem: project.platforms
            .filter((p) => p !== "Web")
            .join(", "),
        }
      : {}),
    ...(project.links?.web ? { sameAs: project.links.web } : {}),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={projectJsonLd} />

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
            {project.private && (
              <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-edge bg-surface px-4 py-2 font-mono text-xs text-muted">
                <Lock className="size-3.5 text-lime" />
                Private — internal tool, built for the client&apos;s team
              </p>
            )}
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
            <ProjectCover project={project} size="hero" />
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

      {/* Deep dive — features checklist (long-form case studies only) */}
      {project.features && project.features.length > 0 && (
        <section className="border-y border-edge bg-surface/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <p className="mb-4 font-mono text-sm text-lime">Inside the system</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
                  What it does
                </h2>
              </div>
            </Reveal>
            <ul className="grid gap-4 md:grid-cols-2">
              {project.features.map((feature, i) => (
                <Reveal key={feature} delay={(i % 2) * 0.08}>
                  <li className="flex items-start gap-3 rounded-2xl border border-edge bg-base p-5 text-sm leading-relaxed text-muted">
                    <Check className="mt-0.5 size-5 shrink-0 text-lime" />
                    {feature}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Deep dive — workflow steps */}
      {project.workflow && project.workflow.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-sm text-lime">End to end</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl">
                How a job flows
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {project.workflow.map((item, i) => (
              <Reveal key={item.step} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-edge bg-surface p-7">
                  <p className="font-mono text-sm text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold text-fg">{item.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

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
