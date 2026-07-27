# ShinySpaces Website Blueprint

## 1. Overview

**Business:** ShinySpaces — premium residential, commercial, and Airbnb/vacation-rental cleaning company.
**Location:** Heber City, Utah.
**Service area:** Heber City, Midway, Park City, Kamas, Hideout, Daniel, Charleston, Wallsburg.
**Site type:** Lead-generation website (not e-commerce).
**Primary goal:** Convert visitors into **estimate requests** and **phone calls**.
**Secondary goals:** Build trust/credibility, rank locally in search, make it effortless for Airbnb hosts/property managers to book recurring turnover cleanings.

**Brand feel:** Premium, trustworthy, modern, locally-focused. Clean typography, lots of white space, real photos over stock/clipart, warm-but-professional tone (not corporate/cold, not cutesy).

**Primary conversion actions (repeated throughout the site):**
1. Click-to-call phone number (always visible in header)
2. "Get a Free Estimate" form (short — name, phone, email, service type, property type, zip/city)
3. Secondary CTA: "Book Recurring Cleaning" for Airbnb hosts/property managers

---

## 2. Site Map

```
/                          Home
/services                  Services overview (hub page)
/services/airbnb-turnover-cleaning
/services/residential-cleaning
/services/commercial-cleaning
/services/move-in-move-out-cleaning
/services/deep-cleaning
/services/recurring-cleaning
/service-areas              Overview of all towns served
/service-areas/heber-city
/service-areas/midway
/service-areas/park-city
/service-areas/kamas
/service-areas/hideout
/service-areas/daniel
/service-areas/charleston
/service-areas/wallsburg
/about                      Company story, team, values
/gallery                    Before/after photos
/reviews                    Testimonials (full page)
/faq                        Frequently asked questions
/contact                    Contact + estimate form
/get-estimate               Dedicated estimate/quote request page (ad-landing-page friendly)
```

**Notes:**
- Each `/services/*` page targets one service for SEO and has its own CTA tailored to that service (e.g., Airbnb page CTA = "Get a Turnover Cleaning Quote").
- Each `/service-areas/*` page is a short, locally-worded page ("Cleaning Services in Midway, UT") for local SEO — same core content, town-specific intro and testimonials where possible.
- `/get-estimate` is a lean, distraction-free page ideal for linking from paid ads (Google/Facebook), separate from the more informational `/contact` page.

---

## 3. Global Components (appear on every page)

### Header / Navigation
- Logo (left)
- Nav links: Services, Service Areas, Gallery, Reviews, About, FAQ, Contact
- Phone number, click-to-call, top-right, visually prominent (e.g., icon + number in brand color)
- "Get Free Estimate" button, top-right, high-contrast

### Footer
- Logo + one-line tagline
- Service list (links to each `/services/*` page)
- Service area list (links to each `/service-areas/*` page)
- Contact info: phone, email, service area statement
- Social links (if applicable)
- Licensing/insurance badge line ("Licensed & Insured")
- Copyright + simple legal links (Privacy Policy, Terms) if needed later

### Sticky/Mobile CTA Bar
- On mobile: a sticky bottom bar with two buttons — "Call Now" and "Get Estimate"

### Trust Bar (used on Home + key pages)
- Row of trust signals: "Licensed & Insured," "5-Star Rated," "Locally Owned," "Satisfaction Guaranteed," years in business

### Testimonial Carousel/Grid
- Reusable component pulling a few reviews; full list lives on `/reviews`

### Estimate Request Form
- Fields: Name, Phone, Email, Service Needed (dropdown), Property Type (dropdown), City/Zip, Preferred Date (optional), Message (optional)
- Used on Home, `/get-estimate`, `/contact`, and embedded at bottom of every service page

### CTA Banner
- Full-width band with headline + button, reusable, placed mid-page and end-of-page on long pages (e.g., "Ready for a Spotless Space? Get Your Free Estimate Today.")

---

## 4. Page-by-Page Blueprint with Sample Copy

### Home (`/`)

