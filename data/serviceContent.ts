/*
 * Page-body content for /services/[slug]. Kept separate from data/services.ts,
 * which drives the homepage grid's layout (span/aspect/tone) — two unrelated
 * concerns that shouldn't share a type.
 *
 * RULES FOR THIS FILE
 * - Every optional field is genuinely optional. A section renders only when its
 *   data exists, so an unconfirmed section is ABSENT rather than filled with
 *   placeholder text. Do not add an empty array to "show the heading".
 * - Task checklists, exclusions, and FAQs below are transcribed from
 *   docs/02-business-profile.md §3.1 and §3.2, which is the canonical source.
 *   Do not add a task, exclusion, or FAQ that does not appear there.
 * - The owner explicitly WITHDREW the "fully insured" FAQ. It must never be
 *   reinstated here — §9 still lists insurance as unconfirmed and §11 prohibits
 *   the claim.
 * - Never add: pricing, response times, licensing, insurance, bonding,
 *   background checks, eco-friendly claims, years in business, ratings, or
 *   review counts. All TBD or prohibited per §9 and §11.
 */

export type TaskGroup = { title: string; tasks: string[] };
/** Scope limits confirmed by the owner. Publishing these protects both sides. */
export type Exclusions = { title: string; items: string[] };
export type ProcessStep = { title: string; description: string };
export type Faq = { question: string; answer: string };
export type Benefit = { title: string; description: string };

export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ServiceContent = {
  slug: string;
  serviceName: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  heroImage: ServiceImage;
  introduction: string[];
  includedTaskGroups?: TaskGroup[];
  exclusions?: Exclusions;
  audiences?: string[];
  benefits?: Benefit[];
  processSteps?: ProcessStep[];
  beforeAfterMedia?: { before: ServiceImage; after: ServiceImage };
  galleryImages?: ServiceImage[];
  faqs?: Faq[];
  relatedServiceSlugs: string[];
  ctaHeading: string;
  ctaDescription: string;
};

// The approved What to Expect flow, reused verbatim where it applies. Wording
// matches the homepage section so the site tells one consistent story.
const standardProcess: ProcessStep[] = [
  {
    title: "Tell us what you need",
    description:
      "Share the property type, the cleaning you're after, a preferred date, and anything specific you'd like handled.",
  },
  {
    title: "Receive your cleaning plan",
    description:
      "We confirm the scope, the scheduling, and the estimate before the visit is booked.",
  },
  {
    title: "Come back to a fresh space",
    description:
      "The team completes the cleaning and leaves the property ready for whatever comes next.",
  },
];

