# ShinySpaces Design System — Phase 1

**Status:** Proposed, pending owner approval. Nothing in this document has been applied to the codebase yet.

**Source of truth for brand color:** `public/images/branding/logo.jpeg`, per `docs/02-business-profile.md` §1 ("Brand colors: Confirmed direction — teal/turquoise and gold. Exact hex codes are TBD — pending formal approval"). This document proposes the exact hex values that section is waiting on.

**Design references:** Apple, Stripe, Linear — clean, restrained, generous whitespace, confident typography, subtle motion. No cartoon color, no template feel, per `docs/00-project-rules.md` §3.

---

## 1. Color System

### 1.1 How these colors were derived

The logo file was sampled programmatically (not eyeballed) to find the dominant teal and gold pixel clusters, excluding white background, black outlines, and gray anti-aliasing noise.

**Raw sampled clusters (most frequent, in order):**

| Teal (raw from logo) | Gold (raw from logo) |
|---|---|
| `#00E0E8` | `#D0B880` |
| `#0078A8` | `#C8A878` |
| `#00E8F0` | `#E0C890` |
| `#0098B8` | `#C0A068` |
| `#00B0C8` | `#B89860` |
| `#00A8C0` | `#D8C088` |

The logo's teal is a gradient from a bright cyan (`#00E0E8`) down to a deeper marine teal (`#0078A8`). The gold is a warm brass tone, sampled lighter than its true value because the gradient blends toward white at its edges (`#D0B880` / `#C8A878` cluster).

**Neither raw sampled tone is usable as-is for UI:** the bright cyan and the sampled gold both fail WCAG AA contrast against white (see §1.3). Every token below was tuned from these raw samples — same hue family, adjusted lightness/saturation — until it passed AA. This is the standard way a brand mark's colors get translated into an accessible UI palette: the logo defines the *hue*, not the literal *pixel value*, for every text-bearing or interactive color.

### 1.2 Final Palette

| Token | Hex | Role |
|---|---|---|
| Primary | `#04738C` | Primary buttons, links, active nav state, icon accents |
| Primary Hover | `#035C70` | Hover/active state for Primary elements |
| Primary Dark | `#024657` | Dark sections (e.g. footer), text-on-light-teal-tint |
| Primary Light | `#4FC4D6` | **Decorative only** — tints, illustration strokes, chart accents. Never text. |
| Accent Gold | `#A9812F` | Premium accents: badges, dividers, icon highlights, borders — used sparingly |
| Accent Gold Hover | `#8C6A22` | Hover state for gold elements; also the only gold safe for small text/links |
| Background | `#FFFFFF` | Page background (dominant, per brief) |
| Surface | `#FFFFFF` | Card/panel fill on the white background (cards are separated by border + shadow, not fill color) |
| Surface Alt | `#F5F8F8` | Alternating section backgrounds, subtle content grouping |
| Border | `#E1E7E8` | Default 1px borders (cards, inputs, dividers between major blocks) |
| Divider | `#EDF1F1` | Hairline separators inside a block (list items, table rows) |
| Text Primary | `#13181A` | Body copy, headings |
| Text Secondary | `#5C6A6D` | Supporting copy, captions, metadata |
| Success | `#1D8348` | Form success states, confirmation messaging |
| Warning | `#B7791F` | Large/UI-only warning states (icons, borders) |
| Warning Text | `#8A5D17` | Small warning text (labels, helper text) |
| Error | `#C0392B` | Form validation errors, destructive states |

**Gold usage rule:** gold is a *premium accent*, not a second primary color. Target roughly 90% teal/neutral, 10% gold across any given screen — a stray, a badge, a divider, a hover on a secondary detail. Overusing it flattens the "restrained luxury" effect into something closer to a casino palette.

### 1.3 WCAG AA Verification

Contrast ratios computed against pure white (`#FFFFFF`), using the standard relative-luminance formula (WCAG 2.1). AA requires **4.5:1** for normal text, **3:1** for large text (≥24px, or ≥19px bold) and UI components.

