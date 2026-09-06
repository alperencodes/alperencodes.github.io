# SITE_SPEC.md

## 0. Purpose

This document is the **authoritative functional and engineering specification** for `alperen.me`.

It defines:

- what the site contains
- how the site is structured
- what technology it uses
- how content is organized
- how pages and components should behave
- how the codebase should be written and maintained
- what standards Codex must follow while implementing the redesign

This document does **not** define the visual system. Visual and interaction design belongs in `DESIGN.md`.

For factual material from the previous site, use `CONTENT_REFERENCE.md` only as a source of information.

### Authority order

When documents disagree, use this precedence:

1. `SITE_SPEC.md` — scope, behavior, architecture, engineering
2. `DESIGN.md` — visual and UX decisions
3. `CONTENT_REFERENCE.md` — legacy facts/content only

If something is unspecified, choose the **simplest implementation consistent with these documents**.

Do not invent major features, pages, dependencies, or abstractions without a clear requirement.

---

# 1. Product Definition

`alperen.me` is Alperen Yilmaz's personal professional website.

It should function as:

- a personal home on the web
- a professional portfolio
- a concise presentation of selected work
- a recruiter-friendly overview
- a place for future technical writing
- a foundation that can grow without being redesigned from scratch

It should **not** behave like:

- a SaaS landing page
- a design portfolio
- a graphical CV
- a terminal-themed novelty site
- a social network profile clone
- a generic developer template

The site should be useful to both:

- recruiters / HR
- engineers / technical peers

without optimizing exclusively for either audience.

---

# 2. Initial Scope

The initial redesign is intentionally small.

The first release should prioritize:

1. homepage
2. selected work
3. short about section
4. experience and education
5. CV link
6. contact / external links
7. project detail support
8. future blog architecture

The site may launch without blog posts.

Do not ship placeholder sections such as:

- "Coming soon"
- empty article lists
- fake project placeholders
- unfinished feature blocks

If content does not exist yet, omit the section.

---

# 3. Initial Information Architecture

## 3.1 Homepage

Initial homepage structure:

```text
Header
Introduction
Selected Work
About
Experience / Education
Writing          [only when content exists]
Elsewhere / Footer
```

The homepage should remain concise.

It is acceptable for sections to visually flow into each other rather than appear as large isolated blocks.

The page should feel like one composed personal document rather than a stack of independent landing-page components.

## 3.2 Routes

Initial route structure:

```text
/
├── /projects/[slug]
├── /about              [optional; only if homepage content is insufficient]
├── /writing            [future]
├── /writing/[slug]     [future]
└── /cv.pdf
```

Avoid creating routes simply because portfolio templates commonly have them.

Every route must justify its existence.

---

# 4. Header

The header should contain:

- site wordmark: `alperen.`
- selected navigation links
- direct CV access

Possible navigation:

```text
Work
About
Writing
CV ↗
```

Exact labels may evolve as content becomes available.

Rules:

- links must point to useful destinations
- internal homepage links may use anchors
- `Writing` should not appear before writing exists unless it leads to a useful page
- no "Hire me" CTA
- no duplicate Home link if the wordmark already links home

The wordmark always links to `/`.

---

# 5. Introduction

The introduction should answer:

- who Alperen is
- what he currently does
- what technical areas interest him

Keep it concise.

Do not use generic portfolio language.

Avoid copy such as:

- "passionate developer"
- "turning ideas into reality"
- "building digital experiences"
- "results-driven engineer"
- "innovative problem solver"

The introduction should sound like a real person.

Content may include:

- Computer Science at FHNW
- current engineering direction
- systems
- security
- infrastructure
- backend/software engineering
- selected current focus

Do not overload the introduction with every skill or credential.

---

# 6. Selected Work

## 6.1 Scope

Selected Work may mix:

- professional work
- internships
- strong academic work
- serious personal projects
- open-source work later

This section is intentionally not called only "Projects".

The purpose is to show meaningful work, regardless of where it came from.

## 6.2 Selection quality

Prefer:

- 3–5 strong entries

over:

- every repository
- every school assignment
- minor experiments

Each entry should earn its place.

## 6.3 Entry fields

A work entry may contain:

```text
title
type / context
year
short description
technology summary
internal detail-page link
external source/demo link
optional image
```

Not every field is required.

Avoid forcing all entries into identical data if some fields do not apply.

## 6.4 Work data

Work content should be stored separately from the presentation component where practical.

Preferred approach:

