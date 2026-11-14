"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLite } from "@/components/fx/showcase";

/**
 * Three steps, not four: design happens inside the build (screens get shaped in
 * the real product), so it isn't sold as a separate phase.
 *
 * Laid out as one compact pipeline card. A lime progress bar fills the active
 * step and hands over to the next; hovering a step takes control. On mobile and
 * reduced-motion it's a static stack with nothing running.
 */
const steps = [
  {
    number: "01",
    title: "Scope",
    when: "Day 1-2",
    description:
      "A short call to map what you need, who it's for, and what can wait. You get a written scope with a fixed price, usually within a day or two.",
    gets: ["Written scope", "Fixed price", "Real timeline"],
  },
  {
    number: "02",
    title: "Build",
    when: "Weeks 1-4",
    description:
      "Design and code happen together, so screens get shaped in the real product instead of a slide deck. Every week there's a new build to tap through on your own phone.",
    gets: ["Weekly demo builds", "Direct line to the engineers", "Changes requoted openly"],
  },
  {
    number: "03",
    title: "Launch",
    when: "Launch day +",
    description:
      "We handle store submission, deployment, and monitoring. Then the code, the accounts, and the database are yours. Most clients keep shipping with us after version one.",
    gets: ["Store submission handled", "Full source code", "Support after launch"],
  },
];

const STEP_SECONDS = 5;

export function Process() {
  const still = useLite();
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);

  return (
    <section className="border-y border-edge bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div>
              <p className="mb-4 font-mono text-sm text-lime">03 / Process</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
                Idea to launch,{" "}
                <span className="font-serif italic tracking-normal text-lime">in three steps.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
              No discovery phase that bills for a month. You always know what&apos;s happening now
              and what comes next.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ol
            className="grid overflow-hidden rounded-2xl border border-edge bg-page/60 md:grid-cols-3"
            onMouseLeave={() => setHeld(false)}
          >
            {steps.map((step, i) => {
              const on = !still && i === active;
              const done = !still && i < active;
              return (
                <li
                  key={step.number}
                  onMouseEnter={() => {
                    if (still) return;
                    setActive(i);
                    setHeld(true);
                  }}
                  className={`group relative flex flex-col border-edge p-7 transition-colors duration-500 md:p-8 ${
                    i > 0 ? "border-t md:border-l md:border-t-0" : ""
                  } ${on ? "bg-lime/[0.05]" : ""}`}
                >
                  {/* Progress rail: fills while this step is active, then hands over */}
                  <span className="absolute inset-x-0 top-0 h-[2px] bg-edge" aria-hidden>
                    {done && <span className="absolute inset-0 bg-lime/50" />}
                    {on &&
                      (held ? (
                        <span className="absolute inset-0 bg-lime" />
                      ) : (
                        <motion.span
                          key={`${active}-run`}
                          className="absolute inset-0 origin-left bg-lime"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: STEP_SECONDS, ease: "linear" }}
                          onAnimationComplete={() => setActive((v) => (v + 1) % steps.length)}
                        />
                      ))}
                  </span>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors duration-500 ${
                          on
                            ? "border-lime/50 bg-lime/10 text-lime"
                            : "border-edge-strong text-faint"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full transition-colors duration-500 ${
                            on ? "animate-pulse-dot bg-lime" : "bg-edge-strong"
                          }`}
                          aria-hidden
                        />
                        {step.when}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-bold text-fg md:text-3xl">
                        {step.title}
                      </h3>
                    </div>
                    <span
                      className={`font-display text-5xl font-bold leading-none transition-all duration-500 md:text-6xl ${
                        on ? "text-lime [text-shadow:0_0_28px_rgb(200_243_29/0.45)]" : "text-stroke-lime"
                      }`}
                      aria-hidden
                    >
                      {step.number}
                    </span>
                  </div>

                  <p className="mb-5 mt-4 text-sm leading-relaxed text-muted">{step.description}</p>

                  <ul className="mt-auto space-y-2 border-t border-edge pt-5">
                    {step.gets.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 font-mono text-xs text-fg">
                        <Check className="size-3.5 shrink-0 text-lime" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow into the next step (desktop) */}
                  {i < steps.length - 1 && (
                    <span
                      className={`absolute -right-3 top-9 z-10 hidden size-6 items-center justify-center rounded-full border bg-page font-mono text-xs transition-colors duration-500 md:flex ${
                        on || done ? "border-lime text-lime" : "border-edge-strong text-faint"
                      }`}
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
