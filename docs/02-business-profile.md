# ShinySpaces Business Profile (Source of Truth)

This document is the factual reference for all ShinySpaces website content. Only information confirmed by the business owner appears as fact. Anything not yet confirmed is marked **TBD** and must not be guessed, invented, or implied anywhere on the website (copy, schema markup, images, etc.) until it is provided and this document is updated.

---

## 1. Business Identity

| Field | Value |
|---|---|
| Business name | ShinySpaces |
| Industry | Residential, commercial, and Airbnb/vacation-rental cleaning |
| Primary location | Heber City, Utah |
| Years in business | TBD |
| Business structure/ownership | TBD |
| Logo | Confirmed — logo file provided by the owner; stored at `public/images/branding/logo.jpeg`. Current file has a solid white background; a transparent-background version is still needed for use on dark/colored backgrounds. |
| Brand colors | **Final, approved.** Primary Teal `#04738C`, Accent Gold `#A9812F` (plus documented hover/dark/light variants). See `docs/design-system.md` §1 and `docs/design-tokens.md`. |
| Tagline/slogan | "Transforming Spaces, Unleashing Shine!" |

---

## 2. Contact Information

| Field | Value |
|---|---|
| Phone number | **Confirmed.** (626) 549-9782 — `tel:+16265499782` |
| Email address | **Confirmed by owner:** `hello@shineyspaces.info` — ⚠️ **verify before wiring, see note below** |
| Physical/mailing address | TBD |
| Business hours | TBD |
| Social media links | TBD — a Facebook page exists (recommendation posts are sourced from it in Section 9), but no public URL has been confirmed for display |
| Booking/scheduling link (if any) | TBD |

### Estimate submission destination

The owner's stated workflow: website form submissions should create a lead in the CRM; **if no CRM is available, submissions go to the business email.**

- **No CRM has been named, selected, or configured.** "The CRM" is referenced but not identified, so CRM integration remains **TBD**.
- The operative destination is therefore the **business email above**, once verified.
- **Nothing is connected yet.** The `/get-estimate` form is deliberately non-submitting until a destination is verified — see `components/forms/EstimateForm.tsx`.

> ⚠️ **Unresolved discrepancy — verify before connecting the form.**
> The confirmed email domain is `shineyspaces.info` ("shin**e**yspaces", `.info`). The business's own marketing graphics display `shinyspaces.co` ("shinyspaces", `.co`) — a different spelling *and* a different TLD. One of the two is wrong. **Send a live test email to the address and confirm receipt before wiring any form to it**; a wrong address loses estimate requests silently, with no bounce visible to the customer.

**Note:** No phone number, email, hours, or social link should appear on the site until confirmed here.

---

## 3. Service List

Confirmed services offered:

1. Airbnb Turnover Cleaning
2. Residential Cleaning
3. Commercial Cleaning
4. Move-In / Move-Out Cleaning
5. Deep Cleaning
6. Recurring Cleaning
7. Post-Construction Cleaning
8. Custom Cleaning Solutions

| Field | Value |
|---|---|
| What's included in each service (detailed task checklist) | **Confirmed by owner — see §3.1 below** |
| Pricing or pricing structure (flat rate, hourly, per sq ft, quote-only) | **Quote-only.** Free estimates based on the home's size, condition, and services requested. **No figures confirmed — never publish a price.** |
| Add-on services (if any) | **Confirmed** — see Residential "Extras" in §3.1 |
| Supplies/equipment provided (by ShinySpaces vs. client) | **Confirmed.** ShinySpaces brings professional cleaning products and equipment, unless the client requests their own be used. |
| Typical duration | **Confirmed.** Most homes take between 2 and 5 hours, depending on size and condition. Always state as a range with those qualifiers — never as a fixed promise. |

---

## 3.1 Confirmed Service Scope

Owner-confirmed. This is the canonical source for `data/serviceContent.ts` and the `/services/[slug]` pages. Publish only what appears here.

### Residential Cleaning

**Kitchen:** clean and sanitise countertops · wipe cabinet fronts · clean sink and faucet · clean outside of appliances · clean microwave inside and out · wipe backsplash · empty trash · vacuum and mop floors

**Bathrooms:** scrub and disinfect toilets · clean shower and bathtub · clean sinks and countertops · polish mirrors · wipe fixtures · empty trash · vacuum and mop floors

**Bedrooms:** make beds (if clean linens are left out) · dust furniture · wipe reachable surfaces · vacuum floors and rugs · mop hard floors · empty trash