| Color | Contrast vs. white | Result |
|---|---|---|
| `#04738C` Primary | 5.47:1 | ✅ Pass — normal text |
| `#035C70` Primary Hover | 7.58:1 | ✅ Pass — normal text |
| `#024657` Primary Dark | 10.42:1 | ✅ Pass — normal text |
| `#4FC4D6` Primary Light | 2.06:1 | ❌ Fail — decorative use only |
| `#A9812F` Accent Gold | 3.58:1 | ⚠️ Pass large text/UI only, fails normal text |
| `#8C6A22` Accent Gold Hover | 5.00:1 | ✅ Pass — normal text |
| `#13181A` Text Primary | 17.9:1 | ✅ Pass |
| `#5C6A6D` Text Secondary | 5.62:1 | ✅ Pass |
| `#1D8348` Success | 4.78:1 | ✅ Pass — normal text |
| `#B7791F` Warning | 3.64:1 | ⚠️ Pass large text/UI only |
| `#8A5D17` Warning Text | ~6.5:1 | ✅ Pass — normal text |
| `#C0392B` Error | 5.44:1 | ✅ Pass — normal text |

**Practical rule:** if a color is marked "large/UI only" or "decorative only" above, it must never be used for body copy, form labels, or any small text. Use the paired `-hover`/`-text` variant instead in those cases.

---

## 2. Typography

### 2.1 Recommended pairing

