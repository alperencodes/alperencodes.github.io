# DESIGN.md

## 0. Purpose

This document is the **authoritative visual and UX specification** for `alperen.me`.

It defines how the site should **look, feel, behave, and respond**. It is not an implementation plan, content database, or application architecture document.

When a design decision is unclear, follow this order:

1. Preserve the principles in this document.
2. Prefer the simpler and quieter solution.
3. Remove decoration before adding decoration.
4. Do not invent a new visual pattern unless the existing system cannot solve the problem.

The site should feel personal and recognizably Alperen without becoming theatrical, gimmicky, or "designer-y".

---

# 1. Core Design Direction

## 1.1 Design identity

The site should feel like:

> A quiet, personal, engineer-first website built around dark ink navy, warm ivory, EB Garamond, and Inter. Editorial in typography, restrained in interface, professional in structure, and personal in tone.

The intended balance is:

- **Personal, not corporate**
- **Professional, not sterile**
- **Editorial, not fashion-oriented**
- **Technical, not terminal-themed**
- **Minimal, not empty**
- **Confident, not loud**
- **Modern, not trend-chasing**
- **Distinctive, not eccentric**

The site should look intentionally designed without looking like a portfolio made to impress other designers.

## 1.2 Reference sites

Primary references:

- `paco.me`
- `piriyan.dev`

Use them as **directional inspiration only**.

Borrow from `paco.me`:

- restraint
- confidence in whitespace
- personal-site feeling
- typography-led hierarchy
- low visual noise
- content-first composition

Borrow from `piriyan.dev`:

- professional readability
- clear information hierarchy
- recruiter-friendly scanning
- serif-led personality
- practical structure

Do **not** copy:

- exact layouts
- section orders
- spacing patterns
- animations
- typography scales
- component shapes
- wording
- visual signatures

The final site should feel like **Alperen's own visual identity**, not a remix of either reference.

---

# 2. Brand / Identity Treatment

## 2.1 Wordmark

The primary site wordmark is:

```text
alperen.
```

Rules:

- always lowercase
- always includes the trailing period
- never write `alperen.me` as the primary wordmark in the header
- no logo icon is required
- no monogram is required
- do not turn the period into a gimmick, animation, glowing dot, status light, or decorative motif
- the wordmark should feel casual and confident, not branded like a startup

Preferred treatment:

- Inter
- medium or semibold weight
- small-to-medium size
- normal or very slightly tight tracking
- warm ivory foreground

## 2.2 Name spelling

When the full name is displayed, use:

```text
Alperen Yilmaz
```

Use the normal Latin `i` in `Yilmaz`.

Do not replace it with the Turkish dotless `ı`.

## 2.3 Lowercase usage

Lowercase is an **accent**, not a global style.

Good:

- `alperen.`
- file names such as `cv.pdf`
- occasional technical labels
- code, paths, or real identifiers

Avoid:

- forcing every heading into lowercase
- writing all navigation labels in lowercase purely for style
- making all section titles lowercase
- making normal prose deliberately lowercase

Normal language should use normal capitalization.

---

# 3. Color System

## 3.1 Primary palette

The site is initially **dark-only**.

Do not add a light theme unless explicitly requested later.

### Core tokens

```css
--color-bg: #0B111C;
--color-bg-subtle: #111A29;

--color-text: #EEE9DF;
--color-text-secondary: #9AA5B4;
--color-text-muted: #6F7A89;

--color-border: #273344;

--color-accent: #AFC1D6;
--color-focus: #D4E0EC;
```

## 3.2 Color intent

The background should read almost black at first glance, then reveal itself as a deep ink/midnight navy.

The foreground should be warm ivory rather than pure white.

The result should feel:

- calm
- technical
- mature
- slightly academic
- understated
- easy on the eyes

Avoid:

- pure black `#000000`
- pure white `#FFFFFF`
- bright corporate blue
- cyan "developer" accents
- neon colors
- purple gradients
- orange/brown accents
- saturated status colors unless semantically necessary

## 3.3 Accent usage

Accent color must be used sparingly.

Acceptable uses:

- subtle hover states
- focus indicators
- selected text or active navigation state
- small metadata details
- understated link differentiation where necessary

