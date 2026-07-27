# ShinySpaces Development Roadmap

**Source of truth for this document:** `docs/00-project-rules.md` (permanent rules), `docs/01-website-blueprint.md` (site structure), `docs/02-business-profile.md` (confirmed facts — everything else TBD), `docs/03-seo-strategy.md` and `docs/04-keyword-map.md` (keyword assignments), `docs/05-content-plan.md` (page-by-page content structure).

**Purpose:** Convert the planning documents into a buildable, phased implementation plan. This roadmap describes *what* to build and in *what order* — it does not write component code.

**Rules carried into implementation (per `docs/00-project-rules.md`):**
- No invented business facts, pricing, credentials, or reviews may appear in code, placeholder copy, or sample content — anything still TBD in `02-business-profile.md` must render as an omitted section, a genuinely neutral statement, or a clearly-marked pending state, never a fabricated placeholder value (e.g., never hardcode a fake phone number "just to see the layout").
- Server Components by default; Client Components only where interactivity requires it (navigation toggle, forms, accordions, carousels).
- One reusable component per repeated pattern — the 6 service pages and 8 town pages should each be built from one shared, data-driven template rather than 6 (or 8) separate copies of the same markup.
- Every phase's SEO checklist should stay consistent with the exact primary keyword, title, meta description, H1, and internal-link targets assigned to that page in `04-keyword-map.md` and `05-content-plan.md`.

**A note on "Dependencies" below:** for each phase this means both (a) which earlier phases must be complete first, and (b) any new npm packages that phase would introduce. Per the coding rules, no new dependency should be added unless the phase genuinely requires it — most phases need none.

---

# Phase 1 — Project Foundation

## Goal
Establish shared project structure and conventions before any real page content is built, so later phases build on a consistent foundation rather than improvising structure page-by-page.

## Files Created or Modified
- `data/services.ts` (new) — typed content structure for the 6 services (slug, name, primary keyword, TBD-flagged copy fields)
- `data/serviceAreas.ts` (new) — typed content structure for the 8 towns (slug, name, primary keyword, local-context field)
- `data/faq.ts` (new) — typed structure for grouped FAQ content
- `types/content.ts` (new) — shared TypeScript types for the above data files
- `lib/constants.ts` (new) — sitewide constants (e.g., business name), pulling only confirmed values from `02-business-profile.md`; unconfirmed fields explicitly typed as `string | "TBD"` or omitted from the type entirely rather than defaulted to a placeholder string
- `app/globals.css` (modify) — establish design tokens (spacing scale, type scale) using placeholder-neutral colors until real brand colors are confirmed
- `tsconfig.json` (no change expected — `@/*` alias already configured)

## Components to Build
None yet — this phase is data/structure only, no visual components.

## Dependencies
- Prior phases: none (first phase)
- New packages: none

## Estimated Complexity
Low

## Definition of Done
- `npm run dev` and `npm run build` both succeed with no errors
- Data files exist and type-check, covering all 6 services, all 8 towns, and the FAQ groupings from `05-content-plan.md`
- No page-visible output changes yet (this phase is invisible to a site visitor)

## Testing Checklist
- [ ] `npm run build` completes without TypeScript errors
- [ ] `npm run lint` passes
- [ ] Data file shapes reviewed against `04-keyword-map.md` and `05-content-plan.md` for completeness (every service/town has a primary keyword field, etc.)

## Accessibility Checklist
- Not applicable at this stage — no rendered UI yet.

## Mobile Checklist
- Not applicable at this stage — no rendered UI yet.

## SEO Checklist
- Confirm the data structures include a field for every element `04-keyword-map.md` requires per page (primary keyword, secondary keyword, URL slug, H1) so no later phase has to retrofit missing fields.

---

# Phase 2 — Global Layout

## Goal
Build the page shell that wraps every route: base header/footer structure, layout primitives, and design tokens — structural only, interactivity comes in Phase 3.

