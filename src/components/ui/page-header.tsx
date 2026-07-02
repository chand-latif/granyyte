import { Reveal } from "./reveal";
import { AnimatedText } from "@/components/fx/animated-text";

type PageHeaderProps = {
  label: string;
  /** Plain part of the H1 (word-mask animated) */
  title: string;
  /** Serif-italic lime accent appended after the title */
  accent?: string;
  description?: string;
};

export function PageHeader({ label, title, accent, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-edge bg-dot-grid">
      <div className="absolute inset-0 bg-lime-glow" aria-hidden />
      <div
        className="absolute -left-24 top-10 size-[380px] rounded-full bg-lime/[0.07] blur-[130px] animate-orb-a"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-48">
        <Reveal>
          <p className="mb-5 font-mono text-sm text-lime">
            <span aria-hidden>// </span>
            {label}
          </p>
        </Reveal>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg md:text-7xl">
          <AnimatedText text={title} delay={0.1} />
          {accent && (
            <>
              {" "}
              <span className="font-serif italic tracking-normal text-lime">
                <AnimatedText text={accent} delay={0.35} />
              </span>
            </>
          )}
        </h1>
        {description && (
          <Reveal delay={0.5}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
