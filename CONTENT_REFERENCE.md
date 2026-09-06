# CONTENT_REFERENCE.md

## 0. Purpose

This file is a **content reference for the redesign of `alperen.me`**.

It contains factual material, links, legacy copy, project information, assets, and other useful details extracted from the previous portfolio.

It is **not** an authority for:

- architecture
- framework choice
- component structure
- page layout
- information hierarchy
- styling
- typography
- color palette
- animation
- interaction design

Use these files as the real authorities:

1. `SITE_SPEC.md` — scope, behavior, architecture, engineering
2. `DESIGN.md` — visual and UX system
3. `CONTENT_REFERENCE.md` — factual/raw source material only

When this file conflicts with either of the first two, this file loses.

---

# 1. How to Read This File

Entries may be marked with one of these labels:

- **CURRENT** — intended to remain true for the redesign
- **VERIFY** — likely useful, but should be confirmed before publishing
- **LEGACY** — describes the old site or old wording and should not be copied blindly

Do not invent replacements for missing or uncertain facts.

If a fact is marked **VERIFY**, keep it out of final published copy until confirmed unless the surrounding project instructions explicitly resolve it.

---

# 2. Identity

## CURRENT

- Full name: **Alperen Yilmaz**
- First name: **Alperen**
- Primary professional site/domain: **`alperen.me`**
- Site language: **English**
- Current role direction: **Software Engineer / Computer Science student**
- Current university: **FHNW — University of Applied Sciences and Arts Northwestern Switzerland**
- Degree: **B.Sc. Computer Science**
- Base/location: **Basel, Switzerland**
- Background: **Swiss-Turkish**
- Professional interests include:
  - backend development
  - systems
  - security
  - infrastructure / DevOps
  - software engineering
  - clean code
  - understanding systems in depth through projects

## VERIFY

- Whether age should be shown at all
- If shown, use the current age at launch rather than copying the old value
- Exact wording of current specialization / technical focus
- Exact university location wording if it appears in public copy

## Naming rules

Always write the surname as:

```text
Yilmaz
```

Use a normal Latin `i`, not the Turkish dotless `ı`.

---

# 3. Legacy Home Copy

The previous site used the following material.

This is reference copy only. Preserve facts where useful, but rewrite freely to match the new site's voice.

## LEGACY

Role label:

```text
Software Engineer
```

Main statement:

```text
B.Sc. Computer Science student at FHNW with a VET diploma in computer science.
```

Supporting description:

```text
Passionate about backend development, distributed systems, and clean code.
Currently studying Computer Science at the University of Applied Sciences
and Arts Northwestern Switzerland (FHNW) in Brugg-Windisch, Switzerland.
```

Old CTA:

```text
More about me
```

Old destination:

```text
/about
```

Do not preserve the wording merely because it existed.

In particular, avoid generic phrases such as:

```text
Passionate about...
```

when stronger, more personal wording is available.

---

# 4. About / Personal Context

## Legacy copy

The previous site contained:

```text
Who Am I, exactly?
```

```text
More than just code.
```

```text
Hi there, I'm Alperen, a 21 year-old Swiss-Turkish computer science student
based in Basel, Switzerland.
```

```text
I'm currently focused on my studies and building projects that help me
understand systems in depth.
```

Outside-tech interests previously mentioned:

- powerlifting
- tennis
- friends and family
- cars / driving / maintaining cars
- chess, especially fast chess

## CURRENT

The redesign may include a short personal section.

It should communicate that Alperen is more than a list of technologies, while staying concise.

## VERIFY

Before publishing personal-interest copy:

- verify that each interest still feels worth including
- remove anything that feels forced or overly biographical
- do not include age unless intentionally chosen

---

# 5. Journey / Timeline Facts

These are chronological facts from the previous site.

The redesign does **not** need to reproduce a timeline.

## 2016 — First steps

Legacy wording:

```text
Wrote my first aim assist (cheat software) for Counter-Strike: Global Offensive
and discovered my passion for how computers work.
```

