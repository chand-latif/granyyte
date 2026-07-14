import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
import { SmoothScroll } from "@/components/fx/smooth-scroll";
import { Cursor } from "@/components/fx/cursor";
import { Preloader } from "@/components/fx/preloader";
import { AmbientBackground } from "@/components/fx/ambient-background";
import { SideRails } from "@/components/fx/side-rails";
import { site } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Mobile App, Web & Custom Software Development`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  keywords: [
    "mobile app development",
    "web development",
    "custom software development",
    "Flutter development agency",
    "FlutterFlow experts",
    "software development agency",
    "app development from Pakistan",
    "mobile app development Pakistan",
    "FlutterFlow developer Pakistan",
    "website development from Pakistan",
    "CRM development Pakistan",
    "affordable app development",
    "affordable development services",
    "app development from $500",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name} — I build software that ships.`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — I build software that ships.`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: site.verification.google
    ? { google: site.verification.google }
    : undefined,
};

// Only include profiles that are actually filled in (empty strings would be
// invalid sameAs entries).
const sameAs = [site.socials.linkedin, site.socials.facebook].filter(Boolean);

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: site.description,
  email: site.contact.email,
  telephone: site.contact.phone,
  foundingDate: "2026",
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${site.url}/logo.png`,
  founder: {
    "@type": "Person",
    "@id": `${site.url}/#chand-latif`,
    name: site.founder.name,
    jobTitle: site.founder.role,
    sameAs: site.founder.linkedin,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sialkot",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  knowsAbout: site.knowsAbout,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.contact.email,
    telephone: site.contact.phone,
    areaServed: "Worldwide",
    availableLanguage: ["English", "Urdu"],
  },
  sameAs,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "en",
  publisher: { "@id": `${site.url}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col text-fg">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Preloader />
        <Cursor />
        <AmbientBackground />
        <SideRails />
        {/* Film grain over everything (desktop only — blend modes are costly on mobile) */}
        <div
          className="film-grain pointer-events-none fixed inset-0 z-[150] bg-grain opacity-[0.05] mix-blend-overlay"
          aria-hidden
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
