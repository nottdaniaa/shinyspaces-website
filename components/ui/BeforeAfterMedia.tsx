"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import type { ServiceAspect } from "@/data/services";

export type BeforeAfterImage = {
  src: string;
  alt: string;
};

type BeforeAfterMediaProps = {
  before: BeforeAfterImage;
  after: BeforeAfterImage;
  aspectRatio: ServiceAspect;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

// Shares the same three slots as EditorialSurface so a card's footprint
// never changes when a placeholder is swapped for real photography.
const aspectClasses: Record<ServiceAspect, string> = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[4/5]",
  wide: "aspect-[16/9]",
};

const KEYBOARD_STEP = 5;

export function BeforeAfterMedia({
  before,
  after,
  aspectRatio,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterMediaProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = () => setIsDragging(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((p) => Math.max(0, p - KEYBOARD_STEP));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((p) => Math.min(100, p + KEYBOARD_STEP));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  // `left` must stay untransitioned while actively dragging (zero-lag tracking),
  // but eases in on release/keyboard steps. transform+box-shadow (the handle's
  // grab-scale) stay eased at all times — that's what makes release feel like a
  // soft settle rather than a dead stop. Both live in one class per state so a
  // second transition-property utility can't silently clobber the first.
  const dividerTransition = isDragging ? "" : "transition-[left] duration-150 ease-standard";
  const handleTransition = isDragging
    ? "transition-[transform,box-shadow] duration-150 ease-standard"
    : "transition-[left,transform,box-shadow] duration-150 ease-standard";

  // touch-pan-y, never touch-none: the browser keeps vertical scrolling so the
  // page isn't trapped when a finger lands on the image, while horizontal
  // gestures still come through for dragging. A vertical scroll fires
  // pointercancel, which stopDragging already handles.
  return (
    <div
      ref={containerRef}
      className={`group relative touch-pan-y select-none overflow-hidden rounded-image ring-1 ring-inset ring-border/50 ${aspectClasses[aspectRatio]} ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/30 px-2 py-1 text-caption font-medium uppercase tracking-wide text-white backdrop-blur-[2px]">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/30 px-2 py-1 text-caption font-medium uppercase tracking-wide text-white backdrop-blur-[2px]">
        {afterLabel}
      </span>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 drop-shadow-sm ${dividerTransition}`}
        style={{ left: `${position}%` }}
      />

      <div
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={handleKeyDown}
        className={`absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-primary shadow-md ring-1 ring-text-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isDragging ? "scale-110 shadow-lg" : "scale-100"} ${handleTransition}`}
        style={{ left: `${position}%` }}
      >
        <HandleIcon className="h-4 w-4" />
      </div>
    </div>
  );
}

function HandleIcon({ className }: { className?: string }) {
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
      <path d="M8 7 4 12l4 5M16 7l4 5-4 5" />
    </svg>
  );
}
