import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { serviceAreas } from "@/data/serviceAreas";
import { serviceContent } from "@/data/serviceContent";
import { EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

/*
 * Every town rendered here comes from data/serviceAreas.ts, which mirrors the
 * eight confirmed in docs/02-business-profile.md §4. Never hardcode the list.
 *
 * DELIBERATELY ABSENT — do not add without documentation:
 *   mileage radius, travel fees, response times, per-town availability,
 *   neighbourhood names, landmarks, drive times, service frequency, customer
 *   volume, office/street address, or a map.
 *
 * COUNTY WARNING: do not describe coverage as "all of Wasatch County". Park
 * City and Kamas are in Summit County — docs/04-keyword-map.md flags
 * county-level phrasing as an unverified inference. Use "the Heber Valley and
 * nearby communities".
 */

export function ServiceAreaHero() {
  return (
    <section aria-labelledby="areas-heading" className="bg-surface pt-section-y pb-14">
      <Container>
        {/* Typography-led rather than photographic: the only untouched wide
            image is already the homepage Services panel, and repeating it in a
            hero would read as a duplicate. It appears lower down instead. */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            aria-hidden="true"
            className="mx-auto mb-6 block h-px w-16"
            style={{
              background:
                "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent-gold) 65%, transparent), transparent)",
            }}
          />
          <h1
            id="areas-heading"
            className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
          >
            Cleaning Services Across the{" "}
            <span className="italic text-primary">Heber Valley, Utah</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary">
            Shiny Spaces Cleaning is a mobile service-area business based in Heber City, Utah. We
            come to homes, rentals, and businesses in the eight Utah communities below. There is
            no public storefront.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

/*
 * Future-proofed on purpose. `image`, `description`, and `landingHref` are
 * accepted but intentionally unpopulated today — nothing town-specific is
 * documented. When Pilar supplies per-town photography, copy, or dedicated
 * landing pages, fill these in; the layout and API do not change.
 */
export type TownCard = {
  name: string;
  description?: string;
  image?: { src: string; alt: string; width: number; height: number };
  landingHref?: string;
};

function TownCard({ town }: { town: TownCard }) {
  const headingId = `town-${town.name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <li className="flex h-full flex-col rounded-card bg-surface p-6 shadow-sm ring-1 ring-border/50 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-md lg:p-7">
      {town.image ? (
        <div className="mb-5 overflow-hidden rounded-image">
          <Image
            src={town.image.src}
            alt={town.image.alt}
            width={town.image.width}
            height={town.image.height}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      ) : null}

      <div className="flex items-center gap-2.5">
        <PinIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <h3 id={headingId} className="font-display text-h4 font-semibold text-text-primary">
          {town.name}
        </h3>
      </div>

      <p className="mt-3 text-small text-text-secondary">
        {town.description ?? "All Shiny Spaces Cleaning services are available in this community."}
      </p>

      {/* Both links name the town in their accessible label, so a screen-reader
          user tabbing through eight cards always knows which one they're in. */}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link
          href={town.landingHref ?? "/services"}
          aria-label={`View cleaning services available in ${town.name}`}
          className="rounded-input text-small font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          View Services
        </Link>
        <a
          href={PHONE_TEL_HREF}
          aria-label={`Call or text Shiny Spaces Cleaning for a free cleaning estimate in ${town.name}`}
          className="rounded-input text-small font-semibold text-text-secondary underline-offset-4 transition-colors duration-150 ease-standard hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Call or Text for a Free Estimate
        </a>
      </div>
    </li>
  );
}

export function TownGrid() {
  return (
    <section aria-labelledby="towns-heading" className="bg-surface-alt py-section-y">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="towns-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            Do we serve your community?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary">
            If your town is listed here, every service we offer is available to you.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {serviceAreas.map((town) => (
            <TownCard key={town} town={{ name: town }} />
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-xl text-center text-small text-text-secondary">
          Somewhere just outside this list?{" "}
          <a
            href={PHONE_TEL_HREF}
            className="rounded-input font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Give us a call
          </a>{" "}
          and we&apos;ll let you know.
        </p>
      </Container>
    </section>
  );
}

export function ValleyBand() {
  return (
    <section aria-labelledby="valley-heading" className="bg-surface py-section-y">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-image shadow-sm ring-1 ring-border/50">
            <Image
              src="/images/home/serving-heber-valley.png"
              alt="Living room with large windows looking out across the mountains of the Heber Valley"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div>
            <h2
              id="valley-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Local to the valley
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-body-lg text-text-secondary">
              <p>
                Working across a single valley means we know the properties here — the mountain
                homes with a lot of glass, the short-term rentals that turn over on a Sunday, the
                offices on the main road.
              </p>
              <p>
                It also means we are not coming from hours away. We are based in Heber City, Utah,
                and the towns above are the Utah communities we cover.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const estimatePoints = [
  {
    title: "Every estimate is quoted",
    description:
      "Pricing depends on the property's size, condition, and the services you ask for. There is no fixed rate card.",
  },
  {
    title: "No square footage needed",
    description:
      "You don't need measurements to get an estimate. Tell us about the property and we'll take it from there.",
  },
  {
    title: "Scope confirmed before booking",
    description:
      "We confirm what's included, when we're coming, and the estimate before the visit is scheduled.",
  },
];

export function EstimateExplainer() {
  return (
    <section aria-labelledby="estimate-heading" className="bg-surface-alt py-section-y">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="estimate-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            How estimates work in your area
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
          {estimatePoints.map((point) => (
            <li key={point.title} className="rounded-card bg-surface p-7 shadow-sm lg:p-8">
              <h3 className="font-display text-h4 font-semibold text-text-primary">
                {point.title}
              </h3>
              <p className="mt-3 text-small text-text-secondary">{point.description}</p>
            </li>
          ))}
        </ul>

        {/* Phone is the only working conversion path. The online form is not
            connected and the business email is unverified, so neither is
            offered here as a route to a quote. */}
        <p className="mx-auto mt-10 max-w-xl text-center text-body text-text-secondary">
          The quickest way to get a quote today is to{" "}
          <a
            href={PHONE_TEL_HREF}
            className="rounded-input font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            call {PHONE_DISPLAY}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}

// A varied selection rather than the first three — these span home, rental, and
// commercial so the section reflects the breadth of the service area.
const featuredSlugs = [
  "residential-cleaning",
  "airbnb-turnover-cleaning",
  "commercial-cleaning",
  "recurring-cleaning",
];

export function RelatedServices() {
  const featured = featuredSlugs
    .map((slug) => serviceContent.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="bg-surface py-section-y">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="related-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            Services available across the valley
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {featured.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-card bg-surface-alt p-6 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:p-7"
              >
                <h3 className="font-display text-h4 font-semibold text-text-primary">
                  {service.serviceName}
                </h3>
                <p className="mt-2 text-small text-text-secondary">{service.heroDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-small font-semibold text-primary">
                  Learn more
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 ease-standard group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="rounded-input text-body font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            View all eight services
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function ServiceAreaCTA() {
  return (
    <section aria-labelledby="areas-cta-heading" className="bg-surface-alt py-section-y-sm">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="areas-cta-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            Let&apos;s get your space on the schedule
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary">
            Tell us about your property and we&apos;ll confirm the scope and estimate before
            anything is booked.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

function PinIcon({ className }: { className?: string }) {
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
      <path d="M12 21.2c3.9-4.2 6.4-7.6 6.4-10.7a6.4 6.4 0 1 0-12.8 0c0 3.1 2.5 6.5 6.4 10.7z" />
      <circle cx="12" cy="10.2" r="2.4" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
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
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
