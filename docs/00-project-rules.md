# ShinySpaces Project Rules

**This document defines the permanent rules for the ShinySpaces project. Claude Code (or any future contributor, human or AI) must read this file before making any code or documentation changes.** Where any other document or instruction conflicts with this file, this file wins.

---

# 1. Project Goal

Build the highest-quality cleaning company website in the Heber City area.

**Primary goal:** Generate estimate requests and phone calls.

Every design, content, SEO, and coding decision should be judged against whether it helps a visitor either submit an estimate request or pick up the phone — not against traffic or aesthetics alone.

---

# 2. Development Rules

- Never invent business facts.
- Never invent years in business.
- Never invent review counts.
- Never invent certifications.
- Never invent insurance status.
- Never invent guarantees.
- Never invent pricing.
- Never invent awards.
- Mark unknown information as TBD.

Any fact needed for the website (phone number, hours, licensing, pricing, testimonials, etc.) must come from confirmed information in `docs/02-business-profile.md`. If it isn't there, it is TBD and must not be written into copy, metadata, or structured data — not even as a placeholder or example value.

---

# 3. Design Rules

- Premium appearance.
- Mobile-first.
- Fast loading.
- Modern typography.
- Authentic photography.
- Avoid generic AI layouts.
- Avoid excessive animations.
- Accessibility first.

Real photography (not stock images presented as ShinySpaces' own work) is required for before/after and team imagery — see `docs/02-business-profile.md` §10 for what's still missing.

---

# 4. SEO Rules

- One primary keyword per page.
- Avoid keyword cannibalization.
- Use descriptive URLs.
- Use semantic HTML.
- Prefer quality over quantity.
- Optimize for local search.
- Optimize for AI search.

Keyword assignments should stay consistent with `docs/04-keyword-map.md`. If a new page is added, it needs its own primary keyword that doesn't compete with an existing page's assignment.

---

# 5. Coding Rules

- Reusable components.
- No duplicated code.
- Server Components by default.
- Client Components only when required.
- Keep files organized.
- Avoid unnecessary dependencies.

---

# 6. Documentation Rules

Every future recommendation should stay consistent with:
- `01-website-blueprint.md`
- `02-business-profile.md`
- `03-seo-strategy.md`
- `04-keyword-map.md`

If a future decision would contradict one of these documents, resolve the conflict explicitly (update the relevant document or flag the contradiction) rather than silently overriding it.