**Living areas:** dust furniture · wipe tables · vacuum carpets and rugs · mop hard floors · straighten cushions · dust window sills

**Extras (on request):** interior windows · baseboards · inside refrigerator · inside oven · laundry folding · organisation

**Excluded:** heavy hoarding · biohazard cleanup · mold removal · pest removal · exterior windows · carpet shampooing · lifting heavy furniture

### Commercial Cleaning

**Included:** offices · break rooms · bathrooms · lobbies · waiting areas · trash removal · vacuuming · mopping · dusting · sanitising high-touch surfaces · restocking paper products if provided

**Excluded:** industrial cleaning · hazardous waste · large floor stripping or waxing · specialty equipment cleaning

### Airbnb Turnover Cleaning

**Included:** full cleaning between guests · change bed linens · replace towels · kitchen cleaning · bathroom sanitising · restock guest supplies (provided by owner) · check for damages · remove trash · final walkthrough · ready for next guest

**Optional:** inventory check · photo updates after every turnover

### Recurring Cleaning

**Frequencies:** weekly · biweekly · every 4 weeks

**Note:** recurring customers receive priority scheduling and consistent cleaners whenever possible. "Whenever possible" is part of the confirmed wording — do not publish it as a guarantee.

### Move-In / Move-Out Cleaning

**Included:** inside cabinets · inside drawers · inside refrigerator · inside oven · baseboards · doors · trim · interior windows · bathrooms · kitchen · floors · closets

### Deep Cleaning

Everything in a standard cleaning, plus: hand-wiping baseboards · door frames · ceiling fans · light fixtures · detailed bathroom scrubbing · behind furniture when accessible · extra dust removal

### Post-Construction Cleaning

**Included:** dust removal · vacuuming · fine dust wipe-down · window cleaning · trim cleaning · cabinet cleaning · floor cleaning

**Excluded:** construction debris hauling · hazardous materials

### Custom Cleaning Solutions

No fixed checklist. A custom cleaning checklist is built around the client's needs, schedule, and budget.

---

## 3.2 Confirmed Customer FAQs

Owner-confirmed answers. **The insurance question was explicitly withdrawn by the owner and must not be published** — insured status remains TBD in §9 and prohibited in §11.

| Question | Confirmed answer |
|---|---|
| How much does house cleaning cost? | Every home is different. Free estimates based on the home's size, condition, and services requested. |
| Do I need to be home? | No. Many clients provide a door code or key so cleaning can happen while they're away. |
| Do you bring your own supplies? | Yes — professional products and equipment, unless the client asks for their own to be used. |
| How long does a cleaning take? | Most homes take between 2 and 5 hours depending on size and condition. |
| Can I schedule recurring cleanings? | Yes — weekly, biweekly, and monthly recurring service. |
| What if I need to reschedule? | Let us know as soon as possible and we'll find another appointment. |
| Do you clean Airbnb properties? | Yes — turnover cleanings to keep the property guest-ready between stays. |

---

## 4. Service-Area List

Confirmed towns/areas served:

1. Heber City
2. Midway
3. Park City
4. Kamas
5. Hideout
6. Daniel
7. Charleston
8. Wallsburg

| Field | Value |
|---|---|
| Willingness to serve areas outside this list | TBD |
| Travel fees for further locations (if any) | TBD |

---

## 5. Target Customers

Confirmed target customer segments:

- Homeowners
- Airbnb hosts
- Vacation rental owners
- Property managers
- Real estate agents
- Small businesses

| Field | Value |
|---|---|
| Any segment considered highest priority/primary focus | TBD |

---

## 6. Brand Personality

Confirmed brand direction:

- Premium
- Trustworthy
- Modern
- Clean
- Local
- Mobile-friendly

| Field | Value |
|---|---|
| Specific brand colors | **Final, approved.** Primary Teal `#04738C`, Accent Gold `#A9812F` (plus documented hover/dark/light variants). See `docs/design-system.md` §1. |
| Specific fonts (beyond project default) | **Final, approved.** Fraunces (display/headings) paired with Geist Sans (body copy, navigation, buttons, forms, UI). See `docs/design-system.md` §2. |
| Reference sites/brands the owner likes | TBD |

---

## 7. Tone of Voice

| Field | Value |
|---|---|
| Confirmed tone guidance | Premium, trustworthy, modern — consistent with brand personality above (Section 6) |
| Formal vs. conversational preference | TBD |
| Specific words/phrases to use or avoid | TBD |

---

## 8. Website Goals

