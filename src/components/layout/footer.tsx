import Link from "next/link";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { LogoMark } from "@/components/ui/logo";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.55V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { site } from "@/config/site";
import { AvailableBadge } from "@/components/ui/badge";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/custom-software", label: "Custom Software" },
  { href: "/surveyor-management-software", label: "Surveyor Management Software" },
];

// Location/affordability SEO landing pages — site-wide internal links help
// Google discover and weight them.
const hireLinks = [
  { href: "/mobile-app-development-pakistan", label: "App Development in Pakistan" },
  { href: "/flutterflow-developer-pakistan", label: "FlutterFlow Developer in Pakistan" },
  { href: "/web-development-pakistan", label: "Web Development in Pakistan" },
  { href: "/crm-development-pakistan", label: "CRM Development in Pakistan" },
  { href: "/affordable-app-development", label: "Affordable App Development" },
];

export function Footer() {
  return (
    <footer className="border-t border-edge bg-surface/70">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-fg"
            >
              <LogoMark className="size-9 text-lime md:size-11" />
              <span>
                Granyyte<span className="text-lime">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline} Mobile apps, web platforms, and custom software — from concept to
              launch.
            </p>
            <div className="mt-6">
              <AvailableBadge />
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-mono text-xs uppercase tracking-widest text-faint">Pages</h3>
            <ul className="mt-4 space-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-lime">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="font-mono text-xs uppercase tracking-widest text-faint">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-lime">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-faint">
              Hire from Pakistan
            </h3>
            <ul className="mt-4 space-y-3">
              {hireLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-lime">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-faint">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-lime"
                >
                  <Mail className="size-4" /> {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.emailDirect}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-lime"
                >
                  <Mail className="size-4" /> {site.contact.emailDirect}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-lime"
                >
                  <Phone className="size-4" /> {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-lime"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-lime"
                >
                  <LinkedInIcon className="size-4" /> LinkedIn
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4" /> {site.contact.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Status strip */}
        <div className="mt-14 flex flex-col gap-4 border-y border-edge py-5 font-mono text-[11px] uppercase tracking-widest text-faint sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-lime animate-pulse-dot" />
            Currently accepting projects
          </span>
          <span>Working worldwide ↗</span>
        </div>

        {/* Mega wordmark */}
        <Link href="/" aria-label="Granyyte — home" className="mt-16 block overflow-hidden md:mt-24">
          <span
            className="block select-none whitespace-nowrap text-center font-display text-[17.5vw] font-bold leading-[0.85] tracking-tight text-stroke transition-colors duration-500 hover:text-lime hover:[-webkit-text-stroke:0px]"
            aria-hidden
          >
            GRANYYTE
          </span>
        </Link>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-edge pt-8 md:flex-row md:items-center">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
