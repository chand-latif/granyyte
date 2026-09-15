import { site } from "@/config/site";
import { TechIcon, TechIconSprite } from "@/components/ui/tech-icons";

/** CSS-only infinite tech-stack marquee (list duplicated for a seamless loop). */
export function TechMarquee() {
  const items = [...site.techStack];
  return (
    <section
      className="relative overflow-hidden border-y border-edge bg-base py-7"
      aria-label="Technologies we work with"
    >
      <TechIconSprite />

      {/* Fade the strip into the page edges so it reads as continuous motion. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base to-transparent md:w-28" />

      <div className="flex w-max animate-marquee gap-0">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1 || undefined}
          >
            {items.map((tech) => (
              <li key={`${copy}-${tech}`} className="pr-3 md:pr-4">
                <span className="flex items-center gap-2.5 rounded-full border border-edge bg-surface/60 py-2 pl-3 pr-4 font-mono text-sm text-muted transition-colors hover:border-edge-strong hover:text-fg">
                  <TechIcon name={tech} className="size-[1.15rem] shrink-0" />
                  <span className="whitespace-nowrap">{tech}</span>
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
