export type NavChildLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChildLink[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Airbnb Turnover Cleaning", href: "/services/airbnb-turnover-cleaning" },
      { label: "Residential Cleaning", href: "/services/residential-cleaning" },
      { label: "Commercial Cleaning", href: "/services/commercial-cleaning" },
      { label: "Post-Construction Cleaning", href: "/services/post-construction-cleaning" },
      { label: "Recurring Cleaning", href: "/services/recurring-cleaning" },
      { label: "Custom Cleaning Solutions", href: "/services/custom-cleaning-solutions" },
      { label: "Move-In / Move-Out Cleaning", href: "/services/move-in-move-out-cleaning" },
      { label: "Deep Cleaning", href: "/services/deep-cleaning" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