```text
src/data/work.ts
```

or a small Astro content collection if richer project pages become useful.

Avoid hardcoding large amounts of work metadata directly into UI components.

## 6.5 Project detail pages

Only stronger work needs dedicated detail pages.

A detail page may contain:

- project context
- role
- problem
- implementation
- architecture
- important decisions
- selected screenshots
- technical challenges
- outcome
- repository/demo links

Do not force every project into a long case-study format.

For small work, a homepage entry may be sufficient.

---

# 7. About

The homepage should include a concise About or "Who am I?" section.

Purpose:

- provide some personality
- explain interests beyond a job-title list
- communicate how Alperen approaches software and learning

Recommended length:

- 1–3 short paragraphs

This section may include a small amount of non-technical personality if it feels natural.

Do not turn it into:

- a full autobiography
- a list of personality traits
- motivational text
- a long hobbies section
- a second CV

A separate `/about` page should only be added when there is enough distinct material to justify it.

---

# 8. Experience and Education

## 8.1 Purpose

The homepage should give recruiters a fast overview without reproducing the complete CV.

Include:

- selected relevant experience
- current education
- important specialization/context

Keep entries concise.

## 8.2 Experience fields

Example:

```text
organization
role
period
optional short context
```

## 8.3 Education fields

Example:

```text
institution
degree
period
specialization
```

The full CV remains the source for exhaustive detail.

Include a clear link to:

```text
/cv.pdf
```

Do not duplicate the complete CV as HTML unless there is a later reason.

---

# 9. Writing / Blog

The codebase should support future writing without requiring a framework migration.

## 9.1 Initial behavior

If no real articles exist:

- omit Writing from homepage
- omit empty writing index if unnecessary

Do not show placeholder posts.

## 9.2 Future implementation

Use Astro content collections with Markdown or MDX.

Preferred structure:

```text
src/content/
└── writing/
    ├── article-one.md
    └── article-two.md
```

or the current Astro-recommended equivalent when implemented.

Each article should support metadata such as:

```yaml
title:
description:
published:
updated:
tags:
draft:
```

Keep metadata minimal.

Do not introduce categories, reactions, comments, reading streaks, or complex CMS behavior unless later requested.

## 9.3 Article requirements

Future article pages should support:

- headings
- code blocks
- syntax highlighting
- images
- links
- lists
- tables
- blockquotes
- footnotes if needed
- SEO metadata

The writing system should remain static-first.

---

# 10. Contact / Elsewhere

The homepage footer or final section should provide direct access to relevant profiles.

Likely links:

```text
GitHub
LinkedIn
Email
```

Additional links should only be included if useful.

Prefer text links over icon-only buttons.

A contact form is not needed initially.

Use a `mailto:` link for email unless later requirements justify a form.

---

# 11. CV

The site should provide a stable CV URL:

```text
/cv.pdf
```

Requirements:

- easy to access
- opens/downloads normally
- no custom PDF viewer required
- no JavaScript dependency
- link should be clear in navigation or footer

The CV file should be replaceable without changing site code.

Recommended location:

```text
public/cv.pdf
```

---

# 12. Technology Stack

Use:

```text
Astro
TypeScript
HTML
CSS
Markdown / MDX later
```

## 12.1 Astro

Astro is the application framework.

Reasons:

- ideal for static content-oriented websites
- excellent performance
- minimal client-side JavaScript
- clean routing
- strong Markdown/MDX support
- straightforward GitHub Pages deployment
- easy to maintain
- supports future interactive islands if actually needed

Do not introduce Next.js, Remix, Nuxt, or another application framework.

## 12.2 TypeScript

Use TypeScript with strict checking.

Preferred principle:

```text
strict: true
```

Avoid:

- `any` unless unavoidable and justified
- unnecessary type gymnastics
- giant generic type systems
- complex utility types for simple content

Types should improve clarity.

## 12.3 React

Do **not** install React by default.

Use standard Astro components and HTML.

If a future feature genuinely requires significant client-side interactivity, evaluate the smallest suitable solution at that time.

Do not add React merely because it is familiar.

## 12.4 JavaScript

Minimize client-side JavaScript.

Default assumption:

> If the interaction can be implemented with semantic HTML and CSS, do not use JavaScript.

JavaScript is acceptable for genuine interaction where needed.

---

# 13. Styling

Use:

- plain CSS
- Astro scoped CSS where appropriate
- CSS custom properties for shared design tokens

Do not use Tailwind initially.

