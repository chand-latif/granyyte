import { Reveal } from "./reveal";

type PageHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-edge bg-dot-grid">
      <div className="absolute inset-0 bg-lime-glow" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-lime">{label}</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-fg md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
