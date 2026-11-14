"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { ScrambleText } from "@/components/fx/scramble-text";
import { Magnetic } from "@/components/fx/magnetic";
import { LOGO_PATH, LOGO_VIEWBOX } from "@/components/ui/logo";

const links = [
  { href: "/", label: "Home", hint: "Back to the start" },
  { href: "/services", label: "Services", hint: "Apps, web and custom software" },
  { href: "/work", label: "Work", hint: "Live apps you can download" },
  { href: "/about", label: "About", hint: "Who builds your product" },
  { href: "/blog", label: "Blog", hint: "Straight-talking guides" },
];

/** A lime light that runs round a pill's border. Sits in an overflow-hidden layer. */
const BEAM =
  "absolute left-1/2 top-1/2 aspect-square w-[115%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_285deg,var(--color-lime)_360deg)] motion-reduce:animate-none";

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

/**
 * The G draws itself in on load. On hover it spins a full turn while redrawing,
 * a dashed orbit with a satellite dot appears round it, and the wordmark does a
 * lime wave, letter by letter.
 */
function NavLogo({ compact }: { compact: boolean }) {
  const [scope, animate] = useAnimate<HTMLAnchorElement>();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    animate(
      "path",
      { pathLength: [0, 1] },
      { duration: 1.2, ease: EASE, delay: FIRST_VISIT ? 1.9 : 0.2 }
    );
  }, [animate, reduce]);

  const play = () => {
    if (reduce) return;
    animate("path", { pathLength: [0, 1] }, { duration: 0.9, ease: EASE });
    animate("svg", { rotate: [0, -360] }, { duration: 0.9, ease: EASE });
    animate(
      ".ltr",
      { y: [0, -7, 0], color: ["#fafaf9", "#c8f31d", "#fafaf9"] },
      { duration: 0.45, delay: stagger(0.035) }
    );
  };

  return (
    <Link
      ref={scope}
      href="/"
      onMouseEnter={play}
      onFocus={play}
      className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-fg md:gap-3 md:text-2xl"
      aria-label="Granyyte home"
    >
      <span className="relative inline-flex">
        {/* Glow that blooms behind the mark on hover */}
        <span
          className="absolute inset-0 scale-75 rounded-full bg-lime/40 opacity-0 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
          aria-hidden
        />
        {/* Dashed orbit with a satellite dot, desktop hover only */}
        <span
          className="absolute -inset-1.5 hidden rounded-full border border-dashed border-lime/50 opacity-0 transition-opacity duration-300 group-hover:animate-[spin_3s_linear_infinite] group-hover:opacity-100 motion-reduce:animate-none md:block"
          aria-hidden
        >
          <span className="absolute -top-[3px] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_8px_var(--color-lime)]" />
        </span>
        <svg
          viewBox={LOGO_VIEWBOX}
          fill="none"
          aria-hidden
          className={`relative size-8 text-lime transition-[width,height] duration-500 ease-out ${
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
      <span aria-hidden>
        {"Granyyte".split("").map((ch, i) => (
          <span key={i} className="ltr inline-block">
            {ch}
          </span>
        ))}
        <span className="inline-block text-lime transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:-translate-y-1.5 group-hover:scale-150">
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
              ? "md:mt-3 md:h-14 md:max-w-5xl md:rounded-full md:border-edge-strong md:bg-page/70 md:pl-6 md:pr-1.5 md:shadow-[0_10px_40px_-14px_rgb(0_0_0/0.9),0_0_0_1px_rgb(200_243_29/0.04)] md:backdrop-blur-xl"
              : "md:h-18 md:max-w-6xl md:border-transparent md:px-8"
          }`}
        >
          <NavLogo compact={scrolled} />

          {/* Desktop links. At rest: a glass capsule with a lime light running
              round its border and numbered links. On hover: a spotlight follows
              the cursor, a glowing pill glides under the link, and a lime hint
              drops down saying where the click goes. */}
          <div className="relative hidden md:block">
            <span
              className={`absolute inset-0 overflow-hidden rounded-full bg-edge-strong transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
              aria-hidden
            >
              <span className={`${BEAM} animate-[spin_7s_linear_infinite]`} />
            </span>
            <ul
              onMouseLeave={() => setHovered(null)}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className={`group/nav relative m-px flex items-center gap-1 rounded-full p-1 transition-colors duration-500 ${
                scrolled ? "bg-transparent" : "bg-page/85 backdrop-blur-md"
              }`}
            >
              {/* Cursor spotlight */}
              <span
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-full opacity-0 transition-opacity duration-300 group-hover/nav:opacity-100"
                aria-hidden
              >
                <span className="absolute inset-0 bg-[radial-gradient(110px_circle_at_var(--mx)_var(--my),rgb(200_243_29/0.22),transparent_70%)]" />
              </span>
              {links.map((link, i) => {
                const active = isActive(link.href, pathname);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onMouseEnter={() => setHovered(link.href)}
                      onFocus={() => setHovered(link.href)}
                      onBlur={() => setHovered(null)}
                      aria-current={active ? "page" : undefined}
                      className={`group/link relative z-10 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[13px] uppercase tracking-wider outline-none transition-colors duration-300 ${
                        active
                          ? "font-semibold text-ink"
                          : "text-muted hover:text-lime focus-visible:text-lime"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          transition={PILL_SPRING}
                          className="absolute inset-0 -z-10 rounded-full bg-lime shadow-[0_0_24px_-4px_var(--color-lime)]"
                          aria-hidden
                        />
                      )}
                      {hovered === link.href && !active && (
                        <motion.span
                          layoutId="nav-hover"
                          transition={PILL_SPRING}
                          className="absolute inset-0 -z-10 rounded-full border border-lime/70 bg-lime/15 shadow-[0_0_22px_-6px_var(--color-lime)]"
                          aria-hidden
                        />
                      )}
                      <span
                        className={`hidden text-[10px] transition-colors duration-300 lg:inline ${
                          active ? "text-ink/55" : "text-lime/60 group-hover/link:text-lime"
                        }`}
                        aria-hidden
                      >
                        0{i + 1}
                      </span>
                      <ScrambleText text={link.label} />

                      {/* Drop-down hint */}
                      <span
                        className="pointer-events-none absolute left-1/2 top-full mt-3.5 flex -translate-x-1/2 -translate-y-2 items-center gap-1.5 whitespace-nowrap rounded-full bg-lime px-3.5 py-1.5 font-mono text-[11px] font-medium normal-case tracking-normal text-ink opacity-0 shadow-[0_0_24px_-6px_var(--color-lime)] transition-all duration-300 ease-out group-hover/link:translate-y-0 group-hover/link:opacity-100 group-focus-visible/link:translate-y-0 group-focus-visible/link:opacity-100"
                        aria-hidden
                      >
                        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-lime" />
                        {link.hint}
                        <span>→</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA. At rest: lime pill with a dark arrow chip and a light orbiting
              its border. On hover: the dark chip floods the whole button, the
              text turns lime, and the chip flips to lime with a fresh arrow. */}
          <div className="hidden md:block">
            <Magnetic strength={0.3}>
              <span className="group/cta relative inline-flex rounded-full p-1 transition-shadow duration-500 hover:shadow-[0_0_34px_-6px_var(--color-lime)]">
                <span className="absolute inset-0 overflow-hidden rounded-full bg-lime/25" aria-hidden>
                  <span className={`${BEAM} animate-[spin_3.5s_linear_infinite]`} />
                </span>
                <span className="absolute inset-[1.5px] rounded-full bg-page" aria-hidden />
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-lime py-1 pl-5 pr-1 text-sm font-medium text-ink outline-none"
                >
                  <span
                    className="absolute right-1 top-1/2 size-7 -translate-y-1/2 rounded-full bg-ink transition-transform duration-500 ease-out group-hover/cta:scale-[16] group-focus-within/cta:scale-[16]"
                    aria-hidden
                  />
                  <span className="relative transition-colors duration-300 group-hover/cta:text-lime group-focus-within/cta:text-lime">
                    Start a project
                  </span>
                  <span
                    className="relative grid size-7 place-items-center overflow-hidden rounded-full bg-ink text-lime transition-colors duration-300 group-hover/cta:bg-lime group-hover/cta:text-ink group-focus-within/cta:bg-lime group-focus-within/cta:text-ink"
                    aria-hidden
                  >
                    <ArrowRight className="col-start-1 row-start-1 size-4 transition-transform duration-300 ease-out group-hover/cta:translate-x-6" />
                    <ArrowRight className="col-start-1 row-start-1 size-4 -translate-x-6 transition-transform duration-300 ease-out group-hover/cta:translate-x-0" />
                  </span>
                </Link>
              </span>
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
