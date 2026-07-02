export function AvailableBadge() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-edge bg-surface px-4 py-1.5 font-mono text-xs text-muted">
      <span className="size-2 rounded-full bg-lime animate-pulse-dot" />
      Available for projects
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-edge bg-surface px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
