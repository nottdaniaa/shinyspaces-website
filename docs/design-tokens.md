# ShinySpaces Design Tokens — Reference

**Status:** Proposed. These tokens are **not yet applied** to `app/globals.css` or anywhere else in the codebase — this document is the reference to review before that change is made. See `docs/design-system.md` for the full rationale behind each value.

This project uses **Tailwind CSS v4**, which reads design tokens from an `@theme` block in CSS and auto-generates matching utility classes (e.g. a `--color-primary` token generates `bg-primary`, `text-primary`, `border-primary`, etc.). The examples below show the proposed `app/globals.css` structure — for reference only, not yet written to the file.

---

## 1. Naming Convention

- **Root variables** (`:root { --primary: ... }`) hold the raw value and are named *without* the Tailwind namespace prefix (`color-`, `radius-`, etc.). This is the single source of truth and matches the pattern already established in the existing `globals.css` (`--background`, `--foreground`).
- **`@theme inline` mappings** re-expose each root variable under Tailwind's expected namespace (`--color-primary: var(--primary);`). `inline` is required specifically for values that depend on something set at runtime — here, that's the `next/font` variables (`--font-geist-sans`, `--font-fraunces`) and any future dark-mode swap.
- **Non-color tokens** (radius, shadow, type scale, spacing) that don't need runtime swapping go directly in a plain `@theme` block.
- Semantic names over literal names: `primary`, not `teal`; `error`, not `red`. If the brand color ever changes, component code referencing `bg-primary` doesn't need to change — only the token definition does.
- State variants use a `-hover` / `-dark` / `-light` / `-text` suffix, not a new semantic name (`primary-hover`, not `primary-2`).

---

## 2. Color Tokens

```css
:root {
  /* Brand — Teal */
  --primary: #04738c;
  --primary-hover: #035c70;
  --primary-dark: #024657;
  --primary-light: #4fc4d6; /* decorative only, see design-system.md §1.3 */

  /* Brand — Gold */
  --accent-gold: #a9812f;
  --accent-gold-hover: #8c6a22;

  /* Neutrals */
  --background: #ffffff;
  --surface: #ffffff;
  --surface-alt: #f5f8f8;
  --border: #e1e7e8;
  --divider: #edf1f1;
  --text-primary: #13181a;
  --text-secondary: #5c6a6d;

  /* Semantic */
  --success: #1d8348;
  --warning: #b7791f;
  --warning-text: #8a5d17;
  --error: #c0392b;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--text-primary);

  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  --color-primary-dark: var(--primary-dark);
  --color-primary-light: var(--primary-light);

  --color-accent-gold: var(--accent-gold);
  --color-accent-gold-hover: var(--accent-gold-hover);

  --color-surface: var(--surface);
  --color-surface-alt: var(--surface-alt);
  --color-border: var(--border);
  --color-divider: var(--divider);
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);

  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-warning-text: var(--warning-text);
  --color-error: var(--error);
}
```

**Usage examples (once applied):**

```tsx
<button className="bg-primary hover:bg-primary-hover text-white">
  Get a Free Estimate
</button>

<span className="text-accent-gold-hover text-small">Premium Service</span>

<p className="text-text-secondary text-small">Serving the Heber Valley</p>

<div className="border border-error text-error text-small">
  Please enter a valid phone number.
</div>
```

---

## 3. Typography Tokens

```css
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-display: var(--font-fraunces); /* requires adding Fraunces in app/layout.tsx — Phase 2 */
}

@theme {
  --text-caption: 0.75rem;
  --text-caption--line-height: 1rem;
  --text-small: 0.875rem;
  --text-small--line-height: 1.25rem;
  --text-body: 1rem;
  --text-body--line-height: 1.625rem;
  --text-body-lg: 1.125rem;
  --text-body-lg--line-height: 1.875rem;
  --text-h4: clamp(1.25rem, 1.15rem + 0.5vw, 1.375rem);
  --text-h4--line-height: 1.3;
  --text-h3: clamp(1.5rem, 1.3rem + 1vw, 1.75rem);
  --text-h3--line-height: 1.25;
  --text-h2: clamp(1.875rem, 1.5rem + 1.8vw, 2.5rem);
  --text-h2--line-height: 1.15;
  --text-h1: clamp(2.25rem, 1.7rem + 2.7vw, 3.5rem);
  --text-h1--line-height: 1.08;
  --text-display: clamp(2.75rem, 2rem + 3.75vw, 4.5rem);
  --text-display--line-height: 1.03;
}
```