Do not use:

- CSS-in-JS
- styled-components
- utility-class frameworks
- large UI libraries

Preferred CSS organization:

```text
src/styles/
├── tokens.css
└── global.css
```

Component-specific CSS may live inside `.astro` components when it remains readable.

Shared patterns should not be duplicated unnecessarily.

All colors, spacing, type families, layout widths, and other reusable design values should use tokens from `DESIGN.md`.

---

# 14. Suggested Project Structure

Keep the architecture intentionally small.

Recommended starting structure:

```text
/
├── public/
│   ├── cv.pdf
│   ├── favicon.svg
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── WorkEntry.astro
│   │   └── ...
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects/
│   │       └── [slug].astro
│   │
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   │
│   ├── data/
│   │   └── work.ts
│   │
│   └── content/
│       └── writing/
│
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── DESIGN.md
├── SITE_SPEC.md
└── CONTENT_REFERENCE.md
```

This is guidance, not an obligation to create empty folders.

Do not create directories before they have a purpose.

---

# 15. Component Design

## 15.1 Principles

Components should exist because they represent a reusable or meaningful UI responsibility.

Good candidates:

```text
Header
Footer
WorkEntry
SectionHeading
ExternalLink
```

Only create them when useful.

## 15.2 Avoid excessive componentization

Do not turn this:

```html
<p>Basel, Switzerland</p>
```

into several layers of components.

Avoid:

```text
Text
TextWrapper
TextContent
Typography
Label
MetadataLabel
```

for simple markup.

## 15.3 Component responsibilities

A component should:

- have a clear name
- have a clear reason to exist
- accept a small understandable API
- avoid hidden side effects
- remain easy to read without additional documentation

If a component is only used once and extraction makes understanding harder, keep it local.

---

# 16. Clean Code Requirements

This requirement is critical.

The code must be understandable and maintainable **without AI assistance**.

A competent developer unfamiliar with the codebase should be able to understand the purpose and flow of the site by reading it.

## 16.1 Core rules

Prefer:

- obvious code
- small functions
- direct data flow
- meaningful names
- semantic HTML
- explicit behavior
- simple configuration

Avoid:

- clever abstractions
- metaprogramming
- excessive indirection
- unnecessary helper chains
- premature optimization
- hidden magic
- overly generic reusable systems
- code generated purely to reduce line count

## 16.2 Naming

Names should describe intent.

Good:

```text
selectedWork
formatDate
WorkEntry
articleSlug
```

Bad:

```text
data2
helper
utilThing
x
temp
processStuff
```

Avoid meaningless abbreviations.

## 16.3 Functions

Functions should have one clear responsibility.

Prefer early returns when they improve clarity.

Avoid deeply nested branching.

Do not create utility functions for one-line operations unless they improve understanding.

## 16.4 Comments

Comments should explain **why**, not restate **what** the code does.

Good:

```ts
// GitHub Pages serves this project from the domain root.
```

Bad:

```ts
// Set title to title
const title = ...
```

Do not over-comment straightforward code.

---

# 17. Software Engineering Standards

## 17.1 Separation of concerns

Keep distinct concerns reasonably separated:

- content/data
- presentation
- layout
- routing
- configuration

Do not mix all site content into one giant `index.astro`.

Do not create enterprise-style layers that add no value.

## 17.2 DRY, but not aggressively

Avoid obvious duplication.

However:

> A little duplication is preferable to a bad abstraction.

Do not extract an abstraction until there is a real repeated concept.

## 17.3 KISS

Prefer the simplest solution that meets the current requirement and supports plausible future growth.

Do not solve hypothetical problems.

## 17.4 YAGNI

Do not implement:

- CMS integration
- authentication
- database
- comments
- search
- analytics dashboard
- API backend
- theme engine
- localization
- feature flags

unless later requested.

## 17.5 SOLID

Apply SOLID principles pragmatically.

Do not force object-oriented patterns into simple static-site code.

The goal is maintainability, not demonstrating architecture theory.

---

# 18. Dependency Policy

Dependencies should be minimal.

Before adding a package, ask:

1. Can Astro/HTML/CSS/TypeScript already solve this?
2. Is the dependency maintained?
3. Does it save meaningful complexity?
4. Is it proportionate to the feature?
5. Will Alperen understand why it exists later?

Avoid dependencies for trivial tasks.

Examples of unnecessary dependencies:

