import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import {
  EMAIL_ADDRESS,
  OPENING_HOURS,
  PHONE_TEL_HREF,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { serviceAreas } from "@/data/serviceAreas";
import "./globals.css";

// Schema.org day names, in the same Mon–Sun order as OPENING_HOURS.
const SCHEMA_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/*
 * Service-area business: no public storefront, so street address is
 * deliberately omitted (still TBD per docs/02-business-profile.md §2) in
 * favor of areaServed, matching Google's guidance for SABs. Hours, phone,
 * email, and social links are all confirmed in lib/constants.ts.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "ShinySpaces",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-default.jpg`,
  logo: `${SITE_URL}/images/branding/logo.png`,
  telephone: PHONE_TEL_HREF,
  email: EMAIL_ADDRESS,
  areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
  sameAs: SOCIAL_LINKS.map((social) => social.href),
  openingHoursSpecification: OPENING_HOURS.filter((entry) => entry.hours !== "Closed").map(
    (entry, index) => {
      const [opens, closes] = entry.hours.split("–").map((t) => t.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SCHEMA_DAYS[index],
        opens: to24Hour(opens),
        closes: to24Hour(closes),
      };
    }
  ),
};

function to24Hour(time: string) {
  const [, hourStr, minStr, meridiem] = time.match(/(\d+):(\d+)\s?(AM|PM)/) ?? [];
  let hour = Number(hourStr);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minStr}`;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  // Italic is used for the two-tone section headlines (e.g. "…to Refresh").
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const DEFAULT_TITLE = "ShinySpaces | Cleaning Services in Heber City, UT & the Heber Valley";
const DEFAULT_DESCRIPTION =
  "ShinySpaces provides residential, commercial, and Airbnb turnover cleaning throughout Heber City, Midway, Park City, and the surrounding Heber Valley. Request a free estimate today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s" },
  description: DEFAULT_DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "ShinySpaces",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "ShinySpaces" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex-1 pb-20 xl:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
