import Link from "next/link";
import { buyingPaths, partnershipPath } from "@/data/site";
import { Arrow, SectionHeading } from "@/components/ui";

export function BuyingPaths() {
  return <div className="buying-paths">
    <div className="buying-paths-heading">
      <SectionHeading label="Ways to work">Flexible ways to bring<br />your next <em>idea to life.</em></SectionHeading>
      <p>Three starting points, plus an ongoing partnership. Choose the one that matches where your business is today — the detailed packages are listed below.</p>
    </div>
    <div className="buying-grid">
      {buyingPaths.map((path) => <article className={`buying-card${path.popular ? " buying-card--popular" : ""}`} key={path.number} data-reveal>
        {path.popular && <span className="buying-badge">Popular starting point</span>}
        <div className="buying-card-top"><span>{path.number}</span><span>{path.timeline}</span></div>
        <h3>{path.title}</h3>
        <p className="buying-summary">{path.summary}</p>
        <p className="buying-detail">{path.detail}</p>
        <ul>{path.items.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="buying-price"><span>Starting investment</span><strong>{path.price}</strong></p>
        <Link className="buying-cta" href="/contact"><span>Explore this package</span><Arrow /></Link>
      </article>)}
    </div>
    <div className="partnership-card" data-reveal>
      <div>
        <p className="eyebrow">/ Recurring engagement</p>
        <h3>{partnershipPath.title}</h3>
        <p>{partnershipPath.detail}</p>
      </div>
      <div className="partnership-action">
        <p className="partnership-price">{partnershipPath.price}<span>{partnershipPath.unit}</span></p>
        <Link className="buying-cta" href="/contact"><span>Discuss a partnership</span><Arrow /></Link>
      </div>
    </div>
    <p className="buying-note">Every package can be delivered as design only or design + development. Deliverables, exclusions, delivery options, and revision rounds are confirmed in your proposal.</p>
  </div>;
}