### VERIFY

If this is ever published:

- decide whether the cheat-software wording should remain
- preserve the factual meaning if kept
- avoid sanitizing it into something generic without approval

## 2020 — Vocational School for Information Technology

Legacy wording:

```text
Passed the entrance exam into the "Informatikmittelschule Basel-Stadt"
(Vocational School focusing on IT in Basel) after which I started actually
learning stuff.
```

## 2023 — Internship as Informatiker EFZ Applikationsentwicklung

Legacy wording:

```text
Started a 1-year internship in Basel, gaining hands-on experience in the
industry & in order to graduate high school.
```

### VERIFY

Check the preferred English wording for:

- `Informatiker EFZ Applikationsentwicklung`
- `high school`

## 2024 — System Engineer role

Legacy wording:

```text
Temporarily worked as a System Engineer at the same company as my internship
before my Military Service.
```

## 2025 — Federal service

Legacy wording:

```text
Fulfilled federal service obligations (Military/Civil Protection).
```

### VERIFY

Confirm the preferred public terminology.

## 2025 — B.Sc. Computer Science at FHNW

Legacy wording:

```text
Began my Bachelors in Computer Science, focusing on software engineering
and distributed systems.
```

### VERIFY

Update the focus/specialization wording to current reality before publishing.

---

# 6. Project Inventory

The old homepage presented four projects.

These are candidates for the new **Selected Work** section, not mandatory inclusions.

The redesign should prioritize the strongest and most current work rather than preserving all four.

---

## 6.1 Modern Pong: Physics Simulation

### Legacy facts

- Technologies:
  - Java
  - JavaFX
  - SQLite
  - Gradle

Legacy description:

```text
Object-oriented reimplementation of the classic Pong game. Built with JavaFX
and Gradle, featuring a custom physics engine and SQLite integration for
high scores.
```

Repository:

```text
https://gitlab.fhnw.ch/alperen.yilmaz/modernpong
```

### VERIFY

- repository visibility
- whether the project still deserves homepage prominence

---

## 6.2 SecAuth Security Suite

### Legacy facts

- Technologies:
  - PHP
  - PHPMailer
  - HTML/CSS

Legacy description:

```text
Hardened web application infrastructure built to mitigate OWASP Top-10
vulnerabilities. Features manual implementations of anti-SQL Injection,
CSRF token validation, and XSS sanitization layers.
```

Repository:

```text
https://github.com/alperencodes/SecAuth
```

### VERIFY

- exact technical wording
- whether "OWASP Top-10" is too broad for what was actually implemented
- whether this remains representative of current ability

---

## 6.3 UmweltReise: Simulation of Sustainable Travel

### Legacy facts

- Technologies:
  - Java
  - Trick17 GUI
  - Pi4J
  - SQLite
  - Maven

Legacy description:

```text
Interactive educational software integrated with embedded hardware (Pi4J).
As a Software Developer on a 10-person team, I contributed to the modular
system architecture and technical documentation (arc42). Closed-source FHNW
coursework; source available to project contributors via the link.
```

Repository:

```text
https://gitlab.fhnw.ch/ip12-25hs/ip12-hs25-team4/umweltreise
```

### Important

This is closed-source FHNW coursework and may not be publicly accessible.

### VERIFY

- repository visibility
- whether an unauthenticated visitor should receive this link
- exact role and contribution wording

---

## 6.4 Autohaus

Legacy title:

```text
Autohaus (enterprise inventory manager)
```

### Legacy facts

- Technologies:
  - C#
  - SQL Server
  - HTML/CSS
  - .NET

Legacy description:

```text
Car dealership management system. Features a normalized relational database
schema (3NF) and a C# backend for inventory management.
```

Repository:

```text
https://github.com/alperencodes/autohaus
```

### VERIFY

- whether this still belongs in Selected Work
- exact project title
- whether "enterprise" is justified

---

# 7. Legacy Technology List

