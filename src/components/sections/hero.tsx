import { AvailableBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dot-grid">
      <div className="absolute inset-0 bg-lime-glow" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-24 pt-36 text-center md:px-8 md:pb-36 md:pt-48">
        <Reveal>
          <AvailableBadge />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-fg md:text-7xl lg:text-8xl">
            We build software that{" "}
            <span className="relative whitespace-nowrap text-lime">
              ships
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full bg-lime/40 md:-bottom-2 md:h-1"
                aria-hidden
              />
            </span>
            .
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-xl">
            Granyyte is a development agency crafting mobile apps, web platforms, and custom
            software — from first sketch to app-store launch. No hand-offs, no surprises, just
            shipped product.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" showArrow>
              Start a project
            </Button>
            <Button href="/work" size="lg" variant="outline">
              See our work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
