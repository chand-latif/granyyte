/** Giant outlined text banner scrolling across the section break. */
export function MegaMarquee({ items }: { items?: string[] }) {
  const words = items ?? ["DESIGN", "BUILD", "SHIP", "ITERATE"];
  return (
    <section className="overflow-hidden border-y border-edge py-8 md:py-12" aria-hidden>
      <div className="flex w-max animate-marquee-slow">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((word, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-display text-6xl font-bold tracking-tight text-stroke transition-colors md:px-10 md:text-8xl">
                  {word}
                </span>
                <span className="font-serif text-5xl italic text-lime md:text-7xl">*</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
