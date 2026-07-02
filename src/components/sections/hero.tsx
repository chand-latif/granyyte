import { AvailableBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/fx/animated-text";
import { FlipWords } from "@/components/fx/flip-words";
import { Magnetic } from "@/components/fx/magnetic";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-dot-grid">
      {/* Drifting glow orbs */}
      <div
        className="absolute -left-32 top-1/4 size-[480px] rounded-full bg-lime/10 blur-[140px] animate-orb-a"
        aria-hidden
      />
      <div
        className="absolute -right-40 top-1/2 size-[420px] rounded-full bg-lime/[0.07] blur-[130px] animate-orb-b"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/3 size-[360px] rounded-full bg-fg/[0.04] blur-[120px] animate-orb-c"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <AvailableBadge />
        </Reveal>

        <h1 className="mt-10 font-display text-[13vw] font-bold leading-[0.98] tracking-tight text-fg sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <AnimatedText text="We build" delay={0.15} />
          <br />
          <span className="font-serif italic tracking-normal text-lime">
            <FlipWords
              words={["mobile apps", "web platforms", "custom software", "SaaS MVPs"]}
            />
          </span>
          <br />
          <AnimatedText text="that ship." delay={0.4} />
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal delay={0.6}>
            <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
              Granyyte is the development agency founders call when they want it{" "}
              <span className="text-fg">designed, built, and launched</span> — not just talked
              about. iOS, Android, and web. From first sketch to app-store release.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button href="/contact" size="lg" showArrow>
                  Start a project
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/work" size="lg" variant="outline">
                  See our work
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 hidden h-14 w-px -translate-x-1/2 overflow-hidden bg-edge-strong md:block"
        aria-hidden
      >
        <div className="h-full w-full bg-lime animate-scroll-cue" />
      </div>
    </section>
  );
}
