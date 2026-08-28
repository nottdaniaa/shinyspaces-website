import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { BeforeAfterMedia } from "@/components/ui/BeforeAfterMedia";
import { ComparisonPair, GalleryGrid, type GalleryPhoto } from "@/components/gallery/GalleryGrid";
import { EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL_HREF, SITE_URL } from "@/lib/constants";

const TITLE = "Cleaning Gallery | ShinySpaces Heber City, UT";
const DESCRIPTION =
  "Real photos from completed ShinySpaces cleaning jobs across Heber City and the surrounding Heber Valley, including a before-and-after look at a full blind cleaning.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/gallery`,
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
};

// Finished-result photography. Intrinsic dimensions are the real file sizes so
// the grid reserves the right space and nothing shifts as images load.
const finishedWork: GalleryPhoto[] = [
  {
    src: "/images/gallery/bedroom-turnover.png",
    alt: "Bedroom made up with fresh linens, styled pillows, and rolled towels after a ShinySpaces turnover cleaning",
    width: 1451,
    height: 1084,
    span: "full",
  },
  {
    src: "/images/gallery/bathroom-clawfoot-tub.png",
    alt: "Bathroom with a clawfoot tub, double vanity, and folded towels after a ShinySpaces cleaning",
    width: 1023,
    height: 1537,
  },
  {
    src: "/images/gallery/bedroom-vacuumed-carpet.png",
    alt: "Empty bedroom with freshly vacuumed carpet after a ShinySpaces cleaning",
    width: 1119,
    height: 1406,
  },
  {
    src: "/images/gallery/bathroom-finishing-touches.png",
    alt: "Folded tissue and a tidied counter left as finishing touches after a ShinySpaces cleaning",
    width: 1173,
    height: 1341,
    span: "full",
  },
];

const sinkBefore: GalleryPhoto = {
  src: "/images/gallery/sink-before.png",
  alt: "Bathroom sink crowded with toiletries and soiled around the basin before a ShinySpaces cleaning",
  width: 1448,
  height: 1086,
};

const sinkAfter: GalleryPhoto = {
  src: "/images/gallery/sink-after.jpeg",
  alt: "The same bathroom vanity cleared and wiped down after a ShinySpaces cleaning",
  width: 1320,
  height: 1320,
};

export default function GalleryPage() {
  return (
    <>
      <section aria-labelledby="gallery-hero-heading" className="bg-surface pt-section-y pb-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span
              aria-hidden="true"
              className="mx-auto mb-6 block h-px w-16"
              style={{
                background:
                  "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent-gold) 60%, transparent), transparent)",
              }}
            />
            <h1
              id="gallery-hero-heading"
              className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
            >
              Cleaning Results You Can See
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
              Explore real cleaning work completed for homes, rentals, businesses, and properties
              throughout the Heber Valley area.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="transformation-heading" className="bg-surface-alt py-section-y-sm">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <h2
                id="transformation-heading"
                className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
              >
                Drag to see the difference
              </h2>
              <p className="mt-4 max-w-md text-body text-text-secondary">
                Window blinds collect dust in a way that only shows up close. Drag the handle to
                compare the same set of blinds before and after cleaning.
              </p>
            </div>

            <BeforeAfterMedia
              before={{
                src: "/images/gallery/blinds-before.png",
                alt: "Window blinds coated in dust and grime before a ShinySpaces cleaning",
              }}
              after={{
                src: "/images/gallery/blinds-after.png",
                alt: "The same window blinds wiped clean after a ShinySpaces cleaning",
              }}
              aspectRatio="portrait"
              className="mx-auto w-full max-w-md lg:max-w-none"
            />
          </div>
        </Container>
      </section>

      <section aria-labelledby="completed-work-heading" className="bg-surface py-section-y">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="completed-work-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Completed Work
            </h2>
          </div>

          <div className="mt-12 lg:mt-14">
            <GalleryGrid photos={finishedWork} />
          </div>

          <div className="mx-auto mt-5 max-w-[calc((100%-1.75rem)/2)] lg:mt-7">
            <ComparisonPair before={sinkBefore} after={sinkAfter} />
          </div>
        </Container>
      </section>

      <section aria-labelledby="gallery-cta-heading" className="bg-surface-alt py-section-y-sm">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="gallery-cta-heading"
              className="text-balance font-display text-h2 font-semibold tracking-tight text-text-primary"
            >
              Ready for results like these?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-body text-text-secondary">
              Tell us about your space and we&apos;ll confirm the scope and estimate before the
              visit is scheduled.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={PHONE_TEL_HREF}
                size="lg"
                ariaLabel={`Call or text ShinySpaces at ${PHONE_DISPLAY} for a free estimate`}
              >
                Call or Text for a Free Estimate
              </Button>
              <Button
                href={EMAIL_HREF}
                variant="secondary"
                size="lg"
                ariaLabel={`Email ShinySpaces at ${EMAIL_ADDRESS}`}
              >
                Email Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
