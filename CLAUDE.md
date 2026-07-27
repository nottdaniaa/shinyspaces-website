@AGENTS.md

# CLAUDE.md — ShinySpaces

Instructions for Claude Code when working on this project.

## Project

- **ShinySpaces** — Premium Cleaning Company
- Location: Heber City, Utah
- This is a marketing/business website. Accuracy of business facts is critical — this is a real company, not a demo.

## Before any work

- Read **every file in `/docs`** before making changes. Treat it as the source of truth for business facts, content, and site structure.
- Do not modify any file in `/docs` unless explicitly asked to.

## Never invent

Do not fabricate or guess the following. If a fact isn't in `/docs` or explicitly provided by the user, ask instead of assuming:

- Business facts (services, service areas, hours, contact info, etc.)
- Customer reviews or testimonials
- Years in business
- Guarantees or warranties
- Certifications or licenses
- Pricing

## Dependencies

- Ask before installing any new dependency or package. Never add one silently.

## Code standards

- Use **Server Components by default**; only use Client Components when interactivity requires it.
- Build **reusable components** — avoid duplicating markup/logic across pages.
- **Mobile-first**: design and test layouts for small screens first, then scale up.
- Follow **accessibility best practices** (semantic HTML, alt text, labels, keyboard nav, contrast).
- Follow **SEO best practices** (metadata, headings hierarchy, semantic structure, performance).
- Keep code **simple and maintainable** — avoid unnecessary abstractions, premature generalization, or speculative flexibility.

## Process

- Explain important architectural decisions as you make them, not after.
- After each task, **list every file modified**.
- After implementation, run lint, type checks, and a production build when appropriate, and report the results.
- Do not modify documentation files unless the user explicitly requests it.
