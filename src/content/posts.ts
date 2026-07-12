export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
};

// The index page, post pages, and sitemap all read from this array.
export const posts: Post[] = [
  {
    slug: "flutterflow-vs-native-development",
    title: "FlutterFlow vs. Native Development: What to Choose in 2026",
    description:
      "Native means two separate codebases, more time, and more budget. With Flutter and FlutterFlow you ship the same product in roughly 3× less time and money — here's the honest breakdown from a certified FlutterFlow expert.",
    date: "2026-07-02",
    readingTime: "7 min read",
    tags: ["FlutterFlow", "Mobile Development", "Strategy"],
  },
  {
    slug: "mobile-app-development-cost",
    title: "How Much Does It Cost to Build a Mobile App in 2026?",
    description:
      "Real mobile app development costs in 2026 — apps start from around $500 and scale with requirements. What drives the price, where you save, and why one Flutter codebase makes it affordable.",
    date: "2026-07-02",
    readingTime: "7 min read",
    tags: ["Pricing", "Mobile Development", "Planning"],
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs. Off-the-Shelf: A Decision Guide",
    description:
      "Paying for five SaaS tools that almost fit? A practical framework for deciding when custom software pays for itself — plus why owning software you can ship in weeks changes the math.",
    date: "2026-07-02",
    readingTime: "6 min read",
    tags: ["Custom Software", "Business", "Strategy"],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