The previous portfolio displayed:

- Java
- Python
- TypeScript
- C#
- PHP
- Docker
- PostgreSQL
- SQL Server
- Git
- Linux

This is content reference only.

Do **not** recreate a generic "Skills" wall unless explicitly requested.

Technologies should generally appear in context with real work.

---

# 8. Contact and External Destinations

## CURRENT / LIKELY CURRENT

GitHub:

```text
https://github.com/alperencodes
```

FHNW GitLab:

```text
https://gitlab.fhnw.ch/alperen.yilmaz
```

LinkedIn:

```text
https://www.linkedin.com/in/alperen-yilmaz-dev/
```

Portfolio source repository:

```text
https://github.com/alperencodes/alperencodes.github.io
```

## LEGACY / VERIFY

Previous public email:

```text
hello@alperen.codes
```

Previous production site:

```text
https://alperen.codes
```

The new primary site is:

```text
https://alperen.me
```

Do **not** automatically invent:

```text
hello@alperen.me
```

or any other new email address.

Confirm the desired email before publishing.

---

# 9. Previous Site Structure

## LEGACY

The old public structure was:

```text
/
├── /about
├── /#projects
└── /#contact
```

Old navigation labels:

```text
About
Projects
Contact
```

The old homepage included:

- hero
- projects
- technology stack
- contact

The redesign is free to reorganize all of this according to `SITE_SPEC.md`.

Do not preserve old anchors or routes unless useful for compatibility.

---

# 10. Previous Behavior Worth Knowing

## LEGACY

The old implementation had:

- responsive layouts
- whole clickable project cards/rows
- hover-revealed timeline descriptions
- custom animated cursor on fine-pointer devices
- semantic landmarks
- safe external-link handling
- runtime/build-time footer year
- no form
- no search
- no theme switcher
- no localization
- no blog
- no CMS
- no authentication
- no analytics

## Preserve conceptually where appropriate

- responsive behavior
- semantic HTML
- keyboard accessibility
- safe external links

## Do not preserve by default

- hover-only disclosures
- custom cursor
- legacy interaction implementation

---

# 11. SEO / Metadata from the Old Site

## LEGACY

HTML language:

```text
en
```

Global title:

```text
alperen.codes
```

Old meta description:

```text
Passionate about backend development, distributed systems, and clean code.
Currently studying Computer Science at the University of Applied Sciences
and Arts Northwestern Switzerland (FHNW) in Brugg-Windisch, Switzerland.
```

Old favicon location:

```text
src/app/favicon.ico
```

The old site did not define:

- canonical URL
- route-specific titles/descriptions
- Open Graph metadata
- Twitter/X card metadata
- sitemap
- structured data / JSON-LD
- social preview image

The new SEO implementation is governed by `SITE_SPEC.md`.

---

# 12. Assets from the Old Repository

## 12.1 AC logo

Legacy file:

```text
public/AC.png
```

Legacy description:

- 500×500 PNG
- circular white mark
- black `AC` initials
- transparent outer background

SHA-256:

```text
1E81FE75736EA4D1720B3EAEABBC8ABD229B40F681AAE6935E30BD4F1FAA606C
```

### Status

**REFERENCE ONLY**

The redesign uses the text wordmark:

```text
alperen.
```

Do not automatically use the old AC logo in the header.

Retain the asset until an intentional cleanup/replacement is made.

---

## 12.2 Legacy favicon

Legacy file:

```text
src/app/favicon.ico
```

SHA-256:

```text
5E6E2DF1C71604221AC01FA91381741399BD6A3DCA6347A543A773BDA4EBB6B7
```

### Status

Retain until a new favicon is intentionally created.

---

## 12.3 Unimportant starter assets

The following old Next.js starter assets are not portfolio-specific and do not need to survive:

```text
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
```

---

# 13. Missing Assets / Content

The old repository did not contain:

- project screenshots
- portrait/headshot
- résumé/CV
- social preview image
- case-study media
- testimonials
- certificates
- downloadable documents

