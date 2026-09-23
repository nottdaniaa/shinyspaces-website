"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { reviews } from "@/data/reviews";

const AUTOPLAY_MS = 5500;

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  // Manual interaction stops autoplay for good — nothing should move under the
  // user's hands once they've taken control.
  const [interacted, setInteracted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  // Only updated on deliberate navigation, never on autoplay, so screen readers
  // aren't interrupted every few seconds.
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const scrollToIndex = useCallback(
    (target: number, smooth: boolean) => {
      const track = trackRef.current;
      const card = track?.children[target] as HTMLElement | undefined;
      if (!track || !card) return;

      const left =
        track.scrollLeft + card.getBoundingClientRect().left - track.getBoundingClientRect().left;
      track.scrollTo({ left, behavior: smooth && !reducedMotion ? "smooth" : "auto" });
    },
    [reducedMotion],
  );

  // Derive the active card from scroll position so native swipe, trackpad, drag,
  // and the arrows all stay in sync from a single source of truth.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const trackBox = track.getBoundingClientRect();
        const centre = trackBox.left + trackBox.width / 2;

        let closest = 0;
        let smallestGap = Number.POSITIVE_INFINITY;
        Array.from(track.children).forEach((child, i) => {
          const box = (child as HTMLElement).getBoundingClientRect();
          const gap = Math.abs(box.left + box.width / 2 - centre);
          if (gap < smallestGap) {
            smallestGap = gap;
            closest = i;
          }
        });
        setIndex(closest);
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || hovered || focused || interacted || reviews.length < 2) return;

    const timer = setInterval(() => {
      setIndex((previous) => {
        const next = (previous + 1) % reviews.length;
        scrollToIndex(next, true);
        return next;
      });
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [reducedMotion, hovered, focused, interacted, scrollToIndex]);

  const goTo = useCallback(
    (target: number) => {
      const clamped = Math.max(0, Math.min(reviews.length - 1, target));
      setInteracted(true);
      scrollToIndex(clamped, true);
      setAnnouncement(`Review ${clamped + 1} of ${reviews.length}`);
    },
    [scrollToIndex],
  );

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  // Mouse/trackpad drag. Touch is deliberately left to the browser's own
  // scrolling so vertical page scroll is never intercepted.
  const drag = useRef({ startX: 0, startScroll: 0, active: false });

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse" || !trackRef.current) return;
    setInteracted(true);
    drag.current = { startX: event.clientX, startScroll: trackRef.current.scrollLeft, active: true };
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!drag.current.active || !trackRef.current) return;
    trackRef.current.scrollLeft = drag.current.startScroll - (event.clientX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  // No verified reviews means no section at all, per docs/05-content-plan.md §7 —
  // never a placeholder testimonial.
  if (reviews.length === 0) return null;

  return (
    <section
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden bg-surface-alt py-section-y"
    >
      {/* Soft radial glow sitting behind the active card. Purely decorative and
          built from tokens, so it can't drift from the palette. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 42%, color-mix(in srgb, var(--surface) 90%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent-gold) 35%, transparent), transparent)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span
            aria-hidden="true"
            className="mx-auto mb-6 block h-px w-16"
            style={{
              background:
                "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent-gold) 60%, transparent), transparent)",
            }}
          />
          <h2
            id="reviews-heading"
            className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
          >
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
            Real feedback from the homeowners, rental hosts, and businesses we serve.
          </p>
        </div>

        {/* overflow-x-hidden is load-bearing: without it the scroll track's
            content widened the document itself and the whole page scrolled
            sideways. Vertical padding keeps the cards' shadow and hover lift
            from being clipped by that same rule. */}
        <div
          className="relative mt-12 overflow-x-hidden py-2 lg:mt-14"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={() => setFocused(false)}
        >
          <ul
            ref={trackRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
            aria-roledescription="carousel"
            aria-label="Customer recommendations"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 lg:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, i) => (
              <li
                key={review.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Review ${i + 1} of ${reviews.length}`}
                className="w-[86%] shrink-0 snap-center sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
              >
                <figure
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-surface p-7 transition-[box-shadow,transform,opacity] duration-300 ease-standard lg:p-8 ${
                    index === i
                      ? "opacity-100 shadow-lg ring-1 ring-accent-gold/25 lg:scale-[1.04]"
                      : "opacity-90 shadow-sm ring-1 ring-border/70 lg:scale-100"
                  } hover:shadow-md`}
                >
                  {/* Gold hairline across the top of the active card only. */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-px transition-opacity duration-300 ease-standard ${
                      index === i ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to right, transparent, var(--accent-gold), transparent)",
                    }}
                  />

                  <QuoteMark
                    className={`h-6 w-6 shrink-0 transition-opacity duration-300 ease-standard ${
                      index === i ? "opacity-100" : "opacity-50"
                    }`}
                  />

                  <blockquote className="mt-5 line-clamp-6 text-body-lg leading-relaxed text-text-primary">
                    {review.quote}
                  </blockquote>

                  <figcaption className="mt-auto pt-6">
                    <div className="pt-5" style={{ borderTop: "1px solid var(--divider)" }}>
                      <span className="block font-display text-h4 font-semibold text-text-primary">
                        {review.name}
                      </span>
                      <span className="mt-1 block text-caption text-text-secondary">
                        recommends Shiny Spaces Cleaning
                      </span>
                      <a
                        href={review.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 rounded-input text-small font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        View on Facebook
                        <span className="sr-only">
                          {` — ${review.name}'s full recommendation, opens in a new tab`}
                        </span>
                        <ExternalLinkIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center justify-center gap-5 lg:gap-6">
            <button
              type="button"
              aria-label="Previous review"
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary shadow-md ring-1 ring-border/60 transition-[box-shadow,transform,color] duration-200 ease-standard hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-35 disabled:shadow-sm"
            >
              <ChevronIcon className="h-5 w-5 rotate-180" />
            </button>

            <div className="flex max-w-[60vw] flex-wrap items-center justify-center gap-1">
              {reviews.map((review, i) => (
                <button
                  key={review.id}
                  type="button"
                  aria-label={`Go to review ${i + 1}: ${review.name}`}
                  aria-current={index === i ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className="flex h-8 w-5 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ease-standard ${
                      index === i ? "w-5 bg-primary" : "w-1.5 bg-text-secondary/25"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next review"
              disabled={index === reviews.length - 1}
              onClick={() => goTo(index + 1)}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary shadow-md ring-1 ring-border/60 transition-[box-shadow,transform,color] duration-200 ease-standard hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-35 disabled:shadow-sm"
            >
              <ChevronIcon className="h-5 w-5" />
            </button>
          </div>

          <p aria-live="polite" className="sr-only">
            {announcement}
          </p>
        </div>
      </Container>
    </section>
  );
}

// Small, restrained — an accent on the card, never a decorative slab behind it.
function QuoteMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="var(--accent-gold)"
      className={className}
      aria-hidden="true"
    >
      <path d="M9.6 5.4c-3.1 1.3-5.1 4-5.1 7.6v5.6h6.6v-6.6H7.9c0-2 .9-3.4 2.7-4.3zm10.2 0c-3.1 1.3-5.1 4-5.1 7.6v5.6h6.6v-6.6h-3.2c0-2 .9-3.4 2.7-4.3z" />
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

function ExternalLinkIcon({ className }: { className?: string }) {
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
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
