import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/fx/spotlight-card";

export function ServicesBento() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading
        number="01"
        label="Services"
        title="Everything you need to go from idea to launch"
        description="Three core disciplines, one engineer owning the whole journey — design, build, ship, iterate."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.slug} delay={i * 0.1}>
              <SpotlightCard className="h-full rounded-2xl">
                <Link
                  href={`/services/${service.slug}`}
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface p-7 transition-colors duration-300 hover:border-lime/40 md:p-8"
                >
                  {/* Oversized ghost index */}
                  <span
                    className="pointer-events-none absolute -right-3 -top-7 font-display text-[7rem] font-bold leading-none text-stroke opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-12 items-center justify-center rounded-xl border border-edge bg-raised text-lime">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-fg md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-mono text-xs text-faint">
                      {service.tech.slice(0, 3).join(" · ")}
                    </p>
                    <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
                  </div>
                </Link>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
