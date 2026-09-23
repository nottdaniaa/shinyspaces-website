import type { BeforeAfterImage } from "@/components/ui/BeforeAfterMedia";

export type ServiceSpan = 1 | 2;
export type ServiceAspect = "portrait" | "tall" | "wide";
export type ServiceTone = "teal" | "gold" | "neutral";

export type Service = {
  slug: string;
  title: string;
  description: string;
  href: string;
  span: ServiceSpan;
  aspect: ServiceAspect;
  tone: ServiceTone;
  // Opt-in: when present, ServiceCard renders an interactive before/after
  // comparison instead of the abstract EditorialSurface placeholder.
  beforeAfter?: {
    before: BeforeAfterImage;
    after: BeforeAfterImage;
  };
  // Opt-in: when present (and beforeAfter isn't), ServiceCard renders this
  // real photo in place of the abstract EditorialSurface placeholder. Leave
  // unset until real photography exists for that service — the placeholder
  // is the intended fallback, not a bug.
  photo?: {
    src: string;
    alt: string;
  };
};

// Order matches the desktop grid's row-by-row layout (each row's spans sum to 4).
// The rhythm is deliberately varied row to row, not a mirrored/mechanical repeat:
// Row 1 [2,1,1]: Airbnb (hero) + Residential + Commercial
// Row 2 [2,2]:   Post-Construction + Recurring (a calmer, paired breather row)
// Row 3 [1,1,2]: Custom + Move-In/Out + Deep (signature before/after anchor)
export const services: Service[] = [
  {
    slug: "airbnb-turnover-cleaning",
    title: "Airbnb Turnover Cleaning",
    description: "Fast turnovers between guests, so your calendar stays booked.",
    href: "/services/airbnb-turnover-cleaning",
    span: 2,
    aspect: "wide",
    tone: "gold",
    photo: {
      src: "/images/services/airbnb-turnover-cleaning/modern-living-kitchen.jpg",
      alt: "Bright open-concept living, dining, and kitchen area with mountain views, ready for the next guest after a Shiny Spaces Cleaning Airbnb turnover cleaning",
    },
  },
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    description: "One-time or recurring care for your home, done right every visit.",
    href: "/services/residential-cleaning",
    span: 1,
    aspect: "portrait",
    tone: "neutral",
    photo: {
      src: "/images/services/residential-cleaning/cozy-living-room.jpg",
      alt: "Cozy wood-paneled living room with a tidy sectional sofa and rug after a Shiny Spaces Cleaning residential cleaning",
    },
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    description: "Flexible office cleaning scheduled around your business hours.",
    href: "/services/commercial-cleaning",
    span: 1,
    aspect: "tall",
    tone: "teal",
    photo: {
      src: "/images/services/commercial-cleaning/office-carpet.jpg",
      alt: "Modern office cubicles with freshly vacuumed carpet and tidy desks after a Shiny Spaces Cleaning commercial cleaning",
    },
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction Cleaning",
    description: "Detailed cleanup after a renovation, so your space is ready to use.",
    href: "/services/post-construction-cleaning",
    span: 2,
    aspect: "wide",
    tone: "teal",
    beforeAfter: {
      before: {
        src: "/images/services/post-construction-cleaning/before.jpg",
        alt: "Open-concept room mid-renovation before a Shiny Spaces Cleaning post-construction cleaning, with dust and debris covering the concrete floor",
      },
      after: {
        src: "/images/services/post-construction-cleaning/after.jpg",
        alt: "The same room after a Shiny Spaces Cleaning post-construction cleaning, with the concrete floor fully cleared of dust and debris",
      },
    },
  },
  {
    slug: "recurring-cleaning",
    title: "Recurring Cleaning",
    description: "Weekly, biweekly, or monthly — choose a schedule, we'll handle the rest.",
    href: "/services/recurring-cleaning",
    span: 2,
    aspect: "wide",
    tone: "gold",
    photo: {
      src: "/images/services/recurring-cleaning/routine-maintenance.jpg",
      alt: "A cleaner from Shiny Spaces Cleaning wiping down an office door during a routine recurring cleaning visit",
    },
  },
  {
    slug: "custom-cleaning-solutions",
    title: "Custom Cleaning Solutions",
    description: "Every space is different. Tell us what you need.",
    href: "/services/custom-cleaning-solutions",
    span: 1,
    aspect: "portrait",
    tone: "neutral",
    photo: {
      src: "/images/services/custom-cleaning-solutions/high-dusting.jpg",
      alt: "A cleaner from Shiny Spaces Cleaning using an extended duster to clean a high pendant light fixture as part of a custom cleaning solution",
    },
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    description: "A thorough clean for the home you're leaving or entering.",
    href: "/services/move-in-move-out-cleaning",
    span: 1,
    aspect: "tall",
    tone: "neutral",
    photo: {
      src: "/images/services/move-in-move-out-cleaning/organized-garage.jpg",
      alt: "A cleaner from Shiny Spaces Cleaning organizing high garage shelving during a move-in/move-out cleaning",
    },
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    description: "A top-to-bottom clean that reaches what a standard visit doesn't.",
    href: "/services/deep-cleaning",
    span: 2,
    aspect: "wide",
    tone: "gold",
    beforeAfter: {
      before: {
        src: "/images/services/deep-cleaning/before.jpg",
        alt: "Oven interior before a Shiny Spaces Cleaning deep cleaning, with baked-on grease and residue on the racks and floor",
      },
      after: {
        src: "/images/services/deep-cleaning/after.jpg",
        alt: "The same oven interior after a Shiny Spaces Cleaning deep cleaning, spotless and free of residue",
      },
    },
  },
];
