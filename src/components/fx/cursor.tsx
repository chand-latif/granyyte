"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * Custom cursor: lime dot + trailing ring. Grows on interactive elements,
 * shows a "View" label over elements marked data-cursor="view".
 * Desktop (fine pointer) only.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const ringX = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.6 });
  const ringY = useSpring(my, { stiffness: 300, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const target = e.target as Element | null;
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      );
      setHovering(!!interactive);
      const view = target?.closest("[data-cursor='view']");
      setLabel(view ? "View" : null);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [mx, my, reduce]);

  if (!enabled) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime"
        style={{ x: mx, y: my }}
      />
      {/* Trailing ring / label */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[199] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className={`flex items-center justify-center rounded-full border transition-colors duration-200 ${
            label
              ? "border-lime bg-lime font-mono text-xs font-medium text-ink"
              : "border-lime/50 bg-transparent"
          }`}
          animate={{
            width: label ? 64 : hovering ? 48 : 28,
            height: label ? 64 : hovering ? 48 : 28,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          {label}
        </motion.div>
      </motion.div>
    </>
  );
}
