import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { serviceAreas } from "@/data/serviceAreas";
import {
  BUSINESS_NAME,
  EMAIL_ADDRESS,
  EMAIL_HREF,
  JOBBER_REQUEST_URL,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_SMS_HREF,
  PHONE_TEL_HREF,
  SITE_URL,
} from "@/lib/constants";
import { formatTownList, SAB_SUMMARY } from "@/lib/localBusiness";

const TITLE = "Contact Shiny Spaces Cleaning | Cleaning Services in Heber City, UT";
const DESCRIPTION = `Contact ${BUSINESS_NAME}, a mobile service-area business in Heber City, Utah. Call ${PHONE_DISPLAY} or email ${EMAIL_ADDRESS}. No public storefront.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
};

/*
 * Deliberately a contact-options page, not a form page.
 *
 * There is still no configured submission destination and no CRM has been
 * named or configured (docs/02-business-profile.md §2). Rendering a second
 * form here would imply a working submission that does not exist. Phone,
 * text, and email are live contact links that work today.
 *
 * DELIBERATELY ABSENT: Google rating, review count, star rating, "5-star"
 * language, review badge — all unconfirmed (§9) and prohibited (§11). Also no
 * street address, and no county-level coverage wording: Park City and Kamas
 * are in Summit County, so "Wasatch County" would be inaccurate.
 */
const contactOptions = [
  {
    title: "Call us",
    description: "The quickest way to reach us. Talk through what you need and get an estimate.",
    actionLabel: PHONE_DISPLAY,
    href: PHONE_TEL_HREF,
    ariaLabel: `Call Shiny Spaces Cleaning at ${PHONE_DISPLAY}`,
    icon: PhoneIcon,
    external: false,
  },
  {
    title: "Email us",
    description: "Prefer to write it out? Send the details and we'll come back to you.",
    actionLabel: EMAIL_ADDRESS,
    href: EMAIL_HREF,
    ariaLabel: `Email Shiny Spaces Cleaning at ${EMAIL_ADDRESS}`,
    icon: MailIcon,
    external: false,
  },
  {
    title: "Text us",
    description: "Send the property details and the cleaning you're after from your phone.",
    actionLabel: "Send a text",
    href: PHONE_SMS_HREF,
    ariaLabel: `Text Shiny Spaces Cleaning at ${PHONE_DISPLAY}`,
    icon: ClipboardIcon,
    external: false,
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section aria-labelledby="contact-heading" className="bg-surface pt-section-y pb-14">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-manrope text-caption font-semibold uppercase tracking-[0.2em] text-accent-gold-hover">
              Contact us
            </p>
            <h1
              id="contact-heading"
              className="mt-5 text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
            >
              Get in Touch With Shiny Spaces Cleaning
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary">
              {SAB_SUMMARY} Call or email to talk through what your space needs, and we&apos;ll
              put together an estimate. Nothing is scheduled until you say so.
            </p>
          </div>

          <dl className="mx-auto mt-12 grid max-w-3xl gap-x-10 gap-y-8 text-left sm:grid-cols-2">
            <div>
              <dt className="font-manrope text-caption font-semibold uppercase tracking-[0.14em] text-accent-gold-hover">
                Business name
              </dt>
              <dd className="mt-2 text-body font-semibold text-text-primary">{BUSINESS_NAME}</dd>
            </div>
            <div>
              <dt className="font-manrope text-caption font-semibold uppercase tracking-[0.14em] text-accent-gold-hover">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={PHONE_TEL_HREF}
                  className="rounded-input text-body font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-manrope text-caption font-semibold uppercase tracking-[0.14em] text-accent-gold-hover">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={EMAIL_HREF}
                  className="rounded-input text-body font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {EMAIL_ADDRESS}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-manrope text-caption font-semibold uppercase tracking-[0.14em] text-accent-gold-hover">
                Service area
              </dt>
              <dd className="mt-2 text-body text-text-primary">
                Heber Valley, Utah — {formatTownList()}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section aria-labelledby="options-heading" className="bg-surface-alt py-section-y">
        <Container>
          <h2 id="options-heading" className="sr-only">
            Ways to reach us
          </h2>

          <ul className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <li
                  key={option.title}
                  className="flex h-full flex-col rounded-card bg-surface p-7 shadow-sm ring-1 ring-border/50 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-md lg:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-alt text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-6 font-display text-h4 font-semibold text-text-primary">
                    {option.title}
                  </h3>
                  <p className="mt-3 text-small text-text-secondary">{option.description}</p>

                  {/* Each link states its destination in text, never an icon
                      alone, and carries an explicit accessible name. */}
                  <div className="mt-auto pt-6">
                    <a
                      href={option.href}
                      aria-label={option.ariaLabel}
                      className="inline-flex items-center gap-1.5 rounded-input text-body font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      {...(option.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {option.actionLabel}
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="hours-heading" className="bg-surface py-section-y">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2
                id="hours-heading"
                className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
              >
                When we&apos;re available
              </h2>
              <p className="mt-4 max-w-sm text-body text-text-secondary">
                Reach us any day except Sunday. If we miss your call, leave a message and
                we&apos;ll get back to you.
              </p>
            </div>

            {/* Description list so each day is programmatically tied to its
                hours rather than relying on visual alignment. */}
            <dl className="divide-y divide-divider rounded-card bg-surface-alt px-6 sm:px-8">
              {OPENING_HOURS.map((entry) => (
                <div
                  key={entry.day}
                  className="flex items-baseline justify-between gap-6 py-4 text-body"
                >
                  <dt className="font-semibold text-text-primary">{entry.day}</dt>
                  <dd
                    className={
                      entry.hours === "Closed" ? "text-text-secondary/70" : "text-text-secondary"
                    }
                  >
                    {entry.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section aria-labelledby="areas-heading" className="bg-surface-alt py-section-y">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="areas-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Utah communities we come to
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary">
              {SAB_SUMMARY} These are the only towns we list.
            </p>
          </div>

          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {serviceAreas.map((town) => (
              <li
                key={town}
                className="rounded-full bg-surface px-5 py-2.5 text-small font-semibold text-text-primary shadow-sm ring-1 ring-border/50"
              >
                {town}, UT
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-small text-text-secondary">
            <Link
              href="/service-areas"
              className="rounded-input font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              More about the areas we serve
            </Link>
          </p>
        </Container>
      </section>

      <section aria-labelledby="contact-cta-heading" className="bg-surface py-section-y">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-cta-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Ready for a cleaner space?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary">
              Tell us about your property and we&apos;ll confirm the scope and estimate before
              anything is scheduled.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={JOBBER_REQUEST_URL}
                external
                size="lg"
                ariaLabel="Request a free cleaning estimate online (opens in a new tab)"
              >
                Request a Free Estimate Online
              </Button>
              <Button
                href={PHONE_TEL_HREF}
                variant="secondary"
                size="lg"
                ariaLabel={`Call or text Shiny Spaces Cleaning at ${PHONE_DISPLAY} for a free estimate`}
              >
                Call or Text
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
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <path d="M6.6 3.5h3l1.5 3.8-1.9 1.1a11 11 0 0 0 4.4 4.4l1.1-1.9 3.8 1.5v3a1.6 1.6 0 0 1-1.7 1.6A14.6 14.6 0 0 1 5 5.2 1.6 1.6 0 0 1 6.6 3.5z" />
    </IconFrame>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.2" />
      <path d="m3.4 6.6 8.6 6 8.6-6" />
    </IconFrame>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <rect x="5" y="4.4" width="14" height="16.2" rx="2.4" />
      <path d="M9.4 4.4V3.6A1.4 1.4 0 0 1 10.8 2.2h2.4a1.4 1.4 0 0 1 1.4 1.4v.8" />
      <path d="m8.8 11.4 1.4 1.4 3-3" />
      <path d="M8.8 16.4h6.4" />
    </IconFrame>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <IconFrame className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
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
