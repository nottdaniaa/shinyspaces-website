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
};

// Order matches the desktop grid's row-by-row layout (each row's spans sum to 4).
// The rhythm is deliberately varied row to row, not a mirrored/mechanical repeat:
// Row 1 [2,1,1]: Airbnb (hero) + Residential + Commercial
// Row 2 [2,2]:   Post-Construction + Recurring (a calmer, paired breather row)
// Row 3 [1,1,2]: Deep + Move-In/Out + Custom (dominant card shifts to the end)
export const services: Service[] = [
  {
    slug: "airbnb-turnover-cleaning",
    title: "Airbnb Turnover Cleaning",
    description: "Fast turnovers between guests, so your calendar stays booked.",
    href: "/services/airbnb-turnover-cleaning",
    span: 2,
    aspect: "wide",
    tone: "gold",
  },
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    description: "One-time or recurring care for your home, done right every visit.",
    href: "/services/residential-cleaning",
    span: 1,
    aspect: "portrait",
    tone: "neutral",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    description: "Flexible office cleaning scheduled around your business hours.",
    href: "/services/commercial-cleaning",
    span: 1,
    aspect: "tall",
    tone: "teal",
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction Cleaning",
    description: "Detailed cleanup after a renovation, so your space is ready to use.",
    href: "/services/post-construction-cleaning",
    span: 2,
    aspect: "wide",
    tone: "teal",
  },
  {
    slug: "recurring-cleaning",
    title: "Recurring Cleaning",
    description: "Weekly, biweekly, or monthly — choose a schedule, we'll handle the rest.",
    href: "/services/recurring-cleaning",
    span: 2,
    aspect: "wide",
    tone: "gold",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    description: "A top-to-bottom clean that reaches what a standard visit doesn't.",
    href: "/services/deep-cleaning",
    span: 1,
    aspect: "portrait",
    tone: "gold",
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    description: "A thorough clean for the home you're leaving or entering.",
    href: "/services/move-in-move-out-cleaning",
    span: 1,
    aspect: "tall",
    tone: "neutral",
  },
  {
    slug: "custom-cleaning-solutions",
    title: "Custom Cleaning Solutions",
    description: "Every space is different. Tell us what you need.",
    href: "/services/custom-cleaning-solutions",
    span: 2,
    aspect: "wide",
    tone: "neutral",
  },
];
