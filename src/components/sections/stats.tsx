import { site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/fx/count-up";

export function Stats() {
  return (
    <section className="border-y border-edge bg-surface/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-edge md:grid-cols-4">
        {site.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="px-5 py-10 text-center md:py-16">
            <p className="font-display text-4xl font-bold text-lime md:text-6xl">
              <CountUp value={stat.value} />
            </p>
            <p className="mt-3 font-mono text-xs text-muted md:text-sm">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
