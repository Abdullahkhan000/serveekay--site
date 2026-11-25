import Image from "next/image";
import heroPortrait from "@/public/images/waleed-portrait.webp";
import aboutPortrait from "@/public/images/waleed-portrait.jpg";
import Link from "next/link";
import { aboutIntro, capabilities, contactDetails, disciplines, faqs, identity, originalMessaging, pricing, projects, services, toolkit, trustStats, workflow } from "@/data/site";
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
import { ClientChallenges } from "@/components/client-challenges";
import { WhyWorkWithMe } from "@/components/why-work-with-me";
import { BuyingPaths } from "@/components/buying-paths";

// Set to true to show the complete My skills section again.
const showSkillsSection = false;
// Set to true to restore the Explore selected work section.
const showRecentWorkSection = false;
// Set to true to restore the Monthly and Fixed project pricing plans.
const showPartnershipPlans = false;

const heroTags = ["Brand identity", "Web design & development", "Product design", "SaaS & MVPs"];

function Hero() {
  return <section className="hero" id="home" data-nav-theme="dark" aria-labelledby="hero-title">
    <div className="hero-portrait"><Image src={heroPortrait} alt="Waleed, the product designer behind Serveekay" fill preload sizes="(max-width: 760px) 100vw, 60vw" /></div>
    <div className="container hero-content"><div className="hero-copy" data-reveal>
      <p className="hero-kicker"><span />Independent design &amp; development partner</p>
      <h1 id="hero-title" className="hero-title">
        <span className="hero-title-lead">From a bold idea to a</span>
        digital product<br />people <em>love.</em>
      </h1>
      <p className="hero-description hero-supporting">
        I help startups, founders, and businesses build distinctive brands, high-converting websites, and powerful digital products through strategy, design, and development.
      </p>
      <ul className="hero-tags">{heroTags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="hero-actions"><Link className="hero-primary" href="/contact">Start a project<span aria-hidden="true">↗</span></Link><a className="hero-secondary" href="#work">Explore selected work<span aria-hidden="true">↓</span></a></div>
    </div></div>
    <ProjectMarquee />
  </section>;
}

function TrustBar() {
  return <section className="container trust-bar" aria-label="Credibility at a glance">
    <p className="eyebrow">/ Credibility at a glance</p>
    <ul className="trust-stats">{trustStats.map(stat => <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>)}</ul>
    <div className="trust-disciplines"><p className="eyebrow">/ How I can help</p><div className="discipline-strip">{disciplines.map(discipline => <span key={discipline}>{discipline}</span>)}</div></div>
  </section>;
}

function About() {
  const images = [
    { src: aboutPortrait, alt: "Waleed, product designer" },
    { src: "/images/hero-01.jpg", alt: "Serveekay product interface design" },
    { src: "/images/hero-02.jpg", alt: "Serveekay mobile product design" },
    { src: "/images/hero-03.jpg", alt: "Serveekay web interface design" },
  ];
  return <section className="section warm-panel about-section" id="about" data-nav-theme="light"><span className="anchor-alias" id="aboutme" /><div className="container">
    <p className="eyebrow">/ About Waleed</p><PixelHeading lines={['The person behind', 'the pixels.']} />
    <p className="about-introduction">{aboutIntro}</p>
    <div className="about-gallery" tabIndex={0} role="region" aria-label="Waleed and selected design work">{images.map(image => <figure key={typeof image.src === "string" ? image.src : image.src.src} data-gallery-card><Image src={image.src} alt={image.alt} fill loading={image.src === "/images/hero-01.jpg" ? "eager" : "lazy"} sizes="(max-width: 760px) 500px, 1000px" /></figure>)}</div>
    <div className="about-editorial"><div className="about-highlight"><h3>Hey there! I&apos;m {identity.name}.</h3><ScrollText text="I'm an independent product and visual designer with 7+ years of experience helping businesses turn ideas into meaningful digital experiences." /><ScrollText text="From building brand identities to designing SaaS platforms and websites, I enjoy combining creative thinking with practical problem-solving — and staying involved from the first sketch through to the build." /><dl className="about-facts"><div><dt>Based in</dt><dd>{identity.location}</dd></div><div><dt>Focus</dt><dd>{identity.role}</dd></div><div><dt>Experience</dt><dd>{identity.experience}</dd></div></dl><div className="about-extra"><p><span>Tools</span>{toolkit.join(" · ")}</p><p><span>Working style</span>Discovery, design, and development in one connected flow, with direct communication and clear milestones.</p></div><div className="about-links"><ButtonLink href="/contact">Start a project</ButtonLink>{identity.linkedin && <a className="about-linkedin" href={identity.linkedin} rel="me noopener noreferrer" target="_blank">Connect on LinkedIn <span aria-hidden="true">↗</span></a>}</div></div><AboutStory /></div>
  </div></section>;
}

function Work() {
  return <section className="atelier-work" id="work" data-nav-theme="dark" aria-labelledby="atelier-title"><span className="anchor-alias" id="portfolio" /><span className="anchor-alias" id="projects" /><div className="atelier-container">
    <div className="atelier-masthead"><span><i />Independent design / Selected work</span><span>Real problems. Thoughtful solutions.</span></div>
    <header className="atelier-heading"><div><p className="atelier-small">A few things I put my heart into</p><h2 id="atelier-title">Selected<br /><em>work.</em><sup>({String(projects.filter(project => project.image).length).padStart(2, "0")})</sup></h2></div><div className="atelier-heading-aside"><span className="atelier-heading-star" aria-hidden="true">&#10035;</span><p>From the first idea to the final interaction. A collection of brands, products, and digital worlds brought to life.</p><a href="#atelier-projects">Scroll into the details <span aria-hidden="true">&darr;</span></a></div></header>
    <WorkCarousel projects={projects} />
    {projects.filter(project => !project.image).map(project => <Link className="atelier-upcoming" href={`/work/${project.slug}`} key={project.slug}><span className="atelier-small">On the drawing board</span><h3>{project.title}</h3><span>{project.description}</span><Arrow /></Link>)}
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
  return <section className="section process-section" id="process" data-nav-theme="light"><div className="container"><SectionHeading label="The process" copy="A clear process, from the first conversation to launch. You always know what is happening, what comes next, and what you receive at each stage.">How we work<br /><em>together.</em></SectionHeading>
    <div className="process-resources">{workflow.map((step, index) => <article className="resource-card" key={step.index} data-reveal><div className="resource-image"><Image src={images[index]} alt={`${step.title} design process illustration`} fill sizes="(max-width: 760px) 78vw, 23vw" /><span>{step.index}</span></div><div className="resource-copy"><h3>{step.title}</h3><p>{step.detail}</p><p className="resource-receives"><span>You receive</span>{step.receives}</p><Link href="/contact"><RollingText text="Let's work together" /><Arrow diagonal={false} /></Link></div></article>)}</div>
  </div></section>;
}

function Skills() {
  return <section className="section container skills-section" id="skills" data-nav-theme="light"><SectionHeading label="My skills">Every day is a new challenge.</SectionHeading><p className="skills-statement">{originalMessaging.headline}</p><p className="skills-note">I bring product thinking, interface design, and development together to make digital experiences clear, useful, and memorable. From first ideas to the final details, I work across the disciplines that make a product feel complete.</p><div className="capabilities">{capabilities.map(capability => <article key={capability.mark} data-reveal><span className="eyebrow">/ {capability.mark}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>)}</div><div className="discipline-strip">{disciplines.map(discipline => <span key={discipline}>{discipline}</span>)}</div><div className="toolkit"><h3>My favourite tools</h3><ul>{toolkit.map(tool => <li key={tool}>{tool}</li>)}</ul></div><div className="portfolio-facts"><p><strong>{String(projects.length).padStart(2, "0")}</strong>Selected projects</p><p><strong>{String(services.length).padStart(2, "0")}</strong>Ways I can help</p><p><strong>UX</strong>Thoughtful experiences</p><p><strong>PK</strong>Based in Pakistan</p></div></section>;
}

function Pricing() {
  return <section className={`section warm-panel${showPartnershipPlans ? "" : " pricing--packages-only"}`} id="pricing" data-nav-theme="light"><div className="container">
    {showPartnershipPlans && <>
    <div className="heading-row"><SectionHeading label="Ways to work">Your project.<br /><em>Our partnership.</em></SectionHeading><p>A focused solution shaped around your project.</p></div>
    <div className="pricing-grid">{pricing.map((plan, index) => <article className={`price-plan${index === 0 ? " price-plan--dark" : ""}`} key={plan.label} data-reveal><div className="price-plan__top"><h3>{plan.label}</h3><span>{plan.note}</span></div><p className="price-value">{plan.price}{index === 0 && <small> / month</small>}</p><p>{plan.subtitle}</p><ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul><ButtonLink href="/contact" light={index === 0}>Start a project</ButtonLink></article>)}</div>
    </>}
    <BuyingPaths />
    <ProductizedOffers />
  </div></section>;
}

export function PortfolioHome() {
  return <div className="portfolio-home">
    <Hero />
    <TrustBar />
    <ClientChallenges />
    <section className="section container split-section" id="services" data-nav-theme="light"><header className="section-heading" data-reveal><p className="eyebrow">/ Services</p><h2 className="services-display-heading">My<br /><em>services.</em></h2><p className="section-copy">Three core offers — brand identity, websites, and product design and development. Consulting and design systems are included where they support the work.</p></header><ServiceList /></section>
    <Work />{showRecentWorkSection && <RecentWork />}
    <WhyWorkWithMe />
    <Process />{showSkillsSection && <Skills />}<MediaShowcase /><Pricing />
    <section className="section container split-section" id="testimonials" data-nav-theme="light"><SectionHeading label="Kind words">Good work speaks.<br />Happy clients <em>say more.</em></SectionHeading><Testimonials /></section>
    <About />
    <section className="section container split-section faq-section" id="faqs" data-nav-theme="light"><SectionHeading label="Need to know" copy="Everything clients usually ask before starting a project — scope, investment, timelines, and collaboration.">Questions before<br /><em>getting started?</em></SectionHeading><div className="faq-list">{faqs.map(([question, answer], index) => <details name="faqs" key={question} data-reveal><summary><span className="faq-number">0{index + 1}</span><h3>{question}</h3><span className="disclosure-icon" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="section contact-section" id="contact" data-nav-theme="light"><div className="container contact-grid"><div><SectionHeading label="Your next project">Have something in mind?<br /><em>Let&apos;s make it happen.</em></SectionHeading><p>Tell me a little about your project, what you&apos;re looking to achieve, and where you are in the process. I&apos;ll review your requirements and come back with the next steps.</p><a className="contact-email" href={`mailto:${identity.email}`}>{identity.email} ↗</a><div className="contact-expectation"><p>{identity.responseTime}</p><p>{identity.availability}</p>{contactDetails.whatsapp && <a href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>}</div></div><ContactForm /></div></section>
  </div>;
}
