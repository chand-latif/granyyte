import { Reveal } from "./reveal";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ number, label, title, description }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 max-w-2xl md:mb-16">
        <p className="mb-4 font-mono text-sm text-lime">
          {number} — {label}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
