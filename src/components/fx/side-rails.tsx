"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Magnetic } from "@/components/fx/magnetic";

/** lucide v1 dropped brand icons, so LinkedIn is inline (same glyph as footer.tsx). */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.55V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/** WhatsApp-style mark: a chat bubble with a handset inside, built from lucide parts. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className ?? ""}`} aria-hidden>
      <MessageCircle className="size-full" strokeWidth={2} />
      <Phone className="absolute size-[42%]" strokeWidth={2.6} />
    </span>
  );
}

function MailIcon({ className }: { className?: string }) {
  return <Mail className={className} strokeWidth={2} aria-hidden />;
}

type Social = {
  label: string;
  hint: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  external: boolean;
  /** Pulsing "online" dot: the fastest way to reach us. */
  live?: boolean;
};

const socials: Social[] = [
  {
    label: "LinkedIn",
    hint: "Connect on LinkedIn",
    href: site.socials.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "WhatsApp",
    hint: "Chat on WhatsApp",
    href: site.contact.whatsapp,
    Icon: WhatsAppIcon,
    external: true,
    live: true,
  },
  {
    label: "Email",
    hint: site.contact.email,
    href: `mailto:${site.contact.email}`,
    Icon: MailIcon,
    external: false,
  },
];

/**
 * Fixed marginalia rails that fill the wide-screen gutters (xl+ only, so mobile
 * is untouched): left = social links as lime icon buttons, right = live
 * scroll-progress spine.
 */
export function SideRails() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const reduce = useReducedMotion();

  return (
    <>
      {/* Left — socials */}
      <nav
        aria-label="Contact and social links"
        className="fixed bottom-8 left-4 z-40 hidden flex-col items-center gap-6 xl:flex"
      >
        <motion.span
          className="h-12 w-px bg-gradient-to-b from-transparent via-lime/40 to-lime/80"
          initial={reduce ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ originY: 0 }}
          aria-hidden
        />
        {socials.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={s.href}
              {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={s.hint}
              className="group relative flex flex-col items-center gap-3 outline-none"
            >
              <Magnetic strength={0.3}>
                <span className="relative flex size-10 items-center justify-center rounded-full border border-lime/50 bg-lime/10 text-lime shadow-[0_0_22px_-8px_var(--color-lime)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-lime group-hover:bg-lime group-hover:text-page group-hover:shadow-[0_0_32px_-4px_var(--color-lime)] group-focus-visible:scale-110 group-focus-visible:bg-lime group-focus-visible:text-page">
                  {/* Ripple ring, only while hovered */}
                  <span
                    className="absolute inset-0 rounded-full border border-lime opacity-0 group-hover:animate-ping group-hover:opacity-60"
                    aria-hidden
                  />
                  <s.Icon className="relative size-[18px] transition-transform duration-300 group-hover:-rotate-[8deg]" />
                  {s.live && (
                    <span className="absolute -right-0.5 -top-0.5 flex size-2.5" aria-hidden>
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-lime ring-2 ring-page" />
                    </span>
                  )}
                </span>
              </Magnetic>

              {/* Labels drop away on short windows so the rail never reaches the header */}
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime/80 transition-all duration-300 [@media(max-height:620px)]:hidden [text-orientation:mixed] [writing-mode:vertical-rl] group-hover:tracking-[0.32em] group-hover:text-fg">
                {s.label}
              </span>

              {/* Slide-out hint: says exactly what the click does */}
              <span
                className="pointer-events-none absolute left-full top-1.5 ml-4 flex -translate-x-2 items-center gap-2 whitespace-nowrap rounded-full bg-lime px-3.5 py-1.5 font-mono text-[11px] font-medium text-page opacity-0 shadow-[0_0_24px_-6px_var(--color-lime)] transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                aria-hidden
              >
                <span className="absolute -left-1 top-1/2 size-2 -translate-y-1/2 rotate-45 bg-lime" />
                {s.hint}
                <span aria-hidden>→</span>
              </span>
            </a>
          </motion.div>
        ))}
      </nav>

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
