import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { serviceAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";
import {
  BUSINESS_NAME,
  EMAIL_ADDRESS,
  EMAIL_HREF,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_SMS_HREF,
  PHONE_TEL_HREF,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { SAB_SUMMARY } from "@/lib/localBusiness";

/*
 * Only routes that actually exist are listed. Town names remain plain text —
 * there are no per-town routes, and inventing links to them would manufacture
 * 404s. Service names became real links once /services/[slug] shipped.
 *
 * Contact details come from lib/constants.ts, which mirrors the confirmed
 * values in docs/02-business-profile.md §2: phone, email, hours, and social
 * profiles. The street address remains TBD there and must stay absent — never
 * rendered as a placeholder.
 */
const liveNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark pb-20 text-white xl:pb-0">
      {/* Gold hairline separating the footer from the page above it. */}
      <div
        aria-hidden="true"
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent-gold) 55%, transparent), transparent)",
        }}
      />

      <Container className="py-section-y-sm">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            >
              <Image
                src="/images/branding/logo.png"
                alt=""
                width={2000}
                height={2000}
                sizes="80px"
                className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              />
              <span className="font-manrope text-body font-semibold leading-tight text-white">
                {BUSINESS_NAME}
              </span>
            </Link>

            <p className="mt-5 max-w-xs font-display text-body-lg italic text-white/90">
              Transforming Spaces, Unleashing Shine!
            </p>

            <p className="mt-4 max-w-xs text-small text-white/80">{SAB_SUMMARY}</p>

            {/* Wrapped in a flex column: as bare inline-flex anchors these two
                shared a line box and their vertical margins collapsed, leaving
                the phone and email overlapping by ~23px. */}
            <div className="mt-6 flex flex-col items-start gap-3">
              <a
                href={PHONE_TEL_HREF}
                aria-label={`Call Shiny Spaces Cleaning at ${PHONE_DISPLAY}`}
                className="flex items-center gap-2 rounded-input text-body font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
              >
                <PhoneIcon className="h-4 w-4 shrink-0" />
                {PHONE_DISPLAY}
              </a>

              <a
                href={EMAIL_HREF}
                className="flex items-center gap-2 rounded-input text-small text-white/85 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
              >
                <MailIcon className="h-4 w-4 shrink-0" />
                {EMAIL_ADDRESS}
              </a>
            </div>

            {/* Hours confirmed by the owner (docs/02-business-profile.md §2).
                Street address remains TBD there and is deliberately absent.
                Rendered as a description list so each day is programmatically
                tied to its hours rather than relying on visual alignment. */}
            <div className="mt-6">
              {/* h2 to match the sibling footer headings (Explore, Services,
                  Areas We Serve). As an h3 it produced an h1->h3 skip on pages
                  whose main content has no h2 before the footer. */}
              <h2 className="flex items-center gap-2 font-manrope text-small font-semibold uppercase tracking-[0.14em] text-accent-gold">
                <ClockIcon className="h-4 w-4 shrink-0" />
                Hours
              </h2>
              <dl className="mt-4 flex flex-col gap-1.5 text-small">
                {OPENING_HOURS.map((entry) => (
                  <div key={entry.day} className="flex items-baseline justify-between gap-6">
                    <dt className="text-white/80">{entry.day}</dt>
                    <dd
                      className={entry.hours === "Closed" ? "text-white/55" : "text-white/80"}
                    >
                      {entry.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Each action states what it does in its accessible name — an icon
                row of unlabelled links is unusable on a screen reader. */}
            <ul className="mt-6 flex flex-wrap items-center gap-3">
              <li>
                <IconLink href={PHONE_TEL_HREF} label={`Call Shiny Spaces Cleaning at ${PHONE_DISPLAY}`}>
                  <PhoneIcon className="h-4 w-4" />
                </IconLink>
              </li>
              <li>
                <IconLink href={PHONE_SMS_HREF} label={`Text Shiny Spaces Cleaning at ${PHONE_DISPLAY}`}>
                  <MessageIcon className="h-4 w-4" />
                </IconLink>
              </li>
              <li>
                <IconLink href={EMAIL_HREF} label={`Email Shiny Spaces Cleaning at ${EMAIL_ADDRESS}`}>
                  <MailIcon className="h-4 w-4" />
                </IconLink>
              </li>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <IconLink
                    href={social.href}
                    label={`Shiny Spaces Cleaning on ${social.label} (opens in a new tab)`}
                    external
                  >
                    {social.label === "Facebook" ? (
                      <FacebookIcon className="h-4 w-4" />
                    ) : (
                      <TikTokIcon className="h-4 w-4" />
                    )}
                  </IconLink>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-5 flex flex-col gap-3">
              {liveNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-input text-small text-white/80 underline-offset-4 transition-colors duration-150 ease-standard hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>Services</FooterHeading>
            {/* These were plain text until the service routes existed. All
                eight now resolve, so they are real links. */}
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="rounded-input text-small text-white/80 underline-offset-4 transition-colors duration-150 ease-standard hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Areas We Serve in Utah</FooterHeading>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-small text-white/80">
                  {area}, UT
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-caption text-white/70">
            &copy; {year} {BUSINESS_NAME}. Heber City, Utah. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-manrope text-small font-semibold uppercase tracking-[0.14em] text-accent-gold">
      {children}
    </h2>
  );
}

function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-11 w-11 items-center justify-center rounded-full text-white/85 ring-1 ring-white/25 transition-[color,background-color,transform] duration-200 ease-standard hover:-translate-y-0.5 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
    >
      {children}
    </a>
  );
}

function MailIcon({ className }: { className?: string }) {
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
      <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.2" />
      <path d="m3.4 6.6 8.6 6 8.6-6" />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
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
      <path d="M20.4 12.4c0 3.9-3.8 7-8.4 7a9.6 9.6 0 0 1-2.9-.44L4.2 20.4l1.3-3.6a6.6 6.6 0 0 1-1.9-4.4c0-3.9 3.8-7 8.4-7s8.4 3.1 8.4 7z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.1 21.9v-8.2h2.8l.42-3.2h-3.22V8.44c0-.93.26-1.56 1.6-1.56h1.72V4.02a23 23 0 0 0-2.5-.13c-2.48 0-4.18 1.51-4.18 4.29v2.4H7.9v3.2h2.84v8.12z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.3 2.4h-3.1v12.6a2.3 2.3 0 1 1-1.9-2.26V9.6a5.4 5.4 0 1 0 5 5.38V8.62a6.3 6.3 0 0 0 3.6 1.16V6.66a3.4 3.4 0 0 1-2.4-1.03 3.4 3.4 0 0 1-1.2-2.3z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 1.9" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M6.6 3.5h3l1.5 3.8-1.9 1.1a11 11 0 0 0 4.4 4.4l1.1-1.9 3.8 1.5v3a1.6 1.6 0 0 1-1.7 1.6A14.6 14.6 0 0 1 5 5.2 1.6 1.6 0 0 1 6.6 3.5z" />
    </svg>
  );
}
