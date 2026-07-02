import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesBento } from "@/components/sections/services-bento";
import { TechMarquee } from "@/components/sections/marquee";
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
      <TechMarquee />
      <Process />
      <Testimonials />
      <CtaBand />
    </>
  );
}
