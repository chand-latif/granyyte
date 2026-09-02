import { site } from "@/config/site";

/** CSS-only infinite tech-stack marquee (list duplicated for a seamless loop). */
export function TechMarquee() {
  const items = [...site.techStack];
  return (
    <section
      className="overflow-hidden border-y border-edge bg-base py-6"
      aria-label="Technologies we work with"
    >
      <div className="flex w-max animate-marquee gap-0">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1 || undefined}
          >
            {items.map((tech) => (
              <li
                key={`${copy}-${tech}`}
                className="flex items-center gap-8 pr-8 font-mono text-sm text-faint"
              >
                <span className="whitespace-nowrap transition-colors hover:text-lime">{tech}</span>
                <span className="size-1 rounded-full bg-edge-strong" aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