Do not:

- turn every link into bright blue
- use the accent for large filled buttons
- create colored cards
- use accent backgrounds for decorative sections

Most of the site should visually rely on:

1. typography
2. spacing
3. hierarchy
4. hairline borders
5. subtle contrast changes

—not color.

---

# 4. Typography

## 4.1 Font families

Primary serif:

```text
EB Garamond
```

Primary sans-serif:

```text
Inter
```

Fallbacks:

```css
--font-serif:
  "EB Garamond",
  Garamond,
  "Times New Roman",
  serif;

--font-sans:
  "Inter",
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Do not substitute either primary font without explicit approval.

## 4.2 Typography roles

### EB Garamond

Use for:

- hero statement
- main expressive headings
- project/work titles when appropriate
- large editorial text
- pull quotes if ever needed
- long-form writing where readability remains strong
- selected high-level page titles

EB Garamond supplies the site's personality.

### Inter

Use for:

- navigation
- wordmark
- body copy where clarity is more important than expression
- project descriptions
- dates
- metadata
- technical labels
- buttons
- links
- utility text
- captions
- compact UI

Inter supplies structure and contemporary clarity.

## 4.3 Serif/sans balance

Do not make the entire site serif.

The intended relationship is:

> EB Garamond gives the site its voice.  
> Inter keeps it grounded.

A good visual balance is roughly:

- **Garamond dominates the expressive hierarchy**
- **Inter dominates utility and dense information**

The amount of actual text set in Inter may be greater than the amount set in Garamond. That is fine.

## 4.4 Typography scale

Use a restrained fluid scale.

Suggested starting ranges:

```css
--text-xs: clamp(0.72rem, 0.70rem + 0.10vw, 0.80rem);
--text-sm: clamp(0.84rem, 0.82rem + 0.12vw, 0.94rem);
--text-base: clamp(1rem, 0.97rem + 0.16vw, 1.08rem);
--text-lg: clamp(1.15rem, 1.06rem + 0.40vw, 1.35rem);
--text-xl: clamp(1.45rem, 1.20rem + 1.00vw, 2rem);
--text-2xl: clamp(2rem, 1.40rem + 2.40vw, 3.5rem);
--text-display: clamp(3rem, 1.75rem + 5vw, 6.5rem);
```

These are guidelines, not a reason to create many arbitrary sizes.

Prefer a small number of clearly differentiated text roles.

## 4.5 Line height

Suggested direction:

- large Garamond display: `0.95–1.05`
- medium Garamond heading: `1.05–1.15`
- Inter body: `1.55–1.7`
- Garamond long-form prose: `1.45–1.6`
- metadata: `1.3–1.45`

## 4.6 Tracking

- Inter labels / all-caps metadata may use restrained positive tracking
- Garamond headings should usually use normal or slightly tight tracking
- never use aggressively spaced serif headings
- do not use wide tracking for normal paragraphs

## 4.7 Section labels

Small section labels may use Inter in uppercase, for example:

```text
SELECTED WORK
ABOUT
EXPERIENCE
WRITING
```

Use this sparingly.

These labels are structural markers, not visual banners.

They should be:

- small
- muted
- slightly tracked
- secondary to the actual content

---

# 5. Layout System

## 5.1 General layout philosophy

The site should **not** be one narrow centered column from top to bottom.

It should use a **variable-width editorial layout**.

The page may use a generous overall container while individual content blocks use different widths and alignments.

Desired feeling:

- composed
- calm
- asymmetrical when useful
- structured without feeling rigid
- more like a personal document than a dashboard

## 5.2 Outer container

Suggested desktop maximum width:

```css
--layout-max: 1240px;
```

Suggested horizontal page padding:

```css
--page-pad: clamp(1.25rem, 3vw, 3rem);
```

Do not make the site edge-to-edge on large screens.

Do not constrain the entire site to a narrow blog column.

## 5.3 Reading widths

Long prose should usually stay within:

```text
60–72ch
```

Shorter expressive text may be narrower.

Project/work rows may span much wider.

## 5.4 Grid

Use a simple editorial grid.

Recommended conceptual desktop grid:

- 12 columns
- wide gutters
- sections may occupy different spans

Do not expose the grid visually.

The grid exists to make asymmetry feel deliberate.

## 5.5 Alignment

Allowed:

- left-aligned hero with right-aligned metadata
- prose offset from the page edge
- work entries spanning wide areas
- experience and education in two columns
- alternating section widths
- occasional intentional empty columns

Avoid:

- centering every section
- putting every block inside identical width wrappers
- symmetrical card grids unless content genuinely demands them
- arbitrary left/right offsets with no compositional reason

## 5.6 Full-width usage

Full-width or near-full-width sections are allowed when they serve the content.

Good uses:

- selected work list
- large project imagery
- subtle section separators
- large typographic moments

Bad uses:

- giant background panels for every section
- decorative full-bleed gradients
- oversized hero backgrounds
- repeating bands of alternating colors

---

# 6. Spacing

## 6.1 Philosophy

Whitespace is an active design element.

When a section feels empty, do not automatically add a card, icon, illustration, badge, or animation.

Often the correct solution is simply to preserve the space.

## 6.2 Spacing scale

Use a small, consistent scale.

Suggested tokens:

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-5: 1.5rem;
--space-6: 2rem;
--space-7: 3rem;
--space-8: 4.5rem;
--space-9: 6rem;
--space-10: 8rem;
```

