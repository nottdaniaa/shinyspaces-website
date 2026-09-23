import type { Metadata } from "next";
import {
  AboutHero,
  AreasWeServe,
  CleaningProcess,
  HowWeClean,
  LifestyleCTA,
  SatisfactionPromise,
  WhyChoose,
} from "@/components/about/AboutSections";
import { SITE_URL } from "@/lib/constants";

const TITLE = "About Shiny Spaces Cleaning | Cleaning Services in Heber City, UT";
const DESCRIPTION =
  "Learn how Shiny Spaces Cleaning approaches cleaning for homes, rentals, and businesses across Heber City and the surrounding Heber Valley, and what every estimate includes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
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
 * Sections omitted on purpose, pending information Pilar has not provided:
 *   - "Our Story" / founding history — no documented story exists (§1: years in
 *     business and ownership structure are both TBD). Replaced by "How We Clean",
 *     which is supported and more useful to a visitor deciding whether to call.
 *   - Team section — no team photos, names, or headcount confirmed.
 *   - Any statistics band — customer counts are TBD (§9) and must not be invented.
 * The architecture accommodates all three later without restructuring.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HowWeClean />
      <WhyChoose />
      <SatisfactionPromise />
      <CleaningProcess />
      <AreasWeServe />
      <LifestyleCTA />
    </>
  );
}
