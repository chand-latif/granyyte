import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-lime text-ink hover:bg-lime-dim shadow-[0_0_24px_rgb(200_243_29/0.25)] hover:shadow-[0_0_36px_rgb(200_243_29/0.4)]",
  outline:
    "border border-edge-strong text-fg hover:border-lime hover:text-lime bg-transparent",
  ghost: "text-muted hover:text-lime bg-transparent",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