**Purpose:** First impression, establish trust fast, funnel visitors to the right service or straight to an estimate.

**Sections (top to bottom):**

1. **Hero**
   - Headline: *"Heber Valley's Trusted Cleaning Experts"*
   - Subheadline: *"Premium residential, commercial, and Airbnb turnover cleaning across Heber City, Midway, Park City & the surrounding valley."*
   - Primary CTA button: *"Get a Free Estimate"*
   - Secondary CTA: *"Call (XXX) XXX-XXXX"*
   - Background: high-quality photo of a sparkling clean, bright home interior

2. **Trust Bar**
   - Icons/text row: Licensed & Insured · 5-Star Rated · Locally Owned & Operated · Satisfaction Guaranteed

3. **Services Overview (grid of 6 cards)**
   - Airbnb Turnover Cleaning, Residential Cleaning, Commercial Cleaning, Move-In/Move-Out Cleaning, Deep Cleaning, Recurring Cleaning
   - Each card: icon, one-line description, "Learn More" link to its service page

4. **Why ShinySpaces (3–4 value props)**
   - *"Reliable & On-Time"* — never worry about a late cleaner between guest check-ins
   - *"Detail-Obsessed"* — a checklist-driven process so nothing is missed
   - *"Flexible Scheduling"* — one-time, weekly, biweekly, or same-day turnover
   - *"Fully Insured Team"* — background-checked, trained, and vetted cleaners

5. **How It Works (3-step process)**
   - Step 1: *"Request Your Free Estimate"*
   - Step 2: *"We Schedule Your Cleaning"*
   - Step 3: *"Enjoy a Spotless Space"*

6. **Service Area Callout**
   - Short paragraph + map graphic or list of towns served, linking to `/service-areas`

7. **Testimonials**
   - 3–4 rotating reviews with names/location (e.g., "Midway, UT")

8. **Airbnb/Property Manager Callout (secondary audience block)**
   - Headline: *"Manage Airbnb or Rental Properties? Let's Talk Recurring Turnovers."*
   - Short copy on reliability between guest stays, linen service, restocking, photo-ready standards
   - CTA: *"See Airbnb Turnover Services"*

9. **Final CTA Banner**
   - *"Ready for a Spotless Space? Get Your Free Estimate Today."* + form or button

---

### Services Hub (`/services`)

**Purpose:** SEO hub linking to each individual service; helps visitors self-select.

**Sections:**
1. Intro paragraph: overview of all services offered
2. Grid of all 6 service cards (same as home, but full descriptions instead of one-liners)
3. CTA banner at bottom

---

### Individual Service Pages (`/services/[service-name]`)

Each follows the same template so content stays consistent and easy to maintain.

**Template sections:**
1. **Hero**: Service name as H1, one-sentence value prop, CTA button specific to the service
2. **What's Included**: bulleted checklist of tasks covered (this is important — customers want specifics)
3. **Who It's For**: short paragraph on ideal customer for this service
4. **Why Choose ShinySpaces for This Service**: 2–3 differentiators
5. **Process/Timeline**: how scheduling and turnaround works for this service
6. **Pricing Note**: transparency-friendly statement (e.g., "Pricing depends on square footage and condition — get a free custom quote") — no fixed prices unless the business wants them published
7. **Testimonial(s)** relevant to that service type
8. **FAQ mini-section** (2–3 questions specific to this service)
9. **CTA banner + estimate form**

**Sample copy — Airbnb Turnover Cleaning page:**
> **H1:** Airbnb & Vacation Rental Turnover Cleaning
> **Subhead:** Fast, reliable turnovers that keep your guest ratings — and your reviews — five stars.
> **Body:** Between checkout and check-in, there's no room for delay. ShinySpaces specializes in same-day turnover cleaning for Airbnb, VRBO, and short-term rental hosts throughout the Heber Valley, Park City, and surrounding communities. We work around your booking calendar, restock guest essentials, reset staging, and leave every property photo-ready for the next arrival.
> **Included:** Full interior cleaning · Linen changing & bed-making · Towel restocking · Kitchen & bathroom sanitizing · Trash removal · Guest amenity restocking · Damage/maintenance flagging · Photo-ready staging check

