"use client";

import { motion, useReducedMotion } from "motion/react";

/** Page-transition wipe: dual panels sweep up to reveal each route. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[240] bg-lime"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.06 }}
        style={{ transformOrigin: "top" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-[241] bg-raised"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        aria-hidden
      />
      {children}
    </>
  );
}
