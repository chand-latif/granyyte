"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/** Buttery inertial scrolling across the whole site. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.25, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
