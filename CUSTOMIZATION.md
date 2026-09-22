# Serveekay portfolio customization guide

The portfolio keeps content, presentation, and interaction logic separate so future updates do not require a redesign.

## Add or replace the showcase video

1. Export an MP4 using H.264 video. A 1920×1080 or 1280×720 file is a good fit. Compress it before adding it to the site.
2. Put the file in `public/media/`, for example:

   ```text
   public/media/serveekay-reel.mp4
   ```

3. Open `data/site.ts` and update the two values at the bottom:

   ```ts
   export const VIDEO_SRC = "/media/serveekay-reel.mp4";
   export const VIDEO_POSTER = "/images/hero-04.webp";
   ```

4. Restart the development server if it is already running.

When `VIDEO_SRC` has a value, `components/selfer-site.tsx` adds a responsive “In Motion” section between testimonials and contact. It uses muted inline autoplay, looping, a poster, controls, and fallback text. If it is empty, the section is hidden rather than requesting a missing file.

If you prefer the video not to autoplay, remove `autoPlay` from the `<video>` element. Remove `loop` for one-time playback, or remove `controls` for a clean reel-style presentation. Keep `muted` and `playsInline` when using autoplay for reliable mobile support.

To use a different poster, add a WebP or JPEG to `public/images/` and change `VIDEO_POSTER` to its public path.

## Add or edit projects

Project content lives in the `projects` array in `data/site.ts`.

1. Add the project cover image to `public/images/`.
2. Add or update an item:

   ```ts
   {
     slug: "project-name",
     title: "Project Name",
     description: "A factual one-line project description",
     image: "/images/work-project-name.webp",
     year: "2026",
     discipline: "Product / Web",
     tone: "tone-blue",
     featured: true,
   }
   ```

All projects appear in the home-page masonry gallery, and every project gets its own matching case-study route at `/work/project-name`. Reorder the array to change the gallery order. Keep each `slug` unique and use lowercase words separated by hyphens.

### Update the INKA case study

`/work/inka` uses the same Selfer-inspired visual system as the home gallery. It is intentionally marked `In progress` and shows a typographic placeholder instead of another project's image because no INKA-specific asset or narrative exists locally yet. When the final material is ready, add your file to `public/images/` and replace these fields in the `slug: "inka"` item in `data/site.ts`:

```ts
description: "A factual one-line INKA description",
image: "/images/work-inka.webp",
year: "2026",
discipline: "Product / Web",
```

The gallery tile and case page update automatically; no component rewrite is needed. Use only factual details and your own project image.

The legacy `tone` and `featured` fields are retained for compatibility but do not affect the new masonry layout. You can omit them when adding new projects after updating the `Project` type.

## Update personal details, services, and testimonials

Edit `data/site.ts`:

- `identity` controls the name, email, location, role, and availability.
- `disciplines` controls the four skill labels.
- `services` controls five service cards. A sixth card links to contact without a made-up service.
- `capabilities` controls general design-process highlights on case pages.
- `testimonials` controls client quotes.

Only add factual content you are comfortable publishing.

## Replace images

Store site imagery in `public/images/` and use paths beginning with `/images/`. WebP is recommended for photographs and UI mockups. Preserve roughly the same aspect ratio as the image being replaced to keep the editorial crop intentional.

The shared Figma design could not be read directly in the current workspace (the full file returned an access error), so this build uses your local Serveekay images and content. To add newer Figma artwork, export each image/frame from Figma, put it in `public/images/`, and update the matching `image` value in `data/site.ts`. Only add text or images you own and can verify; avoid copying reference-template content. Project entries with an empty `image` show a typographic placeholder until your final artwork is ready.

The main image assignments are:

- `waleed-portrait.webp` — hero and about portrait
- `hero-04.webp` — default video poster
- `work-*.webp` — masonry project-gallery covers and case-page visuals
- `contact.webp` — optional existing contact artwork (not currently placed in the Selfer-inspired layout)

## Change navigation or contact behavior

Navigation items are in `links` near the top of `components/selfer-site.tsx`. The home and standalone `/contact` forms both open a pre-filled email to `identity.email`; they do not silently submit to a server or require an API key. To enable a real backend, change the form's submit handler and add a server endpoint.

## Change the green, black, or white palette

Open `app/selfer.css` and find the `.selfer` variables. `--s-green` controls the accent, while `--s-bg`, `--s-panel`, and `--s-text` control the dark canvas and contrast. The narrow white navigation is also styled in this file. Home, contact, and every `/work/...` route share these styles.

## Run and verify locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Before publishing:

```bash
npm run lint
npm run build
```

The site uses the existing Next.js, React, TypeScript, and Tailwind setup. No additional animation or video dependency is required.