Use fluid section spacing where useful:

```css
--section-space: clamp(4.5rem, 8vw, 8rem);
```

## 6.3 Rhythm

The site should have clear vertical rhythm.

Avoid:

- cramped section transitions
- random one-off margins
- placing all sections exactly the same distance apart
- excessive giant gaps that make the page feel unfinished

---

# 7. Header and Navigation

## 7.1 Desktop header

Preferred structure:

```text
alperen.                             Work  About  Writing  CV ↗
```

The exact links may evolve.

Principles:

- wordmark left
- navigation right
- no giant header
- no floating navigation pill
- no glass nav
- no decorative logo mark
- no "Hire me" CTA
- no oversized button in the header

## 7.2 Header behavior

Preferred:

- simple top-of-page header
- may become lightly sticky only if it improves usability
- if sticky, background treatment must remain subtle
- no blur-heavy glassmorphism
- no drop shadow

A sticky header is not mandatory.

## 7.3 Navigation state

Use subtle states:

- opacity
- underline
- border
- color shift

Do not:

- animate links dramatically
- use glowing states
- use moving background pills
- use bouncing arrows

## 7.4 Mobile navigation

Keep mobile navigation as simple as possible.

If the link count remains small, prefer:

- compact inline links
- wrapping if necessary
- simple accessible menu only when genuinely needed

Do not introduce a full-screen animated mobile menu for four links.

---

# 8. Hero / Introduction

## 8.1 Role

The hero should answer:

- who is this?
- what kind of person / engineer is this?
- why should I keep reading?

It should not feel like a startup landing page.

## 8.2 Visual direction

The hero should be typography-first.

Possible composition:

- small Inter identity / metadata
- large EB Garamond statement
- restrained secondary text
- optional location or year information offset elsewhere

The hero may use substantial whitespace.

## 8.3 Avoid

Do not use:

- "Hi, I'm Alperen 👋"
- giant gradient text
- animated typewriter text
- "Software Engineer | Developer | Student" rotating roles
- "Hire Me" button
- giant portrait by default
- floating tech logos
- orbiting icons
- animated blobs
- fake terminal window
- excessive hero CTAs

One or two quiet links are enough if needed.

---

# 9. Selected Work

## 9.1 Presentation

Selected Work may contain both:

- professional work
- strong personal / academic projects

Presentation should feel editorial rather than card-based.

Preferred pattern:

```text
01    Project / Work Title                         2026
      Concise description
      TypeScript · Next.js · PostgreSQL                ↗
```

Potential variations are allowed, but the underlying visual grammar should remain:

- title
- concise context
- metadata
- clear destination

## 9.2 Rows over cards

Prefer:

- horizontal rows
- hairline separators
- open space
- text-led composition

Avoid:

- identical rounded cards
- 3-column card grids
- large icon badges
- stacks of chips
- oversized screenshots inside every entry

## 9.3 Technology labels

Technical stacks should be secondary information.

Good:

