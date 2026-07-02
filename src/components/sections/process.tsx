import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "A short call to map your goals, users, and constraints. You get a fixed-price proposal with a real timeline — usually within a week.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes to polished UI, iterated with you. You see and approve exactly what will be built before a line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Weekly demo builds you can tap through on your own phone. Progress you can see, not status reports you have to trust.",
  },
  {
    number: "04",
    title: "Launch & grow",
    description:
      "App-store submission, deployment, and monitoring handled. Then we iterate — most clients keep shipping with us long after v1.",
  },
];

export function Process() {
  return (
    <section className="border-y border-edge bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          number="03"
          label="Process"
          title="How we take you from idea to launch"
          description="A process built on visibility — you always know what's happening and what comes next."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-edge bg-base p-7">
                <p className="font-mono text-sm text-lime">{step.number}</p>
                <h3 className="mt-4 font-display text-xl font-bold text-fg">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
