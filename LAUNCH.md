# Serveekay launch configuration

## Reference redesign

The homepage now follows the visual composition inspected at https://www.faizur.com/: full-height split portrait hero, serif typography, warm neutral sections, numbered service links, angled image gallery, horizontal project strip, pill buttons and oversized footer wordmark. Serveekay identity, offers and local project assets are retained. Exact reference fonts and personal photographs are replaced with local fonts and Waleed imagery; this is not a verified pixel-perfect reproduction. Mobile navigation supports expanded state and Escape dismissal.

This implementation retains Next.js and the existing Vercel deployment structure.

- Configure server environment variables from .env.example: RESEND_API_KEY, INQUIRY_FROM_EMAIL (a verified sender), INQUIRY_TO_EMAIL, and SITE_URL.
- Until delivery is configured, the form returns HTTP 503 and shows a direct email fallback. It never displays a false success.
- Test a real submission after configuring Resend, including recipient delivery and reply-to behavior. Honeypot and same-origin checks are included; configure infrastructure rate limits before public launch.
- Confirm the repository contact email, project ownership and descriptions. Detailed project stories and outcomes are not supplied; pages explicitly identify themselves as visual overviews.
- Pricing, fixed timelines, testimonials, scarcity claims and unlimited revisions are intentionally excluded until confirmed. Edit offer content in data/offers.ts.
- No WhatsApp route is published because no verified business number was supplied.
- No analytics provider is installed. Define privacy handling before adding one; never collect inquiry content in analytics.
- Local analytics hooks dispatch serveekay:analytics browser events for CTA clicks, service views, project overview views and form starts. They do not transmit visitor information.
- Deploy through the existing Vercel project. Production deployment, browser layout checks and real email delivery still require verification.

## Verification

- Production build and TypeScript checks passed.
- ESLint passed for changed application files.
- Main routes, service and project pages, sitemap and robots returned HTTP 200; the incomplete INKA project returned 404.
- Inquiry checks returned 400 for invalid input and honeypot submissions, 403 for a foreign origin, and 503 when delivery credentials were absent.
- Repository-wide lint still reports existing errors in the unused encrypted-text component, including a duplicate in .kilo/worktrees, and an unused import in portfolio-home.
- No supported browser automation was available; mobile layouts, keyboard interaction and visual rendering need browser verification.
