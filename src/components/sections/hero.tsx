"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CalendarDays } from "lucide-react";
import { AvailableBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/fx/animated-text";
import { FlipWords } from "@/components/fx/flip-words";
import { Magnetic } from "@/components/fx/magnetic";
import { ParticleField } from "@/components/fx/particle-field";
import { BuildConsole } from "@/components/fx/build-console";

function ScrollBadge() {
  return (
    <div className="relative size-24" aria-hidden>
      <svg viewBox="0 0 100 100" className="size-full animate-[spin_14s_linear_infinite]">
        <defs>
          <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-faint font-mono text-[9.5px] uppercase tracking-[0.28em]">
          <textPath href="#circlePath">scroll to explore · scroll to explore ·</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="size-1.5 rounded-full bg-lime animate-pulse-dot" />
      </span>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center overflow-hidden bg-dot-grid"
    >
      {/* Interactive particle wave field */}
      <ParticleField className="absolute inset-0 h-full w-full" />
      {/* Fade particles into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent"
        aria-hidden
      />

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-32 md:px-8 md:pt-36 lg:grid-cols-[1.32fr_0.95fr] lg:gap-12"
      >
        {/* Left — copy */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <AvailableBadge />
              <div className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-faint md:flex">
                <span>Building since 2021</span>
                <span className="size-1 rounded-full bg-edge-strong" aria-hidden />
                <span className="text-lime">Sialkot → Worldwide</span>
              </div>
            </div>
          </Reveal>

          <h1 className="mt-8 font-display text-[12.5vw] font-bold leading-[0.98] tracking-tight text-fg sm:text-6xl md:text-7xl lg:text-[4.6rem]">
            <AnimatedText text="We build" delay={0.15} trigger="mount" />
            <br />
            <span className="font-serif italic tracking-normal text-lime">
              <FlipWords
                words={["mobile apps", "web platforms", "custom software", "SaaS MVPs"]}
              />
            </span>
            <br />
            <AnimatedText
              text="zero downtime, no cap."
              delay={0.4}
              trigger="mount"
              className="text-[9vw] sm:text-4xl md:text-5xl lg:text-[2.85rem]"
            />
          </h1>

          <Reveal delay={0.6}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
              idea.compile().ship() → iOS, Android, web.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button href="/contact" size="lg" showArrow>
                  Start a project
                </Button>
              </Magnetic>
              <Magnetic>
                <CalendlyButton className="inline-flex items-center gap-2 rounded-full border border-lime/50 px-7 py-3.5 text-base font-medium text-lime transition-all duration-300 hover:bg-lime/10 hover:shadow-[0_0_24px_rgb(200_243_29/0.2)]">
                  <CalendarDays className="size-4" />
                  Free 30-min consultation
                </CalendlyButton>
              </Magnetic>
              <Magnetic>
                <Button href="/work" size="lg" variant="outline">
                  See our work
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* Right — live deploy console. Desktop only: it exists to fill the
            second grid column, which doesn't exist below lg. */}
        <div className="hidden lg:block">
          <Reveal delay={0.35}>
            <BuildConsole />
          </Reveal>
        </div>
      </motion.div>

      {/* Scroll cue + rotating badge */}
      <div
        className="absolute bottom-8 left-1/2 hidden h-14 w-px -translate-x-1/2 overflow-hidden bg-edge-strong md:block"
        aria-hidden
      >
        <div className="h-full w-full bg-lime animate-scroll-cue" />
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <ScrollBadge />
      </div>
    </section>
  );
}
