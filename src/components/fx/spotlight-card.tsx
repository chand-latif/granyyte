"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";

/**
 * Card with a cursor-following lime spotlight and subtle 3D tilt.
 */
export function SpotlightCard({
  children,
  className = "",
  tilt = 5,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}% ${my}%, rgb(200 243 29 / 0.09), transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current || reduce) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px * 100);
    my.set(py * 100);
    ry.set((px - 0.5) * tilt * 2);
    rx.set((0.5 - py) * tilt * 2);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: reduce ? 0 : rx,
        rotateY: reduce ? 0 : ry,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      className={`group relative ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
        aria-hidden
      />
      {children}
    </motion.div>
  );
}
