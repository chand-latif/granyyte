import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        number="04"
        label="Testimonials"
        title="What clients say"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="flex h-full flex-col rounded-2xl border border-edge bg-surface p-8">
              <Quote className="size-8 text-lime" aria-hidden />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-fg md:text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display font-bold text-fg">{t.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
