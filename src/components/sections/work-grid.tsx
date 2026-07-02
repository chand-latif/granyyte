import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { Reveal } from "@/components/ui/reveal";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/work/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-edge bg-surface transition-all duration-300 hover:border-lime/40"
      >
        {/* Placeholder cover art — swap for real screenshots when available */}
        <div
          className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${project.cover} bg-raised`}
        >
          <span className="font-display text-6xl font-bold text-fg/15 transition-all duration-500 group-hover:scale-110 group-hover:text-fg/25 md:text-7xl">
            {project.mark}
          </span>
          <div className="absolute left-4 top-4 flex gap-2">
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-edge bg-base/70 px-2.5 py-0.5 font-mono text-[10px] text-muted backdrop-blur"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs text-lime">{project.category}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-fg">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>
            </div>
            <ArrowUpRight className="mt-1 size-5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} delay={(i % 2) * 0.1} />
      ))}
    </div>
  );
}
