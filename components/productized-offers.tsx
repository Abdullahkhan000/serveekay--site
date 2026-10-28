import Link from "next/link";

const offers = [
  {
    title: "Landing Page — Design & Build",
    price: "$1,500–$3,000+",
    timeline: "Typical timeline: 1–2 weeks",
    audience: "A focused, conversion-minded landing page for SaaS companies, startups, campaigns, and businesses launching a product or offer.",
    deliverables: ["Page structure and UX recommendations", "High-fidelity UI design in Figma", "Responsive desktop and mobile implementation", "Contact forms and agreed third-party integrations", "Basic on-page SEO setup and deployment", "Source files and handoff"],
    options: ["Design only", "Design + development", "Design + development + agreed post-launch support"],
    scope: "Define one primary page, section count, copywriting responsibility, animation complexity, integrations, revision rounds, and hosting/deployment requirements.",
    dark: true,
  },
  {
    title: "Business Website — Design & Build",
    price: "$3,000–$6,000+",
    timeline: "Typical timeline: 3–5 weeks",
    audience: "A polished multi-page website for established businesses that need a stronger digital presence, a redesign, or a clearer way to communicate their services.",
    deliverables: ["Discovery and information architecture", "Custom UI/UX design for agreed pages", "Responsive front-end development", "CMS setup where appropriate", "Forms and agreed integrations", "Responsive testing, launch, and handoff"],
    options: ["Design only", "Design + development", "Design + development + ongoing care"],
    scope: "Specify page count, CMS, content migration, copywriting, SEO depth, animations, integrations, hosting, training, and revision rounds.",
  },
  {
    title: "SaaS Dashboard — Design & Development",
    price: "$4,000–$10,000+",
    timeline: "Typical timeline: 4–8+ weeks",
    audience: "A custom web interface for SaaS products, analytics platforms, admin panels, and internal tools.",
    deliverables: ["Product requirements and core user flows", "Dashboard UX/UI and key interface states", "Reusable components and UI foundations", "Front-end implementation", "Backend, database, and API integration as scoped", "Authentication and roles when required", "Testing, deployment, and technical handoff"],
    options: ["UX/UI design", "Design + front-end", "Full-stack design and development"],
    scope: "Price according to workflows, screen count, roles and permissions, data complexity, APIs, security needs, hosting, testing, and ongoing maintenance.",
  },
  {
    title: "MVP — From Idea to Product",
    price: "$5,000–$15,000+",
    timeline: "Typical timeline: 6–12+ weeks",
    audience: "An end-to-end engagement for founders who want to turn an early-stage idea into a usable first version of a digital product.",
    deliverables: ["Product discovery and feature prioritization", "MVP scope and user journeys", "UI/UX design and clickable prototype", "Front-end and backend development", "Database and agreed third-party integrations", "Quality assurance and deployment", "Launch handoff and agreed documentation"],
    options: ["Discovery + design", "Design + build", "End-to-end MVP delivery"],
    scope: "Agree an explicit feature list and acceptance criteria. Complex payments, marketplaces, chat, AI, compliance, and advanced integrations may require separate estimates.",
  },
  {
    title: "Brand Identity — Design & Launch",
    price: "$1,000–$2,000+",
    timeline: "Typical timeline: 1–2 weeks",
    audience: "A coherent visual identity for startups and businesses preparing to launch, refresh their positioning, or build a more consistent brand.",
    deliverables: ["Logo and visual identity direction", "Color palette and typography system", "Brand guidelines", "Core brand assets and export files", "Social or marketing assets as agreed", "Optional landing page design and development"],
    options: ["Core identity", "Extended identity system", "Identity + launch landing page"],
    scope: "Set the number of concepts, logo variations, collateral items, revision rounds, brand strategy depth, and whether website work is included.",
  },
  {
    title: "Ongoing Product Partnership",
    price: "$3,000–$6,000+",
    monthly: true,
    timeline: "Monthly retainer",
    audience: "Flexible ongoing design and development capacity for teams that need a reliable partner without hiring every role full-time.",
    deliverables: ["Prioritized UX/UI improvements", "New pages and product features", "Agreed development capacity", "Design system maintenance", "Bug fixes and maintenance within scope", "Async collaboration and progress updates", "Organized files, releases, and handoff"],
    options: ["Design retainer", "Design + front-end", "Combined design + development"],
    scope: "Define monthly capacity, response times, meeting limits, support window, rollover policy, excluded work, and how new requests are prioritized.",
    dark: true,
  },
];

export function ProductizedOffers() {
  return <div className="productized-offers" aria-labelledby="offers-title">
    <div className="offers-heading"><div><p className="eyebrow">/ Design &amp; development packages</p><h3 id="offers-title">Choose your<br /><em>next move.</em></h3></div><p>Six ways to launch your brand, build your website, or grow your digital product.</p></div>
    <div className="offers-grid">{offers.map((offer, index) => <article className={`offer-card${offer.dark ? " offer-card--dark" : ""}`} key={offer.title}>
      <div className="offer-card-top"><span className="offer-number">{String(index + 1).padStart(2, "0")}</span><span className="offer-type">Service package / {String(index + 1).padStart(2, "0")}</span></div>
      <h4>{offer.title}</h4>
      <div className="offer-investment"><p className="offer-price-label">Estimated investment</p><p className="offer-price">{offer.price}{offer.monthly && <span> / month</span>}</p><p className="offer-timeline">{offer.timeline}</p></div>
      <p className="offer-audience">{offer.audience}</p>
      <details className="offer-details"><summary>Deliverables &amp; package details<span aria-hidden="true">+</span></summary>
        <div className="offer-deliverables"><h5>Proposed deliverables</h5><ul>{offer.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div className="offer-delivery"><h5>Delivery options</h5><p>{offer.options.join(" • ")}</p></div>
        <h5>Scope notes</h5><p>{offer.scope}</p>
      </details>
      <Link className="offer-cta" href="/contact"><span>Discuss your project</span><span className="offer-cta-arrow" aria-hidden="true">↗</span></Link>
    </article>)}</div>
    <p className="offers-note">Prices and timelines are indicative. Your proposal confirms deliverables, delivery options, capacity, revision rounds, dependencies, and completion criteria. Optional features, third-party costs, and additional scope are agreed separately.</p>
  </div>;
}
