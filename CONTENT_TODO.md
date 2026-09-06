# Homepage review and remaining content

This file is development documentation, not public page content.

## Decisions resolved during the redesign

- Alperen selected **SecAuth, UmweltReise, HomeSecuritySystem, and dotfiles**.
- Experience examples were removed during refinement. The typed `experience`
  array in `src/data/profile.ts` is empty until real positions are confirmed.
  Experience and Education remain paired; Experience explicitly states that details
  await confirmation. Replace that development note by adding confirmed entries
  before launch.
- The owner will rename the repository and handle the CNAME/domain cutover.
- Age, hobbies, service terminology, and a formal specialization are omitted.

## Before publication

- Supply the employer name, preferred role title, and start/end dates for each
  position to include. Optional context must also be confirmed. The reference has
  only legacy 2023 internship and 2024 System Engineer wording, without an employer
  name, so neither is republished as verified employment.
- Supply `public/cv.pdf`; its link then appears automatically on build.
- Confirm a public email address. Neither the old email nor a guessed new email
  is rendered. Add a confirmed `mailto:` destination to `profile.elsewhere`.
- Review the concise About wording for voice and accuracy.
- Confirm UmweltReise’s individual contribution before adding role claims or a
  detail page. Its source is closed, so no GitLab link is presented publicly.
- Confirm individual contribution to HomeSecuritySystem before writing a case
  study. The homepage describes the documented project behavior without claiming
  sole authorship.
- Finish production social metadata with a navy/ivory typographic Open Graph image.
  The base layout currently has title, description, canonical, Open Graph text,
  Twitter summary metadata, and homepage Person JSON-LD; no missing image URL.
- Update `public/CNAME` to `alperen.me`, and update/remove the root CNAME. The
  deployment job blocks the legacy domain. Review Pages settings and DNS manually.
- Resolve source licensing versus legacy site-content copyright wording.

## Sources used for the selected work

Selection was confirmed directly by Alperen. Descriptions stay within these facts:

- [SecAuth README](https://github.com/alperencodes/SecAuth/blob/main/README.md):
  educational web-security application, PHP, MySQL, email configuration.
  PHPMailer is also supported by `CONTENT_REFERENCE.md`. No broad OWASP coverage,
  production-hardening claim, or security guarantee is made.
- UmweltReise: `CONTENT_REFERENCE.md`, section 6.3. The description omits the
  unverified individual role and team-size claim.
- [HomeSecuritySystem README](https://github.com/AronBA/HomeSecuritySystem/blob/main/README.md):
  Python/OpenCV motion detection, configurable threshold/delay, file/URL actions.
- [dotfiles README](https://github.com/alperencodes/dotfiles/blob/main/README.md):
  current Windows Komorebi, whkd, and YASB configuration. macOS configuration and
  bootstrap automation are future plans and are not described as implemented.

## Deferred intentionally

Project case studies, a separate About page, writing collections/routes, article
styles, and additional imagery wait until the homepage direction is reviewed.
Do not add placeholder articles or routes just to demonstrate the architecture.
