import type { ReactNode } from "react";
import type { ServiceAspect, ServiceTone } from "@/data/services";

// A generic SVG noise pattern (feTurbulence) — not derived from any brand asset,
// purely a mathematical texture generator. Kept extremely subtle via opacity below.
const GRAIN_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

// Exactly 3 predefined tones — kept extremely restrained, reading as toned
// paper/material rather than decorative artwork. The tint is nearly a wash.
const toneClasses: Record<ServiceTone, string> = {
  teal: "bg-gradient-to-br from-primary-light/[0.07] via-surface-alt to-surface-alt",
  gold: "bg-gradient-to-br from-accent-gold/[0.07] via-surface-alt to-surface-alt",
  neutral: "bg-gradient-to-br from-surface-alt via-surface-alt to-border/25",
};

// Exactly 3 predefined aspect ratios — no randomized proportions.
const aspectClasses: Record<ServiceAspect, string> = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5]",
  wide: "aspect-[16/9]",
};

export function EditorialSurface({
  tone,
  aspect,
  className = "",
  children,
}: {
  tone: ServiceTone;
  aspect: ServiceAspect;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-image ring-1 ring-inset ring-border/50 transition-[background-color,box-shadow] duration-150 ${aspectClasses[aspect]} ${toneClasses[tone]} ${className}`}
    >
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `url("${GRAIN_DATA_URI}")` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-text-primary/0 transition-colors duration-150 group-hover:bg-text-primary/[0.025]"
      />
      {children}
    </div>
  );
}
