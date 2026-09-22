import Link from "next/link";
import { identity, navigation } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__nav section-pad">
        <Link href="/" className="site-footer__brand">SERVEEKAY®</Link>
        <nav aria-label="Footer navigation">
          {navigation.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <a href={`mailto:${identity.email}`}>{identity.email}</a>
      </div>
      <div className="site-footer__word" aria-hidden="true">SERVEEKAY</div>
      <div className="site-footer__bottom section-pad">
        <span>© 2026 Serveekay™</span>
        <span>{identity.location} · Working worldwide</span>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
