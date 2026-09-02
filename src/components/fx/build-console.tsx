"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Hero companion panel — a "live deploy" console that types itself out on a
 * loop, fills a build pipeline, and floats a few stack chips around the frame.
 * Replaces the old founder portrait with something that reads as engineering.
 *
 * Mobile/reduced-motion bail: the per-character timer never starts, and the
 * panel renders in its finished state instead (same layout, zero per-frame work).
 */

type Line = {
  /** Leading glyph, rendered in its own colour before the typed body */
  prompt: string;
  promptClass: string;
  text: string;
  textClass?: string;
  /** Substrings lifted to lime once fully typed */
  highlight?: string[];
  /** Badge that fades in after the line finishes */
  status?: string;
};

const LINES: Line[] = [
  {
    prompt: "$",
    promptClass: "text-lime",
    text: "granyyte ship --prod",
    textClass: "text-fg",
  },
  {
    prompt: "▸",
    promptClass: "text-faint",
    text: "flutter → ios · android",
    highlight: ["ios", "android"],
    status: "1 codebase",
  },
  {
    prompt: "▸",
    promptClass: "text-faint",
    text: "next.js · edge ssr · isr",
    highlight: ["edge ssr"],
    status: "LH 100",
  },
  {
    prompt: "▸",
    promptClass: "text-faint",
    text: "ai: claude · gpt · gemini",
    highlight: ["claude", "gpt", "gemini"],
    status: "wired",
  },
  {
    prompt: "▸",
    promptClass: "text-faint",
    text: "supabase · postgres · rls",
    highlight: ["postgres"],
    status: "typed",
  },
  {
    prompt: "✓",
    promptClass: "text-lime",
    text: "live · zero downtime",
    textClass: "text-lime",
  },
];

const PIPELINE = ["build", "test", "ship"];

/** Wrap any fully-typed highlight terms in lime. Partial words stay plain. */
function withHighlights(text: string, terms?: string[]) {
  if (!terms?.length) return text;
  const pattern = new RegExp(
    `(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  return text.split(pattern).map((part, i) =>
    terms.includes(part) ? (
      <span key={i} className="text-lime">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function BuildConsole() {
  const reduce = useReducedMotion();
  const [lite, setLite] = useState(false);
  const [pos, setPos] = useState({ line: 0, char: 0 });
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse), (max-width: 767px)").matches;
    setLite(coarse);

    // Touch + reduced-motion: skip straight to the finished console.
    if (coarse || reduce) {
      const last = LINES.length - 1;
      setPos({ line: last, char: LINES[last].text.length });
      return;
    }

    let cancelled = false;
    const run = (line: number, char: number) => {
      if (cancelled) return;
      setPos({ line, char });
      const current = LINES[line];
      if (char < current.text.length) {
        // Jittered cadence reads as typing rather than a marquee
        timer.current = setTimeout(() => run(line, char + 1), 16 + Math.random() * 28);
      } else if (line + 1 < LINES.length) {
        timer.current = setTimeout(() => run(line + 1, 0), 380);
      } else {
        timer.current = setTimeout(() => run(0, 0), 3400);
      }
    };
    run(0, 0);

    return () => {
      cancelled = true;
      clearTimeout(timer.current);
    };
  }, [reduce]);

  const still = lite || reduce;
  const finished = pos.line === LINES.length - 1 && pos.char === LINES[LINES.length - 1].text.length;
  // Pipeline fills as the stack lines land (lines 1..4), completing on the last line
  const progress = finished ? 1 : Math.max(0, Math.min(1, (pos.line - 0.5) / (LINES.length - 1.5)));

  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
      {/* Soft lime bloom behind the frame */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-lime/[0.07] blur-3xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-edge bg-surface/90 shadow-[0_24px_70px_-30px_rgb(0_0_0/0.9)] backdrop-blur-sm">
        {/* Top hairline catches the lime */}
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/50 to-transparent"
          aria-hidden
        />

        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-edge bg-raised/60 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-edge-strong" />
            <span className="size-2.5 rounded-full bg-edge-strong" />
            <span className="size-2.5 rounded-full bg-edge-strong" />
          </div>
          <p className="truncate font-mono text-[11px] text-faint">granyyte@prod ~ deploy</p>
          <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-lime">
            <span className={`size-1.5 rounded-full bg-lime ${still ? "" : "animate-pulse-dot"}`} />
            live
          </span>
        </div>

        {/* Terminal body */}
        <div className="space-y-2 px-4 py-5 font-mono text-[12.5px] leading-relaxed sm:px-5 sm:text-[13px]">
          {LINES.map((line, i) => {
            const complete = still || i < pos.line;
            const active = !still && i === pos.line;
            if (!complete && !active) {
              // Reserve the row so the panel never reflows as lines land
              return <div key={line.text} className="h-[1.55em]" aria-hidden />;
            }
            const shown = complete ? line.text : line.text.slice(0, pos.char);
            return (
              <div key={line.text} className="flex items-start gap-2.5">
                <span className={`${line.promptClass} shrink-0`}>{line.prompt}</span>
                <span className={`min-w-0 flex-1 ${line.textClass ?? "text-muted"}`}>
                  {withHighlights(shown, line.highlight)}
                  {active && (
                    <span
                      className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-lime"
                      aria-hidden
                    />
                  )}
                </span>
                {line.status && complete && (
                  <motion.span
                    initial={still ? false : { opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 rounded-full border border-lime/20 bg-lime/[0.07] px-2 py-0.5 text-[10px] text-lime"
                  >
                    {line.status}
                  </motion.span>
                )}
              </div>
            );
          })}
        </div>

        {/* Pipeline + stats */}
        <div className="border-t border-edge bg-raised/40 px-4 py-4 sm:px-5">
          <div className="flex items-center gap-2">
            {PIPELINE.map((step, i) => {
              const share = Math.max(0, Math.min(1, progress * PIPELINE.length - i));
              return (
                <div key={step} className="flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                        share > 0.99 ? "text-lime" : "text-faint"
                      }`}
                    >
                      {step}
                    </span>
                    {share > 0.99 && <span className="text-[10px] text-lime">✓</span>}
                  </div>
                  <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-edge">
                    <motion.div
                      className="h-full rounded-full bg-lime"
                      animate={{ scaleX: share }}
                      initial={false}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-faint">
            <span>2-4 week delivery</span>
            <span className="text-lime">ios · android · web</span>
          </div>
        </div>
      </div>
    </div>
  );
}
