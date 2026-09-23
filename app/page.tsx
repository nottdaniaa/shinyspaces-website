import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhatToExpect } from "@/components/home/WhatToExpect";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Gallery } from "@/components/home/Gallery";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { SITE_URL } from "@/lib/constants";

const TITLE = "Shiny Spaces Cleaning | Cleaning Services in Heber City, UT & the Heber Valley";
const DESCRIPTION =
  "Shiny Spaces Cleaning is a mobile service-area business in Heber City, Utah. Residential, commercial, and Airbnb turnover cleaning across the Heber Valley. Request a free estimate.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhatToExpect />
      <WhyChooseUs />
      <Gallery />
      <ReviewsCarousel />
    </>
  );
}
