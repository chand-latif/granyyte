import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        // Retired: the app-cost post was removed when pricing came off the
        // site. It had inbound links and indexed impressions, so send that
        // equity to the service page rather than serving a 404.
        source: "/blog/mobile-app-development-cost",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
    ];
  },
};

// With Turbopack, remark/rehype plugins must be referenced by string name
// (options have to be serializable across the worker boundary).
const withMDX = createMDX({
  options: {
    // remark-frontmatter strips the YAML block from the rendered body; the
    // metadata itself is read by scripts/build-posts-manifest.mjs, not here.
    remarkPlugins: [["remark-gfm"], ["remark-frontmatter"]],
  },
});

export default withMDX(nextConfig);
