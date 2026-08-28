import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "lg";
type ButtonTone = "light" | "dark";

function getVariantClasses(variant: ButtonVariant, tone: ButtonTone) {
  if (variant === "primary") {
    return "bg-primary text-white hover:bg-primary-hover hover:shadow-hover active:bg-primary-dark";
  }

  if (tone === "dark") {
    return "border border-white/70 bg-transparent text-white hover:bg-white/10 active:bg-white/20";
  }

  return "border border-primary bg-transparent text-primary hover:bg-primary/[0.06] active:bg-primary/[0.12]";
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-small",
  lg: "px-6 py-3 text-body",
};

export function Button({
  href,
  variant = "primary",
  size = "sm",
  tone = "light",
  className = "",
  ariaLabel,
  external = false,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
  children: ReactNode;
}) {
  const ringClasses =
    tone === "dark"
      ? "focus-visible:ring-white focus-visible:ring-offset-transparent"
      : "focus-visible:ring-primary focus-visible:ring-offset-2";

  const classes = `inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-button font-manrope font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 ${ringClasses} ${getVariantClasses(variant, tone)} ${sizeClasses[size]} ${className}`;

  // tel:/mailto: links and external destinations (e.g. Jobber's hosted
  // request form) aren't internal routes — use a plain anchor rather than
  // next/link, which is built for client-side navigation between app routes.
  if (href.startsWith("tel:") || href.startsWith("mailto:") || external) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
