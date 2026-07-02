"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

type Ripple = { x: number; y: number; r: number; life: number };

/**
 * Interactive dot-matrix wave field rendered on canvas.
 * - dots undulate on layered sine waves
 * - cursor repels and ignites nearby dots lime
 * - clicking fires an expanding ripple through the grid
 * Pauses off-screen; renders a single static frame for reduced motion.
 */
export function ParticleField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 26;
    const MOUSE_R = 150;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let t = 0;
    const mouse = { x: -9999, y: -9999 };
    const ripples: Ripple[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let gx = 0; gx < cols; gx++) {
        for (let gy = 0; gy < rows; gy++) {
          const baseX = gx * SPACING;
          const baseY = gy * SPACING;

          // Layered wave motion
          const wave =
            Math.sin(gx * 0.32 + t * 0.9) * Math.cos(gy * 0.27 + t * 0.7) +
            Math.sin((gx + gy) * 0.12 + t * 0.5) * 0.5;

          let x = baseX + wave * 4;
          let y = baseY + wave * 7;
          let alpha = 0.045 + Math.max(0, wave) * 0.05;
          let lime = 0;
          let size = 1.4 + Math.max(0, wave) * 0.9;

          // Cursor repulsion + ignition
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_R) {
            const force = (1 - d / MOUSE_R) ** 2;
            x += (dx / (d || 1)) * force * 22;
            y += (dy / (d || 1)) * force * 22;
            lime = force;
            alpha = Math.min(1, alpha + force * 0.75);
            size += force * 1.6;
          }

          // Click ripples
          for (const rip of ripples) {
            const rd = Math.hypot(baseX - rip.x, baseY - rip.y);
            const band = Math.abs(rd - rip.r);
            if (band < 34) {
              const f = (1 - band / 34) * rip.life;
              lime = Math.max(lime, f);
              alpha = Math.min(1, alpha + f * 0.7);
              const ang = Math.atan2(baseY - rip.y, baseX - rip.x);
              x += Math.cos(ang) * f * 10;
              y += Math.sin(ang) * f * 10;
              size += f * 1.2;
            }
          }

          if (lime > 0.02) {
            ctx.fillStyle = `rgba(${Math.round(250 - 50 * lime)}, ${Math.round(
              250 - 7 * lime
            )}, ${Math.round(249 - 220 * lime)}, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(250, 250, 249, ${alpha})`;
          }
          ctx.fillRect(x, y, size, size);
        }
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].r += 5.5;
        ripples[i].life *= 0.972;
        if (ripples[i].life < 0.03) ripples.splice(i, 1);
      }
    };

    const loop = () => {
      if (!running) return;
      t += 0.016;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      )
        return;
      ripples.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, r: 0, life: 1 });
    };

    resize();

    if (reduce) {
      // Single static frame, no listeners
      draw();
      const ro = new ResizeObserver(() => {
        resize();
        draw();
      });
      ro.observe(canvas);
      return () => ro.disconnect();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (visible && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);
    canvas.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
