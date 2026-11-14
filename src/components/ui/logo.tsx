/** The "G" stroke and its cropped viewBox. Shared with the animated navbar logo. */
export const LOGO_VIEWBOX = "50 40 120 120";
export const LOGO_PATH = "M 144 71.71 A 44 44 0 1 0 144 128.29 L 112.57 128.29 L 112.57 100";

/** Granyyte "G" mark. Colour follows currentColor (use text-lime). */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      fill="none"
      role="img"
      aria-label="Granyyte logo"
    >
      <path
        d={LOGO_PATH}
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
