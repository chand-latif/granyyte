"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";

/**
 * Global living background rendered behind every page:
 * - depth gradient (lifts the top of the viewport out of pure black)
 * - drifting aurora blobs (lime + cool cyan/violet undertones)
 * - faint column guides aligned to the content grid
 * - a soft lime spotlight that follows the cursor
 */
export function AmbientBackground() {
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);

  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 50, damping: 20, mass: 0.8 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgb(200 243 29 / 0.05), transparent 70%)`;

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setFine(true);
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my, reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Depth gradient — subtle lift at the top, vignette at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-12%,#16161a_0%,#0a0a0b_60%)]" />

      {/* Aurora blobs */}
      <div className="absolute -top-44 left-1/4 size-[640px] rounded-full bg-lime/[0.06] blur-[170px] animate-orb-a" />
      <div className="absolute -right-44 top-1/3 size-[540px] rounded-full bg-cyan-400/[0.045] blur-[160px] animate-orb-b" />
      <div className="absolute -left-44 bottom-[-10%] size-[580px] rounded-full bg-violet-500/[0.045] blur-[170px] animate-orb-c" />
      <div className="absolute bottom-1/4 right-1/4 size-[420px] rounded-full bg-lime/[0.04] blur-[150px] animate-orb-b" />

      {/* Cursor spotlight */}
      {fine && <motion.div className="absolute inset-0" style={{ background: spotlight }} />}

      {/* Column guides aligned to the content container */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-6xl -translate-x-1/2 px-5 md:px-8">
        <div className="grid h-full grid-cols-2 divide-x divide-fg/[0.035] border-x border-fg/[0.035] md:grid-cols-4">
          <div />
          <div />
          <div className="hidden md:block" />
          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}
