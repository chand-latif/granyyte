import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/config/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-edge bg-dot-grid">
      <div className="absolute inset-0 bg-lime-glow" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-24 text-center md:px-8 md:py-36">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-fg md:text-6xl">
            Have an idea? Let&apos;s make it <span className="text-lime">real</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg">
            Tell us what you&apos;re building. We&apos;ll reply within 24 hours with honest
            feedback and a clear path to launch.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" showArrow>
              Start a project
            </Button>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-7 py-3.5 text-base font-medium text-fg transition-all duration-300 hover:border-lime hover:text-lime"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
