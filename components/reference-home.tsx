import Image from "next/image";
import Link from "next/link";
import { projects, identity } from "@/data/site";
import { offers, stages, questions } from "@/data/offers";
import { ReferenceNav } from "@/components/reference-nav";

export default function ReferenceHome() {
  const work = projects.filter(project => project.image);
  return <div className="reference-home">
    <a className="skip" href="#main">Skip to content</a>
    <ReferenceNav />
    <main id="main">
      <section className="ref-hero">
        <div className="ref-hero-copy">
          <div className="ref-greeting">Hey <span>Founders!<i aria-hidden="true">👋</i></span></div>
          <h1>Hi, I’m Waleed—a product designer partnering with startups and SaaS teams. I help turn complex ideas into intuitive digital products and polished websites through thoughtful design, clear communication, and a structured process.</h1>
        </div>
        <div className="ref-hero-photo"><Image src="/images/waleed-portrait.webp" alt="Waleed, product designer behind Serveekay" fill priority sizes="(max-width: 991px) 100vw, 50vw" /></div>
        <div className="ref-marquee" aria-label="Design disciplines"><div>{[0,1].map(i => <div className="ref-marquee-track" key={i} aria-hidden={i === 1}>{["Product design","UX strategy","Web design","Design systems","Prototyping","Developer handoff"].map(t => <span key={t}>{t}</span>)}</div>)}</div></div>
      </section>
      <section className="ref-invitation ref-container">
        <div><p className="ref-label">A clear starting point</p><h2>Great products deserve great design. Let’s make your next move a thoughtful one.</h2></div>
        <span className="ref-big-arrow" aria-hidden="true">→</span>
        <div><h3>Start here</h3><Link className="ref-button" href="/start-a-project">Tell me about your project <span>→</span></Link><p>Clear scope. Agreed deliverables. A shared direction.</p></div>
      </section>
      <section className="ref-section ref-help">
        <div className="ref-container"><p className="ref-label">/ Let’s work together</p><h2>Here’s how I can help you</h2>
          <div className="ref-offers">{offers.map((offer,index) => <Link href={`/services/${offer.slug}`} key={offer.slug} className="ref-offer"><span className="ref-number">0{index+1}</span><div><h3>{offer.title}</h3><p>{offer.audience}</p></div><span className="ref-round-arrow" aria-hidden="true">↗</span></Link>)}</div>
        </div>
      </section>
      <section className="ref-section ref-about"><div className="ref-container">
        <div className="ref-section-head"><p className="ref-label">/ About</p><div><h2>Independent designer.<br/>A partner in your next chapter.</h2><p>I’m Waleed, the designer behind Serveekay. I work with founders and product teams to bring clarity to their websites and digital products.</p></div></div>
        <div className="ref-gallery"><Image src="/images/waleed-portrait.webp" alt="Waleed portrait" width={600} height={700} sizes="(max-width:700px) 75vw,30vw"/><Image src="/images/work-lonu.webp" alt="LONU mobile interface design" width={600} height={700} sizes="(max-width:700px) 75vw,30vw"/><Image src="/images/work-verdilock.webp" alt="Verdilock product interface" width={600} height={700} sizes="(max-width:700px) 75vw,30vw"/><Image src="/images/work-coche.webp" alt="Coche ride booking interface" width={600} height={700} sizes="(max-width:700px) 75vw,30vw"/></div>
        <div className="ref-about-story"><h3>Good design connects what your business needs with what people need to do. My approach combines product thinking, clear UX and considered visual design.</h3><div><p>Every engagement starts with a conversation about your goals, constraints and priorities. Then we define the work in writing, so you know what to expect before design begins.</p><p>From core flows to responsive interfaces, progress is shared at agreed checkpoints. Feedback, priorities and files stay organized in a shared project board and Figma.</p><Link className="ref-inline" href="/start-a-project">Let’s talk about your project →</Link></div></div>
      </div></section>
      <section className="ref-section ref-work"><div className="ref-container">
        <div className="ref-section-head"><p className="ref-label">/ Serveekay</p><div><h2>Building digital products,<br/>websites, and experiences.</h2><p>A selection of interfaces from the Serveekay portfolio. Explore the available visual project overviews.</p><Link href="/work" className="ref-button">View selected work →</Link></div></div>
        <div className="ref-work-strip">{work.slice(0,4).map(project => <Link href={`/work/${project.slug}`} key={project.slug}><Image src={project.image} alt={`${project.title} interface design`} width={900} height={700} sizes="(max-width:700px) 85vw,40vw"/><div><span>{project.title}</span><span>↗</span></div></Link>)}</div>
      </div></section>
      <section className="ref-section" id="process"><div className="ref-container"><p className="ref-label">/ The process</p><h2>A clear way from idea to handoff</h2><div className="ref-stages">{stages.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="ref-section ref-resources"><div className="ref-container"><p className="ref-label">/ Ways to work together</p><h2>Find your starting point</h2><div className="ref-resource-grid">{offers.map((offer,i)=><Link href={`/services/${offer.slug}`} key={offer.slug}><Image src={["/images/service-web.webp","/images/service-mobile.webp","/images/service-design-system.webp"][i]} alt={offer.title} width={700} height={500} sizes="(max-width:700px) 100vw,33vw"/><p className="ref-label">{offer.model}</p><h3>{offer.title}</h3><p>{offer.terms}</p><span>Explore service →</span></Link>)}</div></div></section>
      <section className="ref-section"><div className="ref-container ref-faq"><div><p className="ref-label">/ Before we begin</p><h2>A little more clarity.</h2></div><div>{questions.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    </main>
    <footer className="ref-footer"><div className="ref-container"><div className="ref-footer-top"><div><h2>Have a product<br/>worth building?</h2><Link className="ref-button" href="/start-a-project">Let’s work together →</Link></div><div><p className="ref-label">Explore</p><Link href="/services">Design services</Link><Link href="/work">Selected work</Link><Link href="/services#pricing">Scope & pricing</Link></div><div><p className="ref-label">Say hello</p><a href={`mailto:${identity.email}`}>{identity.email}</a><Link href="/start-a-project">Start a project ↗</Link></div></div><div className="ref-footer-bottom"><span>Serveekay © {new Date().getFullYear()}</span><span>Independent product design / Pakistan</span></div><div className="ref-wordmark" aria-hidden="true">serveekay.</div></div></footer>
  </div>;
}
