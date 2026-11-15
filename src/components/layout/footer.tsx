import type { ComponentType } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { LogoMark } from "@/components/ui/logo";
import { site } from "@/config/site";
import { BackToTop } from "@/components/layout/back-to-top";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.55V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

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

// Local Sialkot landing pages — the local-market SEO cluster.
const sialkotLinks = [
  { href: "/mobile-app-development-sialkot", label: "App Developer in Sialkot" },
  { href: "/web-development-sialkot", label: "Website Developer in Sialkot" },
  { href: "/software-development-sialkot", label: "Software Development in Sialkot" },
  { href: "/software-house-sialkot", label: "Software House in Sialkot" },
  { href: "/web-design-sialkot", label: "Web Design Company in Sialkot" },
];

/** The four link groups, laid out as one "directory" panel. */
const directory = [
  { path: "pages", title: "Pages", aria: "Footer", links: nav },
  { path: "services", title: "Services", aria: "Services", links: serviceLinks },
  { path: "pakistan", title: "Hire from Pakistan", aria: "Hire from Pakistan", links: hireLinks },
  { path: "sialkot", title: "In Sialkot", aria: "In Sialkot", links: sialkotLinks },
];

type Channel = {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

const channels: Channel[] = [
  { label: site.contact.email, href: `mailto:${site.contact.email}`, Icon: Mail },
  { label: site.contact.emailDirect, href: `mailto:${site.contact.emailDirect}`, Icon: Mail },
  { label: site.contact.phone, href: site.contact.phoneHref, Icon: Phone },
  { label: "WhatsApp", href: site.contact.whatsapp, Icon: MessageCircle, external: true },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon, external: true },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-edge bg-surface/70">
      {/* Lime hairline + soft glow along the top edge */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/60 to-transparent"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 rounded-full bg-lime/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        {/* Brand + contact channels */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-end lg:gap-12">
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-fg"
            >
              <LogoMark className="size-9 text-lime transition-transform duration-500 group-hover:-rotate-12 md:size-11" />
              <span>
                Granyyte<span className="text-lime">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {site.tagline} Mobile apps, web platforms, and custom software, handled from
              concept to launch.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
              <span className="text-lime" aria-hidden>
                {"// "}
              </span>
              Pick a channel, we reply within 24 hours
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {channels.map(({ label, href, Icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/[0.07] py-1.5 pl-1.5 pr-4 text-sm text-fg transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink hover:shadow-[0_0_26px_-6px_var(--color-lime)] focus-visible:border-lime focus-visible:bg-lime focus-visible:text-ink focus-visible:outline-none"
                  >
                    <span className="flex size-7 items-center justify-center rounded-full bg-lime/15 text-lime transition-colors duration-300 group-hover:bg-ink group-hover:text-lime group-focus-visible:bg-ink">
                      <Icon className="size-3.5" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Link directory */}
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-edge bg-page/60 grid-cols-2 lg:grid-cols-4">
          {directory.map((group, i) => (
            <nav
              key={group.path}
              aria-label={group.aria}
              className={`border-edge p-4 sm:p-6 ${i % 2 === 1 ? "border-l" : ""} ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <h3 className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-faint">
                <span>
                  <span className="text-lime" aria-hidden>
                    ~/
                  </span>
                  {group.title}
                </span>
                <span
                  className="rounded-full border border-edge-strong px-2 py-0.5 text-[10px] text-faint"
                  aria-hidden
                >
                  {String(group.links.length).padStart(2, "0")}
                </span>
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative block text-sm text-muted transition-all duration-300 hover:pl-5 hover:text-lime focus-visible:pl-5 focus-visible:text-lime focus-visible:outline-none"
                    >
                      <span
                        className="absolute left-0 top-0 -translate-x-2 text-lime opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                        aria-hidden
                      >
                        →
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>


        {/* Mega wordmark */}
        <Link href="/" aria-label="Granyyte home" className="mt-14 block overflow-hidden md:mt-20">
          <span
            className="block select-none whitespace-nowrap text-center font-display text-[17.5vw] font-bold leading-[0.85] tracking-tight text-stroke transition-colors duration-500 hover:text-lime hover:[-webkit-text-stroke:0px]"
            aria-hidden
          >
            GRANYYTE
          </span>
        </Link>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-edge pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