export const serviceContent: ServiceContent[] = [
  {
    slug: "residential-cleaning",
    serviceName: "Residential Cleaning",
    seoTitle: "House Cleaning Services in Heber City, UT | ShinySpaces",
    metaDescription:
      "Reliable residential house cleaning in Heber City and the surrounding valley. One-time or recurring plans. Request your free estimate today.",
    h1: "Residential House Cleaning",
    heroDescription:
      "One-time or recurring care for your home, handled by the same team that treats the corners as carefully as the countertops.",
    heroImage: {
      src: "/images/services/residential-cleaning/cozy-living-room.jpg",
      alt: "Cozy wood-panelled living room with a tidy sectional sofa and rug after a ShinySpaces residential cleaning",
      width: 1600,
      height: 1067,
    },
    introduction: [
      "Most homes don't need a deep clean every week. They need someone reliable who shows up, works through the whole house, and leaves it genuinely finished.",
      "ShinySpaces cleans houses throughout Heber City and the surrounding Heber Valley, either as a one-time reset or on a schedule you set. We work through the space room by room rather than to a stopwatch.",
      "If you're not sure whether you want a single visit or something ongoing, start with one and decide afterwards. Nothing is locked in.",
    ],
    audiences: [
      "Homeowners wanting a one-time refresh",
      "Households looking for an ongoing cleaning routine",
      "Anyone preparing a home for guests or a showing",
    ],
    processSteps: standardProcess,
    includedTaskGroups: [
      {
        title: "Kitchen",
        tasks: [
          "Clean and sanitize countertops",
          "Wipe cabinet fronts",
          "Clean sink and faucet",
          "Clean outside of appliances",
          "Clean microwave inside and out",
          "Wipe backsplash",
          "Empty trash",
          "Vacuum and mop floors",
        ],
      },
      {
        title: "Bathrooms",
        tasks: [
          "Scrub and disinfect toilets",
          "Clean shower and bathtub",
          "Clean sinks and countertops",
          "Polish mirrors",
          "Wipe fixtures",
          "Empty trash",
          "Vacuum and mop floors",
        ],
      },
      {
        title: "Bedrooms",
        tasks: [
          "Make beds (if clean linens are left out)",
          "Dust furniture",
          "Wipe reachable surfaces",
          "Vacuum floors and rugs",
          "Mop hard floors",
          "Empty trash",
        ],
      },
      {
        title: "Living areas",
        tasks: [
          "Dust furniture",
          "Wipe tables",
          "Vacuum carpets and rugs",
          "Mop hard floors",
          "Straighten cushions",
          "Dust window sills",
        ],
      },
      {
        title: "Extras, on request",
        tasks: [
          "Interior windows",
          "Baseboards",
          "Inside refrigerator",
          "Inside oven",
          "Laundry folding",
          "Organization",
        ],
      },
    ],
    exclusions: {
      title: "Not included",
      items: [
        "Heavy hoarding",
        "Biohazard cleanup",
        "Mold removal",
        "Pest removal",
        "Exterior windows",
        "Carpet shampooing",
        "Lifting heavy furniture",
      ],
    },
    faqs: [
      {
        question: "How much does house cleaning cost?",
        answer:
          "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. Many clients provide a door code or key so we can clean while they're away.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
      },
      {
        question: "How long does a cleaning take?",
        answer:
          "Most homes take between 2 and 5 hours depending on the size and condition.",
      },
      {
        question: "Can I schedule recurring cleanings?",
        answer:
          "Yes. We offer weekly, biweekly, and monthly recurring service.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Just let us know as soon as possible and we'll work with you to find another appointment.",
      },
    ],
    relatedServiceSlugs: ["deep-cleaning", "recurring-cleaning", "move-in-move-out-cleaning"],
    ctaHeading: "Ready for a cleaner home?",
    ctaDescription:
      "Tell us about your place and we'll confirm the scope and estimate before anything is scheduled.",
  },
  {
    slug: "commercial-cleaning",
    serviceName: "Commercial Cleaning",
    seoTitle: "Commercial Cleaning Services in Heber City, UT | ShinySpaces",
    metaDescription:
      "Flexible commercial cleaning for offices, retail spaces, and small businesses in Heber City and the surrounding area. Get a free quote today.",
    h1: "Commercial Cleaning Services",
    heroDescription:
      "Office and workspace cleaning scheduled around your business hours, not through the middle of them.",
    heroImage: {
      src: "/images/services/commercial-cleaning/office-carpet.jpg",
      alt: "Modern office cubicles with freshly vacuumed carpet and tidy desks after a ShinySpaces commercial cleaning",
      width: 1600,
      height: 1067,
    },
    introduction: [
      "A workspace says something about the business inside it before anyone speaks. Clean floors, wiped surfaces, and emptied bins are the baseline your customers notice only when they're missing.",
      "ShinySpaces cleans offices and commercial spaces across the Heber Valley, working to a schedule that fits around how your business actually runs — early, late, or on the days that suit you.",
    ],
    audiences: [
      "Offices and professional workspaces",
      "Small businesses and retail spaces",
      "Property managers responsible for shared spaces",
    ],
    processSteps: standardProcess,
    includedTaskGroups: [
      {
        title: "Spaces we cover",
        tasks: [
          "Offices",
          "Break rooms",
          "Bathrooms",
          "Lobbies",
          "Waiting areas",
        ],
      },
      {
        title: "Every visit",
        tasks: [
          "Trash removal",
          "Vacuuming",
          "Mopping",
          "Dusting",
          "Sanitizing high-touch surfaces",
          "Restocking paper products if provided",
        ],
      },
    ],
    exclusions: {
      title: "Not included",
      items: [
        "Industrial cleaning",
        "Hazardous waste",
        "Large floor stripping or waxing",
        "Specialty equipment cleaning",
      ],
    },
    faqs: [
      {
        question: "How much does house cleaning cost?",
        answer:
          "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
      },
      {
        question: "Can I schedule recurring cleanings?",
        answer:
          "Yes. We offer weekly, biweekly, and monthly recurring service.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Just let us know as soon as possible and we'll work with you to find another appointment.",
      },
    ],
    relatedServiceSlugs: [
      "recurring-cleaning",
      "post-construction-cleaning",
      "custom-cleaning-solutions",
    ],
    ctaHeading: "Get a quote for your workspace",
    ctaDescription:
      "Tell us about the space and your hours, and we'll put together a plan that works around them.",
  },
  {
    slug: "airbnb-turnover-cleaning",
    serviceName: "Airbnb Turnover Cleaning",
    seoTitle: "Airbnb & Vacation Rental Turnover Cleaning | ShinySpaces",
    metaDescription:
      "Fast, reliable Airbnb and short-term rental turnover cleaning across Heber City, Park City, and Midway. Request a turnover cleaning quote today.",
    h1: "Airbnb & Vacation Rental Turnover Cleaning",
    heroDescription:
      "Fast turnovers between guests, so your calendar stays booked and your reviews stay high.",
    heroImage: {
      src: "/images/services/airbnb-turnover-cleaning/modern-living-kitchen.jpg",
      alt: "Bright open-concept living, dining, and kitchen area with mountain views, ready for the next guest after a ShinySpaces Airbnb turnover cleaning",
      width: 1600,
      height: 1067,
    },
    introduction: [
      "Short-term rentals live and die by the first thirty seconds after a guest walks in. A missed hair in the bathroom or a smudged glass door is the difference between five stars and four.",
      "ShinySpaces handles turnovers across Heber City, Park City, Midway, and the surrounding valley — resetting the property between bookings so it photographs and presents the way it did on the listing.",
      "If your checkout and check-in fall on the same day, tell us when you're aiming for and we'll confirm what's workable before you commit.",
    ],
    audiences: [
      "Airbnb and short-term rental hosts",
      "Vacation rental owners",
      "Property managers running multiple listings",
    ],
    processSteps: standardProcess,
    includedTaskGroups: [
      {
        title: "Every turnover",
        tasks: [
          "Full cleaning between guests",
          "Change bed linens",
          "Replace towels",
          "Kitchen cleaning",
          "Bathroom sanitizing",
          "Restock guest supplies (provided by owner)",
          "Check for damages",
          "Remove trash",
          "Final walkthrough",
          "Ready for next guest",
        ],
      },
      {
        title: "Optional",
        tasks: [
          "Inventory check",
          "Photo updates after every turnover",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you clean Airbnb properties?",
        answer:
          "Yes. We specialize in Airbnb turnover cleanings and can help keep your property guest-ready between stays.",
      },
      {
        question: "How much does house cleaning cost?",
        answer:
          "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Just let us know as soon as possible and we'll work with you to find another appointment.",
      },
    ],
    galleryImages: [
      {
        src: "/images/gallery/bedroom-turnover.png",
        alt: "Bedroom made up with fresh linens, styled pillows, and rolled towels after a ShinySpaces turnover cleaning",
        width: 1451,
        height: 1084,
      },
      {
        src: "/images/gallery/bathroom-finishing-touches.png",
        alt: "Folded tissue and a tidied counter left as finishing touches after a ShinySpaces cleaning",
        width: 1173,
        height: 1341,
      },
    ],
    relatedServiceSlugs: ["recurring-cleaning", "deep-cleaning", "custom-cleaning-solutions"],
    ctaHeading: "Keep your calendar turning",
    ctaDescription:
      "Tell us about your rental and your turnaround window, and we'll confirm what we can cover.",
  },
  {
    slug: "recurring-cleaning",
    serviceName: "Recurring Cleaning",
    seoTitle: "Recurring Cleaning Plans | ShinySpaces – Heber City, UT",
    metaDescription:
      "Weekly, biweekly, or monthly cleaning plans for homes, rentals, and businesses across the Heber Valley. Set your schedule and let us handle the rest.",
    h1: "Recurring Cleaning Plans",
    heroDescription:
      "Weekly, biweekly, or monthly — set a rhythm once and stop thinking about it.",
    heroImage: {
      src: "/images/services/recurring-cleaning/routine-maintenance.jpg",
      alt: "A ShinySpaces cleaner wiping down an office door during a routine recurring cleaning visit",
      width: 1600,
      height: 1067,
    },
    introduction: [
      "The difference between a home that always looks after itself and one that needs rescuing every few months is usually just cadence.",
      "ShinySpaces runs recurring visits on a weekly, biweekly, or monthly schedule for homes, rentals, and businesses across the Heber Valley. You pick the frequency; we keep it.",
      "Schedules aren't fixed forever. If your needs change with the season or your bookings, say so and we'll adjust.",
    ],
    audiences: [
      "Households wanting a consistent routine",
      "Short-term rentals with regular bookings",
      "Offices and commercial spaces needing ongoing upkeep",
    ],
    processSteps: standardProcess,
    includedTaskGroups: [
      {
        title: "Available frequencies",
        tasks: [
          "Weekly",
          "Biweekly",
          "Every 4 weeks",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I schedule recurring cleanings?",
        answer:
          "Yes. We offer weekly, biweekly, and monthly recurring service.",
      },
      {
        question: "How much does house cleaning cost?",
        answer:
          "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. Many clients provide a door code or key so we can clean while they're away.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Just let us know as soon as possible and we'll work with you to find another appointment.",
      },
    ],
    relatedServiceSlugs: [
      "residential-cleaning",
      "airbnb-turnover-cleaning",
      "commercial-cleaning",
    ],
    ctaHeading: "Set up a schedule that sticks",
    ctaDescription:
      "Tell us how often you'd like us and we'll confirm the scope and estimate before the first visit.",
  },
  {
    slug: "move-in-move-out-cleaning",
    serviceName: "Move-In / Move-Out Cleaning",
    seoTitle: "Move-In & Move-Out Cleaning Services | ShinySpaces – Heber City, UT",
    metaDescription:
      "Thorough move-in and move-out cleaning for homes throughout the Heber Valley. Start fresh or leave it spotless — request a free estimate.",
    h1: "Move-In / Move-Out Cleaning",
    heroDescription:
      "A thorough clean for the home you're leaving, or the one you're about to live in.",
    heroImage: {
      src: "/images/services/move-in-move-out-cleaning/organized-garage.jpg",
      alt: "A ShinySpaces cleaner organizing high garage shelving during a move-in/move-out cleaning",
      width: 1600,
      height: 1067,
    },
    introduction: [
      "An empty house hides nothing. Once the furniture is gone, every mark behind an appliance and every skipped corner of a closet is suddenly visible — to a landlord, a buyer, or you.",
      "ShinySpaces cleans homes at both ends of a move across the Heber Valley: leaving one properly finished, or making the next one genuinely yours before the boxes arrive.",
    ],
    audiences: [
      "Tenants preparing to hand back a property",
      "Homeowners selling or listing",
      "Anyone moving into a home before unpacking",
    ],
    processSteps: standardProcess,
    includedTaskGroups: [
      {
        title: "Included",
        tasks: [
          "Inside cabinets",
          "Inside drawers",
          "Inside refrigerator",
          "Inside oven",
          "Baseboards",
          "Doors",
          "Trim",
          "Windows (interior)",
          "Bathrooms",
          "Kitchen",
          "Floors",
          "Closets",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does house cleaning cost?",
        answer:
          "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. Many clients provide a door code or key so we can clean while they're away.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
      },
      {
        question: "How long does a cleaning take?",
        answer:
          "Most homes take between 2 and 5 hours depending on the size and condition.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Just let us know as soon as possible and we'll work with you to find another appointment.",
      },
    ],
    galleryImages: [
      {
        src: "/images/gallery/bedroom-vacuumed-carpet.png",
        alt: "Empty bedroom with freshly vacuumed carpet after a ShinySpaces cleaning",
        width: 1119,
        height: 1406,
      },
    ],
    relatedServiceSlugs: ["deep-cleaning", "residential-cleaning", "post-construction-cleaning"],
    ctaHeading: "Moving soon?",
    ctaDescription:
      "Tell us the property and your dates, and we'll confirm the scope and estimate before the visit.",
  },
  {
    slug: "deep-cleaning",
    serviceName: "Deep Cleaning",
    seoTitle: "Deep Cleaning Services in Heber City, UT | ShinySpaces",
    metaDescription:
      "A thorough, top-to-bottom deep clean for your home across Heber City and the surrounding Heber Valley. Request your free estimate today.",
    h1: "Deep Cleaning Services",
    heroDescription:
      "A top-to-bottom clean that reaches what a standard visit doesn't.",
    // No standalone hero photo exists for this service, so the verified "after"
    // image from the confirmed before/after pair is used. It is a real photo of
    // real work, not a stand-in.
    heroImage: {
      src: "/images/services/deep-cleaning/after.jpg",
      alt: "Oven interior after a ShinySpaces deep cleaning, spotless and free of residue",
      width: 1600,
      height: 1067,
    },
    introduction: [
      "A regular clean keeps a home presentable. A deep clean deals with what regular cleaning never quite gets to — the build-up inside the oven, the film along a baseboard, the grime in a grout line.",
      "ShinySpaces takes deep cleans room by room across the Heber Valley, spending the time those jobs actually require rather than rushing them into a standard visit.",
    ],
    audiences: [
      "Homes that haven't had a thorough clean in a while",
      "Households wanting a seasonal reset",
      "Anyone preparing a property for guests, buyers, or tenants",
    ],
    processSteps: standardProcess,
    includedTaskGroups: [
      {
        title: "Everything in a standard cleaning, plus",
        tasks: [
          "Hand-wiping baseboards",
          "Door frames",
          "Ceiling fans",
          "Light fixtures",
          "Detailed bathroom scrubbing",
          "Behind furniture when accessible",
          "Extra dust removal",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does house cleaning cost?",
        answer:
          "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. Many clients provide a door code or key so we can clean while they're away.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
      },
      {
        question: "How long does a cleaning take?",
        answer:
          "Most homes take between 2 and 5 hours depending on the size and condition.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Just let us know as soon as possible and we'll work with you to find another appointment.",
      },
    ],
    beforeAfterMedia: {
      before: {
        src: "/images/services/deep-cleaning/before.jpg",
        alt: "Oven interior before a ShinySpaces deep cleaning, with baked-on grease and residue on the racks and floor",
        width: 1600,
        height: 1067,
      },
      after: {
        src: "/images/services/deep-cleaning/after.jpg",
        alt: "The same oven interior after a ShinySpaces deep cleaning, spotless and free of residue",
        width: 1600,
        height: 1067,
      },
    },
    relatedServiceSlugs: [
      "residential-cleaning",
      "move-in-move-out-cleaning",
      "post-construction-cleaning",
    ],
    ctaHeading: "Book a deep clean",
    ctaDescription:
      "Tell us about the property and what's been bothering you, and we'll confirm the scope and estimate.",
  },
  {
    slug: "post-construction-cleaning",
    serviceName: "Post-Construction Cleaning",
    // No SEO spec exists for this service in docs/03-seo-strategy.md. Title,
    // meta, and H1 below are drafted here and should be reviewed against that
    // document when it is next updated.
    seoTitle: "Post-Construction Cleaning in Heber City, UT | ShinySpaces",
    metaDescription:
      "Detailed post-construction and post-renovation cleaning across Heber City and the Heber Valley, clearing dust and debris so the space is ready to use.",
    h1: "Post-Construction Cleaning",
    heroDescription:
      "Detailed cleanup after a build or renovation, so the space is actually ready to use.",
    heroImage: {
      src: "/images/services/post-construction-cleaning/after.jpg",
      alt: "Open-concept room after a ShinySpaces post-construction cleaning, with the concrete floor fully cleared of dust and debris",
      width: 1600,
      height: 1067,
    },
    introduction: [
      "Construction dust gets everywhere, and it keeps reappearing for days after the trades leave. Getting a finished space genuinely usable takes a different kind of clean from a normal visit.",
      "ShinySpaces handles post-construction and post-renovation cleanup across the Heber Valley, clearing the dust and debris left behind so the room can be lived in or opened to customers.",
    ],
    audiences: [
      "Homeowners finishing a renovation",
      "Builders and contractors handing over a finished space",
      "Commercial properties completing a fit-out",
    ],
    processSteps: standardProcess,
    includedTaskGroups: [
      {
        title: "Included",
        tasks: [
          "Dust removal",
          "Vacuuming",
          "Fine dust wipe-down",
          "Window cleaning",
          "Trim cleaning",
          "Cabinet cleaning",
          "Floor cleaning",
        ],
      },
    ],
    exclusions: {
      title: "Not included",
      items: [
        "Construction debris hauling",
        "Hazardous materials",
      ],
    },
    faqs: [
      {
        question: "How much does house cleaning cost?",
        answer:
          "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Just let us know as soon as possible and we'll work with you to find another appointment.",
      },
    ],
    beforeAfterMedia: {
      before: {
        src: "/images/services/post-construction-cleaning/before.jpg",
        alt: "Open-concept room mid-renovation before a ShinySpaces post-construction cleaning, with dust and debris covering the concrete floor",
        width: 1600,
        height: 1067,
      },
      after: {
        src: "/images/services/post-construction-cleaning/after.jpg",
        alt: "The same room after a ShinySpaces post-construction cleaning, with the concrete floor fully cleared of dust and debris",
        width: 1600,
        height: 1067,
      },
    },
    relatedServiceSlugs: ["deep-cleaning", "commercial-cleaning", "custom-cleaning-solutions"],
    ctaHeading: "Just finished a build?",
    ctaDescription:
      "Tell us about the space and where the work has got to, and we'll confirm the scope and estimate.",
  },
  {
    slug: "custom-cleaning-solutions",
    serviceName: "Custom Cleaning Solutions",
    // No SEO spec exists for this service in docs/03-seo-strategy.md. Drafted
    // here pending review.
    seoTitle: "Custom Cleaning Solutions in Heber City, UT | ShinySpaces",
    metaDescription:
      "Cleaning built around properties that don't fit a standard checklist, across Heber City and the surrounding Heber Valley. Request a free estimate.",
    h1: "Custom Cleaning Solutions",
    heroDescription: "Every space is different. Tell us what yours needs.",
    heroImage: {
      src: "/images/services/custom-cleaning-solutions/high-dusting.jpg",
      alt: "A ShinySpaces cleaner using an extended duster to clean a high pendant light fixture as part of a custom cleaning solution",
      width: 1600,
      height: 1067,
    },
    introduction: [
      "Some properties don't fit a standard checklist. High ceilings, unusual layouts, a single room that needs far more attention than the rest, or a job that only comes up once a year.",
      "If what you need doesn't match one of our other services, describe it and we'll scope the work around the property rather than the other way round.",
    ],
    audiences: [
      "Properties with unusual layouts or access",
      "One-off jobs that don't fit a standard clean",
      "Anyone needing a specific area handled rather than a whole property",
    ],
    processSteps: standardProcess,
    faqs: [
      {
        question: "How much does house cleaning cost?",
        answer:
          "Every home is different. We provide free estimates based on the home's size, condition, and the services requested.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. Many clients provide a door code or key so we can clean while they're away.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. We bring professional cleaning products and equipment unless you request we use your own.",
      },
      {
        question: "What if I need to reschedule?",
        answer:
          "Just let us know as soon as possible and we'll work with you to find another appointment.",
      },
    ],
    relatedServiceSlugs: [
      "residential-cleaning",
      "commercial-cleaning",
      "post-construction-cleaning",
    ],
    ctaHeading: "Tell us what you need",
    ctaDescription:
      "Describe the space and the job, and we'll confirm what's workable before anything is scheduled.",
  },
];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContent.find((service) => service.slug === slug);
}
