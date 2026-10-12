# Serveekay portfolio

## Content and routes

`data/site.ts` is the shared source for identity, navigation, projects, services, capabilities, testimonials, pricing, FAQs, and process. Project links and pages are generated from the `projects` array. Each project has a `/work/[slug]` route. The homepage, `/contact`, all project pages, and the 404 share the root header and footer.

To add a project, add its factual content to `projects`. Store its image in `public/images/` and include `imageWidth` and `imageHeight` matching the actual file to reserve the correct space. Projects with no image appear as an editorial status row. INKA intentionally remains in progress; supply actual imagery and facts before expanding its case study.

The full original biography and messaging live in `data/site.ts`; `components/about-story.tsx` presents the expandable story. Testimonials retain their short quotes and expandable original full quotes. The old root `index.html`, `feed`, and `wp-login.php` are historical source files, not Next.js routes or a working WordPress installation.

## Design system

`app/globals.css` owns the shared colors, type scale, 1280px container, page gutters, section spacing, curves, and animation easing. The design uses local Haas for body text, local Bricolage for the Serveekay wordmark, and system Georgia for editorial headings. No reference-site fonts or images are loaded.

`components/ui.tsx` provides section headings, buttons, and arrows. The header has a floating desktop navigation and an accessible mobile menu. Project cards, service disclosures, testimonials, forms, and footer are shared components. The 760px and 1100px breakpoints adapt the page composition; the 360px breakpoint handles narrow phones.

## Contact

The homepage inquiry strip forwards the entered email to `/contact?email=...`, where the form prefills it. Both contact forms use `components/contact-form.tsx`. Name, email, subject, message, and optional budget are encoded into a mailto draft addressed to `identity.email`. The visitor must send that draft in their email app. This repository has no server email endpoint, database, or provider credentials. Direct email links are also available.

## Video

Set `VIDEO_SRC` in `data/site.ts` to an actual video stored in `public/media/`, and update `VIDEO_POSTER` if needed. The video section only renders when a video is configured. It has native controls, no autoplay, and metadata-only preloading.

## Motion and accessibility

The native browser scroll is smooth unless reduced motion is requested. `components/experience.tsx` uses IntersectionObserver and Web Animations for one-time content reveals. Content remains available without JavaScript. CSS handles restrained image scaling, link underlines, and disclosure/menu transitions. Reduced motion disables these effects. No animation dependencies are required.

The homepage follows the reference sequence: portrait hero and moving project names, inquiry strip, numbered services, tilted about gallery, horizontal selected work, recent projects, and process resource cards. Original skills, pricing, testimonials, FAQs, and contact content remain available.

`project-marquee.tsx` includes pause/play. `work-carousel.tsx` supports touch scrolling, mouse drag, arrow buttons, keyboard arrows/Home/End, and optional desktop scroll synchronization. Manual navigation takes control from the scroll animation. Reduced motion disables automatic movement. `rolling-text.tsx` supplies accessible character rollover links; `scroll-text.tsx` supplies scroll reveals; `local-time.tsx` displays Pakistan time. `pixel-heading.tsx` renders a decorative low-resolution canvas from the system serif font, retaining a semantic text heading and a no-JavaScript fallback. Header visibility follows scroll direction and restores on keyboard focus.

## Metadata

Metadata lives in the root layout and each page. Project titles, descriptions, canonical links, and social images come from the project data. `app/sitemap.ts` generates the route sitemap and `app/robots.ts` exposes robots directives. The canonical domain remains `https://serveekay.com`.

## Run and verify

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For production verification:

```bash
npm run lint
npm run build
npm start
```

No application environment variables are required. Keep the npm and pnpm lockfiles consistent when changing dependencies.
