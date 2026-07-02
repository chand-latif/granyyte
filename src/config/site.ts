export const site = {
  name: "Granyyte",
  legalName: "Granyyte",
  url: "https://granyyte.com",
  tagline: "We build software that ships.",
  description:
    "Granyyte is a software development agency building high-quality mobile apps, web platforms, and custom software. From concept to launch — design, development, and deployment handled end to end.",
  founder: {
    name: "Chand Latif",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/chand-latif",
    certification: "FlutterFlow Retail Expert 2025",
  },
  contact: {
    email: "chandlatif47@gmail.com", // TODO: switch to hello@granyyte.com once mailbox exists
    phone: "+92 309 173 9135",
    phoneHref: "tel:+923091739135",
    whatsapp: "https://wa.me/923091739135",
    location: "Sialkot, Pakistan",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/chand-latif",
    // TODO: add GitHub / X / Upwork profiles when provided
  },
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
