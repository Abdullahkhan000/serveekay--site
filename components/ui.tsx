import Link from "next/link";

export function SectionIntro({ index, eyebrow, title, copy, light = false }: { index: string; eyebrow: string; title: React.ReactNode; copy?: string; light?: boolean }) {
  return (
    <header className={`section-intro ${light ? "section-intro--light" : ""}`} data-reveal>
      <div className="section-intro__meta">
        <span>{eyebrow}</span>
        <span>({index})</span>
      </div>
      <div className="section-intro__body">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </header>
  );
}

export function ButtonLink({ href, children, light = false, className = "" }: { href: string; children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <Link href={href} className={`pill-button ${light ? "pill-button--light" : ""} ${className}`}>
      <span>{children}</span>
      <i aria-hidden="true">↗</i>
    </Link>
  );
}

export function Marquee({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`marquee ${dark ? "marquee--dark" : ""}`} aria-hidden="true">
      <div className="marquee__track">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index}>{children}<i className="wire-globe" /></span>
        ))}
      </div>
    </div>
  );
}
