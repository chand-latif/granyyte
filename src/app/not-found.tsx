import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-dot-grid">
      <div className="absolute inset-0 bg-lime-glow" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-32 text-center md:px-8">
        <p className="font-mono text-sm text-lime">404 — Page not found</p>
        <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-fg md:text-7xl">
          This page didn&apos;t <span className="text-lime">ship</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
          on track.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg" showArrow>
            Back to home
          </Button>
          <Button href="/work" size="lg" variant="outline">
            See our work
          </Button>
        </div>
      </div>
    </section>
  );
}