| Field | Value |
|---|---|
| Primary goal | Generate estimate requests and phone calls (lead generation) |
| Secondary goals | TBD |
| Success metrics / KPIs (e.g., target monthly leads) | TBD |
| Paid advertising plans (Google Ads, Facebook, etc.) | TBD |

---

## 9. Confirmed Trust Signals

**Two trust signals are confirmed: the satisfaction guarantee and a set of sourced customer recommendations (both below). All others remain unconfirmed** and may not be used on the website until explicitly confirmed by the business owner.

### Confirmed

**Customer recommendations — confirmed for website use.** 17 verified Facebook recommendation posts are currently available for approved website use, each with a source URL. The full text of each is recorded in `data/reviews.ts`.

Important limits on how this may be characterised:

- These 17 are **posts available for website use — not the business's public review total.** Facebook has not confirmed an aggregate count, so the public total remains TBD and must not be stated or implied.
- **Aggregate review count: TBD.** Do not publish "17 reviews", "17+ reviews", or any other total.
- **Star rating: TBD.** Facebook recommendations are **binary recommendations, not star ratings**. A rating must never be inferred, calculated, or displayed from them.
- Quotes are published verbatim, including customer typos. They must not be silently corrected.
- Reviewers are shown as first name + last initial; each card links to the original public post.

**Satisfaction guarantee — confirmed.** Exact policy as provided by the business owner:

> If you are not satisfied with any part of your cleaning, contact us within 24 hours and we will return to re-clean the affected area at no additional charge.

This is the only guarantee wording approved for use. It must be shown in full where the guarantee is referenced — an unqualified "100% satisfaction guaranteed" with no stated remedy or time window is still not permitted (see §11).

### Still unconfirmed

| Potential trust signal | Status |
|---|---|
| Licensed | TBD — not confirmed |
| Insured | TBD — not confirmed |
| Bonded | TBD — not confirmed |
| Background-checked staff | TBD — not confirmed |
| Certifications (e.g., cleaning industry certifications) | TBD — not confirmed |
| Years in business | TBD — not confirmed |
| Number of customers served | TBD — not confirmed |
| Review count / star rating | TBD — not confirmed |
| Awards/affiliations | TBD — not confirmed |

---

## 10. Unknown Information Still Needed

The following must be collected from the business owner before the site can launch with accurate content:

- **Email verification** — the address in §2 is confirmed by the owner but its domain conflicts with the domain printed on the business's own marketing graphics. Send a test message and confirm receipt before connecting any form.
- CRM selection — the owner's workflow references "the CRM" but none has been named or configured
- Physical/mailing address
- Business hours
- Social media links (a Facebook page exists; no public URL confirmed for display)
- Years in business
- Licensing, insurance, and bonding status — **the owner explicitly withdrew the "fully insured" claim; it must not be published**
- Any certifications held
- Staff background-check policy (if any)
- Sample pricing figures — the pricing *model* is confirmed as quote-only in §3, but no figures exist
- Typical response time to estimate requests
- More matched before/after photo pairs — several exist only as pre-composited social graphics with baked-in logos and Before/After labels, which are unusable in the gallery. Original individual files are needed.
- Real photos (team, vehicles/branding if applicable)
- Public aggregate review count and average star rating (with source, e.g., Google Business Profile) — note that the 17 sourced Facebook recommendation posts in Section 9 are **not** a public total and must not be presented as one
- Any current booking/scheduling software or link to integrate

---

## 11. Claims That Must Not Be Used Until Verified

The website must **not** state, imply, or display any of the following until confirmed in this document:

- A specific number of years in business (e.g., "10+ years of experience")
- Any certification names or badges
- Any review count or star rating (e.g., "4.9 stars from 120+ reviews")
- Any guarantee language **beyond the confirmed 24-hour re-clean policy recorded in Section 9**. That policy may be used, quoted in full. An unqualified "100% satisfaction guaranteed" claim — with no stated remedy or time window — must still not be used.
- Any star rating implied through imagery. Decorative stars or laurels inside supplied artwork must not be described in copy, headings, or alt text as a rating, award, certification, or accreditation.
- Any pricing or starting-price figures
- Any promised response time (e.g., "we respond within 1 hour")
- Any phone number, email address, business hours, or social media link not listed in Section 2
- "Licensed and insured" or "background-checked staff" language, unless confirmed in Section 9
- Any claim of being the "#1," "top-rated," or "most trusted" provider in the area without a verifiable source

All such claims must remain marked TBD and be replaced with real, confirmed information — or omitted entirely — before launch.