- class name concatenation for simple templates
- date libraries for basic formatting
- animation libraries for basic transitions
- icon libraries for three text links
- utility packages for a handful of helpers

---

# 19. Content Ownership

Content should be easy to update.

A future edit such as:

> add one project

should not require editing several unrelated files.

A future edit such as:

> change the current role

should not require understanding component internals.

Where practical, use simple structured data.

Example:

```ts
export const selectedWork = [
  {
    title: "...",
    year: 2026,
    description: "...",
    technologies: ["Astro", "TypeScript"],
    href: "/projects/..."
  }
];
```

Do not over-engineer data schemas.

---

# 20. Legacy Content

`CONTENT_REFERENCE.md` contains material from the previous portfolio.

Codex may use it to recover:

- factual biography
- work history
- education
- projects
- links
- text worth reusing
- contact details
- relevant technical facts

Codex must **not** treat it as authority for:

- page structure
- CSS
- layout
- design
- component architecture
- technical stack
- content hierarchy

The old site is reference material, not the new foundation.

---

# 21. Content Writing Rules

When Codex writes or adapts copy:

- keep it concise
- keep it human
- avoid exaggerated claims
- avoid generic professional clichés
- avoid excessive self-promotion
- do not invent facts
- do not invent experience
- do not invent technologies used
- do not invent metrics

If required information is missing:

- use a clearly marked TODO in development
- or ask for clarification before finalizing content

Do not fabricate polished-sounding filler.

---

# 22. Accessibility Requirements

Target WCAG 2.2 AA where practical.

Requirements:

- semantic landmarks
- logical heading hierarchy
- keyboard-accessible navigation
- visible focus states
- sufficient color contrast
- meaningful link labels
- meaningful alt text for informative images
- empty alt text for decorative images
- skip link if navigation/content structure benefits from one
- no keyboard traps
- reduced-motion support
- touch-friendly targets

Use native HTML controls whenever possible.

Do not recreate semantic elements with generic `<div>` elements.

---

# 23. Semantic HTML

Use semantic HTML as the default.

