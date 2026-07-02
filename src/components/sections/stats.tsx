import { site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";

export function Stats() {
  return (
    <section className="border-y border-edge bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-edge md:grid-cols-4">
        {site.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="px-5 py-10 text-center md:py-14">
            <p className="font-display text-3xl font-bold text-lime md:text-5xl">{stat.value}</p>
            <p className="mt-2 font-mono text-xs text-muted md:text-sm">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