```text
Java · Processing · SQLite
```

Avoid:

- colored technology badges
- logo walls
- 12 separate pills
- brand-color icons
- "skill level" indicators

## 9.4 Hover states

Hover should reveal interactivity without becoming a showpiece.

Possible:

- subtle title color change
- underline motion
- small arrow translation (`1–3px`)
- restrained border-color change
- image preview only if later justified

Avoid:

- scaling whole rows
- 3D tilt
- cursor-following previews by default
- huge animated project thumbnails
- magnetic buttons

---

# 10. About / "Who am I?"

## 10.1 Role

The About section should introduce personality without turning into a biography.

It should feel human, concise, and natural.

## 10.2 Visual treatment

Possible:

- narrow text column offset within the wider page grid
- small section label
- one concise EB Garamond lead sentence
- short Inter body text

Do not turn the section into:

- a profile card
- stats
- personality tags
- icon rows
- timeline graphics

---

# 11. Experience and Education

## 11.1 Presentation

These sections should be easy to scan but visually understated.

Preferred direction:

```text
2026        Complemedis
            Software Engineering Intern
```

or a similar clean row-based structure.

Experience and Education may sit side-by-side on wider screens.

## 11.2 Avoid

Do not use:

- large timeline graphics
- vertical connector lines
- oversized company logos
- icon-heavy CV layouts
- skill bars
- resume-template styling

The site should remain a personal website, not a graphical résumé.

---

# 12. Writing

## 12.1 Future role

Writing should fit naturally into the existing system later.

The visual language should support:

- article lists
- article metadata
- long-form technical writing
- code blocks
- footnotes
- diagrams
- screenshots

## 12.2 Article lists

Prefer:

```text
Sep 2026    Article title
Aug 2026    Another article
```

or similarly restrained rows.

Avoid large blog cards unless a future article format genuinely benefits from imagery.

## 12.3 Long-form typography

For future articles:

- body copy must remain highly readable
- prose width should stay around `60–72ch`
- headings may use EB Garamond
- technical metadata may use Inter
- code may use monospace
- article pages may be simpler and narrower than the homepage

---

# 13. Monospace and Technical Styling

## 13.1 Philosophy

Technical styling must be **earned by the content**.

Use monospace only where the content is genuinely technical.

Appropriate:

- code
- file names
- paths
- commands
- real identifiers
- terminal output
- technical metadata when useful

Example:

```text
cv.pdf ↗
src/auth/session.ts
```

Inappropriate decorative usage:

```text
$ whoami
$ sudo hire-me
~/about
127.0.0.1
```

Do not make the site look like a terminal.

## 13.2 Mono font

The exact monospace font does not need to be locked until code-heavy content is introduced.

When selected later, it should be:

- highly readable
- understated
- not "hacker aesthetic"
- visually compatible with Inter and EB Garamond

---

# 14. Links and Buttons

## 14.1 Links

Text links are preferred over buttons for most actions.

Links should feel obvious through one or more of:

- underline
- contrast
- subtle hover color
- arrow indicator where leaving the site / opening a file

External or file links may use:

```text
↗
```

Do not overuse arrows.

## 14.2 Buttons

Use actual button styling only for actions that are truly button-like.

When buttons are needed:

- restrained
- compact
- low radius
- no gradients
- no glow
- no oversized pill shape

Suggested radius:

```css
--radius-sm: 2px;
--radius-md: 4px;
```

Rounded UI should never dominate the visual language.

---

# 15. Borders and Surfaces

## 15.1 Borders

Use subtle hairline borders for structure.

Preferred:

```text
1px solid var(--color-border)
```

Use borders for:

- section separation
- work rows
- content boundaries
- code blocks
- occasional image framing

## 15.2 Surfaces

Use elevated surfaces only when they serve a semantic purpose.

Avoid:

- every section inside a card
- tinted card backgrounds everywhere
- layered dashboard panels
- glass panels
- box shadows as a default separation method

## 15.3 Shadows

Default: **no shadow**.

If a shadow becomes necessary later, it must be extremely subtle and justified.

---

# 16. Images and Media

## 16.1 General philosophy

The site should not rely on decorative imagery.

Images should exist because they communicate something.

