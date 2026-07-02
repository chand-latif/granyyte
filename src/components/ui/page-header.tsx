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
        className="pointer-events-none absolute -right-4 bottom-16 hidden select-none font-display text-[12rem] font-bold uppercase leading-none text-stroke opacity-40 lg:block"
        aria-hidden
      >
        {label}
      </span>

      <div className="relative mx-auto max-w-6xl px-5 pt-32 md:px-8 md:pt-48">
        <div className="pb-16 md:pb-24">
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

        {/* Spec strip */}
        <Reveal delay={0.6}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-t-2xl border-x border-t border-edge bg-edge md:grid-cols-4">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-surface/70 px-5 py-5 backdrop-blur-sm">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-faint">
                  {spec.label}
                </dt>
                <dd className="mt-1.5 font-display text-sm font-medium text-fg md:text-base">
                  {spec.value}
                </dd>
              </div>
            ))}
            <div className="hidden items-center justify-end bg-lime px-5 py-5 md:flex">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink">
                Scroll ↓
              </span>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
