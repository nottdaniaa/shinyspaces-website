import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { BeforeAfterMedia } from "@/components/ui/BeforeAfterMedia";
import { EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";
import type {
  Benefit,
  Exclusions,
  Faq,
  ProcessStep,
  ServiceContent,
  ServiceImage,
  TaskGroup,
} from "@/data/serviceContent";

/*
 * Section components for /services/[slug]. Every one of these returns null when
 * its data is absent, which is what lets a thin service page render honestly
 * rather than showing an empty heading or a "coming soon" placeholder.
 */

/*
 * There is deliberately no visible breadcrumb here. The BreadcrumbList JSON-LD
 * in app/services/[slug]/page.tsx is retained for search engines — removing the
 * visual bar does not affect it, since structured data is independent of
 * rendered markup. Navigation back up the hierarchy remains available through
 * the header's Services menu and the Related Services section.
 */
export function ServiceHero({ service }: { service: ServiceContent }) {
  return (
    <section aria-labelledby="service-heading" className="bg-surface pt-section-y-sm pb-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <h1
              id="service-heading"
              className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
            >
              {service.h1}
            </h1>
            <p className="mt-5 max-w-xl text-body-lg text-text-secondary">
              {service.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <div className="overflow-hidden rounded-image shadow-sm ring-1 ring-border/50">
            <Image
              src={service.heroImage.src}
              alt={service.heroImage.alt}
              width={service.heroImage.width}
              height={service.heroImage.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ServiceIntroduction({ paragraphs }: { paragraphs: string[] }) {
  if (paragraphs.length === 0) return null;

  return (
    <section aria-labelledby="intro-heading" className="bg-surface-alt py-section-y-sm">
      <Container>
        <h2 id="intro-heading" className="sr-only">
          About this service
        </h2>
        <div className="mx-auto flex max-w-2xl flex-col gap-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-body-lg text-text-secondary">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceIncludes({
  groups,
  exclusions,
}: {
  groups?: TaskGroup[];
  exclusions?: Exclusions;
}) {
  if (!groups?.length && !exclusions) return null;

  return (
    <section aria-labelledby="includes-heading" className="bg-surface py-section-y">
      <Container>
        <h2
          id="includes-heading"
          className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
        >
          What&apos;s included
        </h2>

        {groups?.length ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-manrope text-small font-semibold uppercase tracking-[0.14em] text-accent-gold-hover">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {group.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2.5 text-small text-text-secondary">
                      <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        {exclusions ? (
          <div className="mt-12 rounded-card bg-surface-alt p-6 sm:p-8">
            <h3 className="font-manrope text-small font-semibold uppercase tracking-[0.14em] text-text-secondary">
              {exclusions.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {exclusions.items.map((item) => (
                <li key={item} className="text-small text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export function ServiceAudiences({ audiences }: { audiences?: string[] }) {
  if (!audiences?.length) return null;

  return (
    <section aria-labelledby="audiences-heading" className="bg-surface-alt py-section-y-sm">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <h2
            id="audiences-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            Who it&apos;s for
          </h2>
          <ul className="flex flex-col gap-4">
            {audiences.map((audience) => (
              <li key={audience} className="flex items-start gap-3 text-body text-text-secondary">
                <CheckIcon className="mt-1.5 h-4 w-4 shrink-0 text-primary" />
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ServiceBenefits({ benefits }: { benefits?: Benefit[] }) {
  if (!benefits?.length) return null;

  return (
    <section aria-labelledby="benefits-heading" className="bg-surface py-section-y-sm">
      <Container>
        <h2
          id="benefits-heading"
          className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
        >
          Why it helps
        </h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <h3 className="font-display text-h4 font-semibold text-text-primary">
                {benefit.title}
              </h3>
              <p className="mt-2 text-small text-text-secondary">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ServiceProcess({ steps }: { steps?: ProcessStep[] }) {
  if (!steps?.length) return null;

  return (
    <section aria-labelledby="process-heading" className="bg-surface-alt py-section-y">
      <Container>
        <h2
          id="process-heading"
          className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
        >
          How it works
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3 lg:gap-10">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-card bg-surface p-6 shadow-sm lg:p-7">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-small font-semibold text-white">
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

export function ServiceBeforeAfter({
  media,
  serviceName,
}: {
  media?: { before: ServiceImage; after: ServiceImage };
  serviceName: string;
}) {
  if (!media) return null;

  return (
    <section aria-labelledby="beforeafter-heading" className="bg-surface py-section-y">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <h2
              id="beforeafter-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              See the difference
            </h2>
            <p className="mt-4 max-w-md text-body text-text-secondary">
              Drag the handle to compare the same space before and after a ShinySpaces{" "}
              {serviceName.toLowerCase()}.
            </p>
          </div>

          <BeforeAfterMedia
            before={{ src: media.before.src, alt: media.before.alt }}
            after={{ src: media.after.src, alt: media.after.alt }}
            aspectRatio="wide"
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
}

export function ServiceGallery({ images }: { images?: ServiceImage[] }) {
  if (!images?.length) return null;

  return (
    <section aria-labelledby="gallery-heading" className="bg-surface-alt py-section-y-sm">
      <Container>
        <h2
          id="gallery-heading"
          className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
        >
          Recent work
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-7">
          {images.map((image) => (
            <li key={image.src}>
              <div className="overflow-hidden rounded-image shadow-sm ring-1 ring-border/50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ServiceFAQ({ faqs }: { faqs?: Faq[] }) {
  if (!faqs?.length) return null;

  return (
    <section aria-labelledby="faq-heading" className="bg-surface py-section-y">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            Common questions
          </h2>

          {/* Native <details> keeps this a server component: keyboard operable
              and screen-reader friendly with no JavaScript and nothing to
              animate, so reduced-motion needs no special handling. */}
          <div className="mt-10 flex flex-col">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-t border-divider last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-body font-semibold text-text-primary marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 ease-standard group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-body text-text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function RelatedServices({ services }: { services: ServiceContent[] }) {
  if (services.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="bg-surface-alt py-section-y-sm">
      <Container>
        <h2
          id="related-heading"
          className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
        >
          Related services
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-card bg-surface p-6 shadow-sm ring-1 ring-border/50 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:p-7"
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
      </Container>
    </section>
  );
}

export function ServiceCTA({ heading, description }: { heading: string; description: string }) {
  return (
    <section aria-labelledby="cta-heading" className="bg-surface py-section-y">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary">{description}</p>
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
