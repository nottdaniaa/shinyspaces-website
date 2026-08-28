import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { serviceContent } from "@/data/serviceContent";
import { EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF, SITE_URL } from "@/lib/constants";

const TITLE = "Cleaning Services in Heber City, UT | ShinySpaces";
const DESCRIPTION =
  "Residential, commercial, Airbnb turnover, deep, move-in/move-out, post-construction, recurring, and custom cleaning across Heber City and the Heber Valley.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/services`,
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <section aria-labelledby="services-hub-heading" className="bg-surface pt-section-y-sm pb-12">
        <Container>
          <div className="max-w-2xl">
            <h1
              id="services-hub-heading"
              className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
            >
              Cleaning Services for Every Kind of Space
            </h1>
            <p className="mt-5 text-body-lg text-text-secondary">
              From weekly resets to guest-ready turnovers, ShinySpaces serves homes, rentals, and
              businesses throughout Heber City and the surrounding Heber Valley.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="all-services-heading" className="bg-surface-alt py-section-y">
        <Container>
          <h2 id="all-services-heading" className="sr-only">
            All services
          </h2>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {serviceContent.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-sm ring-1 ring-border/50 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      width={service.heroImage.width}
                      height={service.heroImage.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-auto w-full transition-transform duration-200 ease-standard group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <h3 className="font-display text-h4 font-semibold text-text-primary">
                      {service.serviceName}
                    </h3>
                    <p className="mt-2 text-small text-text-secondary">
                      {service.heroDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-small font-semibold text-primary">
                      Learn more
                      <ArrowIcon className="h-4 w-4 transition-transform duration-200 ease-standard group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="services-cta-heading" className="bg-surface py-section-y-sm">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="services-cta-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Not sure which service fits your space?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary">
              Tell us what you need and we&apos;ll confirm the scope and estimate before anything
              is scheduled.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={PHONE_TEL_HREF}
                size="lg"
                ariaLabel={`Call or text ShinySpaces at ${PHONE_DISPLAY} for a free estimate`}
              >
                Call or Text for a Free Estimate
              </Button>
              <Button
                href={EMAIL_HREF}
                variant="secondary"
                size="lg"
                ariaLabel={`Email ShinySpaces at ${EMAIL_ADDRESS}`}
              >
                Email Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
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
