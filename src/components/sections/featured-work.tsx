import { featuredProjects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkGrid } from "./work-grid";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FeaturedWork() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        number="02"
        label="Selected Work"
        title="Products we've shipped"
        description="Marketplaces, B2B tools, wellness apps, CRMs — built for clients across Europe, the Middle East, and beyond."
      />
      <WorkGrid projects={featuredProjects.slice(0, 4)} />
      <Reveal className="mt-12 text-center">
        <Button href="/work" variant="outline" size="lg" showArrow>
          View all case studies
        </Button>
      </Reveal>
    </section>
  );
}
