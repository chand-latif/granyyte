import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/** Global typography styles for MDX blog content. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-12 font-display text-2xl font-bold tracking-tight text-fg md:text-3xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-8 font-display text-xl font-bold text-fg md:text-2xl" {...props} />
    ),
    p: (props) => <p className="mt-5 text-base leading-relaxed text-muted" {...props} />,
    ul: (props) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted" {...props} />
    ),
    ol: (props) => (
      <ol
        className="mt-5 list-decimal space-y-2 pl-6 text-base leading-relaxed text-muted"
        {...props}
      />
    ),
    li: (props) => <li className="marker:text-lime" {...props} />,
    a: ({ href = "", ...props }) => (
      <Link
        href={href}
        className="text-lime underline decoration-lime/40 underline-offset-4 transition-colors hover:decoration-lime"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-semibold text-fg" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-5 border-l-2 border-lime pl-5 text-base italic leading-relaxed text-muted"
        {...props}
      />
    ),
    code: (props) => (
      <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-lime" {...props} />
    ),
    hr: () => <hr className="my-10 border-edge" />,
    table: (props) => (
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-muted" {...props} />
      </div>
    ),
    th: (props) => (
      <th className="border-b border-edge-strong px-4 py-3 font-display font-bold text-fg" {...props} />
    ),
    td: (props) => <td className="border-b border-edge px-4 py-3" {...props} />,
    ...components,
  };
}
