import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ServicesBento() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        number="01"
        label="Services"
        title="Everything you need to go from idea to launch"
        description="Three core disciplines, one team owning the whole journey — design, build, ship, iterate."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.slug} delay={i * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-edge bg-surface p-7 transition-all duration-300 hover:border-lime/40 hover:bg-raised md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl border border-edge bg-raised text-lime">
                    <Icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-fg md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.excerpt}</p>
                <p className="mt-6 font-mono text-xs text-faint">
                  {service.tech.slice(0, 3).join(" · ")}
                </p>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
