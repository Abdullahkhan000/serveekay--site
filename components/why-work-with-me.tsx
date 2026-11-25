import Image from "next/image";
import { differentiators, identity } from "@/data/site";
import { ButtonLink, SectionHeading } from "@/components/ui";

export function WhyWorkWithMe() {
  return <section className="section why-section" id="why" data-nav-theme="light" aria-labelledby="why-title">
    <div className="container why-grid">
      <div className="why-visual" data-reveal>
        <Image src="/images/waleed-portrait.jpg" alt={`${identity.name}, ${identity.role} at ${identity.studio}`} fill sizes="(max-width: 900px) 90vw, 38vw" />
        <span className="why-badge">{identity.experience}</span>
      </div>
      <div className="why-copy">
        <header className="section-heading" data-reveal>
          <p className="eyebrow">/ Why work with me</p>
          <h2 id="why-title">More than design.<br />A partner invested in<br /><em>your success.</em></h2>
        </header>
        <ol className="why-list">
          {differentiators.map((item) => <li key={item.number} data-reveal>
            <span className="why-number">{item.number}</span>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
          </li>)}
        </ol>
        <ButtonLink href="/contact">Start a project</ButtonLink>
      </div>
    </div>
  </section>;
}
