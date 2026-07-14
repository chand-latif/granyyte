"use client";

import { useRef } from "react";
import Image from "next/image";
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
import { site } from "@/config/site";

function ScrollBadge() {
  return (
    <div className="relative size-24" aria-hidden>
      <svg viewBox="0 0 100 100" className="size-full animate-[spin_14s_linear_infinite]">
        <defs>
          <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-faint font-mono text-[9.5px] uppercase tracking-[0.28em]">
          <textPath href="#circlePath">scroll to explore — scroll to explore —</textPath>
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
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-24 pt-32 md:px-8 md:pt-40 lg:grid-cols-[1.5fr_0.85fr] lg:gap-14"
      >
        {/* Left — copy */}
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <AvailableBadge />
              <div className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-faint md:flex">
                <span>Est. 2026</span>
                <span className="size-1 rounded-full bg-edge-strong" aria-hidden />
                <span className="text-lime">Sialkot → Worldwide</span>
              </div>
            </div>
          </Reveal>

          <h1 className="mt-10 font-display text-[13vw] font-bold leading-[0.98] tracking-tight text-fg sm:text-7xl md:text-8xl lg:text-[5.75rem]">
            <AnimatedText text="I build" delay={0.15} trigger="mount" />
            <br />
            <span className="font-serif italic tracking-normal text-lime">
              <FlipWords
                words={["mobile apps", "web platforms", "custom software", "SaaS MVPs"]}
              />
            </span>
            <br />
            <AnimatedText text="that ship." delay={0.4} trigger="mount" />
          </h1>

          <Reveal delay={0.6}>
            <p className="mt-10 max-w-md text-base leading-relaxed text-muted md:text-lg">
idea.compile().ship() — iOS, Android, web.
              {/* I design, build, and launch digital products end to end — the engineer founders call
              when they want it{" "}
              <span className="text-fg">shipped, not just talked about</span>. iOS, Android, and
              web, from first sketch to app-store release. */}
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
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
                  See my work
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* Right — founder portrait (portfolio identity) */}
        <Reveal delay={0.35} className="mx-auto w-full max-w-[280px] lg:max-w-none">
          <div className="relative">
            {/* Soft lime glow behind the frame */}
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-lime/10 blur-2xl"
              aria-hidden
            />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-edge bg-surface">
              <Image
                src="/founder.jpg"
                alt={`${site.founder.name}, ${site.founder.role} of ${site.name}`}
                fill
                sizes="(max-width: 1024px) 280px, 360px"
                priority
                className="object-cover object-top"
              />
              {/* Readability gradient */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-base via-base/50 to-transparent"
                aria-hidden
              />
              {/* Corner ticks */}
              <span className="absolute left-3 top-3 size-5 border-l-2 border-t-2 border-lime/70" aria-hidden />
              <span className="absolute right-3 top-3 size-5 border-r-2 border-t-2 border-lime/70" aria-hidden />
              {/* Name plate */}
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-display text-lg font-bold text-fg">{site.founder.name}</p>
                <p className="font-mono text-xs text-lime">{site.founder.role}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-lime/25 bg-base/50 px-2.5 py-1 font-mono text-[10px] text-muted backdrop-blur">
                  <span className="size-1.5 rounded-full bg-lime" aria-hidden />
                  {site.founder.certification}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
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