Appropriate:

- project screenshots
- diagrams
- article images
- occasional personal photography if later relevant

Avoid:

- random stock photography
- abstract blobs
- generated decorative backgrounds
- fake 3D renders
- excessive device mockups

## 16.2 Project screenshots

When used:

- preserve original content
- avoid heavy mockup frames
- use restrained borders
- allow images to become wider than prose where useful
- do not round every screenshot into a large-radius card

---

# 17. Icons

Use icons sparingly.

Prefer:

- text labels
- arrows
- familiar simple symbols

Avoid:

- icon for every line of metadata
- icon-heavy navigation
- technology logo clouds
- decorative social media logo strips

Social links may use text labels:

```text
GitHub
LinkedIn
Email
```

This is preferred over large icon buttons.

---

# 18. Motion

## 18.1 Philosophy

Motion should communicate state or improve continuity.

It should never be the reason the site feels interesting.

## 18.2 Timing

Suggested range:

```text
120–180ms
```

Use simple easing such as:

```text
ease-out
```

or a similarly restrained custom curve.

## 18.3 Appropriate motion

Allowed:

- subtle link underline transitions
- small arrow movement
- opacity transitions
- restrained reveal transitions
- very small positional shifts

## 18.4 Avoid

Do not use:

- page-load animation sequences
- scroll-jacking
- parallax
- animated background gradients
- custom cursor effects
- cursor followers
- magnetic buttons
- 3D tilt
- bouncing elements
- continuous floating motion
- excessive fade-in-on-scroll
- dramatic page transitions

If content is already readable without animation, that is a good sign.

## 18.5 Reduced motion

Respect `prefers-reduced-motion`.

All nonessential motion must be removable without losing functionality.

---

# 19. Accessibility

Accessibility is part of the design system, not a later polish pass.

## 19.1 Contrast

Maintain WCAG AA contrast for normal text.

Muted text must remain readable against the navy background.

Do not sacrifice readability for subtlety.

## 19.2 Focus

Every interactive element must have a clearly visible keyboard focus state.

Preferred focus treatment:

- restrained outline using `--color-focus`
- sufficient offset
- not hidden behind hover styling

Do not remove native focus behavior without replacing it with an equally clear alternative.

## 19.3 Interaction target size

Interactive elements must remain easy to use on touch devices.

Small visual labels may have larger invisible hit areas.

## 19.4 Semantic clarity

Never rely on color alone to communicate:

- active state
- external links
- errors
- selected items

## 19.5 Readability

Avoid:

- tiny text
- low-contrast metadata
- overly long lines
- ultra-light font weights
- italic body paragraphs for long stretches

---

# 20. Responsive Behavior

## 20.1 Philosophy

The mobile version is not a compressed desktop page.

The layout should reorganize naturally while preserving the same visual identity.

## 20.2 Desktop

On wide screens:

- make use of the editorial grid
- allow asymmetry
- keep generous whitespace
- avoid stretching prose too wide

## 20.3 Tablet

On medium widths:

- simplify column relationships
- reduce extreme offsets
- preserve section hierarchy
- maintain comfortable page padding

## 20.4 Mobile

On small screens:

- collapse multi-column layouts cleanly
- left-align primary content
- preserve strong typography
- reduce display sizes without losing hierarchy
- avoid horizontal scrolling
- keep work entries readable
- keep navigation simple
- do not simulate desktop asymmetry at the expense of usability

The mobile page should still feel deliberately composed, not merely stacked.

---

# 21. Density

The homepage should remain relatively light.

Visual density should be closer to a personal site than a résumé site.

Do not fill space merely because space exists.

The initial site may contain only a few strong sections.

It is acceptable for the homepage to be concise.

The design should support future growth without requiring visual redesign.

---

# 22. UX Tone

The UI should feel:

- direct
- nonchalant
- competent
- calm
- personal
- intentional

Avoid UI copy that feels:

- sales-driven
- self-promotional
- overly quirky
- motivational
- startup-like
- AI-generated

Examples to avoid:

```text
Let's build something amazing together.
Turning ideas into digital experiences.
Crafting beautiful solutions with code.
Passionate developer creating impactful experiences.
```

The interface should not oversell.

---