**Sample copy — Residential Cleaning page:**
> **H1:** Residential House Cleaning
> **Subhead:** A consistently clean home, without it taking over your weekend.
> **Body:** Whether you need a one-time refresh or a regular cleaning plan, our residential cleaning team treats your home with care and attention to detail — top to bottom, every visit.

**Sample copy — Commercial Cleaning page:**
> **H1:** Commercial Cleaning Services
> **Subhead:** A clean workplace makes a lasting impression on employees and clients alike.
> **Body:** ShinySpaces provides flexible commercial cleaning for offices, retail spaces, and small businesses throughout Heber City and the surrounding area — scheduled around your hours so we never disrupt your business.

**Sample copy — Move-In / Move-Out Cleaning page:**
> **H1:** Move-In / Move-Out Cleaning
> **Subhead:** Start fresh — or leave it spotless for the next owner.
> **Body:** Moving is stressful enough. Let us handle a deep, thorough clean of your old or new space so you can focus on the move itself.

**Sample copy — Deep Cleaning page:**
> **H1:** Deep Cleaning Services
> **Subhead:** The kind of clean that goes beyond the surface.
> **Body:** Our deep cleaning service tackles the buildup regular cleanings don't reach — baseboards, inside appliances, grout, vents, and more. A great one-time reset or seasonal refresh.

**Sample copy — Recurring Cleaning page:**
> **H1:** Recurring Cleaning Plans
> **Subhead:** Weekly, biweekly, or monthly — a consistently clean space, on autopilot.
> **Body:** Set it and forget it. Choose a recurring schedule that fits your home, business, or rental property, and we'll handle the rest.

---

### Service Area Overview (`/service-areas`)

**Sections:**
1. Intro: *"Proudly Serving the Heber Valley and Beyond"*
2. Map or list of all 8 towns, each linking to its own page
3. Short note on flexibility for nearby areas not listed
4. CTA banner

### Individual Service Area Pages (`/service-areas/[town-name]`)

**Template sections:**
1. Hero: *"Cleaning Services in [Town], UT"*
2. Short localized paragraph (mentions local context — e.g., Airbnb density in Park City, second-homes in Midway)
3. List of services offered in that town (links to service pages)
4. Testimonial from a customer in/near that town, if available
5. CTA banner

**Note:** Keep these pages substantive (not thin/duplicate content) — vary the intro paragraph per town and reference locally-relevant use cases (e.g., Park City → short-term rental turnover volume; Charleston/Wallsburg → residential/rural homes).

---

### About (`/about`)

**Sections:**
1. Hero: *"Meet ShinySpaces"*
2. Company story: why/how it started, connection to Heber Valley
3. Mission/values (3–4 short value statements: reliability, attention to detail, respect for client property, community-rootedness)
4. Team section (optional photos/bios)
5. Trust bar repeat (licensed & insured, background-checked staff)
6. CTA banner

### Gallery (`/gallery`)

**Sections:**
1. Intro line
2. Before/after image grid or slider, filterable by service type if desired
3. CTA banner

### Reviews (`/reviews`)

**Sections:**
1. Intro + average rating badge (e.g., "4.9/5 from 120+ reviews")
2. Full testimonial list/grid (can pull from Google Business Profile)
3. Link/button to leave a review
4. CTA banner

### FAQ (`/faq`)

**Sections:**
1. Intro line
2. Accordion list of Q&A, grouped loosely by topic:
   - Booking & Scheduling ("How far in advance do I need to book?")
   - Pricing ("How is pricing determined?")
   - Airbnb-specific ("Can you work around my guest checkout times?")
   - Trust & Safety ("Are your cleaners background-checked?" "Are you insured?")
   - Service Area ("Do you service Park City?")
3. CTA banner

### Contact (`/contact`)

**Sections:**
1. Hero: *"Get in Touch"*
2. Contact info block: phone (click-to-call), email, service area, hours
3. Full estimate/contact form
4. Optional embedded map

