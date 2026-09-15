/**
 * Blog topic hubs — the pillar half of a hub-and-spoke content structure.
 *
 * Every post declares exactly one `hub` (see the frontmatter in
 * src/content/posts/*.mdx). A hub renders at /blog/topic/<slug> and lists its
 * posts, so any post is two clicks from the homepage no matter how many exist.
 *
 * The `intro` paragraphs matter: a hub page with nothing but a list of links is
 * a thin page. Each hub carries its own copy and points at the commercial page
 * it supports, so it earns its place while the spokes are still being written.
 *
 * Adding a hub is a one-file change here — but a post referencing a hub slug
 * that doesn't exist fails the manifest build, so add the hub first.
 */

export type Topic = {
  slug: string;
  /** Short label used on pills and nav rows */
  name: string;
  /** <title> without brand — layout template appends "| Granyyte" */
  metaTitle: string;
  metaDescription: string;
  /** Plain part of the H1 */
  title: string;
  /** Serif-italic lime part of the H1 */
  accent: string;
  headerDescription: string;
  intro: string[];
  /** The money page this hub feeds. Root-level seo-pages slug or /services/… */
  relatedService: string;
  relatedServiceLabel: string;
};

export const topics: Topic[] = [
  {
    slug: "flutterflow",
    name: "Flutter & FlutterFlow",
    metaTitle: "Flutter & FlutterFlow Guides From a Certified Expert",
    metaDescription:
      "Practical Flutter and FlutterFlow guides: when to use them, where they break down, and how one codebase ships iOS and Android in 2-4 weeks.",
    title: "One codebase,",
    accent: "both platforms.",
    headerDescription:
      "Flutter and FlutterFlow guides from an officially certified FlutterFlow expert, including the cases where we tell clients not to use them.",
    intro: [
      "Flutter lets one codebase run natively on iOS and Android. FlutterFlow puts a visual builder on top of it and cuts the time from idea to a working app to weeks. Together they are the reason we can quote what we quote.",
      "That does not make them right for everything, and these guides say so plainly. There are apps that genuinely need native code, and knowing which side of that line you sit on before you start is worth more than any framework comparison chart.",
      "Everything here comes out of shipping production apps on this stack, including ones live on the App Store and Google Play for clients in Turkey, Poland, the UAE, and the UK.",
    ],
    relatedService: "/services/mobile-app-development",
    relatedServiceLabel: "See our mobile app development service",
  },
  {
    slug: "offshore-hiring",
    name: "Hiring an offshore team",
    metaTitle: "Hiring Offshore Developers: A Practical Guide",
    metaDescription:
      "How to hire an offshore development team without getting burned: what to check, what the rates actually mean, and the warning signs worth walking away from.",
    title: "Hiring developers",
    accent: "across time zones.",
    headerDescription:
      "What to look for, what to ask, and which warning signs are worth walking away from when you hire a development team abroad.",
    intro: [
      "Offshore development has a reputation problem, and a lot of it is earned. Plenty of people have paid for an app twice: once to the agency that disappeared, and once to whoever rebuilt it.",
      "We are on the receiving end of that scepticism constantly, so these guides are written to be useful even if you never hire us. What to ask for before you pay anything, how to tell a real portfolio from a stock one, why the rate gap exists and what it does and does not buy, and how to structure the engagement so you can walk away at any point still owning your code.",
      "The honest summary: the location of the team matters far less than whether you can talk directly to the person writing the code.",
    ],
    relatedService: "/mobile-app-development-pakistan",
    relatedServiceLabel: "See app development from Pakistan",
  },
  {
    slug: "mvp-startups",
    name: "MVPs & startups",
    metaTitle: "MVP Development Guides for Founders",
    metaDescription:
      "How to scope, build, and launch an MVP that proves something. What to cut, what to keep, and how to get a real product in front of real users fast.",
    title: "Get it in front of",
    accent: "real users.",
    headerDescription:
      "Scoping, building, and launching a first version that actually tests your idea instead of quietly draining a year.",
    intro: [
      "Most failed MVPs are not failed products, they are failed scopes. Someone spent eleven months and their entire budget building version one of everything, launched, and learned the same thing a four-week build would have told them.",
      "These guides are about the cutting. Which features earn their place in a first release, which ones you can fake convincingly, what you can defer to an admin panel and a human for the first hundred users, and how to structure the build so version two is not a rewrite.",
      "We ship first versions in two to four weeks, so the trade-offs here are ones we make with founders every month, not theory.",
    ],
    relatedService: "/services/mobile-app-development",
    relatedServiceLabel: "Start your MVP with us",
  },
  {
    slug: "industry-software",
    name: "Industry software",
    metaTitle: "Industry Software Guides: Field Ops, Inventory & More",
    metaDescription:
      "Software built for specific industries: surveyor job management, inventory, school administration, and import-export operations. What these systems need to get right.",
    title: "Software built for",
    accent: "one industry.",
    headerDescription:
      "Field operations, inventory, school administration, and import-export systems, and what these builds have to get right to survive contact with a real workflow.",
    intro: [
      "Generic business software fails in specific ways. The surveyor cannot file a report from a basement with no signal. The warehouse count is right in the system and wrong on the shelf. The school office is still keying attendance into a spreadsheet at 4pm.",
      "These guides are about that gap. Each one takes an industry we have actually built for and walks through what the workflow really demands: offline behaviour, permissions, audit trails, the report someone has to hand a regulator, and the fifteen edge cases the off-the-shelf tool never considered.",
      "The reference build behind most of this is a job management platform running live field operations, which is where a lot of these lessons came from the hard way.",
    ],
    relatedService: "/surveyor-management-software",
    relatedServiceLabel: "See our surveyor management platform",
  },
  {
    slug: "custom-vs-saas",
    name: "Custom software vs SaaS",
    metaTitle: "Custom Software vs SaaS: Decision Guides",
    metaDescription:
      "When custom software pays for itself and when an off-the-shelf subscription is the smarter call. Frameworks for deciding, with the maths written out.",
    title: "Build it or",
    accent: "subscribe to it.",
    headerDescription:
      "When custom software genuinely pays for itself, when a subscription is the smarter call, and how to tell which situation you are in.",
    intro: [
      "Paying for five tools that each almost fit is a specific kind of expensive. So is commissioning custom software for a problem a $30-a-month subscription already solves. Both mistakes are common and both are avoidable with about an hour of honest arithmetic.",
      "These guides lay out that arithmetic. Per-seat costs as you grow, the price of the workarounds your team has quietly built, what you actually own at the end, and the break-even point where building stops being the expensive option and starts being the cheap one.",
      "We build custom software for a living and we still tell people to stay on their SaaS stack when the numbers say so. These guides say the same thing.",
    ],
    relatedService: "/services/custom-software",
    relatedServiceLabel: "See our custom software service",
  },
];

export function getTopic(slug: string) {
  return topics.find((t) => t.slug === slug);
}

/** Slugs the manifest build validates post `hub` values against. */
export const topicSlugs = topics.map((t) => t.slug);
