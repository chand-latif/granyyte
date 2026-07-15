export const site = {
  name: "Granyyte",
  legalName: "Granyyte",
  // ⚠️ Keep the www — the host serves www.granyyte.com (non-www 308-redirects to it).
  // Every canonical, sitemap URL, and schema @id derives from this value.
  url: "https://www.granyyte.com",
  tagline: "I build software that ships.",
  description:
    "Granyyte is the software studio of Chand Latif — a senior software engineer in Sialkot, Pakistan, building affordable, high-quality mobile apps, web platforms, and custom software for clients worldwide. One engineer owning the whole journey, from concept to launch.",
  founder: {
    name: "Chand Latif",
    role: "Senior Software Engineer",
    linkedin: "https://www.linkedin.com/in/chand-latif",
    certification: "Certified FlutterFlow Expert",
    certificationUrl:
      "https://university.flutterflow.io/share/gamification/badges/external/7c115f5d-5aa5-425d-bda2-bab2cc91665f?lang=en",
  },
  contact: {
    email: "chandlatif@granyyte.com", // company address (Cloudflare routing → forwards to the Gmail below)
    emailDirect: "chandlatif.dev@gmail.com", // direct line to the founder
    phone: "+92 318 728 9616",
    phoneHref: "tel:+923187289616",
    whatsapp: "https://wa.me/923187289616",
    calendly: "https://calendly.com/chandlatif-dev/30min", // free 30-min consultation booking
    location: "Sialkot, Pakistan",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/chand-latif",
    facebook: "https://www.facebook.com/chand.latif.1238/", // used in schema sameAs
    // TODO: add GitHub / X / Upwork profiles when provided
  },
  // Search-engine verification tokens. Paste the value only (not the full meta tag).
  verification: {
    google: "", // TODO: google-site-verification token from Google Search Console
  },
  // Topics the brand is an authority on — feeds Organization "knowsAbout" (entity SEO).
  knowsAbout: [
    "Mobile App Development",
    "Web Development",
    "Custom Software Development",
    "CRM Development",
    "Flutter",
    "FlutterFlow",
    "iOS App Development",
    "Android App Development",
    "SaaS Development",
    "App Development in Pakistan",
    "Affordable App Development",
    "Surveyor Job Management Software",
  ],
  // TODO: replace with real numbers from Chand
  stats: [
    { value: "15+", label: "Projects shipped" },
    { value: "4+", label: "Years building" },
    { value: "10+", label: "Happy clients" },
    { value: "3", label: "Continents served" },
  ],
  techStack: [
    "Flutter",
    "FlutterFlow",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Dart",
    "Firebase",
    "Supabase",
    "PostgreSQL",
    "REST APIs",
    "iOS",
    "Android",
  ],
} as const;

export type Site = typeof site;
