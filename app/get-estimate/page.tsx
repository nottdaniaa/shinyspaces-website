import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { JobberEstimateEmbed } from "@/components/forms/JobberEstimateEmbed";
import { PHONE_DISPLAY, PHONE_TEL_HREF, SITE_URL } from "@/lib/constants";

const TITLE = "Get a Free Estimate | Shiny Spaces Cleaning – Heber City, UT";
const DESCRIPTION =
  "Request a free cleaning estimate from Shiny Spaces Cleaning, a mobile service-area business in Heber City and the Heber Valley, Utah.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/get-estimate" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/get-estimate`,
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
 * Trust bullets are limited to statements confirmed in
 * docs/02-business-profile.md. "No obligation" is safe per
 * docs/05-content-plan.md; the re-clean policy is confirmed in §9. Nothing here
 * asserts a response time, licensing, insurance, pricing, or a rating.
 */
const assurances = [
  "Free and no obligation",
  "We confirm the scope and estimate before the visit is scheduled",
  "Mobile service-area business in Heber City and the Heber Valley, Utah",
];

export default function GetEstimatePage() {
  return (
    <section aria-labelledby="estimate-heading" className="bg-surface-alt py-section-y">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <h1
              id="estimate-heading"
              className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
            >
              Get a Free Estimate
            </h1>
            <p className="mt-5 max-w-md text-body-lg text-text-secondary">
              Tell us about your space and we&apos;ll put together an estimate. No obligation, and
              nothing is scheduled until you say so.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {assurances.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* The phone is the only confirmed, working conversion channel, so
                it leads rather than sitting below the form. */}
            <div className="mt-10 rounded-card bg-surface p-6 shadow-sm ring-1 ring-border/60">
              <p className="font-display text-h4 font-semibold text-text-primary">
                Prefer to talk it through?
              </p>
              <p className="mt-2 text-small text-text-secondary">
                Call and we can take your details over the phone.
              </p>
              <Button
                href={PHONE_TEL_HREF}
                size="lg"
                className="mt-5 w-full sm:w-auto"
                ariaLabel={`Call Shiny Spaces Cleaning at ${PHONE_DISPLAY}`}
              >
                Call {PHONE_DISPLAY}
              </Button>
            </div>
          </div>

          <div className="rounded-card bg-surface p-6 shadow-sm ring-1 ring-border/60 sm:p-8">
            <p className="font-display text-h4 font-semibold text-text-primary">
              Request your free estimate online
            </p>
            <p className="mt-2 text-body text-text-secondary">
              Tell us about your property and the cleaning you need. We&apos;ll follow up to
              confirm the scope and estimate before anything is scheduled.
            </p>
            <div className="mt-6">
              <JobberEstimateEmbed />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}
