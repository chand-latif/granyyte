import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { PageHeader } from "@/components/ui/page-header";
import { WorkGrid } from "@/components/sections/work-grid";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Our Work — Case Studies & Shipped Products",
  description:
    "Explore Granyyte's portfolio: marketplaces, B2B tools, wellness apps, and CRMs shipped for clients across Europe, the Middle East, and beyond.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Work"
        title="Shipped products,"
        accent="real outcomes."
        description="Every project here started as an idea in someone's head. Here's how we turned them into products people use every day."
        specs={[
          { label: "Projects", value: "15 shipped" },
          { label: "Platforms", value: "iOS · Android · Web" },
          { label: "Regions", value: "Europe · MENA · Asia" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <WorkGrid projects={[...projects]} />
      </section>
      <CtaBand />
    </>
  );
}
