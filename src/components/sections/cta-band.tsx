import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/fx/animated-text";
import { Magnetic } from "@/components/fx/magnetic";
import { site } from "@/config/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-edge bg-dot-grid">
      <div className="absolute inset-0 bg-lime-glow" aria-hidden />
      <div
        className="absolute -bottom-24 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-lime/[0.08] blur-[140px] animate-orb-c"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-28 text-center md:px-8 md:py-44">
        <h2 className="mx-auto font-display text-5xl font-bold tracking-tight text-fg md:text-8xl">
          <AnimatedText text="Have an idea?" />
          <br />
          <span className="font-serif italic tracking-normal text-lime">
            <AnimatedText text="Let's make it real." delay={0.25} />
          </span>
        </h2>
        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-xl text-base text-muted md:text-lg">
            Tell us what you&apos;re building. We&apos;ll reply within 24 hours with honest
            feedback and a clear path to launch.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Magnetic strength={0.45}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-lime px-10 py-5 font-display text-lg font-bold text-base shadow-[0_0_48px_rgb(200_243_29/0.3)] transition-all duration-300 hover:shadow-[0_0_72px_rgb(200_243_29/0.5)]"
              >
                Start a project
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-8 py-4 text-base font-medium text-fg transition-all duration-300 hover:border-lime hover:text-lime"
              >
                Chat on WhatsApp
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
