"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { Project } from "@/content/projects";
import { Tag } from "@/components/ui/badge";

function StackCard({
  project,
  index,
  total,
  progress,
  animate,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  /** Apply sticky scale/offset only on desktop (non-reduced-motion) */
  animate: boolean;
}) {
  // Already-stacked cards shrink slightly as later ones slide over them
  const targetScale = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:justify-center">
      <motion.div
        style={animate ? { scale, top: `calc(-4vh + ${index * 22}px)` } : undefined}
        className="relative mb-6 w-full origin-top md:mb-0"
      >
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
            className={`relative flex min-h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.cover} bg-surface md:min-h-[26rem]`}
          >
            <div className="absolute inset-0 bg-dot-grid" aria-hidden />
            {project.icon ? (
              <Image
                src={project.icon}
                alt={`${project.name} app icon`}
                width={180}
                height={180}
                className="relative size-28 rounded-[22%] shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105 md:size-40"
              />
            ) : (
              <span className="relative font-display text-8xl font-bold text-fg/10 transition-transform duration-700 group-hover:scale-125 md:text-9xl">
                {project.mark}
              </span>
            )}
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export function StackCards({ projects }: { projects: Project[] }) {
  const container = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative">
      {projects.map((project, i) => (
        <StackCard
          key={project.slug}
          project={project}
          index={i}
          total={projects.length}
          progress={scrollYProgress}
          animate={isDesktop && !reduce}
        />
      ))}
    </div>
  );
}
