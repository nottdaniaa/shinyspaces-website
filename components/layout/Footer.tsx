import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { serviceAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";
import { PHONE_DISPLAY, PHONE_TEL_HREF } from "@/lib/constants";

/*
 * Only routes that actually exist are rendered as links. Service and town names
 * are plain text for now — linking them would manufacture 404s, since
 * /services/*, /about, /service-areas, /faq and /contact are not built yet.
 * When those routes land, swap the <span>s for <Link>s and nothing else here
 * needs to change.
 *
 * Contact details are limited to the phone number, the only field confirmed in
 * docs/02-business-profile.md §2. Email, address, hours, and social links are
 * TBD there and must stay absent — not rendered as placeholders.
 */
const liveNavLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
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
              className="inline-flex rounded-input bg-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            >
              <Image
                src="/images/branding/logo.jpeg"
                alt="ShinySpaces — home"
                width={2000}
                height={2000}
                sizes="64px"
                className="h-12 w-12 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs font-display text-body-lg italic text-white/90">
              Transforming Spaces, Unleashing Shine!
            </p>

            <a
              href={PHONE_TEL_HREF}
              aria-label={`Call ShinySpaces at ${PHONE_DISPLAY}`}
              className="mt-6 inline-flex items-center gap-2 rounded-input text-body font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
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
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug} className="text-small text-white/80">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Areas We Serve</FooterHeading>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-small text-white/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-caption text-white/70">
            &copy; {year} ShinySpaces. All rights reserved.
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
