# ShinySpaces Content Plan

**Source of truth for this document:** `docs/00-project-rules.md` (permanent project rules), `docs/01-website-blueprint.md` (site structure), `docs/02-business-profile.md` (confirmed facts — everything else TBD), `docs/03-seo-strategy.md` and `docs/04-keyword-map.md` (keyword assignments).

**Purpose:** Define the content *structure* for every page before development begins — what sections exist, in what order, and what each section needs to communicate. This is not polished marketing copy. Every section below states what information belongs there, not the finished sentences.

**Rules applied throughout (per `docs/00-project-rules.md` §2):**
- No invented years in business, review counts, certifications, insurance status, guarantees, pricing, or awards anywhere below.
- Any "trust element" that would rely on unconfirmed information is explicitly marked **TBD-gated** — meaning it should not appear on the live site until `docs/02-business-profile.md` is updated with real, confirmed data.
- Testimonials are marked **real-only** — no placeholder or invented quotes.
- Where the earlier design/SEO consistency review identified a fix (e.g., the homepage headline, the Services Hub keyword conflict, the property-manager/real-estate-agent content gap), this plan applies that fix rather than repeating the original issue.

---

# Homepage

## Goal
Convert first-time visitors into estimate requests or phone calls; establish a premium, credible first impression; route visitors to the right service.

## Target Audience
All segments (homeowners, Airbnb hosts, vacation rental owners, property managers, real estate agents, small businesses).

## Primary Keyword
cleaning services Heber City

## Search Intent
Transactional / Navigational

## Purpose
First touchpoint for nearly all traffic. Must communicate what ShinySpaces does, where it operates, and give an immediate, low-friction path to an estimate — while self-selecting visitors toward the service page most relevant to them.

## Page Outline

**1. Hero**
- Purpose: Immediate identification of business, service area, and primary action.
- Key information: Business name; that ShinySpaces offers residential, commercial, and Airbnb/vacation-rental cleaning; core service area (Heber Valley towns).
- Recommended CTA: "Get a Free Estimate" (primary), click-to-call (secondary — only once a phone number is confirmed).
- Trust elements: None baked in. Avoid superlative claims ("Trusted," "#1," "Top-Rated") since none are verifiable yet — use a neutral positioning statement instead (e.g., "Heber Valley's Cleaning Experts," not "Heber Valley's *Trusted* Cleaning Experts").
- Images needed: Real photo of a bright, clean home interior — **TBD**, no real photography exists yet.
- FAQ opportunities: None (too early in the page for FAQ content).

**2. Trust Bar**
- Purpose: Quick credibility scan for visitors deciding whether to keep reading.
- Key information: **TBD-gated.** Until licensing/insurance, review data, and years in business are confirmed (`02-business-profile.md` §9), this section must use only currently-defensible statements — e.g., "Serving the Heber Valley," "Flexible Scheduling," "Personalized Service." Swap in real badges ("Licensed & Insured," a real star rating, "X Years in Business") only once each is confirmed.
- Recommended CTA: None (supporting section).
- Trust elements: See above — this entire section is TBD-gated by design.
- Images needed: Simple line icons (no photography required).
- FAQ opportunities: None.

**3. Services Overview (editorial grid)**
- Purpose: Let visitors self-select the service relevant to them.
- Key information: All 8 confirmed services (§3 of `02-business-profile.md`), each with a short description, linking to its individual page. Airbnb Turnover Cleaning receives the featured/largest placement, reflecting its role as a real differentiator for the business rather than defaulting to the most generic category. The grid's row rhythm is deliberately varied rather than mechanically repeated: Row 1 leads with Airbnb (hero) beside Residential and Commercial; Row 2 is a calmer paired row (Post-Construction + Recurring); Row 3 shifts the dominant card to the end (Deep + Move-In/Out + Custom).
- Recommended CTA: none per card ("Learn More" text removed — the entire card is the link, with a corner arrow as the only visible affordance); closing CTA banner asks "Not sure which service fits your space?" and routes to `/get-estimate`.
- Trust elements: None required.
- Images needed: Real photography per service — TBD (`02-business-profile.md` §10). Until available, each service uses an abstract editorial media treatment (soft brand-toned gradient + subtle grain) in the exact aspect-ratio slot a real photo will later occupy, so photography can be swapped in without layout changes.
- FAQ opportunities: None.

**4. Why ShinySpaces (value props)**
- Purpose: Differentiate on process and reliability without relying on unverified credentials.
- Key information: Process-based value props only — e.g., reliability/on-time scheduling, a checklist-driven process, flexible scheduling options. Do **not** include "fully insured team" or "background-checked staff" language until confirmed (`02-business-profile.md` §9).
- Recommended CTA: None.
- Trust elements: Process transparency, not credential claims.
- Images needed: Supporting icons or lifestyle photography (TBD).
- FAQ opportunities: None.

**5. How It Works (3-step process)**
- Purpose: Reduce uncertainty about what happens after a visitor reaches out.
- Key information: Request estimate → schedule cleaning → enjoy a clean space.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: Process transparency.
- Images needed: Simple 3-step icon graphic.
- FAQ opportunities: "How do I get started?"

**6. Service Area Callout**
- Purpose: Let visitors quickly confirm their town is covered.
- Key information: List of all 8 towns served, linking to `/service-areas`.
- Recommended CTA: "See All Areas We Serve."
- Trust elements: None.
- Images needed: Simple service-area map graphic.
- FAQ opportunities: "Do you serve my town?"

**7. Testimonials**
- Purpose: Social proof.
- Key information: **Real testimonials only.** If none exist yet at launch, omit this section entirely rather than filling it with placeholder or invented quotes (`00-project-rules.md` §2 — never invent review counts or reviews).
- Recommended CTA: "Read More Reviews" → `/reviews`.
- Trust elements: Genuine customer quotes, with name/location if permitted — TBD until collected.
- Images needed: None required (reviewer photos only with explicit permission).
- FAQ opportunities: None.

