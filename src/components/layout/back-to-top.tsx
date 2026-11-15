"use client";

import { ArrowUp } from "lucide-react";

/** Footer "back to top" button. Lenis picks up the native smooth scroll. */
export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group inline-flex items-center gap-2.5 rounded-full border border-lime/50 bg-lime/10 py-1.5 pl-4 pr-1.5 font-mono text-[11px] uppercase tracking-widest text-lime transition-colors duration-300 hover:bg-lime hover:text-ink focus-visible:bg-lime focus-visible:text-ink focus-visible:outline-none"
    >
      Back to top
      <span className="flex size-7 items-center justify-center rounded-full bg-lime text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-lime">
        <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}
