import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF, SITE_URL } from "@/lib/constants";

const TITLE = "Frequently Asked Questions | ShinySpaces Cleaning – Heber City, UT";
const DESCRIPTION =
  "Answers to common questions about ShinySpaces cleaning services in Heber City and the Heber Valley — estimates, access, supplies, scheduling, and Airbnb turnovers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/faq`,
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
 * Verbatim from docs/02-business-profile.md §3.2 — the canonical source.
 *
 * DO NOT ADD a question here that is not in §3.2. In particular, the "Are you
 * insured?" question was explicitly WITHDRAWN by the owner: §9 still lists
 * insurance as unconfirmed and §11 prohibits the claim. Pricing figures,
 * response times, licensing, bonding, background checks, eco-friendly product
 * claims, years in business, and review counts are all equally off-limits.
 *
 * This same array feeds both the rendered accordion and the FAQPage schema, so
 * the structured data can never describe something a visitor cannot see —
 * which is Google's requirement for FAQPage to be valid.
 */
const faqs = [
  {
    question: "How much does house cleaning cost?",
    answer:
      "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "No. Many clients provide a door code or key so we can clean while they're away.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
  },
  {
    question: "How long does a cleaning take?",
    answer: "Most homes take between 2 and 5 hours depending on the size and condition.",
  },
  {
    question: "Can I schedule recurring cleanings?",
    answer: "Yes. We offer weekly, biweekly, and monthly recurring service.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "Just let us know as soon as possible and we'll work with you to find another appointment.",
  },
  {
    question: "Do you clean Airbnb properties?",
    answer:
      "Yes. We specialize in Airbnb turnover cleanings and can help keep your property guest-ready between stays.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section aria-labelledby="faq-heading" className="bg-surface pt-section-y pb-14">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span
              aria-hidden="true"
              className="mx-auto mb-6 block h-px w-16"
              style={{
                background:
                  "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent-gold) 65%, transparent), transparent)",
              }}
            />
            <h1
              id="faq-heading"
              className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
            >
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-secondary">
              Answers to the questions we get asked most about cleaning homes, rentals, and
              businesses across the Heber Valley.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-list-heading" className="bg-surface-alt py-section-y">
        <Container>
          <h2 id="faq-list-heading" className="sr-only">
            Common questions and answers
          </h2>

          {/*
           * Native <details>/<summary>: keyboard operable and correctly
           * announced with no JavaScript and no hand-managed ARIA state. The
           * only motion is a chevron rotation, already covered by the global
           * prefers-reduced-motion rule in globals.css.
           */}
          <div className="mx-auto max-w-3xl">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-t border-divider last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-h4 font-semibold text-text-primary marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 ease-standard group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pb-6 text-body-lg text-text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-cta-heading" className="bg-surface py-section-y">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="faq-cta-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Still have a question?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary">
              Tell us about your property and we&apos;ll confirm the scope and estimate before
              anything is scheduled. Or call and ask — we&apos;re happy to talk it through.
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

            <p className="mt-8 text-small text-text-secondary">
              Wondering what a particular service covers?{" "}
              <Link
                href="/services"
                className="rounded-input font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Browse all eight services
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
