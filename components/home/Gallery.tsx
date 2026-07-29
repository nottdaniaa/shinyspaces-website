import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { BeforeAfterMedia } from "@/components/ui/BeforeAfterMedia";

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Every photo here is a real ShinySpaces job supplied by the business owner.
// Alt text describes what is actually visible — no claimed awards, ratings, or
// locations beyond the confirmed service area.
const clawfootTub: Photo = {
  src: "/images/gallery/bathroom-clawfoot-tub.png",
  alt: "Bathroom with a clawfoot tub, double vanity, and folded towels after a ShinySpaces cleaning",
  width: 1023,
  height: 1537,
};

const vacuumedCarpet: Photo = {
  src: "/images/gallery/bedroom-vacuumed-carpet.png",
  alt: "Empty bedroom with freshly vacuumed carpet after a ShinySpaces cleaning",
  width: 1119,
  height: 1406,
};

const bedroomTurnover: Photo = {
  src: "/images/gallery/bedroom-turnover.png",
  alt: "Bedroom made up with fresh linens, styled pillows, and rolled towels after a ShinySpaces turnover cleaning",
  width: 1451,
  height: 1084,
};

const finishingTouches: Photo = {
  src: "/images/gallery/bathroom-finishing-touches.png",
  alt: "Folded tissue and a tidied counter left as finishing touches after a ShinySpaces cleaning",
  width: 1173,
  height: 1341,
};

const sinkBefore: Photo = {
  src: "/images/gallery/sink-before.png",
  alt: "Bathroom sink crowded with toiletries and soiled around the basin before a ShinySpaces cleaning",
  width: 1448,
  height: 1086,
};

const sinkAfter: Photo = {
  src: "/images/gallery/sink-after.jpeg",
  alt: "The same bathroom vanity cleared and wiped down after a ShinySpaces cleaning",
  width: 1320,
  height: 1320,
};

export function Gallery() {
  return (
    <section aria-labelledby="gallery-heading" className="bg-surface-alt py-section-y">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="gallery-heading"
            className="text-balance font-display text-h1 font-semibold tracking-tight text-text-primary"
          >
            Real Spaces. <span className="italic text-primary">Beautiful Results.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
            A look at the homes, rentals, and commercial spaces we care for across Heber City and
            the Heber Valley, from routine house cleaning and deep cleans to Airbnb turnovers.
          </p>
        </div>

        {/*
         * Multi-column masonry rather than a fixed grid: the supplied photography
         * is almost entirely portrait at differing ratios, and this lets each
         * image keep its own proportions instead of being cropped into a
         * uniform tile. Two columns on mobile, three from lg.
         */}
        <div className="mt-14 columns-2 gap-4 lg:mt-16 lg:columns-3 lg:gap-6">
          <PhotoTile photo={clawfootTub} />

          {/* Ordered second so the tallest tile and the shortest share a column;
              the browser's column balancer fills in source order, so this is
              the lever that keeps the bottom edge from going badly ragged. */}
          <SideBySideTile before={sinkBefore} after={sinkAfter} />

          <Tile>
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
            />
          </Tile>

          <PhotoTile photo={vacuumedCarpet} />

          <PhotoTile photo={bedroomTurnover} />

          <PhotoTile photo={finishingTouches} />

          {/* Ordered last so the two comparison cards don't land side by side,
              which made the Before/After badges read as a repeating row.
              Shot from different angles, so shown as two panels rather than a
              wipe slider — a wipe would make the basin jump mid-drag. */}
          <SideBySideTile before={sinkBefore} after={sinkAfter} />
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/gallery" size="lg">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}

function Tile({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 break-inside-avoid lg:mb-6">{children}</div>;
}

function PhotoTile({ photo }: { photo: Photo }) {
  return (
    <Tile>
      <div className="group overflow-hidden rounded-image shadow-sm transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-hover">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="h-auto w-full transition-transform duration-200 ease-standard group-hover:scale-[1.03]"
        />
      </div>
    </Tile>
  );
}

function SideBySideTile({ before, after }: { before: Photo; after: Photo }) {
  return (
    <Tile>
      <div className="group grid grid-cols-2 gap-0.5 overflow-hidden rounded-image shadow-sm transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-hover">
        <ComparisonPanel photo={before} label="Before" />
        <ComparisonPanel photo={after} label="After" />
      </div>
    </Tile>
  );
}

// The Before/After labels are the one place text sits on an image. Without them
// the comparison is unreadable, and they match the badge treatment already used
// by BeforeAfterMedia elsewhere on the site.
function ComparisonPanel({ photo, label }: { photo: Photo; label: string }) {
  return (
    <div className="relative aspect-[3/4]">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 17vw, 25vw"
        className="object-cover transition-transform duration-200 ease-standard group-hover:scale-[1.03]"
      />
      <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-black/30 px-2 py-1 text-caption font-medium uppercase tracking-wide text-white backdrop-blur-[2px]">
        {label}
      </span>
    </div>
  );
}
