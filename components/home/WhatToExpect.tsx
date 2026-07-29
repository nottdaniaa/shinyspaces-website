"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

type Step = {
  number: string;
  title: string;
  description: string;
  checklist: string[];
  icon: (props: { className?: string }) => React.JSX.Element;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Complete a short estimate form and share the property type, cleaning service, preferred date, and any special requests.",
    checklist: ["Residential, Airbnb, or Commercial", "Your preferred date & time", "Any special requests"],
    icon: ClipboardIcon,
  },
  {
    number: "02",
    title: "Receive Your Cleaning Plan",
    description:
      "ShinySpaces confirms the scope, scheduling, and estimated pricing before the appointment.",
    checklist: ["Scope confirmed", "Transparent pricing", "Preferred date scheduled", "We handle the details"],
    icon: CalendarIcon,
  },
  {
    number: "03",
    title: "Come Back to a Fresh Space",
    description:
      "The team completes the cleaning and prepares the home, rental, or commercial property for what comes next.",
    checklist: ["Professionally cleaned", "Final walkthrough", "Ready for what's next", "You enjoy your space"],
    icon: SparkleHomeIcon,
  },
];

export function WhatToExpect() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const displayIndex = hoveredIndex ?? activeIndex;

  const [mobileIndex, setMobileIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const slides = Array.from(container.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          const index = slides.indexOf(mostVisible.target as HTMLElement);
          if (index !== -1) setMobileIndex(index);
        }
      },
      { root: container, threshold: [0.5, 0.75, 0.9] },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    const slide = container?.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  // Standard section rhythm on top so this lines up with the rest of the page;
  // a tighter, fixed bottom because the CTA is the last thing on the page and
  // the full section rhythm below it read as dead space.
  return (
    <section
      aria-labelledby="what-to-expect-heading"
      className="relative overflow-hidden pt-section-y pb-12"
    >
      <SectionBackdrop />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="what-to-expect-heading"
            className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
          >
            From Request <span className="italic text-primary">to Refresh</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
            From your first request to the final walkthrough, we make every step simple,
            transparent, and stress-free.
          </p>
        </div>

        {/* Desktop / tablet */}
        <div className="mt-8 hidden md:block">
          <StepRail current={displayIndex} total={steps.length} />

          <ol className="mt-6 grid grid-cols-3 items-stretch gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              const isPreview = !isActive && hoveredIndex === index;

              return (
                <li
                  key={step.title}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                  className={`group relative flex rounded-card border bg-surface transition-[transform,box-shadow,border-color] duration-200 ease-standard ${
                    isActive
                      ? "-translate-y-2.5 border-primary shadow-hover"
                      : isPreview
                        ? "-translate-y-1.5 border-primary/40 shadow-md"
                        : "border-border shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    aria-label={`Step ${index + 1}: ${step.title}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    className="absolute inset-0 z-10 cursor-pointer rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  />

                  {/* The badge tracks whichever card is hovered, falling back to
                      the pinned/active one when the pointer leaves the group. */}
                  {displayIndex === index && <CornerRibbon />}

                  <StepBody step={step} isActive={isActive} isPreview={isPreview} />
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile: swipeable snap carousel */}
        <div className="mt-8 md:hidden">
          <StepRail current={mobileIndex} total={steps.length} />

          <div
            ref={scrollRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="What to expect steps"
            className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((step, index) => {
              const isActive = mobileIndex === index;

              return (
                <div
                  key={step.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Step ${index + 1} of ${steps.length}`}
                  className="w-full shrink-0 snap-center"
                >
                  <div
                    className={`relative flex rounded-card border bg-surface transition-[border-color,box-shadow] duration-200 ease-standard ${
                      isActive ? "border-primary shadow-hover" : "border-border shadow-sm"
                    }`}
                  >
                    {isActive && <CornerRibbon />}
                    <StepBody step={step} isActive={isActive} isPreview={false} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous step"
              disabled={mobileIndex === 0}
              onClick={() => scrollToIndex(mobileIndex - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-150 ease-standard hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronIcon className="h-5 w-5 rotate-180" />
            </button>

            <div role="group" aria-label="Go to step" className="flex items-center gap-1">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  aria-label={`Go to step ${index + 1}: ${step.title}`}
                  aria-current={mobileIndex === index ? "true" : undefined}
                  onClick={() => scrollToIndex(index)}
                  className="flex h-11 w-11 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <span
                    className={`block h-2 w-2 rounded-full transition-colors duration-200 ease-standard ${
                      mobileIndex === index ? "bg-primary" : "bg-border"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next step"
              disabled={mobileIndex === steps.length - 1}
              onClick={() => scrollToIndex(mobileIndex + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-150 ease-standard hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Closing CTA row */}
        <div className="mt-8 flex flex-col items-center justify-center gap-5 border-t border-divider pt-6 sm:flex-row sm:gap-6">
          <p className="font-display text-h4 italic text-primary">Ready to get started?</p>
          <Button href="/get-estimate" size="lg" className="shrink-0">
            Get a Free Estimate
          </Button>
        </div>
      </Container>
    </section>
  );
}

function StepBody({
  step,
  isActive,
  isPreview,
}: {
  step: Step;
  isActive: boolean;
  isPreview: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="flex flex-col p-6 lg:p-7">
      <div className="flex items-center gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-200 ease-standard ${
            isActive
              ? "scale-105 bg-primary/10 text-primary"
              : isPreview
                ? "bg-primary/[0.07] text-primary/80"
                : "bg-surface-alt text-text-secondary"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>

        <span
          className={`font-display text-h3 font-semibold transition-colors duration-200 ease-standard ${
            isActive ? "text-primary" : "text-primary/45"
          }`}
        >
          {step.number}
        </span>
      </div>

      <h3 className="mt-5 text-balance font-display text-h4 font-semibold text-text-primary">
        {step.title}
      </h3>
      <p className="mt-2.5 text-small text-text-secondary">{step.description}</p>

      <ul className="mt-5 flex flex-col gap-2 border-t border-divider pt-5">
        {step.checklist.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-small text-text-secondary">
            <CheckCircleIcon
              className={`mt-0.5 h-4 w-4 shrink-0 transition-colors duration-200 ease-standard ${
                isActive ? "text-primary" : "text-primary/35"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepRail({ current, total }: { current: number; total: number }) {
  return (
    <div aria-hidden="true" className="relative mx-auto max-w-3xl px-4">
      <div className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 overflow-hidden bg-border">
        <div
          className="h-full bg-primary transition-[width] duration-300 ease-standard"
          style={{ width: `${(current / (total - 1)) * 100}%` }}
        />
      </div>

      <div className="relative flex justify-between">
        {Array.from({ length: total }).map((_, index) => {
          const isComplete = index < current;
          const isCurrent = index === current;

          return (
            <span
              key={index}
              className={`flex h-7 w-7 items-center justify-center rounded-full border text-caption font-semibold transition-colors duration-200 ease-standard ${
                isComplete
                  ? "border-primary bg-primary text-white"
                  : isCurrent
                    ? "border-primary bg-surface text-primary"
                    : "border-border bg-surface text-text-secondary"
              }`}
            >
              {index + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// Decorative only — the watercolour valley artwork. `priority` is deliberately
// off: this sits well below the fold, so it should never compete with the hero
// for bandwidth.
function SectionBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src="/images/home/what-to-expect-backdrop.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Keeps body copy legible where the artwork's waves darken toward the edges. */}
      <div className="absolute inset-0 bg-surface/35" />
    </div>
  );
}

// The small bookmark tab marking the active card, mirroring the reference.
function CornerRibbon() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-px right-6 flex h-9 w-7 items-start justify-center bg-primary pt-1.5 text-white"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 72%, 0 100%)" }}
    >
      <SparkleIcon className="h-3 w-3" />
    </span>
  );
}

function SparkleIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 2.5 13.9 9 20.5 11 13.9 13 12 19.5 10.1 13 3.5 11 10.1 9z" />
    </svg>
  );
}

/*
 * Step glyphs are drawn in two passes — a soft tonal wash of the current colour
 * underneath, then crisp 1.5px linework on top — with a single gold sparkle
 * accent. That layering is what gives them the illustrated feel of the section
 * artwork while keeping the Lucide stroke conventions from design-system.md §9.
 */
const WASH_OPACITY = 0.15;

function IconFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Small four-point star, drawn in gold so each glyph carries one warm accent.
function GoldSpark({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const inner = r * 0.36;
  return (
    <path
      d={`M${cx} ${cy - r} L${cx + inner} ${cy - inner} L${cx + r} ${cy} L${cx + inner} ${cy + inner} L${cx} ${cy + r} L${cx - inner} ${cy + inner} L${cx - r} ${cy} L${cx - inner} ${cy - inner} Z`}
      fill="var(--accent-gold)"
      stroke="none"
    />
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <rect
        x="4.5"
        y="4.6"
        width="11.4"
        height="16"
        rx="2.4"
        fill="currentColor"
        opacity={WASH_OPACITY}
        stroke="none"
      />
      <rect x="4.5" y="4.6" width="11.4" height="16" rx="2.4" />
      <path d="M7.9 4.6V3.9a1.2 1.2 0 0 1 1.2-1.2h2.2a1.2 1.2 0 0 1 1.2 1.2v.7" />
      <path d="m7.4 10.6 1.2 1.2 2.4-2.4" />
      <path d="M7.4 15.4h5.6" />
      <GoldSpark cx={19.4} cy={5.4} r={2.9} />
    </IconFrame>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <rect
        x="3.4"
        y="5.4"
        width="13.2"
        height="14.6"
        rx="2.4"
        fill="currentColor"
        opacity={WASH_OPACITY}
        stroke="none"
      />
      <rect x="3.4" y="5.4" width="13.2" height="14.6" rx="2.4" />
      <path d="M3.4 9.8h13.2" />
      <path d="M7.1 3.6v3.4M12.9 3.6v3.4" />
      <path d="m7.3 14.6 1.6 1.6 3.4-3.4" />
      <GoldSpark cx={20} cy={5.2} r={2.8} />
    </IconFrame>
  );
}

function SparkleHomeIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <path
        d="M4.8 11.2h11.4v7.6a1.6 1.6 0 0 1-1.6 1.6H6.4a1.6 1.6 0 0 1-1.6-1.6z"
        fill="currentColor"
        opacity={WASH_OPACITY}
        stroke="none"
      />
      <path d="M2.9 12.1 10.5 4.9l7.6 7.2" />
      <path d="M4.8 10.6v8.2a1.6 1.6 0 0 0 1.6 1.6h8.2a1.6 1.6 0 0 0 1.6-1.6v-8.2" />
      <path d="M8.7 20.4v-4.2a1.4 1.4 0 0 1 1.4-1.4h.8a1.4 1.4 0 0 1 1.4 1.4v4.2" />
      <GoldSpark cx={19.7} cy={5.4} r={2.9} />
    </IconFrame>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