## Files Created or Modified
- `app/layout.tsx` (modify) — wrap `{children}` with `Header` and `Footer`, keep existing font setup
- `components/layout/Header.tsx` (new) — structural header (logo, nav placeholder, CTA button placeholder)
- `components/layout/Footer.tsx` (new) — footer with service list, service-area list, and a contact-info block that gracefully omits phone/email/hours until confirmed
- `components/layout/Container.tsx` (new) — shared max-width/padding wrapper
- `components/layout/Section.tsx` (new) — shared vertical-spacing wrapper for page sections
- `components/ui/CTAButton.tsx` (new) — reusable primary/secondary button component
- `app/globals.css` (modify) — layout-level styles

## Components to Build
`Header`, `Footer`, `Container`, `Section`, `CTAButton`

## Dependencies
- Prior phases: Phase 1 (data files for footer's service/town link lists)
- New packages: none

## Estimated Complexity
Medium

## Definition of Done
- Header and footer render on every route consistently
- Footer's service and service-area links are generated from `data/services.ts` and `data/serviceAreas.ts` (no hardcoded duplicate list)
- No phone number, email, or hours appear anywhere in the footer or header — these render as omitted or as a form-only "Contact Us" link until `02-business-profile.md` §2 is confirmed

## Testing Checklist
- [ ] Header/footer render correctly on a placeholder route at mobile and desktop widths
- [ ] Footer link count matches the confirmed 6 services + 8 towns exactly
- [ ] No console errors or hydration warnings

## Accessibility Checklist
- [ ] `<header>`, `<nav>`, `<footer>` landmark elements used correctly
- [ ] Skip-to-content link present and functional
- [ ] Visible focus states on all header/footer links and buttons
- [ ] Color contrast checked against the placeholder palette (re-check once real brand colors are confirmed)

## Mobile Checklist
- [ ] Header does not overflow or wrap awkwardly at narrow widths
- [ ] Footer link groups stack cleanly on mobile
- [ ] Tap targets in header/footer are at least 44×44px

## SEO Checklist
- [ ] Footer links use descriptive anchor text (service/town names, not "click here")
- [ ] Header/footer links render as real `<a>`/`next/link` elements in server-rendered HTML (crawlable without JS)
- [ ] No placeholder phone number or address text left anywhere that could be indexed

---

# Phase 3 — Navigation

## Goal
Build the interactive navigation layer on top of the Phase 2 shell: desktop nav menu, mobile menu, sticky mobile CTA bar, and breadcrumbs.

## Files Created or Modified
- `components/nav/MainNav.tsx` (new, Client Component) — desktop nav links + mobile menu toggle state
- `components/nav/MobileMenu.tsx` (new, Client Component) — mobile slide-out/dropdown menu
- `components/nav/MobileCTABar.tsx` (new, Client Component if scroll-based visibility is used, otherwise Server Component) — sticky "Call Now" / "Get Estimate" bar
- `components/nav/Breadcrumbs.tsx` (new) — used on service and town pages in later phases
- `components/layout/Header.tsx` (modify) — wire in `MainNav`
- `app/layout.tsx` (modify) — add `MobileCTABar` at root level

## Components to Build
`MainNav`, `MobileMenu`, `MobileCTABar`, `Breadcrumbs`

## Dependencies
- Prior phases: Phase 2 (Header/Footer shell must exist)
- New packages: none required — use inline SVGs for the hamburger/close/chevron icons rather than adding an icon library, per the "avoid unnecessary dependencies" rule

## Estimated Complexity
Medium–High (first client-side interactivity and first accessibility-sensitive interaction pattern in the project)

## Definition of Done
- Desktop nav shows Services, Service Areas, Gallery, Reviews, About, FAQ, Contact (per `01-website-blueprint.md` §3)
- Mobile nav collapses into a hamburger menu that opens/closes correctly
- Sticky mobile CTA bar appears on mobile without covering page content or the final CTA banner
- Breadcrumbs component is built and ready for use in Phases 5 and 8 (service and town pages)

## Testing Checklist
- [ ] Mobile menu opens and closes via the toggle button
- [ ] Mobile menu closes when a link inside it is clicked
- [ ] Keyboard-only pass: Tab reaches every nav item in a logical order
- [ ] Esc key closes the mobile menu

## Accessibility Checklist
- [ ] Hamburger toggle has `aria-expanded` reflecting open/closed state
- [ ] Mobile menu traps focus while open and returns focus to the toggle button on close
- [ ] Active/current page link marked with `aria-current="page"`
- [ ] Breadcrumb list uses an ordered/unordered list with appropriate ARIA (`aria-label="Breadcrumb"`)

## Mobile Checklist
- [ ] Hamburger menu pattern confirmed as the mobile nav approach (closes the gap flagged in the earlier consistency review)
- [ ] Sticky CTA bar and mobile menu never overlap each other
- [ ] No horizontal scroll introduced by the nav at any breakpoint

## SEO Checklist
- [ ] All nav links are present in server-rendered HTML regardless of mobile menu's JS-driven open/close state
- [ ] Breadcrumb component structured so BreadcrumbList schema (per `03-seo-strategy.md` §11) can be attached to it in later phases

---

# Phase 4 — Homepage

## Goal
Build the homepage exactly as structured in `05-content-plan.md`'s Homepage section — all 9 sections, in order, using the Homepage Content Flow reasoning from that document.

## Files Created or Modified
- `app/page.tsx` (modify) — replace the current `create-next-app` starter content entirely
- `components/home/Hero.tsx` (new)
- `components/home/TrustBar.tsx` (new) — TBD-gated; renders only currently-defensible statements per `05-content-plan.md`
- `components/home/ServicesGrid.tsx` (new) — driven by `data/services.ts`
- `components/home/WhyUs.tsx` (new)
- `components/home/HowItWorks.tsx` (new)
- `components/home/ServiceAreaCallout.tsx` (new) — driven by `data/serviceAreas.ts`
- `components/home/Testimonials.tsx` (new) — conditionally rendered; omitted entirely if no real testimonials exist yet
- `components/home/AirbnbPropertyManagerCallout.tsx` (new)
- `components/ui/CTABanner.tsx` (new, reusable — will be reused on nearly every later page)

## Components to Build
`Hero`, `TrustBar`, `ServicesGrid`, `WhyUs`, `HowItWorks`, `ServiceAreaCallout`, `Testimonials`, `AirbnbPropertyManagerCallout`, `CTABanner`

## Dependencies
- Prior phases: Phases 1–3 (data files, layout shell, nav)
- New packages: a lightweight carousel is only needed if `Testimonials` ships with more than a few real reviews requiring rotation — defer that decision until real testimonial content exists; build as a static list first

## Estimated Complexity
High — first fully content-populated page, and the page every later phase's CTA links back to

## Definition of Done
- All 9 sections render in the order specified in `05-content-plan.md`
- Hero H1 reads "Heber Valley's Cleaning Experts" (not "Trusted" — per the resolved contradiction from the consistency review)
- Trust Bar shows only TBD-safe statements (e.g., "Serving the Heber Valley," "Flexible Scheduling") with no "Licensed & Insured," star rating, or years-in-business claim
- Testimonials section is entirely omitted from the render if no real testimonial data exists (not shown empty or with placeholder quotes)
- Airbnb/Property Manager callout copy addresses both audiences explicitly, not just Airbnb hosts

## Testing Checklist
- [ ] Manual content audit: no sentence anywhere on the page states an unconfirmed fact (cross-check against `02-business-profile.md` §11)
- [ ] All CTA buttons link to their correct destination routes (service pages, `/service-areas`, `/get-estimate`)
- [ ] Services grid renders exactly 6 cards, matching `data/services.ts`
- [ ] Responsive layout check at common breakpoints (360px, 768px, 1024px, 1440px)

## Accessibility Checklist
- [ ] Exactly one `<h1>` on the page; all other headings are `<h2>`/`<h3>` in logical order
- [ ] Every image has meaningful alt text (or `alt=""` if purely decorative)
- [ ] Testimonials (if rendered) are keyboard-navigable if any carousel/rotation is used, and not auto-advancing without a pause control

## Mobile Checklist
- [ ] Hero text and CTA buttons remain legible and tappable at narrow widths
- [ ] Services grid reflows to 1–2 columns on mobile
- [ ] Final CTA banner does not visually collide with the sticky mobile CTA bar

## SEO Checklist
- [ ] Title tag, meta description, and H1 match the Homepage entry in `04-keyword-map.md` exactly
- [ ] `Organization` and `WebSite` structured data added per `03-seo-strategy.md` §11, using only confirmed fields
- [ ] Internal links present to all 6 service pages, `/service-areas`, `/get-estimate`, and `/about`

---

# Phase 5 — Service Pages

## Goal
Build the Services Hub and all 6 individual service pages from one shared, data-driven template, per `01-website-blueprint.md` §7's recommendation and the project rule against duplicated code.

## Files Created or Modified
- `app/services/page.tsx` (new) — Services Hub
- `app/services/[service]/page.tsx` (new, dynamic route) — renders all 6 service pages from `data/services.ts`
- `components/services/ServiceHero.tsx` (new)
- `components/services/WhatsIncluded.tsx` (new) — renders task checklist; shows an explicit "pending confirmation" state per service until real checklists exist, rather than inventing tasks
- `components/services/WhoItsFor.tsx` (new)
- `components/services/WhyChooseUs.tsx` (new, reusable across all 6 services)
- `components/services/ProcessTimeline.tsx` (new)
- `components/services/PricingNote.tsx` (new) — quote-based messaging only, no figures
- `components/services/ServiceFAQ.tsx` (new) — 2–3 question mini-FAQ per service
- `components/services/ServicesHubGrid.tsx` (new) — full-description grid for the hub page

## Components to Build
`ServiceHero`, `WhatsIncluded`, `WhoItsFor`, `WhyChooseUs`, `ProcessTimeline`, `PricingNote`, `ServiceFAQ`, `ServicesHubGrid`

## Dependencies
- Prior phases: Phases 1–4 (data, layout, nav, `CTABanner`, `Breadcrumbs` from Phase 3)
- New packages: none

## Estimated Complexity
High (6 pages worth of content, though the shared-template approach keeps incremental cost per page low after the first is built)

## Definition of Done
- `generateStaticParams` produces all 6 service routes correctly from `data/services.ts`
- Every service page renders all 9 sections from its `05-content-plan.md` outline in order
- Services Hub uses a keyword distinct from the homepage (per the consistency-review fix already applied in `04-keyword-map.md` and `05-content-plan.md`)
- Cross-links between related services work exactly as specified in the Internal Linking Plan (e.g., Residential ↔ Deep Cleaning, Airbnb ↔ Recurring)

## Testing Checklist
- [ ] All 6 service URLs resolve with correct, unique content (no accidental duplicate rendering)
- [ ] Breadcrumbs render correctly (Home > Services > [Service])
- [ ] Every internal cross-link listed in `05-content-plan.md`'s Internal Linking Plan is present and functional
- [ ] "What's Included" sections show a clearly-labeled pending state, not fabricated task lists

## Accessibility Checklist
- [ ] Consistent heading hierarchy across all 6 pages (template consistency also aids screen-reader users navigating between similar pages)
- [ ] Mini-FAQ accordions (if collapsible) use `aria-expanded`/`aria-controls`
- [ ] Checklist items in "What's Included" use a real list element (`<ul>`), not styled divs

## Mobile Checklist
- [ ] Checklist and process-timeline sections reflow cleanly on narrow screens
- [ ] CTA buttons remain reachable without excessive scrolling on each service page

## SEO Checklist
- [ ] Unique title, meta description, H1, and primary keyword per page, matching `04-keyword-map.md` exactly
- [ ] `Service` schema markup added per `03-seo-strategy.md` §11
- [ ] Canonical tag on each page to prevent the 6 templated pages from being flagged as duplicate content
- [ ] Internal links use descriptive, keyword-relevant anchor text (not "click here")

---

# Phase 6 — About Page

## Goal
Build the About page per `05-content-plan.md`, communicating brand values honestly while explicitly deferring any unconfirmed factual content.

## Files Created or Modified
- `app/about/page.tsx` (new)
- `components/about/CompanyStory.tsx` (new) — renders a clearly-marked pending state if real founding story content isn't yet provided
- `components/about/MissionValues.tsx` (new)
- `components/about/TeamSection.tsx` (new, optional/conditionally rendered)

## Components to Build
`CompanyStory`, `MissionValues`, `TeamSection` (reuses `TrustBar` and `CTABanner` from earlier phases)

## Dependencies
- Prior phases: Phases 1–4 (layout, nav, `TrustBar`, `CTABanner`)
- New packages: none

## Estimated Complexity
Low–Medium

## Definition of Done
- Page renders without stating any unconfirmed years-in-business figure, ownership claim, or certification
- `TeamSection` is omitted entirely if no team photos/bios are provided, rather than rendering with placeholder headshots

## Testing Checklist
- [ ] Manual content audit against `02-business-profile.md` §11 (no invented claims)
- [ ] Page builds correctly whether or not `TeamSection` content exists

## Accessibility Checklist
- [ ] Heading hierarchy correct
- [ ] Team photos (if present) have real alt text (names/roles, not "photo of employee")

## Mobile Checklist
- [ ] Team grid (if present) reflows to a single column on mobile

## SEO Checklist
- [ ] Title, meta description, and H1 match the About entry in `04-keyword-map.md`
- [ ] Internal links to `/services`, `/reviews`, `/get-estimate` present

---

# Phase 7 — Contact / Estimate

## Goal
Build `/contact` and `/get-estimate`, plus the shared `EstimateForm` component that both pages (and every service page's CTA banner) rely on.

## Files Created or Modified
- `app/contact/page.tsx` (new)
- `app/get-estimate/page.tsx` (new)
- `components/forms/EstimateForm.tsx` (new, Client Component — form state and validation require it)
- `components/forms/FormField.tsx` (new, reusable labeled input component)
- `app/api/estimate/route.ts` (new) — handles form submission server-side
- `lib/sendEstimateRequest.ts` (new) — submission/email logic

## Components to Build
`EstimateForm`, `FormField`, plus `/contact` and `/get-estimate` page compositions

## Dependencies
- Prior phases: Phases 1–4 (layout, nav, `CTABanner`)
- New packages: **decision required** — this phase needs a way to actually deliver form submissions (e.g., an email-sending service or third-party form backend). No such service has been confirmed anywhere in the planning documents, and the hosting platform itself is also unconfirmed. **This is a real open decision, not yet made** — do not default to a specific paid service without confirming budget/preference first; the simplest viable option (e.g., a serverless API route emailing via a provider, or a lightweight form service) should be chosen once hosting is decided.

## Estimated Complexity
High — first backend/data-submission logic in the project, and the page where the site's entire primary goal (lead generation) is actually fulfilled

## Definition of Done
- Form validates required fields (name, phone, email, service needed) before submission
- Successful submission shows a clear confirmation state; failed submission shows a clear, actionable error state
- Contact info block on `/contact` omits phone/email/hours gracefully if still unconfirmed, rather than showing placeholder values
- `/get-estimate` remains deliberately lean — no full site navigation clutter, per the blueprint's original intent

## Testing Checklist
- [ ] Form submits successfully with valid data end-to-end (through to the API route)
- [ ] Form shows validation errors for missing/invalid required fields
- [ ] Duplicate/rapid submissions handled gracefully (basic debounce or disable-on-submit)
- [ ] Keyboard-only form completion works start to finish

## Accessibility Checklist
- [ ] Every input has a real, associated `<label>` (not placeholder-text-as-label)
- [ ] Validation errors are announced via `aria-live` and associated with their field via `aria-describedby`
- [ ] Focus moves to the first invalid field on a failed submission attempt

## Mobile Checklist
- [ ] Input font size is at least 16px to prevent iOS Safari's zoom-on-focus behavior
- [ ] Submit button remains reachable without excessive scrolling on `/get-estimate`
- [ ] Dropdowns (service/property type) are usable with native mobile pickers

## SEO Checklist
- [ ] `/contact` and `/get-estimate` have distinct primary keywords, titles, and meta descriptions per `04-keyword-map.md` (they must not compete with each other)
- [ ] `/get-estimate` has minimal internal links by design; `/contact` links to `/get-estimate` and `/faq`

---

# Phase 8 — Service Areas

## Goal
Build the `/service-areas` hub and all 8 individual town pages from one shared, data-driven template — with genuinely unique local content per town, not name-swapped duplicates.

## Files Created or Modified
- `app/service-areas/page.tsx` (new) — hub page
- `app/service-areas/[town]/page.tsx` (new, dynamic route) — renders all 8 town pages from `data/serviceAreas.ts`
- `components/serviceAreas/TownHero.tsx` (new)
- `components/serviceAreas/LocalContext.tsx` (new) — renders the unique local-context paragraph per town
- `components/serviceAreas/ServicesAvailable.tsx` (new)
- `components/serviceAreas/AreaMap.tsx` (new) — simple service-area map graphic, reused on the hub page too

## Components to Build
`TownHero`, `LocalContext`, `ServicesAvailable`, `AreaMap`

## Dependencies
- Prior phases: Phases 1–4 (data, layout, nav, `CTABanner`, `Breadcrumbs`)
- New packages: none required (a static map image/graphic is sufficient; an interactive map library is not necessary at this stage)

## Estimated Complexity
Medium–High — structurally similar to Phase 5, but the real effort here is writing genuinely distinct local-context content per town, not just building the template

## Definition of Done
- `generateStaticParams` produces all 8 town routes correctly
- Each town page's local-context paragraph is meaningfully different from the others — this must be verified by actually reading at least two town pages side by side, not just confirming the template renders
- Each town page links to its 1–2 most relevant service pages per the emphasis table in `05-content-plan.md`
- Hub page links to all 8 towns and back to the homepage

## Testing Checklist
- [ ] All 8 town URLs resolve correctly
- [ ] Spot-check at least 3 town pages to confirm body copy is genuinely unique, not templated with only the town name swapped
- [ ] Internal links from each town page to its relevant service page(s) work

## Accessibility Checklist
- [ ] Consistent heading structure across all 8 pages
- [ ] Map graphic has appropriate alt text or is marked decorative with a text-based town list alongside it

## Mobile Checklist
- [ ] Town list/grid on the hub page reflows cleanly on mobile
- [ ] Map graphic scales without breaking layout

## SEO Checklist
- [ ] Unique title, meta description, H1, and primary keyword per town, matching the table in `04-keyword-map.md`/`05-content-plan.md` exactly
- [ ] `BreadcrumbList` schema (Home > Service Areas > [Town])
- [ ] Canonical tags to guard against duplicate-content flags across the 8 similarly-structured pages

---

# Phase 9 — FAQ

## Goal
Build the `/faq` page with grouped, accordion-style Q&A and `FAQPage` structured data, and wire the mini-FAQ sections into the 6 service pages built in Phase 5.

## Files Created or Modified
- `app/faq/page.tsx` (new)
- `components/faq/FAQAccordion.tsx` (new, Client Component — expand/collapse state)
- `components/faq/FAQItem.tsx` (new)
- `data/faq.ts` (modify from Phase 1 scaffold) — populate grouped questions; Trust & Safety group explicitly marked pending until `02-business-profile.md` §9 is confirmed

## Components to Build
`FAQAccordion`, `FAQItem`

## Dependencies
- Prior phases: Phases 1–4 (data, layout, nav, `CTABanner`); Phase 5 (service pages, to wire in their mini-FAQ sections if not already done there)
- New packages: none

## Estimated Complexity
Medium

## Definition of Done
- All 5 question groups render (Booking & Scheduling, Pricing, Airbnb-Specific, Trust & Safety, Service Area)
- Trust & Safety group either omits unanswerable questions or clearly marks them as pending — never renders an invented "yes, we're insured" answer
- Final CTA on the page routes to `/get-estimate`, not `/contact` (per the fix specified in `05-content-plan.md`'s Internal Linking Plan)
- `FAQPage` structured data is generated only from real, populated Q&A pairs — not from placeholder text

## Testing Checklist
- [ ] Each accordion item expands/collapses correctly on click and on Enter/Space when focused
- [ ] Structured data validates in Google's Rich Results Test once real content is in place
- [ ] Links from each question to its relevant service page work correctly

## Accessibility Checklist
- [ ] Accordion buttons use `aria-expanded` and `aria-controls`
- [ ] Focus remains visible and logical when expanding/collapsing items
- [ ] Each question group has a proper heading (`<h2>`/`<h3>`)

## Mobile Checklist
- [ ] Accordion tap targets are large enough for comfortable mobile use
- [ ] Long answers remain readable without horizontal scrolling

## SEO Checklist
- [ ] Title, meta description, H1 match the FAQ entry in `04-keyword-map.md`
- [ ] `FAQPage` schema present and valid
- [ ] Internal links to relevant service pages and to `/get-estimate` present

---

# Phase 10 — Performance

## Goal
Sitewide performance pass across every page built in Phases 4–9, targeting strong Core Web Vitals given this is a mobile-heavy, lead-generation site.

## Files Created or Modified
- `next.config.ts` (modify) — image optimization settings, any `remotePatterns` needed
- Various components from Phases 4–9 (modify) — correct `next/image` `priority`/`loading` usage, reduce unnecessary Client Component boundaries
- `app/sitemap.ts` (new) — dynamic sitemap generation from the data files
- `app/robots.ts` (new)

## Components to Build
None new — this phase audits and optimizes existing components rather than building new ones.

## Dependencies
- Prior phases: Phases 1–9 (there must be real pages to measure)
- New packages: none expected; avoid adding a heavier image/animation library purely for performance polish

## Estimated Complexity
Medium

## Definition of Done
- Lighthouse performance score meets an internally agreed target (e.g., 90+) on the homepage, one representative service page, and one town page, on both mobile and desktop profiles
- Audit confirms the majority of components remain Server Components — Client Component usage is limited to `MainNav`/`MobileMenu`, `EstimateForm`, `FAQAccordion`, and any testimonial carousel
- `sitemap.ts` and `robots.ts` correctly list every route generated across Phases 4–9

## Testing Checklist
- [ ] Lighthouse run (mobile + desktop) on Home, one service page, one town page, `/get-estimate`
- [ ] Bundle-size check — no unused dependencies present
- [ ] Sitemap includes all static and dynamic routes; robots.txt doesn't accidentally block crawlable pages

## Accessibility Checklist
- [ ] Confirm no accessibility regressions were introduced by lazy-loading or code-splitting changes (e.g., images still carry alt text after any refactor)

## Mobile Checklist
- [ ] Mobile-specific Lighthouse run, ideally under a throttled network profile, not just desktop scores

## SEO Checklist
- [ ] `sitemap.xml` submitted-ready and accurate
- [ ] `robots.txt` allows crawling of all public pages
- [ ] Canonical tags verified sitewide after any performance-related refactor

---

# Phase 11 — Accessibility

## Goal
Dedicated sitewide accessibility audit and remediation pass, beyond the per-phase checklists already applied during construction.

## Files Created or Modified
- Any component flagged during the audit (likely candidates: `MobileMenu`, `EstimateForm`, `FAQAccordion`, `Testimonials` carousel if built) — this phase is remediation of existing files, not new page creation

## Components to Build
None new — remediation only.

## Dependencies
- Prior phases: Phases 1–10 (the full site must exist to audit it meaningfully)
- New packages: none expected; if an automated testing tool is added (e.g., axe-core for CI), scope it to dev dependencies only

## Estimated Complexity
Medium

## Definition of Done
- Automated accessibility scan (e.g., axe or Lighthouse accessibility category) meets an internally agreed target (e.g., 95+) on every page template
- Full keyboard-only walkthrough completed successfully across the entire site, including the estimate form and both accordions (service mini-FAQs and the main FAQ page)
- Manual screen reader spot-check completed on the homepage, one service page, and the estimate form

## Testing Checklist
- [ ] Automated scan run against every unique page template (not just the homepage)
- [ ] Full keyboard-only pass, tabbing through the entire site including nav, forms, and accordions
- [ ] Screen reader spot-check (e.g., NVDA or VoiceOver) on key conversion paths

## Accessibility Checklist
- [ ] Color contrast verified sitewide, especially once real brand colors are confirmed and applied (re-check against the placeholder-palette assumptions made in Phase 1/2)
- [ ] Logical focus order confirmed on every page
- [ ] Skip-to-content link functions correctly from every page
- [ ] All interactive elements reachable and operable via keyboard alone
- [ ] Form errors announced to assistive technology
- [ ] All meaningful images have descriptive alt text; decorative images marked `alt=""`

## Mobile Checklist
- [ ] Touch target sizing audit (minimum ~44×44px) across the whole site
- [ ] Pinch-to-zoom not disabled anywhere (no `user-scalable=no`)

## SEO Checklist
- [ ] Re-verify heading hierarchy sitewide (accessibility and SEO overlap directly here)
- [ ] Re-verify semantic HTML usage (nav, header, footer, main, section elements used correctly) across all templates

---

# Phase 12 — Launch

## Goal
Final pre-launch verification and go-live.

## Files Created or Modified
- `next.config.ts` (modify) — final production configuration
- `app/sitemap.ts` / `app/robots.ts` (verify, from Phase 10)
- Deployment/hosting configuration — **hosting platform is not yet confirmed in any planning document**; this must be decided before this phase can be completed (e.g., Vercel or another host)

## Components to Build
None new — this phase is verification, configuration, and go-live, not new feature construction.

## Dependencies
- Prior phases: all of Phases 1–11 must be complete
- New packages: none expected beyond whatever the chosen hosting platform requires (e.g., a deployment CLI) — **decision required**, not yet made

## Estimated Complexity
Medium

## Definition of Done
- Every item in `05-content-plan.md`'s Missing Content Checklist is either resolved and reflected in `02-business-profile.md`, or explicitly deferred with clear owner sign-off — nothing ships as silently-invented content
- Google Search Console and Analytics (or equivalent) connected
- Google Business Profile created once address/phone/hours are confirmed (per `03-seo-strategy.md` §10)
- All structured data validated via Google's Rich Results Test
- Full click-through QA pass completed across the live production build

## Testing Checklist
- [ ] Full click-through of every page and internal link on the production deployment
- [ ] End-to-end form submission test on production (not just staging)
- [ ] Cross-browser check: Chrome, Safari, Firefox, mobile Safari, Chrome for Android
- [ ] Custom 404 page verified
- [ ] 301 redirects (if migrating from any prior site/URLs) verified, if applicable

## Accessibility Checklist
- [ ] Final full-site accessibility scan re-run after any last-minute production configuration changes

## Mobile Checklist
- [ ] Final mobile QA pass, ideally on at least one real iOS and one real Android device

## SEO Checklist
- [ ] Sitemap submitted to Google Search Console (and Bing Webmaster Tools, if desired)
- [ ] Verify no pages are accidentally `noindex`ed
- [ ] NAP (Name, Address/Area, Phone) consistency confirmed across the live site, footer, and Google Business Profile
- [ ] Monitor initial crawl for errors in the days immediately following launch

---

# Cross-Phase Notes

- **No phase should introduce invented content to "make the page look complete."** Every phase's Definition of Done explicitly allows for omitted sections or pending states where real data doesn't exist yet — this is intentional and consistent with `docs/00-project-rules.md` §2, not a gap to quietly fill during development.
- **Two dependency decisions are still open and block real progress in Phases 7 and 12 specifically:** (1) which service will handle form submission/email delivery for the estimate form, and (2) which hosting platform the site will deploy to. Neither is confirmed in any planning document — these should be resolved before those phases begin, not defaulted to arbitrarily during implementation.
- **Phases 5 and 8 are the highest-content-effort phases**, not the highest code-complexity ones — the templates themselves are straightforward, but writing genuinely distinct, non-duplicate content for 6 services and 8 towns is real, unavoidable content work.
