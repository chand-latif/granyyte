import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/ui/json-ld";
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
    default: `${site.name} — Mobile App, Web & Custom Software Development Agency`,
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
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name} — We build software that ships.`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — We build software that ships.`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phone,
  founder: {
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.role,
    sameAs: site.founder.linkedin,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sialkot",
    addressCountry: "PK",
  },
  sameAs: [site.socials.linkedin],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-fg">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Preloader />
        <Cursor />
        <AmbientBackground />
        <SideRails />
        {/* Film grain over everything */}
        <div
          className="pointer-events-none fixed inset-0 z-[150] bg-grain opacity-[0.05] mix-blend-overlay"
          aria-hidden
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
