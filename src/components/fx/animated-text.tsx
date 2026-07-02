"use client";

import { motion, useReducedMotion } from "motion/react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

/** Word-by-word mask reveal — each word rises out of an overflow-hidden slot. */
export function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
}: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={reduce ? false : { y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
