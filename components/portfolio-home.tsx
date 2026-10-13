import Image from "next/image";
import heroPortrait from "@/public/images/waleed-portrait.webp";
import aboutPortrait from "@/public/images/waleed-portrait.jpg";
import Link from "next/link";
import { capabilities, disciplines, faqs, identity, originalMessaging, pricing, projects, services, toolkit, workflow } from "@/data/site";
import { Arrow, ButtonLink, SectionHeading } from "@/components/ui";
import { ServiceList } from "@/components/service-list";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { MediaShowcase } from "@/components/media-showcase";
import { ProjectMarquee } from "@/components/project-marquee";
import { PixelHeading } from "@/components/pixel-heading";
import { AboutStory } from "@/components/about-story";
import { ScrollText } from "@/components/scroll-text";
import { WorkCarousel } from "@/components/work-carousel";
import { RollingText } from "@/components/rolling-text";
import { ProductizedOffers } from "@/components/productized-offers";

function Hero() {
  return <section className="hero" id="home" data-nav-theme="dark" aria-labelledby="hero-title">
    <div className="hero-portrait"><Image src={heroPortrait} alt="Waleed, the product designer behind Serveekay" fill preload sizes="(max-width: 760px) 100vw, 60vw" /></div>
    <div className="container hero-content"><div className="hero-copy" data-reveal>
      <p className="hero-kicker"><span /> Independent product designer</p>
      <h1 id="hero-title"><span className="hero-intro">I am</span> <span className="hero-name">{identity.name}.</span></h1>
      <p className="hero-role">Your product design partner.</p>
      <p className="hero-description">Designing digital experiences that feel as good as they work.</p>
      <p className="hero-description hero-supporting">{originalMessaging.hero}</p>
      <div className="hero-actions"><Link className="hero-primary" href="/contact">Discuss your project<span aria-hidden="true">↗</span></Link><a className="hero-secondary" href="#work">View selected work<span aria-hidden="true">↓</span></a></div>
    </div></div>
    <ProjectMarquee />
  </section>;
}

function InquiryStrip() {
  return <section className="inquiry-strip" data-nav-theme="light" aria-label="Start a project"><div className="container inquiry-strip-grid">
    <div><p className="eyebrow">/ {identity.studio}</p><h2>{originalMessaging.introduction}</h2><p className="availability"><span />{identity.availability}</p></div>
    <span className="inquiry-arrow" aria-hidden="true">→</span>
    <div><h3>Let&apos;s talk</h3><form action="/contact" method="get" className="quick-inquiry"><label className="sr-only" htmlFor="inquiry-email">Email address</label><input id="inquiry-email" type="email" name="email" placeholder="Email address" autoComplete="email" required /><button type="submit" className="button"><RollingText text="Start a project" /><Arrow diagonal={false} /></button></form><div className="inquiry-strip-links"><span>Have a product, a fresh idea, or a question?</span><a href="#work">Explore selected work ↓</a></div></div>
  </div></section>;
}

function About() {
  const images = [
    { src: aboutPortrait, alt: "Waleed, product designer" },
    { src: "/images/hero-01.jpg", alt: "Serveekay product interface design" },
    { src: "/images/hero-02.jpg", alt: "Serveekay mobile product design" },
    { src: "/images/hero-03.jpg", alt: "Serveekay web interface design" },
  ];
  return <section className="section warm-panel about-section" id="about" data-nav-theme="light"><span className="anchor-alias" id="aboutme" /><div className="container">
    <p className="eyebrow">/ About me</p><PixelHeading lines={['Turning “meh”', 'into “WOW!”']} />
    <p className="about-introduction">{originalMessaging.overview}</p>
    <div className="about-gallery" tabIndex={0} role="region" aria-label="Waleed and selected design work">{images.map(image => <figure key={typeof image.src === "string" ? image.src : image.src.src} data-gallery-card><Image src={image.src} alt={image.alt} fill loading={image.src === "/images/hero-01.jpg" ? "eager" : "lazy"} sizes="(max-width: 760px) 500px, 1000px" /></figure>)}</div>
    <div className="about-editorial"><div className="about-highlight"><h3>Hey there! I&apos;m {identity.name}.</h3><ScrollText text="A product designer with a knack for turning “meh” into “WOW!” and solving user problems with creativity, thoughtful aesthetics, and clear product thinking." /><ScrollText text="When I’m not obsessing over pixels or user flows, I’m exploring design trends and finding better ways to make digital products feel intuitive." /><dl className="about-facts"><div><dt>Based in</dt><dd>{identity.location}</dd></div><div><dt>Focus</dt><dd>{identity.role}</dd></div></dl><ButtonLink href="/contact">More about your project?</ButtonLink></div><AboutStory /></div>
  </div></section>;
}

function Work() {
  return <section className="section work-section" id="work" data-nav-theme="light"><span className="anchor-alias" id="portfolio" /><span className="anchor-alias" id="projects" /><div className="container">
    <div className="portfolio-masthead"><span className="eyebrow">/ The portfolio</span><span>Independent designer · Selected work</span></div>
    <div className="portfolio-heading"><SectionHeading label="Ideas made tangible">Selected work.<br /><em>Lasting impressions.</em></SectionHeading><div><p className="work-intro">Digital products with a point of view. A curated collection of interfaces, experiences, and ideas brought to life.</p><Link className="work-contact-link" href="/contact">Let&apos;s build something great<span aria-hidden="true">↗</span></Link></div></div>
    <WorkCarousel projects={projects} />
    {projects.filter(project => !project.image).map(project => <Link className="project-in-progress" href={`/work/${project.slug}`} key={project.slug}><span className="eyebrow">/ {project.discipline}</span><h3>{project.title}</h3><span>{project.description}</span><Arrow /></Link>)}
  </div></section>;
}

