"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "A short call to map your goals, users, and constraints. You get a fixed-price proposal with a real timeline — usually within a week.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes to polished UI, iterated with you. You see and approve exactly what will be built before a line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Weekly demo builds you can tap through on your own phone. Progress you can see, not status reports you have to trust.",
  },
  {
    number: "04",
    title: "Launch & grow",
    description:
      "App-store submission, deployment, and monitoring handled. Then we iterate — most clients keep shipping with us long after v1.",
  },
];

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.75", "end 0.6"],
  });

  return (
    <section className="border-y border-edge bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <SectionHeading
          number="03"
          label="Process"
          title="How we take you from idea to launch"
          description="A process built on visibility — you always know what's happening and what comes next."
        />
        <div ref={lineRef} className="relative">
          {/* Scroll-drawn spine */}
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-edge-strong md:left-1/2" aria-hidden>
            <motion.div
              className="h-full w-full origin-top bg-lime"
              style={{ scaleY: reduce ? 1 : scrollYProgress }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={step.number}>
                  <div
                    className={`relative grid gap-6 pl-10 md:grid-cols-2 md:gap-20 md:pl-0 ${
                      left ? "" : ""
                    }`}
                  >
                    {/* Node */}
                    <span
                      className="absolute left-0 top-2 size-[15px] rounded-full border-2 border-lime bg-base md:left-1/2 md:-translate-x-1/2"
                      aria-hidden
                    />
                    <div
                      className={`${
                        left ? "md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"
                      }`}
                    >
                      <p className="font-display text-6xl font-bold text-stroke-lime md:text-8xl">
                        {step.number}
                      </p>
                      <h3 className="mt-4 font-display text-2xl font-bold text-fg md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:ml-auto md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
