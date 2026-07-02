"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const LETTERS = "GRANYYTE".split("");

/** First-load brand reveal: letters rise in, panel sweeps away. */
export function Preloader() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("gr-preloaded")) return;
    sessionStorage.setItem("gr-preloaded", "1");
    setShow(true);
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, [reduce]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-base"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="overflow-hidden">
            <div className="flex">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-display text-5xl font-bold tracking-tight text-fg md:text-7xl"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * i,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className="font-display text-5xl font-bold text-lime md:text-7xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75, duration: 0.3, type: "spring", stiffness: 400 }}
              >
                .
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