Do not invent these.

If the redesign needs them, they must be supplied or created intentionally.

---

# 14. Legacy Framework / Dependency Information

## LEGACY ONLY

The old site used:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- JetBrains Mono
- Google Material Icons
- React Compiler

The old structure included:

```text
src/app
src/components
src/data/portfolio.tsx
```

The old visual language included:

- narrow centered paper-like panel
- monochrome/gray palette
- JetBrains Mono throughout
- uppercase tracked labels
- bordered rows/tags
- custom cursor

None of these are constraints for the redesign.

Do not preserve any of them merely because they already exist.

The new stack and architecture are defined by `SITE_SPEC.md`.

---

# 15. Legacy Deployment Information

This section exists only to help understand the repository during migration.

## Old production setup

Repository:

```text
git@github.com:alperencodes/alperencodes.github.io.git
```

Default / workflow branch:

```text
master
```

Old custom domain:

```text
alperen.codes
```

Old workflow:

```text
.github/workflows/nextjs.yml
```

Old published directory:

```text
./out
```

Old package manager:

```text
npm
```

Old workflow used GitHub Pages with:

- Node.js 20
- `npm ci`
- `next build`
- official GitHub Pages deployment actions

## Redesign rule

This is migration context only.

The new deployment contract is defined by `SITE_SPEC.md`.

Do not preserve the Next.js build workflow after Astro replaces it.

Do not keep the old `alperen.codes` CNAME once production moves to `alperen.me`.

---

# 16. Repository / Legal Notes

Legacy repository license:

```text
MIT License
```

Legacy copyright line in the license:

```text
2025 alperencodes
```

The old README also reportedly displayed:

```text
© 2026 Alperen. All Rights Reserved.
```

This creates a distinction that should be resolved intentionally between:

- source-code licensing
- site-content copyright

Do not invent new legal language during the redesign unless explicitly instructed.

---

# 17. Pre-Launch Verification

Before final production deployment, verify all of the following.

## Identity / biography

- [ ] Full name appears as `Alperen Yilmaz`
- [ ] Age is either current or omitted
- [ ] FHNW study status is current
- [ ] specialization/focus wording is current
- [ ] Basel/location wording is accurate
- [ ] any personal-interest copy still feels relevant

## Work

- [ ] project names are accurate
- [ ] project descriptions are accurate
- [ ] technology lists are accurate
- [ ] repository links work
- [ ] private/closed GitLab links are handled appropriately
- [ ] newer work has been considered before using old projects by default
- [ ] professional work is represented accurately

## Contact

- [ ] GitHub link works
- [ ] GitLab link works
- [ ] LinkedIn link works
- [ ] email address is explicitly confirmed
- [ ] `alperen.me` is used as the production domain

## Assets

- [ ] legacy favicon has either been retained or intentionally replaced
- [ ] old AC logo is retained as a reference asset until intentionally removed
- [ ] no unused Next.js starter assets survive unnecessarily

## Migration

- [ ] old Next.js-specific code has been removed when no longer needed
- [ ] old Framer Motion/custom-cursor code has not been carried over accidentally
- [ ] old Google font/icon dependencies have not been carried over accidentally
- [ ] old `alperen.codes` CNAME has been replaced for production
- [ ] Astro GitHub Pages workflow is active
- [ ] production deployment targets `alperen.me`

## Content quality

- [ ] no unverified fact was silently published
- [ ] no legacy copy was preserved merely because it existed
- [ ] no generic AI-written filler was introduced
- [ ] no fake metrics or accomplishments were invented
- [ ] no section exists only because the old portfolio had it

---

# 18. Final Rule

Treat this file as a **box of verified and semi-verified source material**, not a blueprint.

The redesign should preserve Alperen's real history, work, destinations, and useful facts while being completely free to express them through the new structure and visual language.

When deciding whether to reuse something from the old site, ask:

> Is this true and useful?

—not:

> Was this already on the old portfolio?
