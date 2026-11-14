import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

/**
 * Two-column band that pairs a short piece of copy with one of the showcase
 * cards from fx/showcase.tsx. Replaced the old tech marquee.
 */
export function ShowcaseBand({
  label,
  title,
  accent,
  description,
  children,
  flip = false,
}: {
  label: string;
  title: string;
  /** Serif-italic lime tail of the heading */
  accent?: string;
  description: string;
  children: ReactNode;
  /** Card on the left, copy on the right (desktop) */
  flip?: boolean;
}) {
  return (
    <section className="overflow-x-clip border-y border-edge bg-surface/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <p className="mb-4 font-mono text-sm text-lime">
            <span aria-hidden>{"// "}</span>
            {label}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
            {title}
            {accent && (
              <>
                {" "}
                <span className="font-serif italic tracking-normal text-lime">{accent}</span>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">{description}</p>
        </Reveal>
        <Reveal delay={0.15} className={flip ? "lg:order-1" : ""}>
          <div className="mx-auto w-full max-w-[470px]">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