### Get Estimate (`/get-estimate`)

**Purpose:** Lean, high-conversion landing page for ads and direct CTA clicks — minimal navigation distractions.

**Sections:**
1. Short headline + trust bar
2. Estimate form front and center (above the fold)
3. 2–3 trust bullet points beside/below the form (licensed & insured, fast response, no obligation)
4. Testimonial snippet
5. No footer nav clutter — keep focus on form completion

---

## 5. Design Direction

- **Tone:** Premium but approachable — think boutique local service, not big-box franchise.
- **Color palette:** Clean neutrals (white/soft gray) as the base, with one confident accent color (candidate: a fresh blue, teal, or sage green — evokes "clean" without being sterile) for CTAs and highlights.
- **Typography:** Modern sans-serif (the project already has Geist Sans/Mono configured), generous line-height, clear hierarchy.
- **Imagery:** Real photos of clean spaces (kitchens, bathrooms, living rooms) and, ideally, the actual team — avoid generic stock photos of unrelated people in gloves. Before/after shots are especially persuasive for this industry.
- **Whitespace:** Let sections breathe; avoid cramming — reinforces the "premium" feel.
- **Iconography:** Simple line icons for service cards and trust bar (checkmarks, shield/insurance icon, star ratings, calendar/clock for scheduling).

---

## 6. SEO & Local SEO Considerations

- Each service page and service-area page should have a unique `<title>` and meta description (e.g., "Airbnb Turnover Cleaning in Heber City, UT | ShinySpaces").
- Use one clear H1 per page matching primary keyword intent (service + location where relevant).
- Add structured data (`LocalBusiness` schema) with name, address/service area, phone, hours, and review rating once real business details are available.
- Internal linking: every service page should link to relevant service-area pages and vice versa.
- NAP (Name, Address/Area, Phone) consistency across the site and footer.
- Fast page loads and mobile-first layout matter heavily for local search ranking and for on-the-go visitors calling from their phone.

---

## 7. Suggested Technical Structure (Next.js App Router)

Mapping the sitemap above onto the existing project (`app/` directory, App Router):

```
app/
  layout.tsx                          → global layout (header + footer wrap)
  page.tsx                            → Home
  globals.css                         → global styles / Tailwind
  services/
    page.tsx                          → Services hub
    airbnb-turnover-cleaning/page.tsx
    residential-cleaning/page.tsx
    commercial-cleaning/page.tsx
    move-in-move-out-cleaning/page.tsx
    deep-cleaning/page.tsx
    recurring-cleaning/page.tsx
  service-areas/
    page.tsx                          → Service areas overview
    heber-city/page.tsx
    midway/page.tsx
    park-city/page.tsx
    kamas/page.tsx
    hideout/page.tsx
    daniel/page.tsx
    charleston/page.tsx
    wallsburg/page.tsx
  about/page.tsx
  gallery/page.tsx
  reviews/page.tsx
  faq/page.tsx
  contact/page.tsx
  get-estimate/page.tsx

components/
  Header.tsx
  Footer.tsx
  MobileCTABar.tsx
  TrustBar.tsx
  ServiceCard.tsx
  TestimonialCarousel.tsx
  EstimateForm.tsx
  CTABanner.tsx
  FAQAccordion.tsx

public/
  images/                             → real site photos (hero, gallery, team)
```

Since `/services/*` and `/service-areas/*` pages share a nearly identical template, they are strong candidates for a shared layout or a data-driven approach (e.g., one dynamic `[service]/page.tsx` or `[town]/page.tsx` route reading from a small content array) once actual copy is finalized — but starting as individual static pages is simplest while content is still being written.

---

## 8. Content Still Needed Before Launch

- Real business phone number, email, and hours
- Business address / license & insurance details
- Actual customer testimonials (from Google Business Profile or direct requests)
- Real before/after photos and team photos
- Confirmed service list wording and any pricing philosophy (quote-only vs. published starting prices)
- Logo and final brand color choice
