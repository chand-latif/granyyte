import { Reveal } from "./reveal";
import { AnimatedText } from "@/components/fx/animated-text";
import { ParticleField } from "@/components/fx/particle-field";

export type HeaderSpec = { label: string; value: string };

type PageHeaderProps = {
  label: string;
  /** Plain part of the H1 (word-mask animated) */
  title: string;
  /** Serif-italic lime accent appended after the title */
  accent?: string;
  description?: string;
  /** Technical "spec sheet" row rendered at the bottom of the header */
  specs?: HeaderSpec[];
};

const defaultSpecs: HeaderSpec[] = [
  { label: "Discipline", value: "Design & Engineering" },
  { label: "Based in", value: "Sialkot → Worldwide" },
  { label: "Status", value: "Open for projects" },
];

export function PageHeader({
  label,
  title,
  accent,
  description,
  specs = defaultSpecs,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-edge">
      {/* Interactive particle wave field */}
      <ParticleField className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-lime-glow" aria-hidden />
      <div
        className="absolute -left-24 top-10 size-[380px] rounded-full bg-lime/[0.07] blur-[130px] animate-orb-a"
        aria-hidden
      />
      {/* Giant ghost watermark of the section label */}
      <span
        className="pointer-events-none absolute -right-4 bottom-14 hidden select-none font-display text-[11rem] font-bold uppercase leading-none text-stroke opacity-25 lg:block"
        aria-hidden
      >
        {label}
      </span>

      <div className="relative mx-auto max-w-6xl px-5 pt-32 md:px-8 md:pt-48">
        <div className="pb-10 md:pb-14">
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

        {/* Compact meta line */}
        <Reveal delay={0.6}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2.5 border-t border-edge pb-8 pt-5 font-mono text-xs">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-2">
                <span className="text-lime" aria-hidden>
                  ◇
                </span>
                <span className="uppercase tracking-widest text-faint">{spec.label}</span>
                <span className="text-fg">{spec.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
