"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { testimonials, type VideoTestimonial } from "@/content/testimonials";
import { Reveal } from "@/components/ui/reveal";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.55V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/** Static "sound wave" bars: decoration only, nothing animates. */
const WAVE = [5, 11, 7, 15, 9, 18, 6, 13, 17, 8, 12, 5, 14, 9, 16, 7, 11, 6];

/**
 * Video player in an overlay. The LinkedIn iframe is only mounted here, so the
 * page never loads a third-party player until someone asks for it.
 */
function Player({ video, onClose }: { video: VideoTestimonial; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.label}
      data-lenis-prevent
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-page/85 p-4 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border border-lime/40 bg-surface shadow-[0_0_60px_-12px_var(--color-lime)]"
      >
        <div className="flex items-center gap-3 border-b border-edge bg-raised/60 px-4 py-3">
          <LinkedInIcon className="size-4 text-lime" />
          <p className="truncate font-mono text-[11px] text-muted">{video.who}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="ml-auto flex size-8 items-center justify-center rounded-full border border-edge-strong text-muted transition-colors hover:border-lime hover:bg-lime hover:text-ink focus-visible:border-lime focus-visible:outline-none"
          >
            <X className="size-4" />
          </button>
        </div>
        <iframe
          src={video.embedUrl}
          title={video.label}
          allowFullScreen
          className="h-[min(70vh,600px)] w-full"
        />
      </div>
    </div>
  );
}

export function Testimonials() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div>
            <p className="mb-4 font-mono text-sm text-lime">04 / Testimonials</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
              Don&apos;t take{" "}
              <span className="font-serif italic tracking-normal text-lime">our word for it.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
            Clients, on camera, in their own words. Recorded by them, posted on LinkedIn, and not
            edited by us.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.embedUrl} delay={i * 0.1}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              data-cursor="view"
              aria-label={`Play video: ${t.label}`}
              className="group relative flex w-full items-stretch gap-5 overflow-hidden rounded-2xl border border-edge bg-surface p-4 text-left transition-all duration-300 hover:border-lime/60 hover:bg-raised hover:shadow-[0_0_40px_-14px_var(--color-lime)] focus-visible:border-lime focus-visible:outline-none sm:gap-6 sm:p-5"
            >
              {/* Poster: a still frame, not the LinkedIn player */}
              <span className="relative block aspect-[2/3] w-28 shrink-0 overflow-hidden rounded-xl border border-edge-strong sm:w-36">
                <Image
                  src={t.poster}
                  alt=""
                  fill
                  sizes="144px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-page/25 transition-colors duration-300 group-hover:bg-page/10" />
                {/* Play button */}
                <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_24px_-2px_var(--color-lime)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-5 translate-x-[1px] fill-current" />
                </span>
                <span className="absolute left-2 top-2 rounded-full bg-page/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>

              <span className="flex min-w-0 flex-1 flex-col py-1">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-faint">
                  <LinkedInIcon className="size-3.5 text-lime" />
                  Video · via LinkedIn
                </span>
                <span className="mt-3 font-display text-xl font-bold leading-tight text-fg sm:text-2xl">
                  {t.who}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted">{t.about}</span>

                <span className="mt-3 flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-edge-strong px-2.5 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </span>

                {/* Static wave + call to action */}
                <span className="mt-auto flex items-end justify-between gap-4 pt-4">
                  <span className="flex h-5 items-end gap-[3px]" aria-hidden>
                    {WAVE.map((h, n) => (
                      <span
                        key={n}
                        style={{ height: h }}
                        className="w-[3px] rounded-full bg-edge-strong transition-colors duration-300 group-hover:bg-lime"
                      />
                    ))}
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-xs text-lime">
                    Watch
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && <Player video={testimonials[open]} onClose={() => setOpen(null)} />}
    </section>
  );
}