# 23. Explicit Anti-Patterns

The following are prohibited unless explicitly requested later.

## Visual

- gradients
- glassmorphism
- neon effects
- glow
- large box shadows
- excessive rounded corners
- giant pill-shaped controls
- decorative blob backgrounds
- oversized colored cards
- background noise textures
- faux paper texture
- heavy gothic ornament
- blackletter fonts
- medieval decorative elements

"Gothic" influence here means **darkness, seriousness, typography, and mood**—not gothic ornamentation.

## Portfolio clichés

- skill progress bars
- percentage-based skills
- technology logo walls
- giant GitHub contribution graph
- testimonial section
- "services" section
- number counters
- "500+ coffees"
- animated role typing
- fake terminal navigation
- terminal hero
- "sudo hire-me"
- giant Download CV CTA
- certification carousel
- every project inside a card

## Designer-portfolio tropes

- custom cursor
- cursor-follow image previews by default
- magnetic links
- full-screen animated menus
- scroll-jacking
- dramatic page transitions
- large 3D visual objects
- experimental navigation
- overlapping text purely for effect
- illegible microtype
- extreme asymmetry that harms scanning

## SaaS tropes

- giant centered headline + two CTA buttons
- gradient hero
- pill badges above headings
- feature grids
- alternating feature cards
- decorative product mockups
- pricing-like card layouts
- glass navigation bars

---

# 24. Decision Rules for Codex

When implementing or extending the UI, Codex must follow these rules.

## 24.1 When unsure, choose restraint

Prefer:

- text over icon
- link over button
- whitespace over decoration
- border over shadow
- flat surface over card
- one type scale over many
- one strong typographic moment over several weak ones

## 24.2 Do not "improve" empty space automatically

Empty space is often intentional.

Do not fill it with:

- illustrations
- icons
- gradients
- decorative lines
- badges
- text
- animation

unless the content requires it.

## 24.3 Avoid visual novelty without purpose

Do not add something merely because it looks impressive in isolation.

Every visual element must support one of:

- hierarchy
- readability
- navigation
- understanding
- identity

## 24.4 Preserve consistency

Before creating a new visual pattern:

1. check whether an existing pattern already solves the problem
2. reuse existing tokens
3. reuse existing typography roles
4. reuse existing spacing
5. reuse existing interaction behavior

Do not create one-off styling unless necessary.

---

# 25. Initial Visual Checklist

Before considering a page visually complete, verify:

- [ ] The page still looks good with animations disabled.
- [ ] EB Garamond is used for expressive hierarchy, not everywhere.
- [ ] Inter keeps dense information readable.
- [ ] `alperen.` is lowercase and includes the trailing period.
- [ ] The page uses the ink navy / warm ivory palette.
- [ ] No unnecessary cards were introduced.
- [ ] No gradients or glass effects were introduced.
- [ ] No fake terminal styling was introduced.
- [ ] No section exists purely to fill space.
- [ ] Long text remains within a readable measure.
- [ ] Interactive elements have visible hover and focus states.
- [ ] The page remains usable by keyboard.
- [ ] The mobile composition feels intentional.
- [ ] Whitespace remains generous.
- [ ] Work/project information is easy to scan.
- [ ] The site feels personal without becoming quirky.
- [ ] The site feels technical without performing "developer aesthetic".
- [ ] The result does not look like a SaaS landing page.
- [ ] The result does not look like a designer portfolio.
- [ ] The result does not look like a graphical CV.

---

# 26. Final Design Test

A successful implementation should pass this test:

### If an HR/recruiting visitor opens the site

They should quickly understand:

- who Alperen is
- what kind of work he does
- what he has built/worked on
- where to find more information

without needing to understand any technical joke or unusual interaction.

### If an engineer opens the site

They should see:

- strong taste
- technical credibility
- clarity
- restraint
- attention to detail

without the site trying to prove that Alperen is technical through terminal gimmicks.

### If Alperen opens the code or site months later

The visual system should still feel:

- understandable
- coherent
- easy to extend
- timeless enough not to require a redesign because a trend aged badly

The intended reaction is not:

> "This is an impressive portfolio design."

It is closer to:

> "This feels like Alperen's place on the internet."
