/** Granyyte "G" mark. Colour follows currentColor (use text-lime). */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="50 40 120 120"
      className={className}
      fill="none"
      role="img"
      aria-label="Granyyte logo"
    >
      <path
        d="M 144 71.71 A 44 44 0 1 0 144 128.29 L 112.57 128.29 L 112.57 100"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
