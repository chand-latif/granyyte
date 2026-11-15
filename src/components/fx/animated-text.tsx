"use client";

import { motion, useReducedMotion } from "motion/react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  /**
   * "inView" (default) reveals when scrolled into view.
   * "mount" reveals immediately on mount — use for above-the-fold headers
   * where the on-scroll trigger can be unreliable.
   */
  trigger?: "inView" | "mount";
};

/** Word-by-word mask reveal — each word rises out of an overflow-hidden slot. */
export function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
  trigger = "inView",
}: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  // The trigger lives on the outer, visible slot. The inner word starts clipped
  // out of view (y: 110% inside overflow-hidden), so an observer watching it
  // would never fire and the heading could stay invisible.
  const outerProps =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "show" as const }
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once, amount: 0.2 },
        };

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block overflow-hidden pb-[0.1em] align-bottom"
          {...(reduce ? {} : outerProps)}
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </span>
  );
}