**8. Airbnb & Property Manager Callout**
- Purpose: Speak directly to the two audiences most likely to need recurring/turnover service.
- Key information: Address **both** Airbnb hosts *and* property managers explicitly (the original blueprint draft only mentioned Airbnb hosts here — broadened per the consistency review's finding that property managers have no dedicated content anywhere on the site).
- Recommended CTA: "See Airbnb Turnover Services" / "Learn About Recurring Plans."
- Trust elements: None.
- Images needed: Staged, guest-ready rental photo — TBD.
- FAQ opportunities: None.

**9. Final CTA Banner**
- Purpose: Last conversion opportunity before the footer.
- Key information: Restate the free-estimate offer; repeat the phone number here too (not just in the header) once confirmed, for mobile visitors who've scrolled past the header.
- Recommended CTA: "Get Your Free Estimate Today" + "Call Now."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Services Hub

## Goal
Help visitors compare all 6 services and self-select before committing to a specific service page.

## Target Audience
Visitors who haven't yet decided which specific service they need.

## Primary Keyword
types of cleaning services offered *(deliberately distinct from the homepage's "cleaning services Heber City" — see the consistency review's flag that these two pages originally shared a primary keyword)*

## Search Intent
Navigational

## Purpose
SEO/navigation hub linking out to all 6 individual service pages with slightly more detail than the homepage's one-line grid.

## Page Outline

**1. Intro**
- Purpose: Frame the full range of services in one place.
- Key information: All 6 service names with a one-sentence description of the overall lineup.
- Recommended CTA: None yet.
- Trust elements: None.
- Images needed: None required.
- FAQ opportunities: None.

**2. Services Grid (full descriptions)**
- Purpose: Deeper self-selection than the homepage grid.
- Key information: 2–3 sentence description per service, linking to each dedicated page.
- Recommended CTA: "Learn More" per card.
- Trust elements: None.
- Images needed: One representative image/icon per service — TBD for real photography.
- FAQ opportunities: None.

**3. CTA Banner**
- Purpose: Capture visitors who are ready before reaching a specific service page.
- Key information: General free-estimate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Residential Cleaning

## Goal
Convert homeowner searches into estimate requests for one-time or recurring house cleaning.

## Target Audience
Homeowners (primary); real estate agents preparing a home for showing (secondary).

## Primary Keyword
house cleaning Heber City

## Search Intent
Transactional

## Purpose
Present the residential cleaning service clearly enough that a homeowner understands exactly what's covered and feels confident requesting an estimate.

## Page Outline

**1. Hero**
- Purpose: Identify the service and its core value immediately.
- Key information: "Residential House Cleaning" as the page focus; one-sentence value statement; service area reference.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None baked in — avoid "insured" or "guaranteed" language until confirmed.
- Images needed: Bright, clean living space photo — TBD.
- FAQ opportunities: None.

**2. What's Included**
- Purpose: Set concrete expectations about the scope of work.
- Key information: Task-by-task checklist of what a residential cleaning covers — **TBD**, since the detailed task checklist per service is unconfirmed (`02-business-profile.md` §3).
- Recommended CTA: None.
- Trust elements: Specificity itself is the trust signal here — avoid vague language once the real checklist exists.
- Images needed: Icon checklist or task-specific photography.
- FAQ opportunities: "What exactly is included in a standard cleaning?"

**3. Who It's For**
- Purpose: Help the visitor self-identify.
- Key information: Homeowners wanting either a one-time refresh or an ongoing cleaning plan.
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None required.
- FAQ opportunities: None.

**4. Why Choose ShinySpaces**
- Purpose: Differentiate from other local cleaners.
- Key information: Process-based differentiators only (reliability, attention to detail, flexible scheduling) — not certification-based claims until confirmed.
- Recommended CTA: None.
- Trust elements: Process transparency only.
- Images needed: None required.
- FAQ opportunities: None.

**5. Process / Timeline**
- Purpose: Explain how booking and scheduling work.
- Key information: Estimate request → scheduling → cleaning day flow, specific to residential bookings.
- Recommended CTA: None.
- Trust elements: Transparency about the process.
- Images needed: None required.
- FAQ opportunities: "How do I schedule a cleaning?" / "Can I set a recurring schedule?" (links to Recurring Cleaning page)

**6. Pricing Note**
- Purpose: Address pricing without stating numbers that don't exist yet.
- Key information: A transparency statement that pricing depends on home size, condition, and frequency, and that a free custom quote is available — no dollar figures (`00-project-rules.md` §2, never invent pricing).
- Recommended CTA: "Get a Free Estimate."
- Trust elements: Transparency about how quotes work.
- Images needed: None.
- FAQ opportunities: "How is pricing determined?"

**7. Testimonial(s)**
- Purpose: Social proof specific to residential customers.
- Key information: **Real testimonial only** — TBD until collected.
- Recommended CTA: None.
- Trust elements: Genuine testimonial.
- Images needed: None required.
- FAQ opportunities: None.

**8. FAQ Mini-Section**
- Purpose: Resolve 2–3 residential-specific hesitations.
- Key information: E.g., "Weekly vs. biweekly — which is right for me?", "Do I need to be home during the cleaning?", "What if I need to reschedule?"
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: As listed above.

**9. CTA Banner + Estimate Form**
- Purpose: Final conversion push.
- Key information: Restate the free-estimate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Commercial Cleaning

## Goal
Convert small business/office searches into recurring commercial cleaning inquiries.

## Target Audience
Small businesses (primary); property managers overseeing commercial units (secondary).

## Primary Keyword
commercial cleaning Heber City

## Search Intent
Transactional (B2B)

## Purpose
Reassure a business owner that ShinySpaces can be scheduled around business hours and handles commercial-scale work, then drive to a quote request.

## Page Outline

**1. Hero**
- Purpose: Identify the service and reassure it's built for businesses, not just homes.
- Key information: "Commercial Cleaning Services" headline; one-line value statement about flexible, after-hours scheduling.
- Recommended CTA: "Get a Free Quote."
- Trust elements: None baked in.
- Images needed: Clean office/retail interior photo — TBD.
- FAQ opportunities: None.

**2. What's Included**
- Purpose: Set expectations for commercial-scope work.
- Key information: Task checklist for commercial cleaning — **TBD** (`02-business-profile.md` §3).
- Recommended CTA: None.
- Trust elements: Specificity.
- Images needed: Task-specific photography.
- FAQ opportunities: "What's included in a commercial cleaning visit?"

**3. Who It's For**
- Purpose: Self-identification.
- Key information: Small businesses, offices, retail spaces; property managers of commercial units.
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

**4. Why Choose ShinySpaces**
- Purpose: Differentiate on reliability and discretion around business operations.
- Key information: Flexible/after-hours scheduling, minimal disruption to daily operations.
- Recommended CTA: None.
- Trust elements: Process-based only.
- Images needed: None.
- FAQ opportunities: None.

**5. Process / Timeline**
- Purpose: Explain how a business sets up and maintains service.
- Key information: Estimate → scheduling around business hours → ongoing service.
- Recommended CTA: None.
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: "Can cleaning happen after we close?"

**6. Pricing Note**
- Purpose: Address pricing without inventing figures.
- Key information: Pricing depends on square footage, frequency, and scope — free custom quote available.
- Recommended CTA: "Get a Free Quote."
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: "Do you offer contracts for recurring commercial cleaning?"

**7. Testimonial(s)**
- Purpose: Social proof from a commercial client.
- Key information: **Real testimonial only** — TBD.
- Recommended CTA: None.
- Trust elements: Genuine testimonial.
- Images needed: None.
- FAQ opportunities: None.

**8. FAQ Mini-Section**
- Purpose: Address B2B-specific hesitations.
- Key information: "Can cleaning be scheduled after hours?", "Do you offer recurring contracts?", "Do you serve multiple locations for one business?"
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: As listed above.

**9. CTA Banner + Estimate Form**
- Purpose: Final conversion push.
- Key information: Restate quote offer.
- Recommended CTA: "Get a Free Quote."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Airbnb Turnover Cleaning

## Goal
Convert Airbnb host and vacation rental owner searches into turnover cleaning bookings — a named priority audience.

## Target Audience
Airbnb hosts, vacation rental owners, property managers.

## Primary Keyword
Airbnb cleaning service Heber City

## Search Intent
Transactional, urgency-driven

## Purpose
Reassure hosts that ShinySpaces understands guest-turnaround timing and can be trusted with a photo-ready, guest-facing result — then drive to a quote or recurring-plan signup.

## Page Outline

**1. Hero**
- Purpose: Immediately signal turnaround-speed competence.
- Key information: "Airbnb & Vacation Rental Turnover Cleaning" headline; one-line value statement about working around booking calendars.
- Recommended CTA: "Get a Turnover Cleaning Quote."
- Trust elements: None baked in.
- Images needed: Staged, guest-ready bedroom/bathroom photo — TBD.
- FAQ opportunities: None.

**2. What's Included**
- Purpose: Set concrete expectations for what "turnover cleaning" means.
- Key information: Task checklist — **TBD** for exact confirmed scope, but the blueprint's draft list (full interior cleaning, linen changing, towel restocking, kitchen/bathroom sanitizing, trash removal, guest amenity restocking, damage/maintenance flagging, photo-ready staging check) should be confirmed against real service scope before publishing.
- Recommended CTA: None.
- Trust elements: Specificity.
- Images needed: Task-specific before/after photos.
- FAQ opportunities: "Do you restock guest supplies?" / "Do you flag damage or maintenance issues?"

**3. Who It's For**
- Purpose: Self-identification.
- Key information: Airbnb/VRBO hosts, vacation rental owners, property managers handling multiple units.
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

**4. Why Choose ShinySpaces**
- Purpose: Differentiate on reliability under time pressure.
- Key information: Scheduling flexibility around checkout/check-in windows, consistency across every turnover.
- Recommended CTA: None.
- Trust elements: Process-based only.
- Images needed: None.
- FAQ opportunities: None.

**5. Process / Timeline**
- Purpose: Explain how turnover scheduling integrates with a booking calendar.
- Key information: How a host requests service, how same-day/next-day turnovers are scheduled.
- Recommended CTA: None.
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: "Can you work around my guest checkout times?"

**6. Pricing Note**
- Purpose: Address pricing without inventing figures.
- Key information: Pricing depends on property size and turnover frequency — free custom quote available.
- Recommended CTA: "Get a Turnover Cleaning Quote."
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: "Is there a discount for recurring turnovers?" *(only answerable once confirmed — do not invent)*

**7. Testimonial(s)**
- Purpose: Social proof from a host or property manager.
- Key information: **Real testimonial only** — TBD.
- Recommended CTA: None.
- Trust elements: Genuine testimonial.
- Images needed: None.
- FAQ opportunities: None.

**8. FAQ Mini-Section**
- Purpose: Address host-specific hesitations.
- Key information: "Can you work around my guest checkout times?", "Do you handle linens?", "What if a guest leaves the property in poor condition?"
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: As listed above.

**9. CTA Banner + Estimate Form**
- Purpose: Final conversion push, with a secondary path to the Recurring Cleaning page for hosts wanting standing turnover schedules.
- Key information: Restate quote offer; cross-link to recurring plans.
- Recommended CTA: "Get a Turnover Cleaning Quote" (primary); "Set Up a Recurring Plan" (secondary).
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Move-In / Move-Out Cleaning

## Goal
Capture time-sensitive moving-related cleaning demand from homeowners, renters, and real estate agents.

## Target Audience
Homeowners, renters, real estate agents preparing a listing.

## Primary Keyword
move out cleaning Heber City

## Search Intent
Transactional, time-sensitive

## Purpose
Reassure a mid-move visitor that a thorough, deadline-aware clean is available for either the home they're leaving or the one they're entering.

## Page Outline

**1. Hero**
- Purpose: Identify the service and its two use cases (move-in and move-out).
- Key information: "Move-In / Move-Out Cleaning" headline; one-line value statement about a fresh start or a spotless handoff.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None baked in.
- Images needed: Empty, freshly cleaned room photo — TBD.
- FAQ opportunities: None.

**2. What's Included**
- Purpose: Set expectations for scope.
- Key information: Task checklist — **TBD** (`02-business-profile.md` §3).
- Recommended CTA: None.
- Trust elements: Specificity.
- Images needed: Empty-unit before/after photography.
- FAQ opportunities: "Is this different from a deep clean?" (cross-links to Deep Cleaning page)

**3. Who It's For**
- Purpose: Self-identification.
- Key information: Homeowners, renters, real estate agents preparing a home for sale or new occupancy.
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

**4. Why Choose ShinySpaces**
- Purpose: Differentiate on deadline reliability.
- Key information: On-time scheduling around move dates or closing dates.
- Recommended CTA: None.
- Trust elements: Process-based only.
- Images needed: None.
- FAQ opportunities: None.

**5. Process / Timeline**
- Purpose: Explain timing around a move.
- Key information: How far in advance to book relative to a move-out or move-in date.
- Recommended CTA: None.
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: "How soon before/after moving should I schedule this?"

**6. Pricing Note**
- Purpose: Address pricing without inventing figures.
- Key information: Pricing depends on square footage and condition — free custom quote available.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: None.

**7. Testimonial(s)**
- Purpose: Social proof.
- Key information: **Real testimonial only** — TBD.
- Recommended CTA: None.
- Trust elements: Genuine testimonial.
- Images needed: None.
- FAQ opportunities: None.

**8. FAQ Mini-Section**
- Purpose: Resolve move-specific confusion, including the overlap with Deep Cleaning.
- Key information: "Is this different from a deep clean?" (answer clearly so the two pages don't feel redundant to a visitor comparing them), "Do you clean empty units only, or occupied ones too?"
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: As listed above.

**9. CTA Banner + Estimate Form**
- Purpose: Final conversion push.
- Key information: Restate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Deep Cleaning

## Goal
Capture one-time, thorough-clean search intent distinct from standard/recurring cleaning.

## Target Audience
Homeowners (primary); Airbnb hosts needing a seasonal deep reset (secondary).

## Primary Keyword
deep cleaning service Heber City

## Search Intent
Transactional, some research intent

## Purpose
Clarify what makes a "deep clean" different from a standard cleaning and drive to an estimate.

## Page Outline

**1. Hero**
- Purpose: Identify the service and its distinction from standard cleaning.
- Key information: "Deep Cleaning Services" headline; one-line value statement about going beyond the surface.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None baked in.
- Images needed: Close-up detail shot (baseboards, appliances, grout) — TBD.
- FAQ opportunities: None.

**2. What's Included**
- Purpose: Set expectations for the expanded scope.
- Key information: Task checklist — **TBD** (`02-business-profile.md` §3), expected to include areas standard cleanings don't reach (baseboards, inside appliances, grout, vents, etc.).
- Recommended CTA: None.
- Trust elements: Specificity.
- Images needed: Detail-level before/after photography.
- FAQ opportunities: "How is a deep clean different from a regular cleaning?"

**3. Who It's For**
- Purpose: Self-identification.
- Key information: Homeowners due for a seasonal reset; hosts needing a periodic deep reset between standard turnovers.
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

**4. Why Choose ShinySpaces**
- Purpose: Differentiate on thoroughness.
- Key information: Checklist-driven process ensuring nothing is skipped.
- Recommended CTA: None.
- Trust elements: Process-based only.
- Images needed: None.
- FAQ opportunities: None.

**5. Process / Timeline**
- Purpose: Explain how long a deep clean takes and how to schedule one.
- Key information: Scheduling flow, expected time investment (real duration guidance TBD).
- Recommended CTA: None.
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: "How often should I schedule a deep clean?"

**6. Pricing Note**
- Purpose: Address pricing without inventing figures.
- Key information: Pricing depends on home size and current condition — free custom quote available.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: None.

**7. Testimonial(s)**
- Purpose: Social proof.
- Key information: **Real testimonial only** — TBD.
- Recommended CTA: None.
- Trust elements: Genuine testimonial.
- Images needed: None.
- FAQ opportunities: None.

**8. FAQ Mini-Section**
- Purpose: Resolve deep-clean-specific questions.
- Key information: "How is this different from a standard cleaning?", "Do I need a deep clean before a recurring plan starts?"
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: As listed above.

**9. CTA Banner + Estimate Form**
- Purpose: Final conversion push.
- Key information: Restate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Recurring Cleaning

## Goal
Convert homeowners, Airbnb hosts, property managers, and small businesses into ongoing (weekly/biweekly/monthly) cleaning plans.

## Target Audience
All recurring-need segments — this page serves every audience type that wants an ongoing schedule rather than a one-time service.

## Primary Keyword
recurring house cleaning Heber City

## Search Intent
Transactional, ongoing-service intent

## Purpose
Present recurring plans as simple and flexible, and serve as the natural next step for visitors coming from the Airbnb, Residential, or Commercial pages who want a standing schedule.

## Page Outline

**1. Hero**
- Purpose: Identify the service and its flexibility.
- Key information: "Recurring Cleaning Plans" headline; one-line value statement about choosing weekly/biweekly/monthly.
- Recommended CTA: "Set Up a Recurring Plan."
- Trust elements: None baked in.
- Images needed: Calendar/scheduling-themed graphic or lifestyle photo — TBD.
- FAQ opportunities: None.

**2. What's Included**
- Purpose: Clarify that recurring plans use the same task scope as the underlying service (residential/commercial/Airbnb), just on a schedule.
- Key information: Explain that scope follows the base service type — **TBD** pending each service's confirmed task checklist.
- Recommended CTA: None.
- Trust elements: Specificity once confirmed.
- Images needed: None required.
- FAQ opportunities: "Can I combine recurring cleaning with Airbnb turnovers?" (cross-links to Airbnb page)

**3. Who It's For**
- Purpose: Self-identification across audiences.
- Key information: Homeowners, Airbnb hosts, property managers, small businesses wanting an ongoing schedule.
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

**4. Why Choose ShinySpaces**
- Purpose: Differentiate on consistency across visits.
- Key information: Same standard every time, flexible frequency changes.
- Recommended CTA: None.
- Trust elements: Process-based only.
- Images needed: None.
- FAQ opportunities: None.

**5. Process / Timeline**
- Purpose: Explain how a recurring plan is set up and adjusted.
- Key information: Choosing a frequency, changing/pausing service.
- Recommended CTA: None.
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: "Can I change my cleaning frequency later?"

**6. Pricing Note**
- Purpose: Address pricing without inventing figures.
- Key information: Pricing depends on service type, frequency, and property — free custom quote available.
- Recommended CTA: "Set Up a Recurring Plan."
- Trust elements: Transparency.
- Images needed: None.
- FAQ opportunities: None.

**7. Testimonial(s)**
- Purpose: Social proof from a recurring customer.
- Key information: **Real testimonial only** — TBD.
- Recommended CTA: None.
- Trust elements: Genuine testimonial.
- Images needed: None.
- FAQ opportunities: None.

**8. FAQ Mini-Section**
- Purpose: Resolve recurring-plan-specific questions.
- Key information: "Is recurring cleaning available for rental properties?", "What happens if I need to skip a visit?"
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: As listed above.

**9. CTA Banner + Estimate Form**
- Purpose: Final conversion push.
- Key information: Restate offer.
- Recommended CTA: "Set Up a Recurring Plan."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Service Areas (Hub + Individual Town Pages)

## Goal
Establish full geographic coverage and route visitors to a locally-relevant page for their specific town.

## Target Audience
All segments confirming coverage of their specific location.

## Primary Keyword
cleaning services Heber Valley (hub) — each individual town page gets its own distinct primary keyword (see table below) to avoid competing with the hub or with each other.

## Search Intent
Navigational (hub); Transactional/local (individual town pages)

## Purpose
Confirm coverage clearly and give each town enough unique, genuine content to avoid a thin/duplicate-content pattern across 8 near-identical pages.

## Page Outline — Service Areas Hub

**1. Intro**
- Purpose: State the full service area plainly.
- Key information: "Proudly Serving the Heber Valley and Beyond" framing; list of all 8 confirmed towns.
- Recommended CTA: None yet.
- Trust elements: None.
- Images needed: Simple service-area map graphic.
- FAQ opportunities: None.

**2. Town List / Grid**
- Purpose: Route to each individual town page.
- Key information: All 8 towns, each linking to its own page.
- Recommended CTA: "View Services in [Town]" per entry.
- Trust elements: None.
- Images needed: None required.
- FAQ opportunities: None.

**3. Flexibility Note**
- Purpose: Address visitors just outside the listed towns.
- Key information: Whether ShinySpaces serves areas beyond the 8 listed — **TBD** (`02-business-profile.md` §4, "willingness to serve areas outside this list" unconfirmed). Do not state a definitive yes/no until confirmed.
- Recommended CTA: "Ask Us About Your Area" → `/contact`.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: "Do you serve areas outside these towns?"

**4. CTA Banner**
- Purpose: General conversion for visitors who've confirmed coverage.
- Key information: Restate estimate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

## Page Outline — Individual Town Pages (shared template for all 8)

**1. Hero**
- Purpose: Immediately confirm local coverage.
- Key information: "Cleaning Services in [Town], UT" headline.
- Recommended CTA: "Get a Free Estimate in [Town]" (localized CTA text, not the generic sitewide version).
- Trust elements: None.
- Images needed: Town-specific or general clean-home photography — TBD; do not present a photo as being from a specific town's job unless it genuinely is.
- FAQ opportunities: None.

**2. Local Context Paragraph**
- Purpose: Provide genuine, non-templated local relevance (avoids the thin-content risk flagged in the consistency review).
- Key information: A locally-specific angle per town (e.g., short-term rental density for Park City/Midway; residential/rural character for Charleston/Wallsburg/Daniel) — this paragraph must be written uniquely per town, not swapped by name only.
- Recommended CTA: None.
- Trust elements: None.
- Images needed: None required.
- FAQ opportunities: None.

**3. Services Available in [Town]**
- Purpose: Link to the 1–2 most relevant service pages for that town's likely need profile.
- Key information: Short list of services with links.
- Recommended CTA: "Learn More" per service link.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

**4. Testimonial (if available for that town)**
- Purpose: Local-specific social proof.
- Key information: **Real testimonial only**, ideally from a customer in or near that town — TBD, may not exist for every town at launch; omit rather than reuse a generic quote across multiple towns.
- Recommended CTA: None.
- Trust elements: Genuine testimonial.
- Images needed: None.
- FAQ opportunities: None.

**5. CTA Banner**
- Purpose: Final conversion push.
- Key information: Restate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: "Does ShinySpaces serve [Town]?" (safe to answer yes — all 8 towns are confirmed in `02-business-profile.md` §4)

### Per-Town Keyword & Emphasis Table

| Town | Primary Keyword | Content Emphasis |
|---|---|---|
| Heber City | cleaning services Heber City UT | General residential + commercial (primary town) |
| Midway | cleaning services Midway UT | Vacation rental / second-home emphasis |
| Park City | cleaning services Park City UT | Airbnb/short-term rental emphasis |
| Kamas | cleaning services Kamas UT | Residential emphasis |
| Hideout | cleaning services Hideout UT | Rental property emphasis |
| Daniel | cleaning services Daniel UT | Residential/rural emphasis |
| Charleston | cleaning services Charleston UT | Residential/rural emphasis |
| Wallsburg | cleaning services Wallsburg UT | Residential/rural emphasis |

*(The per-town emphasis above is a directional assumption based on each town's general character, not confirmed business data — validate before finalizing copy, consistent with the same assumption flagged in `03-seo-strategy.md` §6 and `04-keyword-map.md`.)*

---

# About

## Goal
Build trust and credibility through company story and values, within confirmed facts only.

## Target Audience
All segments in the research/trust-building phase.

## Primary Keyword
ShinySpaces cleaning company Heber City

## Search Intent
Informational / Research

## Purpose
Humanize the brand without stating any unconfirmed fact (years in business, ownership structure, certifications).

## Page Outline

**1. Hero**
- Purpose: Introduce the company.
- Key information: "Meet ShinySpaces" framing.
- Recommended CTA: None yet.
- Trust elements: None.
- Images needed: Team or brand photo — TBD.
- FAQ opportunities: None.

**2. Company Story**
- Purpose: Explain why/how the company started and its connection to the Heber Valley.
- Key information: **TBD** — real founding story needed; do not invent a start date, years-in-business figure, or ownership narrative (`00-project-rules.md` §2).
- Recommended CTA: None.
- Trust elements: Authenticity once real content exists.
- Images needed: None required.
- FAQ opportunities: None.

**3. Mission / Values**
- Purpose: Communicate what the company stands for.
- Key information: Value statements consistent with confirmed brand direction (`02-business-profile.md` §6): premium, trustworthy, modern, clean, local, mobile-friendly. These are positioning statements, not factual claims, so they're safe to state as-is.
- Recommended CTA: None.
- Trust elements: Values-based, not credential-based.
- Images needed: None required.
- FAQ opportunities: None.

**4. Team Section (optional)**
- Purpose: Humanize the people doing the work.
- Key information: Real names/photos/bios — **TBD**, entirely optional and only if the business wants to publish this.
- Recommended CTA: None.
- Trust elements: Authenticity.
- Images needed: Real team photos — TBD.
- FAQ opportunities: None.

**5. Trust Bar (repeat)**
- Purpose: Reinforce credibility before the final CTA.
- Key information: **Same TBD-gating rule as the homepage** — do not repeat "licensed & insured" or "background-checked staff" language here until confirmed.
- Recommended CTA: None.
- Trust elements: TBD-gated.
- Images needed: None.
- FAQ opportunities: None.

**6. CTA Banner**
- Purpose: Final conversion push.
- Key information: Restate estimate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Gallery

## Goal
Provide visual proof of cleaning quality through real before/after photography.

## Target Audience
Visitors in the research/trust-building phase, comparing providers visually.

## Primary Keyword
cleaning before and after Heber City

## Search Intent
Research / trust-building

## Purpose
Show real results. **This page should not launch until real before/after photography exists** — presenting stock photography as ShinySpaces' own work would violate the authenticity rule in `00-project-rules.md` §3 and the honesty constraints in `02-business-profile.md`.

## Page Outline

**1. Intro**
- Purpose: Frame the gallery.
- Key information: Short intro line about real results across the service area.
- Recommended CTA: None yet.
- Trust elements: None.
- Images needed: None required beyond the grid itself.
- FAQ opportunities: None.

**2. Before/After Grid (filterable by service type)**
- Purpose: Visual proof, organized by service.
- Key information: Real before/after image pairs — **entirely TBD**, none exist yet (`02-business-profile.md` §10).
- Recommended CTA: Contextual — a visitor filtering to "Airbnb" should see "Get a Turnover Cleaning Quote" rather than the generic estimate CTA (fixes the weak-CTA gap flagged in the consistency review).
- Trust elements: Authentic photography is the trust element itself.
- Images needed: Full set of real before/after photos — TBD.
- FAQ opportunities: None.

**3. CTA Banner**
- Purpose: Final conversion push.
- Key information: Restate estimate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Reviews

## Goal
Consolidate social proof in one place.

## Target Audience
Visitors in the final decision stage before contacting.

## Primary Keyword
ShinySpaces reviews

## Search Intent
Research / trust-building

## Purpose
Display real customer feedback. No star rating or review count may be shown until confirmed.

## Page Outline

**1. Intro**
- Purpose: Frame the page.
- Key information: Short intro line — **no rating badge** (e.g., "4.9/5 from 120+ reviews") until a real, verifiable count exists (`00-project-rules.md` §2, `02-business-profile.md` §9/§11).
- Recommended CTA: None yet.
- Trust elements: TBD-gated (no rating claim until confirmed).
- Images needed: None required.
- FAQ opportunities: None.

**2. Full Testimonial Grid**
- Purpose: Display all available real reviews.
- Key information: **Real reviews only**, ideally pulled from a confirmed source (e.g., Google Business Profile, once it exists) — currently none confirmed.
- Recommended CTA: None.
- Trust elements: Genuine reviews, with source noted if pulled from an external platform.
- Images needed: None required.
- FAQ opportunities: None.

**3. Leave-a-Review CTA**
- Purpose: Encourage new reviews from recent customers.
- Key information: Link/button to leave a review (needs a real Google Business Profile or review-platform link — TBD).
- Recommended CTA: "Leave Us a Review."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

**4. CTA Banner**
- Purpose: Final conversion push for visitors who've just read reviews.
- Key information: Restate estimate offer.
- Recommended CTA: "Get a Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# FAQ

## Goal
Answer common pre-purchase questions and support FAQ structured data.

## Target Audience
All segments in the research phase before booking.

## Primary Keyword
cleaning service FAQ Heber City

## Search Intent
Informational

## Purpose
Resolve hesitations with honest, TBD-marked answers where confirmed information doesn't exist yet — never a fabricated answer to fill a gap.

## Page Outline

**1. Intro**
- Purpose: Frame the page.
- Key information: Short intro line.
- Recommended CTA: None yet.
- Trust elements: None.
- Images needed: None required.
- FAQ opportunities: N/A (this section frames the FAQ, doesn't contain it).

**2. Booking & Scheduling**
- Purpose: Resolve logistics questions.
- Key information: "How far in advance do I need to book?", "Can I reschedule?" — answerable once real scheduling policy is confirmed.
- Recommended CTA: None.
- Trust elements: Process transparency.
- Images needed: None.
- FAQ opportunities: As listed.

**3. Pricing**
- Purpose: Address pricing questions honestly.
- Key information: "How is pricing determined?" — answer should explain the quote-based model (size, condition, frequency) without stating actual figures, consistent with `02-business-profile.md` §3 (pricing structure TBD).
- Recommended CTA: "Get a Free Estimate."
- Trust elements: Transparency about the quote process.
- Images needed: None.
- FAQ opportunities: As listed.

**4. Airbnb-Specific**
- Purpose: Address host-specific logistics.
- Key information: "Can you work around my guest checkout times?", "Do you handle same-day turnovers?"
- Recommended CTA: "Get a Turnover Cleaning Quote."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: As listed.

**5. Trust & Safety**
- Purpose: Address credibility questions honestly.
- Key information: "Are your cleaners background-checked?", "Are you insured?" — **these must only be answered once confirmed** (`02-business-profile.md` §9). Until then, this section should either omit these questions or state plainly that the information will be added once confirmed — never a fabricated "yes."
- Recommended CTA: None.
- Trust elements: TBD-gated — this is the section most at risk of accidentally introducing an invented claim.
- Images needed: None.
- FAQ opportunities: As listed, pending real answers.

**6. Service Area**
- Purpose: Confirm coverage.
- Key information: "Do you service Park City?" (and similar per town) — safe to answer using the confirmed town list in `02-business-profile.md` §4.
- Recommended CTA: "See All Areas We Serve" → `/service-areas`.
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: As listed.

**7. CTA Banner**
- Purpose: Final conversion push, routed to the highest-intent page.
- Key information: A visitor reaching the end of the FAQ is bottom-of-funnel — route to `/get-estimate` (the lean, high-conversion landing page) rather than the more general `/contact` page, per the consistency review's finding on this exact link.
- Recommended CTA: "Get Your Free Estimate."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: None.

---

# Contact

## Goal
Give visitors who've already decided to reach out a clear, informational way to do so.

## Target Audience
Visitors wanting direct contact details alongside the ability to send a message.

## Primary Keyword
contact ShinySpaces cleaning

## Search Intent
Navigational / Transactional

## Purpose
Informational contact hub — distinct in intent from the leaner `/get-estimate` landing page.

## Page Outline

**1. Hero**
- Purpose: Frame the page.
- Key information: "Get in Touch" headline.
- Recommended CTA: None yet.
- Trust elements: None.
- Images needed: None required.
- FAQ opportunities: None.

**2. Contact Information Block**
- Purpose: Provide direct contact details.
- Key information: Phone (click-to-call), email, service area statement, business hours — **all currently TBD** (`02-business-profile.md` §2). This block cannot be completed until these are confirmed; do not fill with placeholder values.
- Recommended CTA: Click-to-call (once confirmed).
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: "What's the best way to reach ShinySpaces?"

**3. Contact / Estimate Form**
- Purpose: Capture the lead directly on this page too.
- Key information: Name, phone, email, service needed, property type, city/zip, message.
- Recommended CTA: "Send a Message."
- Trust elements: None.
- Images needed: None.
- FAQ opportunities: "How quickly will I hear back?" *(cannot be answered with a specific time commitment until confirmed — `00-project-rules.md` §2, never invent response times)*

**4. Optional Map**
- Purpose: Visual location confirmation.
- Key information: Requires a confirmed address — **TBD**, omit until available.
- Recommended CTA: None.
- Trust elements: None.
- Images needed: Embedded map (needs confirmed address).
- FAQ opportunities: None.

---

# Get Estimate (Contact / Request Estimate — landing variant)

## Goal
Maximize conversion for high-intent traffic (organic bottom-funnel clicks and, eventually, paid ads) with a lean, distraction-free page.

## Target Audience
Visitors ready to request pricing — often the most bottom-of-funnel traffic on the site.

## Primary Keyword
free cleaning estimate Heber City *(deliberately distinct from `/contact`'s primary keyword, per the consistency review's finding that these two pages must not compete)*

## Search Intent
Transactional (bottom-of-funnel)

## Purpose
Convert as many high-intent visitors as possible with minimal distraction — this page intentionally has less content than any other page on the site.

## Page Outline

**1. Short Headline + Trust Bullets**
- Purpose: Immediate reassurance without a full page of content.
- Key information: Headline restating the free-estimate offer; 2–3 trust bullets — **TBD-gated**, only include bullets that are actually confirmed (e.g., "No obligation" is safe; "Licensed & insured" and "Fast response" are not, until confirmed).
- Recommended CTA: None yet (form is the CTA).
- Trust elements: TBD-gated, see above.
- Images needed: None required — optional single trust-building image only.
- FAQ opportunities: None (intentionally kept distraction-free).

**2. Estimate Form (above the fold)**
- Purpose: The entire point of the page.
- Key information: Name, phone, email, service needed, property type, city/zip, preferred date (optional), message (optional).
- Recommended CTA: "Submit Request."
- Trust elements: None additional.
- Images needed: None.
- FAQ opportunities: None.

**3. Testimonial Snippet**
- Purpose: One last trust nudge beside the form.
- Key information: **Real testimonial only** — TBD until collected; omit if none exist yet rather than showing a placeholder.
- Recommended CTA: None.
- Trust elements: Genuine testimonial.
- Images needed: None.
- FAQ opportunities: None.

*(No footer navigation clutter on this page, by design — internal links are deliberately minimal here.)*

---

# Homepage Content Flow

The homepage section order is built as a trust-building funnel, not a random list — each section answers the objection a visitor would have *right after* the one before it:

1. **Hero** answers "What is this and does it serve me?" in under two seconds.
2. **Trust Bar** answers "Can I trust this business at a glance?" immediately after the hero, before the visitor has invested any real attention.
3. **Services Overview** answers "Does this cover what I specifically need?" — this is the first branch point where a visitor with a clear need (e.g., Airbnb turnover) can peel off toward their service page.
4. **Why ShinySpaces** answers "Why this company over a competitor?" once the visitor has confirmed the service exists.
5. **How It Works** answers "What happens if I actually reach out?" — removing process uncertainty right before the first real ask.
6. **Service Area Callout** answers "Do they even come to my town?" — placed before testimonials so a visitor doesn't waste time reading social proof for a business that doesn't serve them.
7. **Testimonials** answers "Has this worked for people like me?" once the visitor has confirmed both the service and the coverage area apply to them.
8. **Airbnb & Property Manager Callout** exists as a secondary branch for a specific high-value audience who may have skimmed past the general services grid without seeing themselves reflected — placed late enough that general visitors aren't distracted by it, but before the visitor leaves.
9. **Final CTA Banner** is the last, lowest-friction ask, repeating both the form and the phone number for anyone who scrolled the whole way without yet converting.

The through-line: identify → establish basic trust → confirm relevance (service + location) → build deeper trust (testimonials) → catch any remaining high-value audience → ask one more time. Each section either moves a visitor closer to the estimate form or removes a specific reason they might not fill it out.

---

# Internal Linking Plan

| Page | Links To | Linked From |
|---|---|---|
| Homepage | All 6 service pages, `/service-areas`, `/get-estimate`, `/about` | Every page (header/footer, sitewide) |
| Services Hub | All 6 service pages, `/get-estimate` | Homepage, footer |
| Residential Cleaning | Recurring Cleaning, Deep Cleaning, relevant town pages, `/get-estimate` | Homepage, Services Hub, Recurring Cleaning, Deep Cleaning |
| Commercial Cleaning | Recurring Cleaning, Heber City town page, `/get-estimate` | Homepage, Services Hub, Recurring Cleaning |
| Airbnb Turnover Cleaning | Recurring Cleaning, Park City & Midway town pages, `/get-estimate` | Homepage (Airbnb/PM callout), Services Hub, Recurring Cleaning, Park City & Midway pages |
| Move-In / Move-Out Cleaning | Deep Cleaning, relevant town pages, `/get-estimate` | Homepage, Services Hub, Deep Cleaning |
| Deep Cleaning | Residential Cleaning, Move-In/Move-Out Cleaning, `/get-estimate` | Homepage, Services Hub, Residential Cleaning, Move-In/Move-Out Cleaning |
| Recurring Cleaning | Residential, Airbnb, Commercial Cleaning pages, `/get-estimate` | Homepage (Airbnb/PM callout), Services Hub, all other 5 service pages |
| Service Areas Hub | All 8 town pages, homepage | Homepage, footer, each town page |
| Individual Town Pages | 1–2 most relevant service pages, `/service-areas` hub, `/get-estimate` | `/service-areas` hub, relevant service pages, footer |
| About | `/services`, `/reviews`, `/get-estimate` | Homepage, footer |
| Gallery | Relevant service pages (contextual to filtered category), `/get-estimate` | Homepage, footer |
| Reviews | `/about`, `/get-estimate` | Homepage, footer |
| FAQ | Relevant service pages, `/get-estimate` *(not `/contact` — see fix below)* | Service page mini-FAQ sections, footer |
| Contact | `/get-estimate`, `/faq` | Header/footer navigation (sitewide) |
| Get Estimate | Deliberately minimal — no footer nav clutter by design | Homepage CTAs, every service page's CTA banner, sticky mobile CTA bar, FAQ page, paid ad links (future) |

**Fix applied here vs. earlier documents:** the FAQ page previously linked to `/contact`; this plan routes it to `/get-estimate` instead, since a visitor finishing the FAQ is bottom-of-funnel and belongs on the lean, high-conversion landing page rather than the more general contact page (per the consistency review finding).

---

# Missing Content Checklist

Everything below must be gathered/confirmed before the corresponding content can go live. Nothing on this list should be estimated, guessed, or filled with placeholder values in the meantime.

**Business facts (blocks Header, Footer, Contact, schema markup):**
- Phone number
- Email address
- Physical/mailing address (or defined service-area statement for the map/schema)
- Business hours
- Social media links
- Booking/scheduling software link, if any

**Trust & credibility (blocks Trust Bar, About, Reviews, FAQ Trust & Safety section):**
- Years in business
- Licensing status
- Insurance status
- Bonding status
- Any certifications held
- Staff background-check policy
- Any guarantees actually offered (e.g., re-clean policy)
- Awards or affiliations, if any

**Reviews (blocks Homepage Testimonials, Reviews page, Get Estimate testimonial snippet):**
- Real customer testimonials, with permission to publish
- Review count and average rating, with source (e.g., Google Business Profile), once that profile exists

**Pricing (blocks Pricing Note sections on all 6 service pages, FAQ Pricing section):**
- Pricing structure (flat rate, hourly, per square foot, or quote-only)
- Whether any starting/sample pricing will be published

**Service details (blocks What's Included sections on all 6 service pages):**
- Detailed task checklist per service
- Add-on services, if any
- Supplies/equipment provided by ShinySpaces vs. the client

**Service area details (blocks Service Areas hub Flexibility Note, FAQ Service Area section):**
- Willingness to serve areas outside the 8 confirmed towns
- Travel fees for farther locations, if any

**Photography (blocks Hero images across every page, Gallery, About team section):**
- Before/after photos for each of the 6 services
- Team/owner photos
- General clean-home/office photography for hero sections
- Logo file and final brand color palette

**Company story (blocks About page Company Story section):**
- Real founding story
- Business structure/ownership details, if the business wants to share them

**Legal/operational (not covered elsewhere but needed before launch):**
- Privacy Policy and Terms content, if a form is collecting personal data (name/phone/email) — recommended sooner than "later," consistent with the earlier consistency review's finding on this point
