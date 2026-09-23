import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { serviceAreas } from "@/data/serviceAreas";
import { EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

/*
 * Every statement on this page traces to docs/02-business-profile.md.
 *
 * DELIBERATELY ABSENT — do not add without updating that document first:
 *   customer counts, years in business, ownership structure, team size,
 *   licensing, insurance, eco-friendly product claims, punctuality or
 *   response-time promises, review counts, star ratings, and any founding
 *   story. All are TBD in §1/§9/§10 or prohibited by §11.
 *
 * The satisfaction promise is quoted in full, never shortened to an
 * unqualified "100% guaranteed" — §11 prohibits that form specifically.
 */

export function AboutHero() {
  return (
    <section aria-labelledby="about-heading" className="relative overflow-hidden bg-surface">
      {/* Hero image is currently shared with the homepage. The crop, focal
          point, aspect ratio, and layout all differ so the two pages don't
          open identically. Replace with a dedicated wide interior as soon as
          one exists — swapping the src is the only change needed. */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/hero/heber-city-living-room.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, color-mix(in srgb, var(--surface) 96%, transparent) 0%, color-mix(in srgb, var(--surface) 88%, transparent) 42%, color-mix(in srgb, var(--surface) 30%, transparent) 78%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="max-w-xl py-section-y">
          <span
            aria-hidden="true"
            className="mb-6 block h-px w-16"
            style={{
              background:
                "linear-gradient(to right, color-mix(in srgb, var(--accent-gold) 70%, transparent), transparent)",
            }}
          />
          <h1
            id="about-heading"
            className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
          >
            More than cleaning.{" "}
            <span className="italic text-primary">Care for every space.</span>
          </h1>
          <p className="mt-6 max-w-lg text-body-lg text-text-secondary">
            Shiny Spaces Cleaning is a mobile service-area business. We come to homes, rentals, and
            businesses throughout Heber City and the Heber Valley, Utah. Every property is
            different, so every estimate is built around yours.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={PHONE_TEL_HREF}
              size="lg"
              ariaLabel={`Call or text Shiny Spaces Cleaning at ${PHONE_DISPLAY} for a free estimate`}
            >
              Call or Text for a Free Estimate
            </Button>
            <Button
              href={EMAIL_HREF}
              variant="secondary"
              size="lg"
              ariaLabel={`Email Shiny Spaces Cleaning at ${EMAIL_ADDRESS}`}
            >
              Email Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HowWeClean() {
  return (
    <section aria-labelledby="how-we-clean-heading" className="bg-surface-alt py-section-y">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-image shadow-sm ring-1 ring-border/50">
            <Image
              src="/images/gallery/bathroom-tub-shower.png"
              alt="Clean white bathtub, shower, and toilet in a bathroom finished by Shiny Spaces Cleaning"
              width={1124}
              height={1399}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div>
            <h2
              id="how-we-clean-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              How we clean
            </h2>

            <div className="mt-6 flex flex-col gap-5 text-body-lg text-text-secondary">
              <p>
                No two properties need the same thing. A weekly tidy in a family home and a
                same-day turnover between guests are different jobs, and treating them the same
                is how corners get missed.
              </p>
              <p>
                So we start by looking at the property rather than a template. The scope, the
                schedule, and the estimate are confirmed with you before anything is booked.
              </p>
              <p>
                We arrive with professional cleaning products and equipment. If you would rather
                we use your own, that is fine too — just say so when we scope the work.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const features = [
  {
    title: "Customized cleaning",
    description:
      "Every estimate is tailored to your property's size, condition, and the services you ask for.",
    icon: SlidersIcon,
  },
  {
    title: "Professional equipment",
    description:
      "We arrive with professional cleaning products and equipment, unless you request we use your own.",
    icon: KitIcon,
  },
  {
    title: "Serving the Heber Valley",
    description:
      "Residential, commercial, Airbnb, and specialty cleaning across eight nearby towns.",
    icon: MapPinIcon,
  },
];

export function WhyChoose() {
  return (
    <section aria-labelledby="why-choose-heading" className="bg-surface py-section-y">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="why-choose-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            Cleaning designed around your property
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.title}
                className="rounded-card bg-surface-alt p-7 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-md lg:p-8"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-h4 font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 text-small text-text-secondary">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function SatisfactionPromise() {
  return (
    <section aria-labelledby="promise-heading" className="bg-surface-alt py-section-y-sm">
      <Container>
        <div className="mx-auto max-w-3xl rounded-card bg-surface p-8 text-center shadow-sm ring-1 ring-accent-gold/25 sm:p-12">
          <span
            aria-hidden="true"
            className="mx-auto mb-6 block h-px w-16"
            style={{
              background:
                "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent-gold) 65%, transparent), transparent)",
            }}
          />
          <h2
            id="promise-heading"
            className="font-display text-h3 font-semibold tracking-tight text-text-primary"
          >
            Our satisfaction promise
          </h2>
          {/* Quoted in full. Never shorten this to "100% guaranteed" — §11. */}
          <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
            If you are not satisfied with any part of your cleaning, contact us within 24 hours
            and we will return to re-clean the affected area at no additional charge.
          </p>
        </div>
      </Container>
    </section>
  );
}

const processSteps = [
  {
    title: "Tell us about your property",
    description:
      "Share the property type, the cleaning you need, a preferred date, and any special requests.",
  },
  {
    title: "Receive your cleaning plan",
    description: "We confirm the scope, the scheduling, and the estimate before the visit is booked.",
  },
  {
    title: "We clean thoroughly",
    description:
      "The team works through the property with the checklist agreed for your service.",
  },
  {
    title: "Enjoy your space",
    description:
      "The property is left ready for whatever comes next — guests, buyers, or just your evening.",
  },
];

export function CleaningProcess() {
  return (
    <section aria-labelledby="process-heading" className="bg-surface py-section-y">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="process-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            A simple process. <span className="italic text-primary">Exceptional results.</span>
          </h2>
        </div>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-4 lg:mt-16 lg:gap-6">
          {/* Connector sits behind the numbered markers on desktop only. It is
              a static rule rather than an animated line — nothing here depends
              on motion, so reduced-motion needs no special handling. */}
          <li
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12%] top-5 hidden h-px bg-border md:block"
          />

          {processSteps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-small font-semibold text-white ring-4 ring-surface">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-h4 font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-small text-text-secondary">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function AreasWeServe() {
  return (
    <section aria-labelledby="areas-heading" className="bg-surface-alt py-section-y-sm">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div>
            <h2
              id="areas-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Areas we serve
            </h2>
            <p className="mt-4 max-w-sm text-body text-text-secondary">
              Mobile cleaning across Heber City and the Heber Valley, Utah. We come to these towns. There is no public street address.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:gap-y-4">
            {serviceAreas.map((area) => (
              <li key={area} className="flex items-center gap-2.5 text-body text-text-secondary">
                <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function LifestyleCTA() {
  return (
    <section aria-labelledby="about-cta-heading" className="bg-surface py-section-y">
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-card bg-surface-alt lg:grid-cols-[1fr_1fr] lg:gap-0">
          <div className="order-2 p-8 sm:p-12 lg:order-1 lg:p-14">
            <h2
              id="about-cta-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Ready for a space that shines?
            </h2>
            <p className="mt-4 max-w-md text-body text-text-secondary">
              Tell us about your property and we&apos;ll confirm the scope and estimate before
              anything is scheduled.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={PHONE_TEL_HREF}
                size="lg"
                ariaLabel={`Call or text Shiny Spaces Cleaning at ${PHONE_DISPLAY} for a free estimate`}
              >
                Call or Text for a Free Estimate
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Browse Services
              </Button>
            </div>
          </div>

          <div className="order-1 h-full lg:order-2">
            <Image
              src="/images/gallery/bedroom-made-bed.png"
              alt="Bed made with fresh linens and a neatly finished headboard after a visit from Shiny Spaces Cleaning"
              width={1086}
              height={1448}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
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

function KitIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <rect x="3.2" y="8.4" width="17.6" height="12" rx="2.2" />
      <path d="M8.6 8.4V5.6a1.8 1.8 0 0 1 1.8-1.8h3.2a1.8 1.8 0 0 1 1.8 1.8v2.8" />
      <path d="M3.2 13.6h17.6" />
    </IconFrame>
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

function IconFrame({ className, children }: { className?: string; children: React.ReactNode }) {
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
