"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useAnimate, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { ScrambleText } from "@/components/fx/scramble-text";
import { Magnetic } from "@/components/fx/magnetic";
import { LOGO_PATH, LOGO_VIEWBOX } from "@/components/ui/logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

/**
 * Read once at module load, before the preloader's effect sets the flag, so a
 * first visit waits for the preloader curtain before drawing the logo.
 */
const FIRST_VISIT =
  typeof window !== "undefined" && !window.sessionStorage.getItem("gr-preloaded");

const EASE = [0.22, 1, 0.36, 1] as const;
const PILL_SPRING = { type: "spring", stiffness: 380, damping: 32, mass: 0.6 } as const;

/** The G draws itself in on load, and redraws (with a glow) on hover. */
function NavLogo({ compact }: { compact: boolean }) {
  const [scope, animate] = useAnimate<HTMLSpanElement>();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    animate(
      "path",
      { pathLength: [0, 1] },
      { duration: 1.2, ease: EASE, delay: FIRST_VISIT ? 1.9 : 0.2 }
    );
  }, [animate, reduce]);

  const redraw = () => {
    if (reduce) return;
    animate("path", { pathLength: [0.15, 1] }, { duration: 0.7, ease: EASE });
  };

  return (
    <Link
      href="/"
      onMouseEnter={redraw}
      onFocus={redraw}
      className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-fg md:gap-2.5 md:text-2xl"
      aria-label="Granyyte home"
    >
      <span ref={scope} className="relative inline-flex">
        {/* Glow that blooms behind the mark on hover */}
        <span
          className="absolute inset-0 scale-75 rounded-full bg-lime/40 opacity-0 blur-xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
          aria-hidden
        />
        <svg
          viewBox={LOGO_VIEWBOX}
          fill="none"
          aria-hidden
          className={`relative size-8 text-lime transition-all duration-500 ease-out group-hover:-rotate-12 ${
            compact ? "md:size-9" : "md:size-11"
          }`}
        >
          <path
            d={LOGO_PATH}
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        Granyyte
        <span className="inline-block text-lime transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:-translate-y-1.5 group-hover:scale-125">
          .
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      // Hide when scrolling down past the fold, reveal on any scroll up
      setHidden(y > 500 && y > lastY);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
        hidden && !open ? "-translate-y-[120%]" : "translate-y-0"
      }`}
    >
      {/* Mobile: a full-width glass bar once scrolled. Desktop: stays clear,
          because the nav itself turns into a floating capsule. */}
      <div
        className={`transition-colors duration-500 ${
          scrolled || open
            ? "border-b border-edge bg-page/80 backdrop-blur-xl md:border-transparent md:bg-transparent md:backdrop-blur-none"
            : "border-b border-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex h-16 items-center justify-between px-5 transition-all duration-500 ease-out md:border ${
            scrolled
              ? "md:mt-3 md:h-14 md:max-w-5xl md:rounded-full md:border-edge-strong md:bg-page/70 md:pl-6 md:pr-2 md:shadow-[0_10px_40px_-14px_rgb(0_0_0/0.9),0_0_0_1px_rgb(200_243_29/0.04)] md:backdrop-blur-xl"
              : "md:h-18 md:max-w-6xl md:border-transparent md:px-8"
          }`}
        >
          <NavLogo compact={scrolled} />

          {/* Desktop links: sliding lime pill on the active page, a soft
              highlight that glides under whichever link is hovered. */}
          <ul
            onMouseLeave={() => setHovered(null)}
            className={`hidden items-center gap-1 rounded-full border p-1 transition-colors duration-500 md:flex ${
              scrolled ? "border-transparent bg-transparent" : "border-edge bg-surface/50 backdrop-blur-md"
            }`}
          >
            {links.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHovered(link.href)}
                    onFocus={() => setHovered(link.href)}
                    aria-current={active ? "page" : undefined}
                    className={`relative z-10 block rounded-full px-4 py-1.5 font-mono text-[13px] uppercase tracking-wider transition-colors duration-300 ${
                      active ? "font-semibold text-ink" : "text-muted hover:text-lime"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        transition={PILL_SPRING}
                        className="absolute inset-0 -z-10 rounded-full bg-lime shadow-[0_0_22px_-6px_var(--color-lime)]"
                        aria-hidden
                      />
                    )}
                    {hovered === link.href && !active && (
                      <motion.span
                        layoutId="nav-hover"
                        transition={PILL_SPRING}
                        className="absolute inset-0 -z-10 rounded-full border border-lime/30 bg-lime/10"
                        aria-hidden
                      />
                    )}
                    <ScrambleText text={link.label} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-lime px-5 py-2 text-sm font-medium text-ink shadow-[0_0_20px_-8px_var(--color-lime)] transition-shadow duration-300 hover:shadow-[0_0_30px_-4px_var(--color-lime)]"
              >
                {/* Sheen that sweeps across on hover */}
                <span
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/45 blur-[2px] transition-transform duration-700 ease-out group-hover:translate-x-[480%]"
                  aria-hidden
                />
                <span className="relative">Start a project</span>
                {/* Arrow shoots out right, a fresh one slides in from the left */}
                <span className="relative grid size-4 overflow-hidden" aria-hidden>
                  <ArrowRight className="col-start-1 row-start-1 size-4 transition-transform duration-300 ease-out group-hover:translate-x-5" />
                  <ArrowRight className="col-start-1 row-start-1 size-4 -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                </span>
              </Link>
            </Magnetic>
          </div>

          <button
            type="button"
            className="text-fg md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-edge bg-page/95 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col px-5 py-4">
              {links.map((link) => {
                const active = isActive(link.href, pathname);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 py-3 text-base ${
                        active ? "text-lime" : "text-fg"
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${active ? "bg-lime" : "bg-edge-strong"}`}
                        aria-hidden
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-medium text-ink"
                >
                  Start a project
                  <ArrowRight className="size-4" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
