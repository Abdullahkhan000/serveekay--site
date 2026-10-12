import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return <section className="container not-found"><p className="eyebrow">/ 404 — Page not found</p><h1>Wrong <em>turn.</em></h1><p>This page isn&apos;t here, but the work is just around the corner.</p><ButtonLink href="/">Back to portfolio</ButtonLink></section>;
}
