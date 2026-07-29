import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhatToExpect } from "@/components/home/WhatToExpect";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Gallery } from "@/components/home/Gallery";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";

export const metadata: Metadata = {
  title: "ShinySpaces | Cleaning Services in Heber City, UT & the Heber Valley",
  description:
    "ShinySpaces provides residential, commercial, and Airbnb turnover cleaning throughout Heber City, Midway, Park City, and the surrounding Heber Valley. Request a free estimate today.",
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
