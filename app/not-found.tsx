import Link from "next/link";

export default function NotFound() {
  return <main className="shell grid min-h-screen place-items-center py-20 text-center"><div><p className="eyebrow mb-8">404 / Lost in the pixels</p><h1 className="section-title">Nothing here.<br />Still looks nice.</h1><Link href="/" className="mt-10 inline-flex rounded-lg bg-ink px-6 py-4 font-display text-xs font-bold text-white">Back to portfolio ↗</Link></div></main>;
}