**Usage examples:**

```tsx
<h1 className="font-display text-display tracking-tight">
  Heber Valley's Cleaning Experts
</h1>

<h2 className="font-display text-h2">Our Cleaning Services</h2>

<h3 className="font-sans text-h3 font-semibold">Airbnb Turnover Cleaning</h3>

<p className="font-sans text-body text-text-primary">…</p>

<span className="text-caption tracking-wide uppercase text-text-secondary">
  Trust Bar
</span>
```

---

## 4. Spacing Tokens

No new base scale — use Tailwind's default 4px-increment spacing scale directly (`p-4`, `gap-6`, `mt-8`, etc.). Only the section-rhythm tokens below are new:

```css
@theme {
  --spacing-section-y: clamp(4rem, 3rem + 4vw, 8rem);
  --spacing-section-y-sm: clamp(3rem, 2.5rem + 2vw, 5rem);
}
```

**Usage examples:**

```tsx
<section className="py-section-y">…</section>          {/* major sections */}
<section className="py-section-y-sm">…</section>        {/* compact/nested sections */}
<div className="flex flex-col gap-4 md:gap-6">…</div>   {/* standard scale, unchanged */}
```

---

## 5. Radius Tokens

```css
@theme {
  --radius-button: 0.5rem;  /* 8px */
  --radius-input: 0.5rem;   /* 8px */
  --radius-card: 1rem;      /* 16px */
  --radius-modal: 1.25rem;  /* 20px */
  --radius-image: 0.75rem;  /* 12px */
}
```

**Usage examples:**

```tsx
<button className="rounded-button">Get a Free Estimate</button>
<input className="rounded-input" />
<div className="rounded-card border border-border shadow-sm">…</div>
<img className="rounded-image" src="…" alt="…" />
```

---

## 6. Shadow Tokens

```css
:root {
  --shadow-sm: 0 1px 2px rgba(15, 23, 25, 0.06);
  --shadow-md: 0 4px 12px rgba(15, 23, 25, 0.08);
  --shadow-lg: 0 12px 32px rgba(15, 23, 25, 0.12);
  --shadow-hover: 0 16px 40px rgba(4, 115, 140, 0.18);
}

@theme {
  --shadow-sm: var(--shadow-sm);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-hover: var(--shadow-hover);
}
```

**Usage examples:**

```tsx
<div className="shadow-sm hover:shadow-hover transition-shadow duration-150">
  {/* card */}
</div>
```

---

## 7. Motion Tokens

```css
:root {
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
}
```

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Usage examples:**

```tsx
<div className="transition-transform duration-150 ease-out hover:-translate-y-1">
  {/* hover-lift card */}
</div>
```

---

## 8. What This Changes vs. the Current File

Current `app/globals.css` (from `create-next-app`) only defines `--background` / `--foreground` with an automatic OS dark-mode swap. Two things worth flagging before this is applied:

1. **Dark mode removal.** The current scaffold auto-inverts to a dark theme when the visitor's OS is set to dark mode. This design system does not include a designed dark theme — the brief calls for white as the dominant background. Applying these tokens as shown would mean *removing* the automatic `prefers-color-scheme: dark` swap rather than adapting it, so visitors with OS dark mode don't get an unstyled/undesigned inverted site. Flagging this explicitly since it's a behavior change, not just new tokens — open to revisiting as an explicit opt-in dark theme later if wanted.
2. **Font addition.** `--font-display` references `var(--font-fraunces)`, which doesn't exist yet — it requires adding `Fraunces` via `next/font/google` in `app/layout.tsx` (Phase 2 per `docs/06-development-roadmap.md`, not part of this token file alone).

Neither of these has been implemented — noting them here so the tradeoff is visible before approval, not discovered after.
