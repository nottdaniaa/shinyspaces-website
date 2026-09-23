import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BUSINESS_NAME, SITE_URL } from "@/lib/constants";
import { localBusinessJsonLd } from "@/lib/localBusiness";
import "./globals.css";

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

const DEFAULT_TITLE = `${BUSINESS_NAME} | Cleaning Services in Heber City, UT & the Heber Valley`;
const DEFAULT_DESCRIPTION =
  "Shiny Spaces Cleaning is a mobile service-area business in Heber City, Utah, providing residential, commercial, and Airbnb turnover cleaning across the Heber Valley. Request a free estimate today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s" },
  description: DEFAULT_DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: BUSINESS_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: BUSINESS_NAME }],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
