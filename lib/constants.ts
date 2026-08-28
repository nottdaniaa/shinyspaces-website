// Confirmed domain the site deploys to — canonical URLs, sitemap, and structured
// data all key off this. Update here only, never inline elsewhere.
export const SITE_URL = "https://shinyspaces.info";

// Confirmed in docs/02-business-profile.md §2 — do not change without updating that source of truth.
export const PHONE_DISPLAY = "(626) 549-9782";
export const PHONE_TEL_HREF = "tel:+16265499782";
export const PHONE_SMS_HREF = "sms:+16265499782";

export const EMAIL_ADDRESS = "hello@shinyspaces.info";
export const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}`;

// Jobber's hosted public "request work" form — provided by the owner. This is
// where every online estimate/quote request goes; there is no local form
// submission destination (no API route, no email service configured).
export const JOBBER_REQUEST_URL =
  "https://clienthub.getjobber.com/hubs/26fc5b60-242d-4d99-ac9a-6c9ac2fef278/public/requests/4596133/new";

/*
 * Canonical profile URLs. Tracking parameters (_r, _t, mibextid) have been
 * stripped — those are per-session referral tokens, not part of the profile
 * address, and would follow visitors around if published.
 */
export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61553864103161" },
  { label: "TikTok", href: "https://www.tiktok.com/@shiny.spaces" },
] as const;

/*
 * Confirmed in docs/02-business-profile.md §2: Monday–Saturday 7:00 AM–7:00 PM,
 * Sunday closed. Single source for the footer and /contact — do not restate
 * these hours inline anywhere else.
 */
export const OPENING_HOURS = [
  { day: "Monday", hours: "7:00 AM – 7:00 PM" },
  { day: "Tuesday", hours: "7:00 AM – 7:00 PM" },
  { day: "Wednesday", hours: "7:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 7:00 PM" },
  { day: "Friday", hours: "7:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 7:00 PM" },
  { day: "Sunday", hours: "Closed" },
] as const;
