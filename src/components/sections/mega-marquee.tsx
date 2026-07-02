import { VelocityMarquee } from "@/components/fx/velocity-marquee";

/**
 * Giant outlined text banner that rides scroll velocity —
 * speeds up, reverses, and skews with your scrolling.
 */
export function MegaMarquee({ items }: { items?: string[] }) {
  const words = items ?? ["DESIGN", "BUILD", "SHIP", "ITERATE"];
  return (
    <section className="border-y border-edge py-8 md:py-12" aria-hidden>
      <VelocityMarquee baseVelocity={3}>
        {words.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display text-6xl font-bold tracking-tight text-stroke md:px-10 md:text-8xl">
              {word}
            </span>
            <span className="font-serif text-5xl italic text-lime md:text-7xl">*</span>
          </span>
        ))}
      </VelocityMarquee>
    </section>
  );
}
