export const site = {
  name: "Granyyte",
  legalName: "Granyyte",
  url: "https://granyyte.com",
  tagline: "I build software that ships.",
  description:
    "Granyyte is a software development agency building high-quality mobile apps, web platforms, and custom software. From concept to launch — design, development, and deployment handled end to end.",
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
    "Flutter",
    "FlutterFlow",
    "iOS App Development",
    "Android App Development",
    "SaaS Development",
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
