import Link from "next/link";

export function SectionHeading({ index, eyebrow, children, note, light = false }: { index: string; eyebrow: string; children: React.ReactNode; note?: string; light?: boolean }) {
  return (
    <div data-reveal className="mb-16 md:mb-28">
      <div className={`mb-10 flex items-center justify-between border-t pt-3 md:mb-14 ${light ? "border-white/35" : "border-ink"}`}><p className="eyebrow">{eyebrow}</p><span className={`text-xs ${light ? "text-white/70" : "text-black/65"}`}>({index})</span></div>
      <div className="grid gap-8 md:grid-cols-[1fr_3fr] md:gap-[5vw]"><div /><div><h2 className="section-title">{children}</h2>{note && <p className={`mt-8 max-w-md text-lg ${light ? "text-white/70" : "text-black/65"}`}>{note}</p>}</div></div>
    </div>
  );
}

export function ButtonLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-8 rounded-lg px-5 font-display text-xs font-bold transition duration-300 hover:-translate-y-0.5 ${light ? "bg-white text-ink" : "bg-ink text-white"}`}>{children}<span>↗</span></Link>;
}
