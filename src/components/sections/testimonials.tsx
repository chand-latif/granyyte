import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading number="04" label="Testimonials" title="What clients say" />
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.12}>
            <figure className="relative flex h-full flex-col rounded-2xl border border-edge bg-surface p-8 md:p-10">
              <span
                className="pointer-events-none absolute -top-8 left-6 font-serif text-[7rem] italic leading-none text-lime/25"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="relative mt-6 flex-1 font-serif text-xl italic leading-relaxed text-fg md:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-full border border-lime/30 bg-raised font-display text-sm font-bold text-lime">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block font-display font-bold text-fg">{t.name}</span>
                  <span className="mt-0.5 block font-mono text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
