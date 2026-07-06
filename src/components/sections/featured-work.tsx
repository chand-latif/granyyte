import { featuredProjects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { StackCards } from "./stack-cards";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/fx/magnetic";

export function FeaturedWork() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading
        number="02"
        label="Selected Work"
        title="Products I've shipped"
        description="Marketplaces, B2B tools, wellness apps, CRMs — built for clients across Europe, the Middle East, and beyond."
      />
      <StackCards projects={featuredProjects.slice(0, 4)} />
      <Reveal className="mt-14 text-center md:mt-0">
        <Magnetic>
          <Button href="/work" variant="outline" size="lg" showArrow>
            View all case studies
          </Button>
        </Magnetic>
      </Reveal>
    </section>
  );
}
