import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";

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
    </>
  );
}
