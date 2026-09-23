import { serviceAreas } from "@/data/serviceAreas";
import {
  BUSINESS_NAME,
  EMAIL_ADDRESS,
  OPENING_HOURS,
  PHONE_SCHEMA,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/constants";

/** GBP website URL, including the trailing slash used on the profile. */
export const BUSINESS_URL = `${SITE_URL}/`;

export const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Service-area business with no confirmed street address. City and state are
 * the primary location from the business profile — never a street or ZIP.
 */
export const SAB_SUMMARY =
  "Mobile service-area business based in Heber City, Utah. We come to your property. There is no public storefront or street address.";

export function formatTownList(towns: readonly string[] = serviceAreas) {
  if (towns.length <= 1) return towns.join("");
  return `${towns.slice(0, -1).join(", ")}, and ${towns[towns.length - 1]}`;
}

export const areaServed = [
  { "@type": "State", name: "Utah" },
  ...serviceAreas.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: "Utah" },
  })),
];

const SCHEMA_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function to24Hour(time: string) {
  const [, hourStr, minStr, meridiem] = time.match(/(\d+):(\d+)\s?(AM|PM)/) ?? [];
  let hour = Number(hourStr);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minStr}`;
}

/**
 * CleaningService is the schema.org subtype of LocalBusiness for this company.
 * Street address is omitted on purpose: none is confirmed, and publishing one
 * would misstate a mobile service-area business.
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "@id": BUSINESS_ID,
  name: BUSINESS_NAME,
  url: BUSINESS_URL,
  description: `${BUSINESS_NAME} is a mobile service-area cleaning business based in Heber City, Utah. We come to homes, rentals, and businesses in ${formatTownList()}. There is no public storefront.`,
  image: `${SITE_URL}/images/og-default.jpg`,
  logo: `${SITE_URL}/images/branding/logo.png`,
  telephone: PHONE_SCHEMA,
  email: EMAIL_ADDRESS,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Heber City",
    addressRegion: "UT",
    addressCountry: "US",
  },
  areaServed,
  sameAs: SOCIAL_LINKS.map((social) => social.href),
  openingHoursSpecification: OPENING_HOURS.filter((entry) => entry.hours !== "Closed").map(
    (entry, index) => {
      const [opens, closes] = entry.hours.split("–").map((part) => part.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SCHEMA_DAYS[index],
        opens: to24Hour(opens),
        closes: to24Hour(closes),
      };
    },
  ),
};
