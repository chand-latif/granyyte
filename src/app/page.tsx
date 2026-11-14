import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesBento } from "@/components/sections/services-bento";
import { ShowcaseBand } from "@/components/sections/showcase-band";
import { StackElements } from "@/components/fx/showcase";
import { MegaMarquee } from "@/components/sections/mega-marquee";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesBento />
      <MegaMarquee items={["DESIGN", "BUILD", "SHIP", "ITERATE"]} />
      <FeaturedWork />
      <ShowcaseBand
        label="The stack"
        title="Twenty tools,"
        accent="one team."
        description="Mobile, web, backend and AI all get built by the same people, so nothing gets lost in a handoff between agencies. Pick an element to see what we use it for."
      >
        <StackElements />
      </ShowcaseBand>
      <Process />
      <Testimonials />
      <CtaBand />
    </>
  );
}
