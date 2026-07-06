import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { site } from "@/config/site";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/ui/json-ld";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact — Start Your Project",
  description:
    "Tell me about your project. I reply within 24 hours with honest feedback and a clear path to launch — email, WhatsApp, or the form below.",
  alternates: { canonical: "/contact" },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sialkot",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  sameAs: [site.socials.linkedin],
};

const channels = [
  {
    icon: Mail,
    label: "Company email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: Mail,
    label: "Direct to the founder",
    value: site.contact.emailDirect,
    href: `mailto:${site.contact.emailDirect}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with me directly",
    href: site.contact.whatsapp,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.contact.phone,
    href: site.contact.phoneHref,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd} />
      <PageHeader
        label="Contact"
        title="Let's build something"
        accent="worth shipping."
        description="Tell me what you're working on. I reply within 24 hours — with honest feedback, not a sales script."
        specs={[
          { label: "Response", value: "Within 24 hours" },
          { label: "Channels", value: "Email · WhatsApp" },
          { label: "Based in", value: "Sialkot, PK" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div className="space-y-4">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const external = channel.href.startsWith("http");
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-edge bg-surface p-5 transition-all duration-300 hover:border-lime/40"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-edge bg-raised text-lime">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-xs text-faint">{channel.label}</span>
                      <span className="mt-0.5 block text-sm font-medium text-fg transition-colors group-hover:text-lime">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                );
              })}

              <div className="flex items-center gap-4 rounded-2xl border border-edge bg-surface p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-edge bg-raised text-lime">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs text-faint">Location</span>
                  <span className="mt-0.5 block text-sm font-medium text-fg">
                    {site.contact.location} — working worldwide
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-lime/20 bg-lime/5 p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-lime/30 bg-raised text-lime">
                  <Clock className="size-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs text-lime">Response time</span>
                  <span className="mt-0.5 block text-sm font-medium text-fg">
                    Within 24 hours, usually much faster
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-edge bg-surface/50 p-7 md:p-10">
              <h2 className="font-display text-2xl font-bold text-fg">Tell me about your project</h2>
              <p className="mt-2 text-sm text-muted">
                A few sentences are enough — I&apos;ll take it from there.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
