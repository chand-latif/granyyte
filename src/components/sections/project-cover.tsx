import Image from "next/image";
import type { Project } from "@/content/projects";

type Size = "card" | "stack" | "hero";

const iconSize: Record<Size, string> = {
  card: "size-24 md:size-28",
  stack: "size-28 md:size-40",
  hero: "size-36 md:size-48",
};
const iconDim: Record<Size, number> = { card: 160, stack: 200, hero: 240 };
const logoW: Record<Size, number> = { card: 160, stack: 220, hero: 260 };
const standaloneLogoW: Record<Size, number> = { card: 250, stack: 320, hero: 400 };
const markSize: Record<Size, string> = {
  card: "text-6xl md:text-7xl",
  stack: "text-8xl md:text-9xl",
  hero: "text-8xl md:text-9xl",
};

/** Renders a project's cover art: website screenshot, app icon, or letter mark. */
export function ProjectCover({ project, size = "card" }: { project: Project; size?: Size }) {
  if (project.screenshot) {
    return (
      <>
        <Image
          src={project.screenshot}
          alt={`${project.name} website`}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-base/5"
          aria-hidden
        />
        {project.logo && (
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            width={logoW[size]}
            height={Math.round(logoW[size] / 2.42)}
            className="relative drop-shadow-xl"
          />
        )}
      </>
    );
  }

  // Standalone brand logo (no screenshot) — e.g. private internal tools where
  // the client's wordmark is the cover art. Rendered free-form, not as an
  // app-icon square.
  if (project.logo) {
    return (
      <Image
        src={project.logo}
        alt={`${project.name} logo`}
        width={standaloneLogoW[size]}
        height={Math.round(standaloneLogoW[size] / 2.42)}
        className="relative drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  if (project.icon) {
    return (
      <Image
        src={project.icon}
        alt={`${project.name} app icon`}
        width={iconDim[size]}
        height={iconDim[size]}
        className={`relative ${iconSize[size]} rounded-[22%] shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105`}
      />
    );
  }

  return (
    <span
      className={`relative font-display ${markSize[size]} font-bold text-fg/15 transition-transform duration-700 group-hover:scale-110`}
    >
      {project.mark}
    </span>
  );
}
