import type { Metadata } from "next";
import { serviceAreas } from "@/data/serviceAreas";
import {
  EstimateExplainer,
  RelatedServices,
  ServiceAreaCTA,
  ServiceAreaHero,
  TownGrid,
  ValleyBand,
} from "@/components/service-areas/ServiceAreaSections";
import { SITE_URL } from "@/lib/constants";

const TITLE = "Service Areas | Shiny Spaces Cleaning – Heber Valley, UT";
const DESCRIPTION =
  "Shiny Spaces Cleaning serves Heber City, Midway, Park City, Kamas, Hideout, Daniel, Charleston, and Wallsburg. Find residential, commercial, and Airbnb cleaning in your town.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/service-areas`,
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
};

export default function ServiceAreasPage() {
  // BreadcrumbList only, matching the service pages: real values, no visible
  // breadcrumb UI. Site-wide LocalBusiness markup lives in app/layout.tsx.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceAreaHero />
      <TownGrid />
      <ValleyBand />
      <EstimateExplainer />
      <RelatedServices />
      <ServiceAreaCTA />
    </>
  );
}

// Kept as a build-time guard: if the confirmed town list in §4 ever changes,
// this surfaces the drift rather than letting the page quietly fall out of date.
if (serviceAreas.length !== 8) {
  console.warn(
    `[service-areas] Expected 8 confirmed towns, found ${serviceAreas.length}. Verify against docs/02-business-profile.md §4.`,
  );
}
