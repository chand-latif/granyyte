"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { site } from "@/config/site";

const socials = [
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "WhatsApp", href: site.contact.whatsapp },
  { label: "Email", href: `mailto:${site.contact.email}` },
];

/**
 * Fixed marginalia rails that fill the wide-screen gutters (xl+ only):
 * left = vertical social links, right = live scroll-progress spine.
 */
export function SideRails() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <>
      {/* Left — socials */}
      <div className="fixed bottom-8 left-5 z-40 hidden flex-col items-center gap-5 xl:flex">
        <span className="h-14 w-px bg-edge-strong" aria-hidden />
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint transition-colors hover:text-lime [writing-mode:vertical-rl] [text-orientation:mixed]"
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Right — scroll progress spine */}
      <div className="fixed bottom-8 right-5 top-24 z-40 hidden flex-col items-center justify-end gap-5 xl:flex">
        <span
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint [writing-mode:vertical-rl]"
          aria-hidden
        >
          Scroll
        </span>
        <div className="relative h-40 w-px overflow-hidden bg-edge-strong" aria-hidden>
          <motion.div
            className="absolute inset-x-0 top-0 h-full origin-top bg-lime"
            style={{ scaleY }}
          />
        </div>
      </div>
    </>
  );
}
