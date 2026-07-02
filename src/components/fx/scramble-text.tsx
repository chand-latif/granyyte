"use client";

import { useRef, useCallback, type ReactNode } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#$&%";

/**
 * Wraps text that decodes through random glyphs on hover (matrix-style).
 * Layout-stable: reserves the final text's width.
 */
export function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: "span" | "div";
}) {
  const ref = useRef<HTMLElement>(null);
  const rafRef = useRef(0);

  const scramble = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cancelAnimationFrame(rafRef.current);

    const start = performance.now();
    const duration = 480;

    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const solved = Math.floor(p * text.length);
      let out = text.slice(0, solved);
      for (let i = solved; i < text.length; i++) {
        out += text[i] === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      el.textContent = out;
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else el.textContent = text;
    };
    rafRef.current = requestAnimationFrame(step);
  }, [text]);

  return (
    // @ts-expect-error dynamic tag ref typing
    <Tag ref={ref} className={className} onMouseEnter={scramble}>
      {text}
    </Tag>
  ) as ReactNode;
}
