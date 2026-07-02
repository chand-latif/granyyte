"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || open
          ? "border-b border-edge bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18 md:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-fg"
          aria-label="Granyyte — home"
        >
          Granyyte<span className="text-lime">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-lime ${
                  pathname.startsWith(link.href) ? "text-lime" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2 text-sm font-medium text-base transition-all duration-300 hover:bg-lime-dim hover:shadow-[0_0_24px_rgb(200_243_29/0.35)]"
          >
            Start a project
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
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
        <div className="border-t border-edge bg-base/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-base ${
                    pathname.startsWith(link.href) ? "text-lime" : "text-fg"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-medium text-base"
              >
                Start a project
                <ArrowRight className="size-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
