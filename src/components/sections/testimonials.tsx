import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.55V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading
        number="04"
        label="Testimonials"
        title="What clients say"
        description="Real words from real clients — straight from LinkedIn, unedited."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.embedUrl} delay={i * 0.12}>
            <figure className="overflow-hidden rounded-2xl border border-edge bg-surface">
              <iframe
                src={t.embedUrl}
                title={t.label}
                loading="lazy"
                allowFullScreen
                className="h-[560px] w-full md:h-[620px]"
              />
              <figcaption className="flex items-center gap-2 border-t border-edge px-5 py-3 font-mono text-xs text-muted">
                <LinkedInIcon className="size-4 text-lime" />
                Client video testimonial · via LinkedIn
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
