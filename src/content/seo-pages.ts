/**
 * SEO landing pages — long-tail location ("… from Pakistan", "… in Sialkot")
 * and affordability ("mobile app within $500") queries. Rendered by
 * src/app/[slug]/page.tsx at root-level URLs for maximum keyword strength.
 * Each page must stay unique and honest: full apps start ~$500, smaller
 * deliverables from $100, delivery 2–4 weeks. Don't copy-paste copy between
 * pages — Google devalues near-duplicates. Target search queries verbatim in
 * FAQ questions — that's what has been ranking.
 */

export type SeoPage = {
  slug: string;
  /** <title> without brand — layout template appends "| Granyyte" */
  metaTitle: string;
  metaDescription: string;
  /** Header pill label */
  label: string;
  /** Plain part of the H1 */
  title: string;
  /** Serif-italic lime part of the H1 */
  accent: string;
  headerDescription: string;
  specs: { label: string; value: string }[];
  /** Body paragraphs under "01 — Overview" */
  intro: string[];
  whyTitle: string;
  whyPoints: { title: string; description: string }[];
  /** Optional pricing tier table */
  pricing?: { range: string; deliverable: string }[];
  pricingNote?: string;
  faqs: { question: string; answer: string }[];
  /** services.ts slug this page deepens */
  relatedService: string;
  /** projects.ts slugs to showcase */
  relatedProjects: string[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "mobile-app-development-pakistan",
    metaTitle: "Mobile App Development in Pakistan — Hire an Expert App Developer",
    metaDescription:
      "Hire an expert mobile app developer from Pakistan. Granyyte builds iOS & Android apps in 2–4 weeks — full apps from $500, western-agency quality at Pakistani rates.",
    label: "Pakistan · Mobile Apps",
    title: "Mobile app development",
    accent: "from Pakistan.",
    headerDescription:
      "iOS and Android apps engineered in Sialkot, Pakistan and shipped to clients across Europe, the Middle East, and North America. Senior quality, honest pricing, 2–4 week delivery.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2–4 weeks" },
      { label: "Full apps from", value: "$500" },
    ],
    intro: [
      "If you're looking for app development from Pakistan, you've probably noticed the range: everything from $5 gig sellers to full agencies quoting like they're in London. Granyyte sits deliberately in the middle of that gap — one senior software engineer in Pakistan delivering the quality of a western agency at a fraction of the price.",
      "My specialty is Flutter mobile app development: complete apps for iOS and Android designed, built, and launched from a single Flutter codebase — marketplaces, booking systems, wellness apps, AI assistants, and B2B tools, all live on the App Store and Google Play. Every project gets a fixed price, a real timeline, and weekly demo builds you can tap through on your own phone.",
      "Being based in Pakistan is precisely why the pricing works: my costs are local, but my standards, tooling, and communication are not. You get the same stack the best studios use — Flutter, FlutterFlow, Firebase, Supabase — without the western overhead baked into the invoice.",
    ],
    whyTitle: "Why hire an app developer from Pakistan",
    whyPoints: [
      {
        title: "A fraction of western rates",
        description:
          "The same app a US or UK agency quotes at $15–40k typically costs $500–$5,000 with me. Not because the work is lesser — because my overhead is Pakistani, not Californian.",
      },
      {
        title: "Certified, not anonymous",
        description:
          "You're hiring a named engineer — Chand Latif, a certified FlutterFlow expert — not a rotating outsourcing bench. You know exactly who writes every line.",
      },
      {
        title: "Timezone that works for you",
        description:
          "Pakistan (PKT) overlaps European mornings and US evenings, so you get same-day responses whether you're in Berlin, Dubai, or New York.",
      },
      {
        title: "Proven across three continents",
        description:
          "Apps shipped for clients in Poland, the UAE, Turkey, the UK, and North America — all live on the stores, all built end to end from Pakistan.",
      },
    ],
    pricing: [
      { range: "$100–$500", deliverable: "App prototype, MVP design, bug fixes, or a single feature build" },
      { range: "$500–$1,000", deliverable: "Complete simple app — one core flow, clean UI, iOS + Android" },
      { range: "$1,000–$1,500", deliverable: "Standard app with backend, auth, and integrations" },
      { range: "$1,500–$2,000+", deliverable: "Full product — payments, chat, admin panel, store deployment" },
    ],
    pricingNote:
      "Every project is quoted as a fixed price against a written scope — proposal within 1–2 days.",
    faqs: [
      {
        question: "How much does mobile app development cost in Pakistan?",
        answer:
          "With me, complete apps start around $500 and scale with requirements — a standard product with backend, auth, and payments typically lands between $1,000 and $2,000, while complex platforms go beyond that. Smaller deliverables like prototypes or single features start from $100. That's usually 5–20× less than a western agency quotes for identical scope.",
      },
      {
        question: "Is it safe to outsource app development to Pakistan?",
        answer:
          "Yes — if you hire the right way. Work with a named developer with a verifiable track record, published apps, fixed-price contracts, and full code ownership. I hand over complete source code and infrastructure access on every project, and my apps are live on the App Store and Google Play under real client accounts you can check.",
      },
      {
        question: "How long does it take to build an app from Pakistan?",
        answer:
          "Most of my apps ship in 2–4 weeks, whether iOS, Android, or both — one Flutter codebase covers both platforms. Larger builds with heavy custom backends can extend beyond that, and you'll know the real timeline before we start.",
      },
      {
        question: "Do you handle App Store and Google Play publishing from Pakistan?",
        answer:
          "Completely. I manage store listings, screenshots, review requirements, and submissions from here — location makes no difference to the stores — and I resolve review feedback until your app is live.",
      },
      {
        question: "How do we communicate across timezones?",
        answer:
          "Pakistan's timezone overlaps European working hours and US mornings/evenings. You get weekly demo builds, direct WhatsApp/email access to me, and no account-manager layer between you and the person writing your code.",
      },
      {
        question: "Are you a mobile app development agency or a freelancer?",
        answer:
          "A one-engineer studio — deliberately. You get the accountability and process of a mobile app development agency in Pakistan (contracts, fixed scope, store publishing, handover documentation) with the directness of working with the actual senior engineer. No project managers relaying messages, no junior bench doing the real work.",
      },
    ],
    relatedService: "mobile-app-development",
    relatedProjects: ["bilge-ai", "poland-portal", "zwipe"],
  },
  {
    slug: "flutterflow-developer-pakistan",
    metaTitle: "Certified FlutterFlow Developer in Pakistan — FlutterFlow Development Services",
    metaDescription:
      "Hire a certified FlutterFlow expert from Pakistan. FlutterFlow development services — full apps in 2–4 weeks from $500, real exported Flutter code you own.",
    label: "Pakistan · FlutterFlow",
    title: "Certified FlutterFlow developer",
    accent: "from Pakistan.",
    headerDescription:
      "Officially certified by FlutterFlow, based in Pakistan, shipping production apps worldwide. The fastest legitimate route from idea to app store — at Pakistani rates.",
    specs: [
      { label: "Certification", value: "FlutterFlow Expert" },
      { label: "Delivery", value: "2–4 weeks" },
      { label: "Full apps from", value: "$500" },
    ],
    intro: [
      "FlutterFlow mobile app development from Pakistan is one of the best value propositions in software right now — and hiring a certified FlutterFlow developer makes the difference between a demo that impresses and a product that ships. I'm Chand Latif, an officially certified FlutterFlow expert building production apps from Sialkot, Pakistan for clients across Europe, the Middle East, and North America.",
      "FlutterFlow isn't a toy builder: it generates real Flutter code you fully own, which means your app runs natively on both iOS and Android and can be extended with hand-written code whenever you outgrow visual development. In my hands it cuts delivery to 2–4 weeks — roughly 3× less time and money than native development for the same product.",
      "Combine that speed with Pakistani rates and you get complete, store-published apps starting around $500 — the kind of budget that barely buys a discovery call at a western agency.",
    ],
    whyTitle: "Why a certified FlutterFlow expert from Pakistan",
    whyPoints: [
      {
        title: "Official FlutterFlow certification",
        description:
          "Certification means validated, examined skill in building production-grade FlutterFlow apps — verifiable through FlutterFlow's own credential system, not a self-awarded badge.",
      },
      {
        title: "3× faster, 3× cheaper than native",
        description:
          "One visual-first codebase instead of two native ones. Same product, weeks instead of months — and Pakistani rates compound the savings.",
      },
      {
        title: "Real code, no lock-in",
        description:
          "FlutterFlow exports genuine Flutter/Dart code. You own it outright, and I extend it with custom code where visual development ends.",
      },
      {
        title: "Rescues and takeovers welcome",
        description:
          "Half-finished FlutterFlow project from another freelancer? I audit, fix, and ship stalled builds regularly.",
      },
    ],
    pricing: [
      { range: "$100–$500", deliverable: "FlutterFlow prototype, audit of an existing project, or feature fixes" },
      { range: "$500–$1,000", deliverable: "Complete simple FlutterFlow app, published to both stores" },
      { range: "$1,000–$2,000+", deliverable: "Full product with backend, auth, payments, and custom code" },
    ],
    pricingNote: "Fixed-price proposal within 1–2 days of our first conversation.",
    faqs: [
      {
        question: "How much does a FlutterFlow developer from Pakistan cost?",
        answer:
          "Complete FlutterFlow apps start around $500 with me, with standard products landing between $1,000 and $2,000 — several times less than US/EU FlutterFlow agencies charge for the same build. Smaller work like prototypes, audits, or fixes starts from $100.",
      },
      {
        question: "Are you actually certified in FlutterFlow?",
        answer:
          "Yes — I hold an official FlutterFlow certification, verifiable through FlutterFlow University's credential link on my site. Certification is earned through examination, so it's a real signal of production-level skill, not a marketing label.",
      },
      {
        question: "Can a FlutterFlow app really be production-quality?",
        answer:
          "Yes. FlutterFlow generates real Flutter code that compiles natively for iOS and Android. I've shipped marketplaces, AI assistants, booking platforms, and wellness apps this way — all live on the App Store and Google Play. Where visual development hits a limit, I write custom Flutter code inside the same project.",
      },
      {
        question: "Can you take over my existing FlutterFlow project?",
        answer:
          "Absolutely — takeovers are a regular part of my work. I start with a quick audit (from $100), tell you honestly what state the project is in, then quote a fixed price to finish and ship it.",
      },
      {
        question: "How fast can you deliver a FlutterFlow app from Pakistan?",
        answer:
          "Most FlutterFlow builds ship in 2–4 weeks including store submission. FlutterFlow eliminates most boilerplate, and one codebase covers both platforms — that's where the speed comes from.",
      },
      {
        question: "Are you a FlutterFlow mobile app development agency?",
        answer:
          "Granyyte works like a FlutterFlow app development agency — fixed-price contracts, written scopes, store publishing, and full handover — but it's one certified senior engineer doing the work, not a bench of juniors behind a sales team. For most FlutterFlow projects that's strictly better: agency process, direct-line communication, Pakistani pricing.",
      },
    ],
    relatedService: "mobile-app-development",
    relatedProjects: ["mindful-mantra", "thafath", "sacred-diary"],
  },
  {
    slug: "web-development-pakistan",
    metaTitle: "Website Development in Pakistan — Hire an Expert Web Developer",
    metaDescription:
      "Website development from Pakistan: fast, SEO-first sites and web apps built with React & Next.js. Business sites from a few hundred dollars, delivered in 2–4 weeks.",
    label: "Pakistan · Web",
    title: "Website development",
    accent: "from Pakistan.",
    headerDescription:
      "SEO-first websites and web applications built in Pakistan with React and Next.js — engineered to rank on Google and convert visitors, at a fraction of western agency prices.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2–4 weeks" },
      { label: "Sites from", value: "$100s" },
    ],
    intro: [
      "Website development from Pakistan has a reputation problem: cheap templates, slow turnarounds, and sites that never rank. I built Granyyte to be the counter-example — modern web development from Sialkot, Pakistan on the same stack the fastest sites on the internet use: React, Next.js, TypeScript, and server-rendered, SEO-first architecture.",
      "Whether you need a conversion-focused business website, a dashboard, a booking portal, or a full SaaS product, I engineer it to load instantly, rank on Google, and work on every screen. The site you're reading is my own work — check its speed and search presence as a live sample.",
      "Because I work from Pakistan, a high-end marketing site costs a few hundred dollars instead of a few thousand, and full web applications scope from around $1,000 instead of $10,000 — same code quality, radically different overhead.",
    ],
    whyTitle: "Why hire a web developer from Pakistan",
    whyPoints: [
      {
        title: "SEO built in, not bolted on",
        description:
          "Server rendering, structured data, fast Core Web Vitals, semantic markup — every site ships technically ahead of most of its competition on day one.",
      },
      {
        title: "Modern stack, no page builders",
        description:
          "React, Next.js, and TypeScript — not a WordPress theme with fifty plugins. Your site is real engineering you own outright.",
      },
      {
        title: "Prices that make sense",
        description:
          "Business websites from a few hundred dollars; full web apps from around $1,000. The Pakistani cost base makes premium work affordable.",
      },
      {
        title: "One engineer, end to end",
        description:
          "Design, build, deployment, analytics, and SEO handled by one person — no agency telephone game, no handoffs where quality dies.",
      },
    ],
    pricing: [
      { range: "$100–$500", deliverable: "Landing page or small business site, SEO-ready" },
      { range: "$500–$1,000", deliverable: "Multi-page marketing site with CMS or booking" },
      { range: "$1,000–$2,000+", deliverable: "Web application — dashboards, portals, auth, payments" },
    ],
    pricingNote: "Fixed quote after a short discovery call — usually within 1–2 days.",
    faqs: [
      {
        question: "How much does website development cost in Pakistan?",
        answer:
          "With me, landing pages and small business sites start from a few hundred dollars, multi-page marketing sites run $500–$1,000, and full web applications scope from around $1,000 upward depending on complexity. Every quote is fixed-price against a written scope.",
      },
      {
        question: "Will my website actually rank on Google?",
        answer:
          "I build every site SEO-first: server-rendered HTML, structured data, fast Core Web Vitals, and clean semantic markup. Rankings also depend on your content and competition — but technically, your site will be ahead of most of the market from day one. This very website is the proof of method.",
      },
      {
        question: "How long does a website take to build from Pakistan?",
        answer:
          "Most sites ship in 2–4 weeks — smaller landing pages often within days. Larger web applications with custom backends can extend beyond that, with the real timeline fixed in the proposal.",
      },
      {
        question: "Can you redesign or migrate my existing website?",
        answer:
          "Yes. I regularly migrate sites off WordPress, Wix, and page builders onto modern stacks — preserving your existing SEO with proper redirects while dramatically improving speed.",
      },
      {
        question: "Do you build e-commerce and web apps too, or just websites?",
        answer:
          "Both. Beyond marketing sites I build full products — dashboards, portals, booking systems, and SaaS applications with authentication, payments, and real-time features.",
      },
    ],
    relatedService: "web-development",
    relatedProjects: ["space-maintenance", "poland-portal"],
  },
  {
    slug: "crm-development-pakistan",
    metaTitle: "CRM & Custom Software Development in Pakistan — Built Around Your Workflow",
    metaDescription:
      "CRM development from Pakistan: custom CRMs, internal tools, and business automation built around your workflows. Fixed pricing from $1,000, delivered in 2–4 weeks.",
    label: "Pakistan · CRM & Software",
    title: "CRM & custom software development",
    accent: "from Pakistan.",
    headerDescription:
      "Custom CRMs, internal tools, and automation built in Pakistan around how your company actually works — you own the code, and the per-seat subscription bills stop.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2–4 weeks" },
      { label: "Systems from", value: "$1,000" },
    ],
    intro: [
      "CRM development from Pakistan is how growing companies escape the subscription trap without western consulting prices. Instead of paying five SaaS tools that each do 70% of the job — forever, per seat — you get one system shaped precisely around your pipeline, your fields, your process. Built once, owned outright.",
      "I build custom CRMs, lead-management systems, admin dashboards, client portals, and workflow automation from Sialkot, Pakistan for businesses across Europe, the Gulf, and North America. Everything integrates with the tools you already use — payment processors, email platforms, calendars, accounting — through their APIs.",
      "Because the engineering happens in Pakistan, a custom CRM that would be a $30–60k consulting engagement in the US typically lands between $1,000 and $5,000 with me — with the same handover standard: full source code, documentation, and infrastructure access.",
    ],
    whyTitle: "Why build your CRM with a Pakistani developer",
    whyPoints: [
      {
        title: "Break-even in months, not years",
        description:
          "At Pakistani development rates, a custom system often costs less than one year of the SaaS subscriptions it replaces — after which it's simply free to own.",
      },
      {
        title: "Shaped to your workflow",
        description:
          "No more forcing your process into someone else's software. Your fields, your stages, your automations — 100% fit by definition.",
      },
      {
        title: "You own everything",
        description:
          "Full source code, database, and infrastructure handed over on completion. No lock-in, no per-seat pricing, no terms that change under you.",
      },
      {
        title: "Integrates with your stack",
        description:
          "Stripe, email platforms, calendars, accounting tools, and any service with an API — your new system works with your existing tools, not against them.",
      },
    ],
    pricing: [
      { range: "$100–$1,000", deliverable: "Automation scripts, integrations, or a focused internal tool" },
      { range: "$1,000–$2,500", deliverable: "Custom CRM or admin dashboard around one core workflow" },
      { range: "$2,500–$5,000+", deliverable: "Multi-role business system with portals, reporting, and automation" },
    ],
    pricingNote: "Scoped proposal with fixed pricing within 1–2 days of mapping your workflow.",
    faqs: [
      {
        question: "How much does CRM development cost in Pakistan?",
        answer:
          "Custom CRMs with me typically run $1,000–$2,500 for a system built around one core workflow, and $2,500–$5,000+ for multi-role platforms with portals and reporting. Smaller automation and integration work starts from $100. Comparable US/EU consulting engagements start around $30k.",
      },
      {
        question: "Custom CRM vs. off-the-shelf — when is custom worth it?",
        answer:
          "When your team works around the tool instead of with it, when subscription sprawl crosses the cost of building, or when your workflow is your competitive edge. If an off-the-shelf tool fits 90%+ of your process, I'll tell you to buy it — honestly, in the first call.",
      },
      {
        question: "Can you integrate with the tools we already use?",
        answer:
          "Yes. I routinely integrate custom systems with payment processors, email platforms, calendars, accounting tools, and any service exposing an API — your existing stack keeps working, with the new system as the hub.",
      },
      {
        question: "Who owns the code and the data?",
        answer:
          "You do — completely. Full source code, database, documentation, and infrastructure access are handed over on completion. No lock-in, no dependency on me, ever.",
      },
      {
        question: "How long does custom software take from Pakistan?",
        answer:
          "Focused tools and CRMs ship in 2–4 weeks. Larger multi-role systems extend beyond that, phase by phase, with the timeline fixed in the proposal so it never becomes a moving target.",
      },
    ],
    relatedService: "custom-software",
    relatedProjects: ["mainxpert", "space-maintenance"],
  },
  {
    slug: "affordable-app-development",
    metaTitle: "Affordable App Development — Full Apps from $500, Honest Tiers from $100",
    metaDescription:
      "Affordable app development without the corner-cutting: complete mobile apps from $500, prototypes and fixes from $100, full products under $2,000. Fixed prices, 2–4 week delivery.",
    label: "Affordable Development",
    title: "Affordable app development",
    accent: "without the corner-cutting.",
    headerDescription:
      "Complete mobile apps from $500. Prototypes, fixes, and landing pages from $100. Full products with payments and admin panels under $2,000 — fixed prices, real timelines, code you own.",
    specs: [
      { label: "Small builds from", value: "$100" },
      { label: "Full apps from", value: "$500" },
      { label: "Delivery", value: "2–4 weeks" },
    ],
    intro: [
      "\"Affordable app development\" usually means one of two scams: a $99 template with your logo on it, or a lowball quote that triples once you're committed. This page is the third option — real, honest tiers for what software actually costs when a certified senior engineer in Pakistan builds it without western agency overhead.",
      "The affordability isn't magic. It's three structural advantages stacked: I build one Flutter codebase that runs on both iOS and Android (instead of two native apps), I use FlutterFlow — where I'm officially certified — to eliminate boilerplate, and my cost base is Sialkot, not San Francisco. Same product, roughly 3× less time and money than native development, and 5–20× less than a western agency invoice.",
      "Every price below is a real offer, not bait. Fixed quotes against written scope, proposal within 1–2 days, weekly demo builds, and full code ownership on delivery — at every tier, including the smallest.",
    ],
    whyTitle: "What your budget actually buys",
    whyPoints: [
      {
        title: "No hourly billing, ever",
        description:
          "Every project is a fixed price tied to a written scope. Hourly billing on a vague scope is a blank check — you'll never get one from me.",
      },
      {
        title: "Cheap ≠ disposable",
        description:
          "Even a $500 app gets clean architecture, real testing, and store-ready polish. The most expensive app is the one you have to rebuild.",
      },
      {
        title: "One codebase, both platforms",
        description:
          "Flutter means your budget buys iOS and Android together — not one platform now and a second invoice later.",
      },
      {
        title: "You own everything",
        description:
          "Source code, stores, infrastructure — handed over at every price tier. Affordability without lock-in.",
      },
    ],
    pricing: [
      { range: "$100–$500", deliverable: "Landing page, app prototype / MVP design, bug fixes, single-feature builds" },
      { range: "$500–$1,000", deliverable: "Complete simple app — one core flow, clean UI, iOS + Android from one codebase" },
      { range: "$1,000–$1,500", deliverable: "Standard app with backend, authentication, and a couple of integrations" },
      { range: "$1,500–$2,000+", deliverable: "Full product — payments, chat, admin panel, store deployment handled" },
    ],
    pricingNote:
      "Larger platforms (marketplaces, multi-role systems, custom algorithms) scope beyond $2,000 — still a fraction of agency pricing.",
    faqs: [
      {
        question: "Can I get a mobile app for $100?",
        answer:
          "Not a complete app — anyone promising that is selling a template. What $100–$400 genuinely buys with me: a clickable app prototype, an MVP design, bug fixes on an existing app, a single-feature build, or a landing page for your idea. Complete apps start around $500, and I'll tell you honestly which one you need.",
      },
      {
        question: "Can I get a full app for $500?",
        answer:
          "Yes — a complete, store-published app with one core flow done excellently: clean UI, solid architecture, running on both iOS and Android from a single Flutter codebase. Think focused tools, content apps, booking flows, or a tight MVP. It won't have payments, chat, and an admin panel at that price — those come in higher tiers.",
      },
      {
        question: "What does a mobile app within $1,000 look like?",
        answer:
          "A simple-to-standard app with a real backend: user accounts, cloud data via Firebase or Supabase, push notifications, and a couple of integrations. This is the sweet spot for most first versions — enough product to validate with real users, delivered in 2–4 weeks.",
      },
      {
        question: "What can I build with $1,500 to $2,000?",
        answer:
          "A full commercial product: authentication, payments, real-time features like chat, an admin panel to run it, analytics, and App Store + Google Play deployment handled for you. This tier covers most standard business apps end to end.",
      },
      {
        question: "Why is your development so much cheaper than agencies?",
        answer:
          "Three reasons: I'm one senior engineer in Pakistan, not an office of account managers in a western capital; one Flutter codebase covers iOS and Android instead of two native teams; and certified FlutterFlow expertise eliminates most boilerplate. The savings are structural — not corners being cut.",
      },
      {
        question: "Are cheap apps lower quality?",
        answer:
          "Cheap templates are. Efficiently-built custom apps aren't — every tier here gets the same architecture standards, testing, and store-ready polish. My portfolio apps, live on both stores with real users, were all built at these price levels.",
      },
    ],
    relatedService: "mobile-app-development",
    relatedProjects: ["bilge-ai", "mindful-mantra", "zwipe"],
  },
  {
    slug: "surveyor-management-software",
    metaTitle: "Surveyor Job Management Software — Custom Internal Tools for Surveying Firms",
    metaDescription:
      "Custom job management software for surveyor-led firms: job creation, instant WhatsApp + email quote requests, RAMS-enforced site visits, and tamper-proof records. Proven in a live case study — built in 2–4 weeks.",
    label: "Surveyors · Software",
    title: "Job management software",
    accent: "for surveyor-led firms.",
    headerDescription:
      "Custom internal tools that run a surveying company's whole operation — jobs, contractors, quotes, RAMS, site visits, and evidence trails. Already running a real reinstatement firm's daily operations.",
    specs: [
      { label: "Built for", value: "Surveyor-led firms" },
      { label: "Delivery", value: "2–4 weeks" },
      { label: "Proof", value: "Live case study" },
    ],
    intro: [
      "Most surveyor-led firms run on WhatsApp threads, email chains, paper RAMS, and photo folders scattered across phones. Off-the-shelf job management software almost fits — but never quite matches how a surveying company actually works: survey → scope → quotes → client approval → scheduled visits → compliance evidence → sign-off.",
      "I build custom job management software shaped around exactly that lifecycle. Not a template — a system where your surveyors create jobs with claim references, your approved contractors get job links on WhatsApp and email the moment work is ready, quotes come back the same day, and every site visit runs through a structured, RAMS-first form that locks into a tamper-proof record.",
      "This isn't theory: I designed and built the internal operations platform that Space Maintenance — a surveyor-led insurance reinstatement firm covering London and the South West — runs its daily business on. The full breakdown is public in the case study, and the same system can be shaped to your firm's workflow.",
    ],
    whyTitle: "What custom software fixes for a surveying firm",
    whyPoints: [
      {
        title: "Quote-chasing becomes instant",
        description:
          "Contractors receive the job link by WhatsApp + email the moment a job is created and quote directly from their phone — no ring-arounds, no waiting days.",
      },
      {
        title: "Compliance enforced by software",
        description:
          "\"No RAMS, no work — no photos, no payment\" stops being a rule you chase and becomes one the system physically enforces before a visit can proceed.",
      },
      {
        title: "A tamper-proof evidence trail",
        description:
          "Every visit stores RAMS, before/during/after photos, and customer sign-off — then locks read-only. When an insurer questions a claim, the record is one click away.",
      },
      {
        title: "You own it — no per-seat pricing",
        description:
          "Built on Supabase/PostgreSQL and handed over completely. Add surveyors, contractors, and jobs without the software bill scaling against you.",
      },
    ],
    pricing: [
      { range: "$100–$1,000", deliverable: "Single module — quote requests, visit forms, or contractor onboarding" },
      { range: "$1,000–$2,500", deliverable: "Core job-management system around your main workflow" },
      { range: "$2,500–$5,000+", deliverable: "Full operations platform — jobs, quotes, visits, incidents, notifications" },
    ],
    pricingNote:
      "Fixed-price proposal within 1–2 days of a workflow call. Most systems ship in 2–4 weeks.",
    faqs: [
      {
        question: "What should job management software for a surveying company include?",
        answer:
          "The full job lifecycle: job creation with claim references, client and contractor profiles with insurance/accreditation documents, quote requests and approvals, scheduled site visits with RAMS and photo evidence, customer sign-off, incident reporting, and automatic notifications. That's exactly the scope of the system in my case study — running live at a surveyor-led reinstatement firm.",
      },
      {
        question: "How much does custom surveyor management software cost?",
        answer:
          "With me, a core job-management system built around your main workflow typically runs $1,000–$2,500; a full operations platform with quoting, visit forms, incident reporting, and WhatsApp/email automation lands $2,500–$5,000+. That's often less than a year of the per-seat SaaS subscriptions it replaces — and you own it outright.",
      },
      {
        question: "Can it enforce RAMS and photo compliance on site?",
        answer:
          "Yes — that's the core of the visit-link system I build: a structured on-site form where RAMS must be completed before work starts, photos are captured before/during/after, and the customer signs off at the end. Half-finished visits reopen exactly where they were left; completed visits lock read-only.",
      },
      {
        question: "We already use Joblogic — can custom software work alongside it?",
        answer:
          "Yes. The system in my case study was designed to sit alongside Joblogic: scheduling stays where your team already works, while the custom layer owns what off-the-shelf tools can't — RAMS enforcement, evidence capture, quote automation, and WhatsApp notifications.",
      },
      {
        question: "Can contractors really get job links on WhatsApp?",
        answer:
          "Yes — via Brevo integration, job and visit links go out on WhatsApp and email simultaneously, and every role (surveyor, client, contractor) gets stage-by-stage notifications on both channels. Contractors quote and complete visit forms straight from their phone.",
      },
      {
        question: "How long does it take to build?",
        answer:
          "A focused system ships in 2–4 weeks; a full operations platform is built module by module so your team starts using the first pieces within weeks, not months. Fixed timeline and price in the proposal — usually within 1–2 days of our first call.",
      },
    ],
    relatedService: "custom-software",
    relatedProjects: ["surveyor-job-management-system", "space-maintenance"],
  },
  {
    slug: "mobile-app-development-sialkot",
    metaTitle: "Mobile App Development in Sialkot — Certified App Developer",
    metaDescription:
      "Hire a mobile app developer in Sialkot: certified Flutter & FlutterFlow engineer with apps live on the App Store and Google Play worldwide. Full apps from $500, delivered in 2–4 weeks.",
    label: "Sialkot · Mobile Apps",
    title: "Mobile app developer",
    accent: "in Sialkot.",
    headerDescription:
      "A certified Flutter & FlutterFlow engineer based right here in Sialkot — with apps live on the App Store and Google Play for clients on three continents. International-standard work, and you can meet the developer in person.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2–4 weeks" },
      { label: "Full apps from", value: "$500" },
    ],
    intro: [
      "Search for mobile app development in Sialkot and you mostly find two things: students building side projects, and Lahore or Karachi agencies that treat Sialkot as a remote lead. Granyyte is the third option — a senior, certified mobile application developer in Sialkot itself, running an international studio from this city with apps live on the App Store and Google Play for clients in Turkey, Poland, the UAE, and the UK.",
      "I do Flutter mobile app development: one codebase that runs natively on both iOS and Android, so your budget buys both platforms at once. As an officially certified FlutterFlow expert I cut delivery to 2–4 weeks — marketplaces, booking systems, AI assistants, and business apps, each with a fixed price and weekly demo builds you tap through on your own phone.",
      "Hiring locally has real advantages the big-city agencies can't match: we can scope your app face to face in Sialkot, you can be invoiced in PKR, and the engineer who built your app stays in your city for support — not behind a ticket system three hundred kilometres away.",
    ],
    whyTitle: "Why hire an app developer in Sialkot",
    whyPoints: [
      {
        title: "International portfolio, local address",
        description:
          "Apps shipped for clients in Turkey, Poland, and the Gulf — all verifiable on the stores — built by an engineer you can sit across a table from in Sialkot.",
      },
      {
        title: "Certified, not a side-gig",
        description:
          "Officially certified FlutterFlow expert with years of production Flutter work. You're hiring examined, store-proven skill — not a student's weekend project.",
      },
      {
        title: "One codebase, both platforms",
        description:
          "Flutter mobile app development means iOS and Android from a single codebase — roughly 3× less time and money than building two native apps.",
      },
      {
        title: "Face-to-face scoping and support",
        description:
          "Requirements over a sit-down meeting, weekly demo builds on your phone, and ongoing support from the same city and timezone as your business.",
      },
    ],
    pricing: [
      { range: "$100–$500", deliverable: "App prototype, MVP design, bug fixes, or a single-feature build" },
      { range: "$500–$1,000", deliverable: "Complete simple app — one core flow, clean UI, iOS + Android" },
      { range: "$1,000–$1,500", deliverable: "Standard app with backend, accounts, and integrations" },
      { range: "$1,500–$2,000+", deliverable: "Full product — payments, chat, admin panel, store deployment" },
    ],
    pricingNote:
      "Fixed-price proposal within 1–2 days. Sialkot clients can scope in person and be invoiced in PKR.",
    faqs: [
      {
        question: "How much does mobile app development cost in Sialkot?",
        answer:
          "The same honest tiers I quote worldwide: complete apps start around $500 (invoiced in PKR if you prefer), standard apps with a backend land between $1,000 and $2,000, and smaller deliverables like prototypes or fixes start from $100. Being local doesn't change the price — it just adds face-to-face meetings and same-city support.",
      },
      {
        question: "Are there professional mobile application developers in Sialkot?",
        answer:
          "Fewer than you'd hope — most serious engineers leave for Lahore, Islamabad, or remote-only work, which is why local businesses end up with students or distant agencies. I run Granyyte from Sialkot deliberately: an international client base, apps live on both stores you can verify right now, and an office address in this city.",
      },
      {
        question: "Can we meet in person to discuss the app?",
        answer:
          "Yes — that's half the point of hiring an app developer in Sialkot instead of a remote agency. We can map your requirements across a table, and you'll keep getting weekly demo builds on your own phone as the app takes shape.",
      },
      {
        question: "Do you build apps for Sialkot's exporters and manufacturers?",
        answer:
          "Yes. Sports goods, surgical instruments, leather — Sialkot's exporters increasingly need order-tracking apps, B2B buyer catalogs, and internal tools for production and dispatch. I build those as mobile apps, web systems, or both connected to one backend.",
      },
      {
        question: "Will my app be built with Flutter or native code?",
        answer:
          "Flutter — which compiles to real native code for both iOS and Android from one codebase. You get native performance and both platforms for roughly a third of the cost and time of writing two separate native apps. Where it speeds things up further, I use FlutterFlow, where I'm officially certified.",
      },
    ],
    relatedService: "mobile-app-development",
    relatedProjects: ["bilge-ai", "mindful-mantra", "zwipe"],
  },
  {
    slug: "web-development-sialkot",
    metaTitle: "Website Development in Sialkot — Web Developer for Exporters & Local Business",
    metaDescription:
      "Hire a website developer in Sialkot: SEO-first business and import/export websites built with Next.js — engineered to rank on Google and win international buyers. Delivered in 2–4 weeks.",
    label: "Sialkot · Web",
    title: "Website developer",
    accent: "in Sialkot.",
    headerDescription:
      "SEO-first websites for Sialkot's businesses and exporters — engineered with React and Next.js to rank on Google, load instantly, and turn international buyers into inquiries.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2–4 weeks" },
      { label: "Sites from", value: "$100s" },
    ],
    intro: [
      "Sialkot is an export city — sports goods, surgical instruments, leather. Your next buyer in Germany, the UK, or the US will Google your company before they ever reply to an email, and most Sialkot business websites fail that moment: slow WordPress templates that never rank and look a decade old on a phone. Website development in Sialkot deserves better engineering than that.",
      "I build websites the way modern software companies do: React, Next.js, TypeScript, server-rendered and SEO-first — no page builders, no plugin stacks. Company sites, export catalogs, booking portals, and full web applications, each engineered to load instantly and rank for the searches your customers actually type. The site you're reading is my own work; check its speed and its Google presence as the live sample.",
      "Import export website development is a specialty: product catalogs organized the way B2B buyers browse, certifications and factory credentials presented for trust, and inquiry/RFQ forms that land directly on your WhatsApp and email so a buyer in another timezone never waits for a reply.",
    ],
    whyTitle: "Why hire a web developer in Sialkot",
    whyPoints: [
      {
        title: "Built to win international buyers",
        description:
          "Export-focused sites: B2B product catalogs, certification and audit trust signals, and RFQ forms wired straight to your WhatsApp and email.",
      },
      {
        title: "SEO built in, not bolted on",
        description:
          "Server rendering, structured data, and fast Core Web Vitals mean your site starts technically ahead of nearly every competing Sialkot business site.",
      },
      {
        title: "Real code, no template traps",
        description:
          "No rented WordPress themes or page-builder lock-in — your website is real engineering, handed over completely, hosted where you control it.",
      },
      {
        title: "A developer you can sit with",
        description:
          "Scope the site face to face in Sialkot, get it maintained from the same city, and reach the person who built it directly — no agency layers.",
      },
    ],
    pricing: [
      { range: "$100–$500", deliverable: "Landing page or small business site, SEO-ready" },
      { range: "$500–$1,000", deliverable: "Multi-page company or export-catalog site with inquiry forms" },
      { range: "$1,000–$2,000+", deliverable: "Web application — portals, dashboards, booking, e-commerce" },
    ],
    pricingNote:
      "Fixed quote within 1–2 days. Sialkot clients can be invoiced in PKR and meet in person.",
    faqs: [
      {
        question: "How much does website development cost in Sialkot?",
        answer:
          "Landing pages and small business sites start from a few hundred dollars (PKR invoicing available), multi-page company and export-catalog sites run $500–$1,000, and full web applications scope from around $1,000. Every quote is fixed against a written scope, delivered within 1–2 days.",
      },
      {
        question: "Do you build import export websites in Sialkot?",
        answer:
          "Yes — it's one of the main things Sialkot businesses need. An import export website developer has to think like a B2B buyer: clear product catalogs, certifications and factory credibility up front, fast loading on any connection, and inquiry forms that reach you instantly on WhatsApp and email. That's exactly how I build them.",
      },
      {
        question: "Will my website rank on Google in my buyers' countries?",
        answer:
          "Technically, your site will launch ahead of most competitors: server-rendered HTML, structured data, clean semantics, and fast Core Web Vitals — the factors Google rewards everywhere. Actual rankings also depend on your content and competition, and I'll tell you honestly what it takes for your product keywords.",
      },
      {
        question: "Can you redesign our existing company website?",
        answer:
          "Yes. I regularly move Sialkot businesses off old WordPress and Wix sites onto a modern stack — preserving existing Google rankings with proper redirects while transforming speed and design.",
      },
      {
        question: "Do you handle domain, hosting, and maintenance?",
        answer:
          "End to end: domain setup, hosting and deployment, analytics, Search Console, and ongoing maintenance — from the same city as your business, so support is a call or a visit away, not a ticket queue.",
      },
    ],
    relatedService: "web-development",
    relatedProjects: ["space-maintenance", "poland-portal"],
  },
  {
    slug: "software-development-sialkot",
    metaTitle: "Custom Software Development in Sialkot — Inventory, School & Attendance Systems",
    metaDescription:
      "Custom software development in Sialkot by a senior software engineer: inventory management systems, school management software, attendance systems, and export-order tools. You own the code — no monthly per-seat fees.",
    label: "Sialkot · Software",
    title: "Software development",
    accent: "in Sialkot.",
    headerDescription:
      "A senior software engineer in Sialkot building the systems local businesses actually run on — inventory, school management, attendance, POS, and export-order tracking — owned outright, with no per-seat monthly bills.",
    specs: [
      { label: "Based in", value: "Sialkot, Pakistan" },
      { label: "Delivery", value: "2–4 weeks" },
      { label: "Systems from", value: "$500" },
    ],
    intro: [
      "Most factories, exporters, and schools in Sialkot still run on registers, Excel sheets, and WhatsApp groups — and when they search for custom software development in Sialkot, they mostly find resellers pushing rigid off-the-shelf packages. I'm a software engineer in Sialkot who builds systems from scratch, shaped around how your business actually operates — the same way I built the operations platform a UK surveying firm runs its daily business on (the full case study is public on this site).",
      "The systems Sialkot businesses ask for most: inventory management software for manufacturers and traders — stock, purchases, sales, and low-stock alerts across godowns; school management systems for schools and academies — admissions, fee tracking, attendance, results, and parent notifications on WhatsApp; attendance management systems for staff with leave tracking and payroll-ready reports; and order-tracking tools that follow an export order from inquiry to shipment.",
      "The economics favor custom heavily here: built once, the software is yours — full source code, your own database, no per-user monthly fees that punish you for growing. And unlike a Lahore software house, the engineer who built it works in your city: scoping happens face to face, support doesn't cross a timezone, and invoicing can be in PKR.",
    ],
    whyTitle: "Systems I build for Sialkot businesses",
    whyPoints: [
      {
        title: "Inventory management systems",
        description:
          "Stock, purchases, sales, and transfers across godowns and shops — with barcoding, low-stock alerts, and the reports your accountant actually asks for.",
      },
      {
        title: "School management software",
        description:
          "Admissions, fee vouchers and tracking, class attendance, results, and automatic parent notifications on WhatsApp — one system for the whole school or academy.",
      },
      {
        title: "Attendance & HR systems",
        description:
          "Staff check-in/out, shifts, leave management, and payroll-ready monthly exports — for offices, factories, and multi-branch teams.",
      },
      {
        title: "Export order tracking & CRMs",
        description:
          "Follow every order from buyer inquiry through production, QC, and shipment — with statuses your team updates in seconds and your buyers can be notified about automatically.",
      },
    ],
    pricing: [
      { range: "$100–$500", deliverable: "Single-module tool — attendance register, stock ledger, or one automation" },
      { range: "$500–$1,500", deliverable: "Complete system around one workflow — inventory or school management core" },
      { range: "$1,500–$5,000+", deliverable: "Multi-role platform — portals, reporting, WhatsApp/email notifications" },
    ],
    pricingNote:
      "Fixed-price proposal within 1–2 days of mapping your workflow. PKR invoicing available for Sialkot clients.",
    faqs: [
      {
        question: "How much does an inventory management system cost in Sialkot?",
        answer:
          "A focused inventory system built around your stock workflow typically runs $500–$1,500 (invoiced in PKR if you prefer); multi-branch platforms with purchasing, reporting, and user roles go to $1,500–$5,000. Crucially, that's a one-time cost — no per-user monthly subscription, and the software is yours outright.",
      },
      {
        question: "Do you build school management software in Sialkot?",
        answer:
          "Yes — school management systems are one of the most requested builds: admissions, fee vouchers and payment tracking, class-wise attendance, exam results, and automatic parent notifications on WhatsApp and SMS/email. Sized for a single academy or a multi-campus school, and priced as a one-time build you own.",
      },
      {
        question: "Can you build an attendance management system for our staff?",
        answer:
          "Yes. Staff attendance systems — check-in/out, shift schedules, leave requests, and monthly payroll-ready reports — are quick builds, usually in the $500–$1,500 tier and delivered within 2–4 weeks. They can also plug into a larger HR or payroll workflow later.",
      },
      {
        question: "Which industries in Sialkot do you build software for?",
        answer:
          "Any business with a workflow: sports goods and surgical instrument manufacturers, leather exporters, trading houses, schools and academies, clinics, retail shops, and service businesses. The system is shaped around your process — that's the entire point of custom software over a ready-made package.",
      },
      {
        question: "Is custom software better than buying ready-made software?",
        answer:
          "Not always — and I'll tell you honestly in the first meeting. If an off-the-shelf package fits 90% of your process, buy it. Custom wins when your workflow doesn't fit the template, when per-user monthly fees keep climbing, or when you need Urdu-speaking staff, WhatsApp notifications, and your own reports — things packaged software rarely does well here.",
      },
      {
        question: "Are you a software house in Sialkot?",
        answer:
          "Granyyte is a one-engineer software studio in Sialkot — deliberately. You deal directly with the senior engineer who writes every line, not a sales layer over a junior bench. The portfolio on this site, including apps live on both stores and a UK firm's operations platform, is all the same person's work.",
      },
    ],
    relatedService: "custom-software",
    relatedProjects: ["surveyor-job-management-system", "mainxpert"],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((p) => p.slug === slug);
}
