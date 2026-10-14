import Link from "next/link";
import { RollingText } from "@/components/rolling-text";
import { LocalTime } from "@/components/local-time";
import { identity, navigation, serviceMessaging } from "@/data/site";
import { ButtonLink } from "@/components/ui";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-panel">
      <div className="container footer-grid">
        <div className="footer-invitation"><h2>{serviceMessaging.prompt}<br />Let&apos;s find the<br /><em>right direction.</em></h2><ButtonLink href="/contact" light>Get in touch</ButtonLink></div>
        <div><h3>Explore</h3><nav aria-label="Footer navigation">{navigation.map(link => <Link key={link.href} href={link.href}><RollingText text={link.label} /></Link>)}</nav></div>
        <div><h3>Working together</h3><nav aria-label="Working together"><Link href="/#process">Process</Link><Link href="/#pricing">Pricing</Link><Link href="/#faqs">FAQs</Link></nav></div>
        <div><h3>Say hello</h3><a className="footer-email" href={`mailto:${identity.email}`}>{identity.email}</a><p>{identity.location}<br />{identity.availability}</p></div>
      </div>
      <div className="footer-wordmark" data-footer-reveal aria-hidden="true">serveekay.</div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {identity.studio}™</span><span>{serviceMessaging.description}</span><LocalTime /><a href="#top">Back to top ↑</a></div>
  </footer>;
}