**Display / H1 / H2 — [Fraunces](https://fonts.google.com/specimen/Fraunces)** (variable serif, Google Fonts)
A warm, slightly characterful serif — it echoes the confident serif treatment in the "SPACES" wordmark without going full script (unreadable at UI sizes). Fraunces is a variable font with optical-size and "soft"/wonky axes, so weight can be tuned per breakpoint without extra font files.

**H3 / H4 / Body / UI — Geist Sans** (already installed via `next/font/google` in `app/layout.tsx`)
Geist is already wired into the project, is itself a premium, modern grotesque (Vercel's typeface — same category as Inter/SF Pro), and matches the Apple/Stripe/Linear reference directly. No migration cost, no new dependency.

**Rationale:** an all-sans system reads clean but generic for a "luxurious" brief; an all-serif system reads editorial, not SaaS-clean. A serif *display* layer over a sans *body/UI* layer is the standard premium-DTC/hospitality pattern — it injects warmth exactly where it's noticed (hero headlines, section titles) without compromising legibility anywhere it matters (forms, body copy, buttons).

*Alternative if the owner prefers zero new font weight to load:* skip Fraunces, use Geist Sans everywhere, differentiate Display/H1 purely by size/weight/tracking. Fully viable, just less distinctive — flagging as a lower-effort fallback, not the primary recommendation.

### 2.2 Type Scale

Mobile-first; Display/H1/H2/H3/H4 use fluid `clamp()` sizing so they scale smoothly between mobile and desktop rather than jumping at breakpoints.

| Level | Font | Weight | Mobile size | Desktop size | Line height | Usage |
|---|---|---|---|---|---|---|
| Display | Fraunces | 600 | 44px | 72px | 1.03 | Homepage hero headline only |
| H1 | Fraunces | 600 | 36px | 56px | 1.08 | Page-level headline (one per page) |
| H2 | Fraunces | 500 | 30px | 40px | 1.15 | Major section headings |
| H3 | Geist Sans | 600 | 24px | 28px | 1.25 | Sub-section headings, card titles |
| H4 | Geist Sans | 600 | 20px | 22px | 1.3 | Minor headings, form section labels |
| Body Large | Geist Sans | 400 | 18px | 18px | 1.67 (30px) | Intro paragraphs, hero subheadlines |
| Body | Geist Sans | 400 | 16px | 16px | 1.625 (26px) | Default paragraph text |
| Small | Geist Sans | 400 | 14px | 14px | 1.43 (20px) | Helper text, metadata, form hints |
| Caption | Geist Sans | 500 | 12px | 12px | 1.33 (16px) | Labels, tags — pair with `letter-spacing: 0.04em` + uppercase |

**Usage notes:**
- Display and H1 pair with tight letter-spacing (~`-0.02em`) — large serif type needs negative tracking to avoid looking loose.
- Exactly one `<h1>` per page (accessibility requirement already flagged in `docs/06-development-roadmap.md` Phase 4).
- Never go below 16px for any body text field on mobile (prevents iOS Safari zoom-on-focus, already flagged for forms in the roadmap).

---

## 3. Spacing

Base unit: **4px**, matching Tailwind's default spacing scale — no need to invent a parallel system, just use it consistently:

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128` (px)

**Semantic addition — section rhythm:** rather than every page section picking its own vertical padding, two fluid tokens standardize the rhythm site-wide:

| Token | Mobile | Desktop | Usage |
|---|---|---|---|
| Section Y (standard) | 64px | 128px | Vertical padding for major homepage/page sections |
| Section Y (compact) | 48px | 80px | Nested/secondary sections, mini-CTA bands |

Fluid via `clamp()` so the transition is smooth across tablet widths rather than snapping at a breakpoint.

---

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| Button | 8px | Primary/secondary/ghost buttons |
| Input | 8px | Text inputs, textareas, selects — matches buttons for visual consistency |
| Card | 16px | Service cards, testimonial cards, gallery cards, FAQ cards |
| Modal | 20px | Dialogs, mobile menu panel |
| Image | 12px | Photography, thumbnails, before/after images |

8px keeps buttons/inputs feeling precise and "SaaS" rather than pill-shaped/playful; the larger 16–20px on cards/modals is what reads as "soft, premium" at container scale. This mirrors Stripe/Linear's radius hierarchy (small control radius, larger container radius).

---

## 5. Elevation (Shadows)

Shadows are cool-neutral and low-opacity by default — never pure black — with the hover state carrying a subtle **teal tint** that ties the interaction back to the brand color instead of a generic gray lift.

| Token | Value | Usage |
|---|---|---|
| Small | `0 1px 2px rgba(15,23,25,0.06)` | Inputs, subtle card resting state |
| Medium | `0 4px 12px rgba(15,23,25,0.08)` | Cards at rest, dropdowns |
| Large | `0 12px 32px rgba(15,23,25,0.12)` | Modals, popovers |
| Hover | `0 16px 40px rgba(4,115,140,0.18)` | Card/button hover lift (teal-tinted) |

---

## 6. Buttons

All buttons: min 44×44px tap target, 8px radius, `Geist Sans` 600 weight label, 150ms ease-out transitions.

**Primary**
- Rest: `bg-primary` (#04738C), white text
- Hover: `bg-primary-hover` (#035C70) + `shadow-hover`
- Active: `bg-primary-dark` (#024657), `translateY(1px)`
- Focus: 2px `accent-gold-hover` or `primary-dark` ring, 2px offset (visible on white and on teal)
- Disabled: 40% opacity, no hover/active response, `cursor: not-allowed`

**Secondary**
- Rest: white bg, 1.5px `border-primary`, `text-primary` (teal text, not text-primary-neutral)
- Hover: `bg-primary` at 6% opacity tint, border unchanged
- Active: `bg-primary` at 12% opacity tint
- Focus/disabled: same pattern as Primary

**Ghost**
- Rest: transparent bg, no border, `color: text-primary`
- Hover: `bg-surface-alt`
- Used for lower-emphasis actions inside cards/toolbars

**Text**
- Rest: no bg/border, `color: primary`, no underline
- Hover: underline appears
- Used for inline links, "Learn More" card links

---

## 7. Forms

Inputs, textareas, selects share one visual language:

- 1.5px `border-border` (#E1E7E8), 8px radius, `surface` (white) fill
- Min height 44px, 16px font-size minimum (blocks iOS zoom-on-focus)
- Padding: 12px 16px
- Placeholder: `text-secondary`
- Focus: border becomes `primary`, plus a 2px `primary` focus ring at 20% opacity outside the border
- Error: border becomes `error`, helper text below in `error` color, `aria-describedby` linking input to the message
- Disabled: `surface-alt` fill, `text-secondary`, no focus ring

**Checkboxes/radios:** custom-styled, 20×20px minimum box, `border-border` at rest, `primary` fill + white checkmark/dot when checked, same 2px focus ring pattern as text inputs. Never smaller than 20px — this is a tap-target/accessibility floor, not a style preference.

---

## 8. Cards

Base card: `surface` fill (white), 1px `border-border`, `radius-card` (16px), `shadow-sm` at rest → `shadow-hover` + `translateY(-4px)` on hover (150–250ms ease-out). Padding: 20px mobile / 28px desktop.

| Variant | Notes |
|---|---|
| Service card | Icon top-left, `H4` title, one-line `Small` description, `Text` button ("Learn More →") bottom |
| Testimonial card | Small `accent-gold` quote-mark glyph, `Body` quote text, name + location in `Small`/`text-secondary` |
| Gallery card | 4:3 image (`radius-image`), before/after label overlay, no visible card border — the image itself is the card |
| Pricing/step card | Used for "How It Works" steps, not literal pricing (pricing is TBD/quote-only per `02-business-profile.md` §3) — numbered badge, `H4` title, `Small` description |
| FAQ row | No card border — a `divider` line between rows instead, expand/collapse chevron rotates 180° on open |

---

## 9. Icons

**Recommendation: [Lucide](https://lucide.dev) as the visual style reference — implemented as hand-picked inline SVGs, not the `lucide-react` npm package.**

This matches the existing project decision already recorded in `docs/06-development-roadmap.md` Phase 3 ("use inline SVGs for the hamburger/close/chevron icons rather than adding an icon library, per the 'avoid unnecessary dependencies' rule") and CLAUDE.md's dependency policy. Lucide is MIT-licensed, so individual icon SVGs (checkmark, shield, star, calendar, phone, mail, chevron, etc.) can be copied in as needed with zero added bundle weight or install step, while still getting a single consistent stroke style: **1.5px stroke, rounded caps/joins, 24×24 viewbox.**

---

## 10. Animation

Subtle, purposeful, never decorative-for-its-own-sake — consistent with `docs/00-project-rules.md` §3 ("avoid excessive animations").

| Pattern | Duration | Easing | Usage |
|---|---|---|---|
| Fade | 250ms | ease-out | Content entering viewport, tab/accordion panel changes |
| Slide | 300ms | ease-out | Mobile menu, drawer panels (translate + fade combined) |
| Scale | 200ms | ease-out | Modal/dialog open (0.96 → 1 + fade) |
| Hover Lift | 150ms | ease-out | Cards/buttons: `translateY(-2px to -4px)` + shadow step-up |

**`prefers-reduced-motion`:** honored globally — when set, all durations collapse to near-zero (`0.01ms`) rather than being removed entirely, so state changes remain instant but functional (nothing depends on an animation to reveal content).

---

## 11. Responsive Breakpoints

Mobile-first, using Tailwind's default breakpoint scale (no need to redefine):

| Breakpoint | Width | Target |
|---|---|---|
| Base | 0–639px | Phones |
| `sm` | 640px | Large phones / small tablets (landscape) |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

Max content width: **1280px**, centered, with responsive side padding (16px mobile → 24px tablet → 32px+ desktop). Every component is designed and tested at the `base` width first, then progressively enhanced upward — per `docs/00-project-rules.md` §3.

---

## 12. Photography Style (for when real photos are available)

Per `docs/02-business-profile.md` §10, no real photography exists yet — this section is guidance for when it's captured, not a spec for stock substitutes (stock presented as ShinySpaces' own work is explicitly disallowed, `docs/00-project-rules.md` §3).

- Bright, natural window light — no harsh flash, no cold fluorescent cast
- Real ShinySpaces team and real client spaces, not staged stock models
- Color grading kept neutral-warm so photos sit comfortably next to the teal/gold palette rather than fighting it
- Before/after pairs shot from the same angle/framing for honest comparison
- Minimal staging — the space should look genuinely lived-in-then-cleaned, not showroom-perfect in the "before" shot
- Avoid any AI-generated or AI-upscaled imagery — authenticity is a stated brand pillar (`docs/00-project-rules.md` §3)

---

## Open Decisions for Owner Review

1. **Exact hex palette in §1.2** — this is the formal approval `docs/02-business-profile.md` §1 is waiting on.
2. **Font pairing (§2.1)** — Fraunces + Geist Sans (recommended) vs. Geist Sans only (lower-effort fallback).
3. Everything else in this document is a proposed default and can be adjusted freely without touching the color/font decision.
