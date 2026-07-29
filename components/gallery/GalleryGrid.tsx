import Image from "next/image";

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Wider images earn a full-width slot so their proportions aren't wasted. */
  span?: "half" | "full";
};

/*
 * Every photo here is a real completed ShinySpaces job supplied by the business
 * owner. Alt text describes only what is visible — no invented locations,
 * dates, service names, or customer details. Intrinsic width/height are passed
 * so the browser reserves the correct box before load and nothing shifts.
 */
export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
      {photos.map((photo) => (
        <li key={photo.src} className={photo.span === "full" ? "sm:col-span-2" : undefined}>
          <div className="group overflow-hidden rounded-image shadow-sm ring-1 ring-border/50 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-md">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={
                photo.span === "full"
                  ? "(min-width: 1024px) 1120px, 100vw"
                  : "(min-width: 640px) 50vw, 100vw"
              }
              className="h-auto w-full transition-transform duration-200 ease-standard group-hover:scale-[1.02]"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/*
 * Two panels side by side, used where a before/after pair exists but the two
 * shots were taken from different angles. A wipe slider would make the subject
 * jump mid-drag, so the honest presentation is two labelled panels.
 */
export function ComparisonPair({
  before,
  after,
}: {
  before: GalleryPhoto;
  after: GalleryPhoto;
}) {
  return (
    <div className="group grid grid-cols-2 gap-0.5 overflow-hidden rounded-image shadow-sm ring-1 ring-border/50 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-1 hover:shadow-md">
      <ComparisonPanel photo={before} label="Before" />
      <ComparisonPanel photo={after} label="After" />
    </div>
  );
}

function ComparisonPanel({ photo, label }: { photo: GalleryPhoto; label: string }) {
  return (
    <div className="relative aspect-[4/5] sm:aspect-[4/3]">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 30vw, 50vw"
        className="object-cover"
      />
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/35 px-2.5 py-1 text-caption font-medium uppercase tracking-wide text-white backdrop-blur-[2px]">
        {label}
      </span>
    </div>
  );
}
