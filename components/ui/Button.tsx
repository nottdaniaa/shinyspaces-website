import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover hover:shadow-hover active:bg-primary-dark",
  secondary:
    "border border-primary bg-transparent text-primary hover:bg-primary/[0.06] active:bg-primary/[0.12]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-small",
  lg: "px-6 py-3 text-body",
};

export function Button({
  href,
  variant = "primary",
  size = "sm",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-button font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
