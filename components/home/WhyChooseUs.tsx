import Image from "next/image";
import { Container } from "@/components/layout/Container";

type TrustPoint = {
  title: string;
  body: string;
  icon: (props: { className?: string }) => React.JSX.Element;
};

// Split into two columns so the emblem can sit between them on desktop while
// each column stays a real list. Every statement here traces to a confirmed
// fact in docs/02-business-profile.md — nothing asserts certifications,
// guarantees, ratings, years in business, or product claims.
const leftPoints: TrustPoint[] = [
  {
    title: "Based in Heber City",
    body: "We cover eight towns across the valley, including Midway, Park City, Kamas, and Charleston.",
    icon: MapPinIcon,
  },
  {
    title: "Attention to Detail",
    body: "Edges, corners, and the spots that usually get skipped receive the same attention as everything else.",
    icon: MagnifierIcon,
  },
  {
    title: "Cleaning Built Around Your Space",
    body: "Tell us what your property needs and we scope the work to match it.",
    icon: SlidersIcon,
  },
];

const rightPoints: TrustPoint[] = [
  {
    title: "Flexible Scheduling",
    body: "Book a single visit or set a weekly, biweekly, or monthly routine.",
    icon: CalendarIcon,
  },
  {
    title: "Homes, Rentals & Businesses",
    body: "Residential, Airbnb turnover, and commercial cleaning are all part of what we do.",
    icon: PropertiesIcon,
  },
  {
    title: "Free Estimates",
    body: "Send us the details and we'll confirm the scope and estimate before the visit is scheduled.",
    icon: EstimateIcon,
  },
];

export function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative overflow-hidden bg-surface py-section-y"
    >
      <SectionBackdrop />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* text-h2 rather than the h1 scale the shorter sibling headings use:
              this headline is long, and at h1 it ran to three oversized lines. */}
          <h2
            id="why-choose-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            Why Heber City Homes and Businesses Choose Shiny Spaces Cleaning
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg text-text-secondary">
            Shiny Spaces Cleaning handles residential and commercial cleaning throughout Heber City
            and the Heber Valley, Utah. That covers everything from routine house cleaning and deep
            cleans to Airbnb turnovers between guests.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-14">
          <TrustList points={leftPoints} />

          {/* Holds the open centre column the artwork reads through, and carries
              the guarantee line beneath it. Kept visible at every breakpoint —
              this text is what qualifies the artwork, so it must never drop out
              on mobile. Leads the stack on small screens, same as the emblem did. */}
          <div className="order-first mx-auto max-w-sm text-center lg:order-none lg:w-[360px] lg:max-w-none lg:self-end">
            {/* text-primary rather than the usual secondary: this line sits over
                the artwork, and the darker ink is what keeps it legible without
                altering the image or boxing the text. */}
            <p className="text-small text-text-primary">
              <span className="font-semibold">Our satisfaction promise:</span>{" "}
              If you are not satisfied with any part of your cleaning, contact us within 24 hours
              and we will return to re-clean the affected area at no additional charge.
            </p>
          </div>

          <TrustList points={rightPoints} />
        </div>
      </Container>
    </section>
  );
}

function TrustList({ points }: { points: TrustPoint[] }) {
  return (
    <ul className="flex flex-col gap-8 lg:gap-10">
      {points.map((point) => {
        const Icon = point.icon;

        return (
          <li key={point.title} className="flex gap-4">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface-alt text-primary"
            >
              <Icon className="h-5 w-5" />
            </span>

            <div>
              <h3 className="font-display text-h4 font-semibold text-text-primary">
                {point.title}
              </h3>
              <p className="mt-2 text-small text-text-secondary">{point.body}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/*
 * Watermark only. The artwork is used exactly as supplied — object-contain so
 * nothing is cropped — then knocked back with opacity, blur, and a white veil
 * so it reads as toned stationery behind the content rather than a graphic
 * competing with it. Opacity/blur are inline rather than utility classes so a
 * missing generated class can never leave this at full strength over the copy.
 */
function SectionBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Mobile: oversized and pushed down so only part of the emblem shows
          through behind the middle/lower content. Sized with an intrinsic
          width and auto height, so the source is never squashed — the overhang
          is clipped by this wrapper's overflow-hidden, not by resampling the
          image. Opacity and blur stay inline, per the note above. */}
      <Image
        src="/images/home/satisfaction-guarantee.png"
        alt=""
        width={1536}
        height={1024}
        sizes="190vw"
        className="absolute left-1/2 top-[60%] h-auto w-[165%] max-w-none -translate-x-1/2 object-contain lg:hidden"
        style={{ opacity: 0.15, filter: "blur(5px)" }}
      />

      {/* Desktop: unchanged. */}
      <Image
        src="/images/home/satisfaction-guarantee.png"
        alt=""
        fill
        sizes="100vw"
        className="hidden object-contain object-center lg:block"
        style={{
          opacity: 0.5,
          filter: "blur(1px)",
          // Strongest through the open centre column, fading to nothing under
          // the two text columns so the copy never sits on busy artwork.
          maskImage:
            "radial-gradient(ellipse 40% 62% at 50% 58%, #000 0%, #000 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 40% 62% at 50% 58%, #000 0%, #000 40%, transparent 80%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "color-mix(in srgb, var(--surface) 15%, transparent)" }}
      />
    </div>
  );
}

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

function MapPinIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <path d="M12 21.2c3.9-4.2 6.4-7.6 6.4-10.7a6.4 6.4 0 1 0-12.8 0c0 3.1 2.5 6.5 6.4 10.7z" />
      <circle cx="12" cy="10.2" r="2.4" />
    </IconFrame>
  );
}

function MagnifierIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <circle cx="10.8" cy="10.8" r="6.6" />
      <path d="m15.8 15.8 4.4 4.4" />
      <path d="m8.4 10.9 1.7 1.7 3.4-3.6" />
    </IconFrame>
  );
}

function SlidersIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <path d="M3.6 8.4h8.2M16.4 8.4h4" />
      <circle cx="14.1" cy="8.4" r="2.3" />
      <path d="M3.6 15.6h3.6M11.8 15.6h8.6" />
      <circle cx="9.5" cy="15.6" r="2.3" />
    </IconFrame>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <rect x="3.4" y="5.4" width="17.2" height="15.2" rx="2.4" />
      <path d="M3.4 10h17.2" />
      <path d="M8.2 3.4v4M15.8 3.4v4" />
      <path d="m9.4 15.2 1.7 1.7 3.5-3.6" />
    </IconFrame>
  );
}

function PropertiesIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <path d="M2.8 20.4V12l4.8-3.8L12.4 12v8.4" />
      <path d="M12.4 20.4V5.6h8.4v14.8" />
      <path d="M15.4 9.6h2.4M15.4 13.4h2.4" />
      <path d="M1.8 20.4h20.4" />
    </IconFrame>
  );
}

function EstimateIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <path d="M13.4 2.8H6.6a1.8 1.8 0 0 0-1.8 1.8v14.8a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8V8.2z" />
      <path d="M13.4 2.8v5.4h5.4" />
      <path d="M8.4 13h7.2M8.4 16.6h4.6" />
    </IconFrame>
  );
}
