# alperen.me

Alperen Yilmaz’s personal website. Astro, strict TypeScript, and plain CSS.
Static HTML, with a small section-reveal script and Lenis scroll smoothing.

## Development

Use Node.js 22.12 or newer (CI uses Node.js 24) and npm.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

`npm run format` formats source files. `npm run format:check` checks formatting.
The three supplied specifications are excluded from formatting and remain unchanged.

## Where to edit

| Change                              | Location                                  |
| ----------------------------------- | ----------------------------------------- |
| Introduction, About, profile links  | `src/data/profile.ts`                     |
| Experience and education            | Arrays in `src/data/profile.ts`           |
| Selected work                       | `src/data/work.ts`                        |
| Homepage composition                | `src/pages/index.astro`                   |
| Colors, typography, spacing, widths | `src/styles/tokens.css`                   |
| Font imports and global styles      | `src/styles/global.css`                   |
| Header, footer, work row styles     | Scoped styles in `src/components/*.astro` |
| Shared document shell and metadata  | `src/layouts/BaseLayout.astro`            |
| Unresolved content and launch tasks | `CONTENT_TODO.md`                         |

## Work and experience

Add, remove, or reorder objects in the appropriate data array. No component changes
are needed. Experience supports `period`, `organization`, `role`, and optional
`context`. Experience and Education always remain paired. While verified employment
entries are unavailable, Experience shows an explicit confirmation note. Replace it
by adding confirmed positions to the array; do not insert fabricated examples.

Work supports `title`, `context`, `description`, `technologies`, and optional `href`
and `linkLabel`. A work entry without a destination remains ordinary text.
Do not publish a private repository link as if it were a public source link.

## Motion

The homepage script in `src/pages/index.astro` observes groups marked `data-reveal`.
It adds `reveal-pending` only after checking browser support, then changes each group
to `is-visible` on entry. Global CSS supplies a 550ms opacity/8px translate transition.
Content stays visible if JavaScript is disabled or unsupported. Reduced motion
disables reveals and transitions, including when the
preference changes while the page is open. Keyboard focus reveals its group immediately.
Lenis is initialized in `src/layouts/BaseLayout.astro` with its own animation loop,
wheel smoothing, and anchor navigation, using the Kontra reference's 1.2-second
duration and exponential easing. It reads the existing CSS scroll margins,
and leaves touch and keyboard scrolling native. Scrolling deliberately keeps the
same glide under reduced motion (`respectReducedMotion: false`), as requested;
the reveal and link animation safeguards remain independent. Without
JavaScript, standard browser scrolling and anchor links still work.

External text links share `src/components/ExternalLink.astro`: a local SVG arrow,
color/arrow hover feedback, and the global keyboard focus outline. These links open
in a new tab with `noopener noreferrer`. Internal
navigation remains plain text.

## CV

Add the real document at `public/cv.pdf`. The header checks for it at build time and
shows a normal `/cv.pdf` link when it exists. Replace that file to update the CV.
Rebuild after adding or replacing it. There is deliberately no example PDF.

## Routes and future writing

Astro uses file-based routing under `src/pages/`. The current public pages are `/`
and `/404.html`. There are no empty project, About, or Writing routes.

After the homepage review, a useful project can get a page such as
`src/pages/projects/project-name.astro`, using `BaseLayout`, and its work entry can
link to `/projects/project-name`.

When real articles are ready, add an Astro content collection in
`src/content.config.ts`, Markdown files in `src/content/writing/`, and collection-driven
index and article routes. Use title, description, published, updated, tags, and draft
metadata. No Markdown/MDX integration or empty collection is installed yet.
The current sitemap includes the homepage; switch to `@astrojs/sitemap` when adding
content routes, so those routes are discovered automatically.

## Fonts and reference assets

EB Garamond 400 and Inter 400/500 are bundled locally from Fontsource’s Latin subsets
with `font-display: swap`. Font licenses are included with the npm packages.
The favicon is a small typographic `a`; the header wordmark is always `alperen.`.
The old AC logo and favicon are retained under `reference/legacy-assets/` and are
not published. Other legacy factual content remains in `CONTENT_REFERENCE.md`.

## GitHub Pages

`astro.config.mjs` sets `https://alperen.me` as the production URL, at the domain root.
`npm run build` generates `dist/`. `.github/workflows/pages.yml` installs dependencies,
checks formatting and types, builds, and uploads that directory. Only `master` can
deploy; `redesign` is build-only, including manual workflow runs.

**Domain cutover remains manual.** Both existing CNAME files are untouched at the
owner’s request. Update `public/CNAME` to `alperen.me` before deployment, then update
or remove the redundant root `CNAME`. Astro copies `public/CNAME` into `dist/CNAME`.
The deployment job refuses to publish while the public CNAME still names the old
domain. DNS, Pages settings, repository renaming, and merging remain owner actions.

This is the first homepage review milestone, not a production launch. See
`CONTENT_TODO.md` before merging into `master`.

## License

The existing `LICENSE` is retained unchanged. The legacy content-copyright wording
still needs the owner’s review; no new legal terms have been introduced.
