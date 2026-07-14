"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import { site } from "@/config/site";

/**
 * "Book a free consultation" button that opens the Calendly popup widget.
 *
 * Performance: Calendly's script/CSS are lazy-loaded on first click only, so
 * pages carry zero extra weight until someone actually wants to book (protects
 * Core Web Vitals / SEO). Reliability: if the script fails to load (ad blocker,
 * network), the button falls back to opening the Calendly page in a new tab —
 * nobody ever hits a dead button.
 *
 * Purely behavioral — style it per context via `className` + children, like a
 * native <button>.
 */

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const STYLE_HREF = "https://assets.calendly.com/assets/external/widget.css";
const LOAD_TIMEOUT_MS = 4000;

// Match the popup to the site theme (base bg, fg text, lime accent)
const POPUP_URL = `${site.contact.calendly}?hide_gdpr_banner=1&background_color=111113&text_color=fafaf9&primary_color=c8f31d`;

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

let loader: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (typeof window !== "undefined" && window.Calendly) return Promise.resolve();
  if (loader) return loader;

  loader = new Promise<void>((resolve, reject) => {
    const fail = (reason: string) => {
      loader = null; // allow a retry on the next click
      reject(new Error(reason));
    };

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = STYLE_HREF;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () =>
      window.Calendly ? resolve() : fail("Calendly script loaded but API missing");
    script.onerror = () => fail("Calendly script blocked or unreachable");
    document.head.appendChild(script);

    setTimeout(() => fail("Calendly script timed out"), LOAD_TIMEOUT_MS);
  });
  return loader;
}

type CalendlyButtonProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function CalendlyButton({ children, className, ...rest }: CalendlyButtonProps) {
  const [loading, setLoading] = useState(false);
  const busy = useRef(false);

  const open = useCallback(async () => {
    if (busy.current) return;
    busy.current = true;
    setLoading(true);
    try {
      await loadCalendly();
      window.Calendly!.initPopupWidget({ url: POPUP_URL });
    } catch {
      // Ad blocker / offline — open Calendly directly instead
      window.open(site.contact.calendly, "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
      busy.current = false;
    }
  }, []);

  return (
    <button
      type="button"
      onClick={open}
      className={className}
      data-loading={loading || undefined}
      {...rest}
    >
      {children}
    </button>
  );
}
