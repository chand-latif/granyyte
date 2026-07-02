"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { Project } from "@/content/projects";
import { Tag } from "@/components/ui/badge";

function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const reduce = useReducedMotion();
  // Each card shrinks slightly as the next one slides over it
  const targetScale = 1 - (total - 1 - index) * 0.045;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div
      className="sticky"
      style={{ top: `calc(12vh + ${index * 26}px)` }}
    >
      <motion.div style={{ scale: reduce ? 1 : scale }} className="origin-top">
        <Link
          href={`/work/${project.slug}`}
          data-cursor="view"
          className="group grid overflow-hidden rounded-3xl border border-edge-strong bg-raised shadow-[0_-12px_48px_rgb(0_0_0/0.5)] md:grid-cols-[1.1fr_1fr]"
        >
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-lime">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <ArrowUpRight className="size-6 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
              </div>
              <h3 className="mt-8 font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
                {project.name}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-muted md:text-xl">
                {project.category}
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                {project.tagline}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.platforms.map((p) => (
                <Tag key={p}>{p}</Tag>
              ))}
              {project.tech.slice(0, 3).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
          {/* Cover art — swap for real screenshots when available */}
          <div
            className={`relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br ${project.cover} bg-surface md:min-h-[28rem]`}
          >
            <div className="absolute inset-0 bg-dot-grid" aria-hidden />
            <span className="relative font-display text-8xl font-bold text-fg/10 transition-transform duration-700 group-hover:scale-125 md:text-9xl">
              {project.mark}
            </span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export function StackCards({ projects }: { projects: Project[] }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="space-y-[16vh] pb-[10vh]">
      {projects.map((project, i) => (
        <StackCard
          key={project.slug}
          project={project}
          index={i}
          total={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}
