import Link from "next/link";

const offers = [
  {
    title: "Website & Landing Page Redesign",
    price: "$2,500+",
    timeline: "2–4 weeks",
    audience: "For SaaS companies and growing businesses with unclear messaging, outdated UI, or a website that no longer reflects their product.",
    deliverables: ["Discovery, page structure and UX recommendations", "High-fidelity UI and responsive layouts", "Agreed revision rounds, Figma source files and developer handoff"],
    scope: "We agree on page count, copywriting, asset sourcing, development, revision rounds, required client inputs and completion criteria before kickoff.",
    cta: "Discuss a website redesign",
  },
  {
    title: "MVP Design Sprint",
    price: "$2,000+",
    timeline: "1–2 weeks, subject to scope",
    audience: "For founders who need to validate an early-stage product or prepare a focused first version for development.",
    deliverables: ["Core user flows and priority screens", "Low- or high-fidelity designs and a reusable UI foundation", "Figma handoff and a clickable prototype when included in scope"],
    scope: "We define screen count, platforms, research depth, prototype coverage, UI system depth and review rounds in your proposal.",
    cta: "Discuss an MVP Design Sprint",
  },
  {
    title: "Product Design Partnership",
    price: "$3,000",
    timeline: "Monthly, with agreed capacity",
    audience: "For product teams that need ongoing design capacity without a full-time hire.",
    deliverables: ["Prioritized design requests and UX/UI design", "Async collaboration and regular progress updates", "Organized Figma files and agreed handoff"],
    scope: "We agree on monthly capacity, active task limits, response times, hours and time zone, communication, meetings, rollover, billing and cancellation terms before onboarding.",
    cta: "Discuss a monthly partnership",
  },
];

export function ProductizedOffers() {
  return <div className="productized-offers" aria-labelledby="offers-title">
    <div className="offers-heading"><div><p className="eyebrow">/ Defined design packages</p><h3 id="offers-title">Choose your<br /><em>next move.</em></h3></div><p>Three focused ways to bring clarity to your website, launch your MVP, or support your product team.</p></div>
    <div className="offers-grid">{offers.map((offer, index) => <article className="offer-card" key={offer.title}>
      <div className="offer-card-top"><span className="offer-number">0{index + 1}</span><span className="offer-type">{index === 2 ? "Ongoing support" : index === 1 ? "Design sprint" : "Website redesign"}</span></div>
      <h4>{offer.title}</h4>
      <div className="offer-investment"><p className="offer-price-label">Indicative starting price</p><p className="offer-price">{offer.price}{index === 2 && <span> / month</span>}</p><p className="offer-timeline"><span aria-hidden="true">◷</span> {offer.timeline}</p></div><p className="offer-audience">{offer.audience}</p>
      <h5>Proposed deliverables</h5><ul>{offer.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
      <details><summary>Scope we agree together<span aria-hidden="true">+</span></summary><p>{offer.scope}</p></details>
      <Link className="offer-cta" href="/contact"><span>{offer.cta}</span><span className="offer-cta-arrow" aria-hidden="true">↗</span></Link>
    </article>)}</div>
    <p className="offers-note">Prices and timelines are indicative. Your proposal confirms deliverables, capacity, revision rounds, dependencies and completion criteria. Development, copywriting, paid assets and additional scope are quoted separately unless explicitly included.</p>
  </div>;
}