Preferred elements:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<h1>–<h6>
<a>
<time>
<ul>
```

Use the correct element for the content.

Avoid unnecessary ARIA where native semantics already solve the problem.

---

# 24. Performance

Performance should be a first-class constraint.

Goals:

- static-first rendering
- minimal JavaScript
- optimized fonts
- optimized images
- no unnecessary third-party scripts
- no client-side framework by default

Target good Core Web Vitals.

The homepage should remain fast on:

- mobile
- slower connections
- older devices

Do not sacrifice performance for decorative animation.

---

# 25. Font Loading

Use EB Garamond and Inter efficiently.

Preferred:

- self-hosted font files when licensing and workflow permit
- WOFF2
- only necessary weights/styles
- `font-display: swap`

Avoid downloading unnecessary weight ranges.

Suggested initial weights:

### EB Garamond

```text
400
500
600
```

Use italics only if actually required.

### Inter

```text
400
500
600
```

Do not load every available font weight.

---

# 26. Images

Images should be optimized before or during build.

Use Astro's image tooling where appropriate.

Prefer modern formats:

```text
AVIF
WebP
```

while preserving sensible fallback behavior.

Requirements:

- explicit dimensions where possible
- avoid layout shift
- responsive sizes
- lazy-load below-the-fold images
- do not lazy-load critical above-the-fold imagery if it hurts perceived performance

---

# 27. SEO

Every public page should have appropriate metadata.

Minimum:

```text
title
meta description
canonical URL
Open Graph title
Open Graph description
Open Graph image
Twitter/X card metadata if useful
```

The homepage title should be concise.

Example direction:

```text
Alperen Yilmaz — Software Engineer
```

Do not keyword-stuff.

## 27.1 Structured data

Use simple JSON-LD where useful.

Potential types:

```text
Person
WebSite
Article
```

Do not add irrelevant schema.

## 27.2 Sitemap

Generate a sitemap.

## 27.3 robots.txt

Provide a normal permissive `robots.txt` unless a later requirement says otherwise.

---

# 28. Social / Open Graph Images

Provide a default Open Graph image for the site.

It should follow `DESIGN.md`.

Keep it simple:

- name
- short identity
- dark navy background
- warm ivory typography

Do not create marketing-style social cards.

Project/article-specific OG images may be added later.

---

# 29. URLs

URLs should be:

- short
- lowercase
- readable
- stable

Preferred:

```text
/projects/kaizen
/writing/some-title
```

Avoid:

```text
/projects/my-awesome-java-rhythm-game-final
/page?id=3
```

Do not include dates in article URLs unless there is a clear reason.

---

# 30. Internal Links

Internal links should use stable site-relative routes.

Do not hardcode production domain URLs throughout components.

Prefer:

```text
/projects/kaizen
```

over:

```text
https://alperen.me/projects/kaizen
```

unless an absolute URL is specifically needed for metadata.

---

# 31. External Links

External links should:

- be clearly identifiable
- use appropriate `rel` values where necessary
- not force new tabs without a reason

If opening a new tab:

```text
target="_blank"
rel="noreferrer"
```

Use consistently.

---

# 32. Error Pages

Provide a simple custom `404` page.

It should:

- match the visual system
- clearly state the page was not found
- link back home
- avoid jokes that hurt clarity

No elaborate error animation is needed.

---

# 33. GitHub Pages Deployment

The site is deployed through GitHub Pages.

The permanent deployment setup should return to GitHub Actions after the redesign is complete.

Assumptions:

- custom domain: `alperen.me`
- GitHub Pages deployment
- repository default/production branch: `master`
- redesign work occurs on a separate branch until ready

The Astro configuration must support custom-domain GitHub Pages deployment correctly.

Because a custom domain is used, the site should be built for the domain root rather than a repository subpath.

Do not assume `/repo-name/` base paths unless the deployment setup actually requires them.

---

# 34. CNAME

GitHub Pages custom-domain configuration must preserve the domain.

Ensure the production deployment includes:

```text
CNAME
```

with:

```text
alperen.me
```

when the deployment method requires it.

Do not change DNS as part of application implementation.

---

# 35. GitHub Actions

Use a straightforward official/recommended Astro + GitHub Pages workflow.

Requirements:

- install dependencies
- type/check/build
- upload Pages artifact
- deploy to Pages

Avoid custom deployment scripts unless necessary.

The workflow should be understandable at a glance.

---

# 36. Package Manager

Prefer:

```text
npm
```

unless the existing repository already uses another package manager intentionally.

Do not introduce pnpm/Yarn/Bun merely for novelty.

Commit the lockfile.

---

# 37. Scripts

Recommended package scripts:

```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check"
}
```

Add lint/format scripts only if configured.

Keep scripts obvious.

---

# 38. Formatting and Linting

Use:

- Prettier
- Astro's official tooling
- TypeScript strict checks

Add ESLint only if it provides clear value for the actual codebase.

Do not install a large lint stack before there is enough JavaScript/TypeScript to justify it.

The goal is consistent readable code, not tool quantity.

---

# 39. Code Style

Prefer:

- 2-space indentation
- semicolons according to project formatter
- trailing commas where formatter uses them
- single consistent quote style
- one component per file where meaningful
- imports grouped clearly
- no huge files

Let Prettier handle mechanical style.

Do not manually fight the formatter.

---

# 40. File Size / Complexity

There is no arbitrary line-count limit.

However, if a file becomes difficult to scan, reconsider its responsibilities.

Warning signs:

- giant `index.astro`
- 500-line component with multiple unrelated sections
- 300-line utility module
- huge global stylesheet with component-specific rules scattered everywhere

Split based on concepts, not line count alone.

---

# 41. CSS Architecture

## 41.1 Global CSS

Use global CSS for:

- reset/base
- body
- typography defaults
- shared tokens
- reusable generic layout primitives where genuinely useful

## 41.2 Component styles

Use scoped component styles for component-specific behavior.

## 41.3 Tokens

All shared values should derive from design tokens.

Avoid random values like:

```css
margin-top: 37px;
color: #adb8c9;
```

when an existing token should be used.

Small one-off values are acceptable when visually justified.

---

# 42. Responsive Strategy

Use mobile-first CSS.

Avoid a large number of breakpoints.

Prefer content-driven breakpoints.

Likely enough:

```text
small/mobile
medium/tablet
large/desktop
```

Do not design around device names.

The layout should degrade gracefully between breakpoints.

---

# 43. Browser Support

Target current evergreen browsers:

- Chrome
- Edge
- Firefox
- Safari

Do not add polyfills for obsolete browsers unless a real requirement appears.

Use progressive enhancement.

---

# 44. Privacy

Do not add:

- invasive analytics
- tracking pixels
- ad scripts
- fingerprinting
- unnecessary cookies

If analytics are added later, prefer privacy-respecting analytics with minimal data collection.

The site should function fully without analytics.

---

# 45. Security

Although the site is static, basic security hygiene still applies.

Requirements:

- no secrets in repository
- no private tokens in frontend
- no unsafe inline script without reason
- no untrusted HTML rendering
- sanitize external content if that ever becomes relevant
- keep dependencies updated

Do not introduce environment variables unless a real secret/configuration need exists.

---

# 46. Testing

The initial site does not need a large automated test suite.

Minimum quality checks:

- `astro check`
- successful production build
- manual keyboard navigation
- responsive testing
- link validation
- 404 behavior
- CV link
- project links
- metadata inspection

Add automated unit tests only when application logic becomes complex enough to benefit.

Do not test trivial static markup for the sake of coverage.

---

# 47. Definition of Done

A feature is not done because it renders.

Before completion, verify:

## Functionality

- [ ] intended content is present
- [ ] links work
- [ ] routes work
- [ ] no placeholder content remains
- [ ] no console errors

## Engineering

- [ ] code is readable without AI
- [ ] naming is clear
- [ ] no unnecessary abstraction
- [ ] no unnecessary dependencies
- [ ] TypeScript checks pass
- [ ] production build passes

## Accessibility

- [ ] keyboard navigation works
- [ ] focus states are visible
- [ ] semantic structure is sensible
- [ ] contrast is sufficient
- [ ] images have correct alt behavior

## Responsive behavior

- [ ] mobile
- [ ] tablet
- [ ] desktop
- [ ] no accidental horizontal scroll

## Design

- [ ] consistent with `DESIGN.md`
- [ ] no accidental generic portfolio patterns
- [ ] no visual feature was added merely to fill space

---

# 48. Future-Proofing

The codebase should make future additions straightforward.

Likely future additions:

- more selected work
- more project detail pages
- writing/blog
- code blocks
- technical diagrams
- updated CV
- new external profiles
- additional small interactive features

The architecture must support these without a rewrite.

However:

> Future-proofing does not mean building future features now.

Build clean extension points only where the need is obvious.

---

# 49. Examples of Good Future Changes

The following should be easy:

### Add a project

Expected:

- add project data/content
- add assets
- optionally add project page

Not expected:

- edit five components
- update routing manually in several places
- change CSS architecture

### Add a blog post

Expected:

- create one Markdown/MDX file
- add images if needed

Not expected:

- edit article index manually
- add route by hand
- duplicate metadata logic

### Replace CV

Expected:

```text
replace public/cv.pdf
```

No source-code modification required.

### Change homepage intro

Expected:

- edit content in one obvious location

Not:

- find text inside several UI components

---

# 50. What Codex Must Not Do

Without explicit instruction, Codex must not:

- redesign beyond `DESIGN.md`
- rewrite site architecture arbitrarily
- introduce React
- introduce Next.js
- introduce Tailwind
- add a UI library
- add a CMS
- add a backend
- add a database
- add authentication
- add analytics
- add tracking
- add animations beyond the design spec
- add placeholder content
- invent work history
- invent projects
- invent metrics
- invent technologies
- create extra pages "for completeness"
- preserve legacy code merely because it exists
- build abstractions for hypothetical future needs
- add dependencies for trivial problems

---

# 51. Implementation Decision Rules

When Codex faces an implementation choice:

## Prefer native platform features

Priority:

1. semantic HTML
2. CSS
3. Astro
4. small TypeScript
5. external dependency

## Prefer readability

Choose:

```text
simple explicit code
```

over:

```text
clever compact code
```

## Prefer static rendering

Unless a requirement needs runtime interaction, generate static HTML.

## Prefer local clarity over theoretical reuse

Do not create a generic system to avoid two similar lines of code.

## Prefer deletion

If a feature does not clearly improve:

- understanding
- navigation
- content
- accessibility
- maintainability

remove it.

---

# 52. Final Engineering Test

A successful implementation should satisfy all three audiences.

## Alperen

Months later, Alperen should be able to open the repository and understand:

- where homepage content lives
- where work entries live
- where styles live
- how routes are created
- how to add a project
- how to add writing
- how to replace the CV
- how deployment works

without asking an AI to explain the project.

## Another developer

A developer unfamiliar with the project should think:

> This is straightforward.

Not:

> Why does a static portfolio have this architecture?

## Codex

Codex should have enough structure to work reliably, but not enough freedom to turn a simple personal site into an over-engineered application.

The final codebase should feel deliberate, boring in the right places, and easy to own.
