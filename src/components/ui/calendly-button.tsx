import type { ReactNode } from "react";
import { site } from "@/config/site";

/**
 * "Book a free consultation" button — opens the Calendly booking page in a new
 * tab. (The popup-widget variant was tried and dropped: loading Calendly's
 * script on click felt too slow. A direct link is instant and carries zero
 * page-weight.) Purely presentational via `className` + children.
 */

type CalendlyButtonProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function CalendlyButton({ children, className, ...rest }: CalendlyButtonProps) {
  return (
    <a
      href={site.contact.calendly}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