function RecentWork() {
  return <section className="section container recent-section" id="selected-projects" data-nav-theme="light"><SectionHeading label="Selected projects">Explore selected work</SectionHeading>
    <div className="recent-grid">{projects.filter(project => project.featured).slice(0, 3).map(project => <Link href={`/work/${project.slug}`} key={project.slug} className="recent-card" data-reveal><div className="recent-image"><Image src={project.image} alt={`${project.title} project presentation`} fill sizes="(max-width: 760px) 82vw, 30vw" /></div><h3>{project.title}</h3><p>{project.description}</p></Link>)}</div>
    <a href="#work" className="button button--outline"><RollingText text="All projects" /><Arrow diagonal={false} /></a>
  </section>;
}

function Process() {
  const images = ["/images/service-consulting.webp", "/images/service-design-system.webp", "/images/service-mobile.webp", "/images/service-web.webp"];
  return <section className="section process-section" id="process" data-nav-theme="light"><div className="container"><SectionHeading label="The process">A clear path from idea to delivery</SectionHeading><p className="process-introduction">Strategy, design, and delivery come together around what the product actually needs. Each stage stays focused, collaborative, and easy to follow.</p>
    <div className="process-resources">{workflow.map((step, index) => <article className="resource-card" key={step.index} data-reveal><div className="resource-image"><Image src={images[index]} alt={`${step.title} design process illustration`} fill sizes="(max-width: 760px) 78vw, 23vw" /><span>{step.index}</span></div><div className="resource-copy"><h3>{step.title}</h3><p>{step.detail}</p><Link href="/contact"><RollingText text="Start a project" /><Arrow diagonal={false} /></Link></div></article>)}</div>
  </div></section>;
}

function Skills() {
  return <section className="section container skills-section" id="skills" data-nav-theme="light"><SectionHeading label="My skills">Every day is a new challenge.</SectionHeading><p className="skills-statement">{originalMessaging.headline}</p><p className="skills-note">I bring product thinking, interface design, and development together to make digital experiences clear, useful, and memorable. From first ideas to the final details, I work across the disciplines that make a product feel complete.</p><div className="capabilities">{capabilities.map(capability => <article key={capability.mark} data-reveal><span className="eyebrow">/ {capability.mark}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>)}</div><div className="discipline-strip">{disciplines.map(discipline => <span key={discipline}>{discipline}</span>)}</div><div className="toolkit"><h3>My favourite tools</h3><ul>{toolkit.map(tool => <li key={tool}>{tool}</li>)}</ul></div><div className="portfolio-facts"><p><strong>{String(projects.length).padStart(2, "0")}</strong>Selected projects</p><p><strong>{String(services.length).padStart(2, "0")}</strong>Ways I can help</p><p><strong>UX</strong>Thoughtful experiences</p><p><strong>PK</strong>Based in Pakistan</p></div></section>;
}

function Pricing() {
  return <section className="section warm-panel" id="pricing" data-nav-theme="light"><div className="container">
    <div className="heading-row"><SectionHeading label="Ways to work">Your project.<br /><em>Our partnership.</em></SectionHeading><p>A focused solution shaped around your project.</p></div>
    <div className="pricing-grid">{pricing.map((plan, index) => <article className={`price-plan${index === 0 ? " price-plan--dark" : ""}`} key={plan.label} data-reveal><div className="price-plan__top"><h3>{plan.label}</h3><span>{plan.note}</span></div><p className="price-value">{plan.price}{index === 0 && <small> / month</small>}</p><p>{plan.subtitle}</p><ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul><ButtonLink href="/contact" light={index === 0}>Start a project</ButtonLink></article>)}</div>
    <ProductizedOffers />
  </div></section>;
}

export function PortfolioHome() {
  return <div className="portfolio-home">
    <Hero /><InquiryStrip />
    <section className="section container split-section" id="services" data-nav-theme="light"><SectionHeading label="My services">Have an idea?<br />Let&apos;s find the<br /><em>right direction.</em></SectionHeading><ServiceList /></section>
    <About /><Work /><RecentWork /><Process /><Skills /><MediaShowcase /><Pricing />
    <section className="section container split-section" id="testimonials" data-nav-theme="light"><SectionHeading label="Kind words">A little love<br />from <em>clients.</em></SectionHeading><Testimonials /></section>
    <section className="section container split-section faq-section" id="faqs" data-nav-theme="light"><SectionHeading label="Need to know">FAQ&apos;s &amp;<br /><em>shenanigans.</em></SectionHeading><div className="faq-list">{faqs.map(([question, answer], index) => <details name="faqs" key={question} data-reveal><summary><span className="faq-number">0{index + 1}</span><h3>{question}</h3><span className="disclosure-icon" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="section contact-section" id="contact" data-nav-theme="light"><div className="container contact-grid"><div><SectionHeading label="Get in touch">Let&apos;s<br /><em>connect.</em></SectionHeading><p>Have a product, a fresh idea, or a question? I&apos;d love to hear about it.</p><a className="contact-email" href={`mailto:${identity.email}`}>{identity.email} ↗</a><div className="contact-original"><h3>{originalMessaging.contactTitle}</h3><p>{originalMessaging.contactCopy}</p></div></div><ContactForm /></div></section>
  </div>;
}
