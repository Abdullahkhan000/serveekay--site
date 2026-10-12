# Serveekay Portfolio

Waleed's product-design portfolio, built with Next.js, React, TypeScript, and Tailwind CSS. A reference-based editorial redesign with local imagery, warm surfaces, serif typography, and native motion: character reveals, tilted imagery, a controllable project marquee, and a draggable project carousel. All original portfolio data and contact destinations are retained.

## Local development

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify and build

```bash
npm run lint
npm run build
npm start
```

## Structure

- `app/` — homepage, contact, project routes, metadata, and global design tokens
- `components/` — shared layout, portfolio sections, and interactive controls
- `data/` — portfolio content and project metadata
- `public/` — local WebP imagery and fonts

Contact inquiries open an email draft; no server email service is configured. See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for content, assets, video, and design-system guidance.
