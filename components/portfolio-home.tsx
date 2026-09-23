"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { capabilities, disciplines, identity, projects, services, testimonials, VIDEO_POSTER, VIDEO_SRC } from "@/data/site";
import { EncryptedText } from "@/components/ui/encrypted-text";

const navItems = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "portfolio", label: "Portfolio", icon: "⌘" },
  { id: "about", label: "About", icon: "♙" },
  { id: "process", label: "Process", icon: "▤" },
  { id: "contact", label: "Contact", icon: "✉" },
] as const;

const workflow = [
  { index: "01", title: "Discovery", detail: "Goals, users, constraints, and the product direction." },
  { index: "02", title: "UX design", detail: "Flows and structure shaped around clear user needs." },
  { index: "03", title: "UI design", detail: "A polished visual system with purposeful interaction." },
  { index: "04", title: "Delivery", detail: "Responsive design, organized files, and build-ready details." },
];

const tools = ["Figma", "Next.js", "React", "TypeScript", "CSS", "Design systems", "Prototyping", "Notion"];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ProfileCard() {
  return (
    <aside className="profile-card" aria-label="Profile">
      <div className="profile-card__brand">
        <span className="profile-card__mark" aria-hidden="true">S</span>
        <p><strong>{identity.name}</strong><strong>{identity.studio}</strong></p>
      </div>
      <figure className="profile-card__portrait">
        <Image src="/images/waleed-portrait.webp" alt="Waleed, product designer behind Serveekay" fill priority sizes="(max-width: 1023px) calc(100vw - 60px), 300px" />
      </figure>
      <dl className="profile-card__facts">
        <div><dt>Specialization:</dt><dd>UI/UX product designer<br />and frontend developer</dd></div>
        <div><dt>Based in:</dt><dd>{identity.location} · Worldwide</dd></div>
      </dl>
      <nav className="profile-card__quick" aria-label="Profile shortcuts">
        <button type="button" onClick={() => scrollToSection("portfolio")} aria-label="View projects">⌘</button>
        <button type="button" onClick={() => scrollToSection("services")} aria-label="View services">✦</button>
        <a href={`mailto:${identity.email}`} aria-label="Send email">@</a>
        <button type="button" onClick={() => scrollToSection("process")} aria-label="View process">▤</button>
        <button type="button" onClick={() => scrollToSection("contact")} aria-label="Contact Serveekay">↗</button>
      </nav>
      <button className="profile-card__cta" type="button" onClick={() => scrollToSection("contact")}>Let&apos;s Work Together!</button>
    </aside>
  );
}

function DesktopHeader({ active, dark, onTheme }: { active: string; dark: boolean; onTheme: () => void }) {
  return (
    <header className="portfolio-header">
      <nav aria-label="Portfolio navigation">
        {navItems.map((item) => (
          <button className={active === item.id ? "is-active" : ""} type="button" key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</button>
        ))}
      </nav>
      <button className="theme-switch" type="button" onClick={onTheme} aria-label={`Use ${dark ? "light" : "dark"} theme`}>{dark ? "☀" : "☾"}</button>
      <button className="header-talk" type="button" onClick={() => scrollToSection("contact")}>Let&apos;s Talk <span>▢</span></button>
    </header>
  );
}

function MobileDock({ active, dark, onTheme }: { active: string; dark: boolean; onTheme: () => void }) {
  return (
    <nav className="mobile-dock" aria-label="Mobile portfolio navigation">
      {navItems.map((item) => <button className={active === item.id ? "is-active" : ""} type="button" key={item.id} onClick={() => scrollToSection(item.id)} aria-label={item.label}>{item.icon}</button>)}
      <button type="button" onClick={onTheme} aria-label={`Use ${dark ? "light" : "dark"} theme`}>{dark ? "☀" : "☾"}</button>
      <button className="mobile-dock__talk" type="button" onClick={() => scrollToSection("contact")} aria-label="Let's talk">▢</button>
    </nav>
  );
}

function SectionHeading({ label, children }: { label: string; children: React.ReactNode }) {
  return <header className="portfolio-heading" data-portfolio-reveal><span>✦&nbsp; {label}</span><h2>{children}</h2></header>;
}

function Hero() {
  return (
    <section className="portfolio-hero" id="home" data-portfolio-section>
      <div data-portfolio-reveal>
        <span className="portfolio-kicker">✦&nbsp; Let&apos;s meet!</span>
        <h1>I&apos;m {identity.name}<br /><em>Product designer</em> and developer.</h1>
        <div className="portfolio-actions">
          <button type="button" onClick={() => scrollToSection("portfolio")}>My Works <span>⌘</span></button>
          <button type="button" onClick={() => scrollToSection("contact")}>Start a project <span>↗</span></button>
        </div>
      </div>
      <button className="portfolio-scroll" type="button" onClick={() => scrollToSection("portfolio")} aria-label="Scroll to portfolio">
        <svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id="portfolio-scroll-path" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" /></defs><text><textPath href="#portfolio-scroll-path">SCROLL FOR MORE • SCROLL FOR MORE • </textPath></text></svg>
        <i>↓</i>
      </button>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio" data-portfolio-section>
      <SectionHeading label="Portfolio">Check out my featured projects</SectionHeading>
      <div className="featured-grid">
        {projects.slice(0, 4).map((project, index) => (
          <figure className="featured-card" key={project.slug} data-portfolio-reveal>
            {index === 0 && VIDEO_SRC ? (
              <video autoPlay muted loop playsInline controls preload="metadata" poster={VIDEO_POSTER} aria-label="Serveekay selected work reel"><source src={VIDEO_SRC} type="video/mp4" />Your browser does not support HTML video.</video>
            ) : (
              <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
                <Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 700px) calc(100vw - 30px), 410px" />
              </Link>
            )}
            <figcaption><span>{project.title}</span><span>{project.discipline}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="portfolio-section" id="about" data-portfolio-section>
      <SectionHeading label="About Me">Turning complex problems into simple design</SectionHeading>
      <div className="capability-cards">
        {capabilities.map((capability) => <article key={capability.mark} data-portfolio-reveal><strong>{capability.mark}</strong><span>{capability.title}</span></article>)}
      </div>
      <div className="about-copy" data-portfolio-reveal>
        <div>
          <p>Hey there! I&apos;m <strong>{identity.name}</strong>, a product designer with a knack for turning “meh” into “WOW!” and solving user problems with creativity, thoughtful aesthetics, and clear product thinking.</p>
          <p>When I&apos;m not obsessing over pixels or user flows, I&apos;m exploring design trends and finding better ways to make digital products feel intuitive.</p>
          <button type="button" onClick={() => scrollToSection("contact")}>Start a conversation ↗</button>
        </div>
        <dl>
          <div><dt>Name</dt><dd>{identity.name}</dd></div>
          <div><dt>Email</dt><dd><a href={`mailto:${identity.email}`}>{identity.email}</a></dd></div>
          <div><dt>Location</dt><dd>{identity.location}</dd></div>
          <div><dt>Availability</dt><dd>{identity.availability}</dd></div>
        </dl>
      </div>
      <div className="service-card-grid" id="services">
        {services.slice(0, 4).map((service) => (
          <article key={service.number} data-portfolio-reveal>
            <div><span>{service.number}</span><h3>{service.title}</h3><p className="service-card-grid__tags">{service.tags}</p><p>{service.description}</p></div>
            <figure><Image src={service.image} alt={`${service.title} presentation`} fill sizes="(max-width: 700px) calc(100vw - 60px), 390px" /></figure>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="portfolio-section" id="process" data-portfolio-section>
      <SectionHeading label="Process">A clear path from idea to delivery</SectionHeading>
      <p className="process-intro" data-portfolio-reveal>Strategy, design, and delivery come together around what the product actually needs. Each stage stays focused, collaborative, and easy to follow.</p>
      <div className="timeline-columns">
        <div>
          <h3>How I work</h3>
          {workflow.map((step) => <article key={step.index} data-portfolio-reveal><span>{step.index}</span><div><h4>{step.title}</h4><p>{step.detail}</p></div></article>)}
        </div>
        <div>
          <h3>What I deliver</h3>
          {disciplines.map((discipline, index) => <article key={discipline} data-portfolio-reveal><span>0{index + 1}</span><div><h4>{discipline}</h4><p>{services[index]?.tags || "Focused digital design delivery"}</p></div></article>)}
        </div>
      </div>
      <h3 className="tools-title" data-portfolio-reveal>My favourite tools</h3>
      <div className="tool-grid">
        {tools.map((tool, index) => <article key={tool} data-portfolio-reveal><span>{tool.slice(0, 2).toUpperCase()}</span><h4>{tool}</h4><i>0{index + 1}</i></article>)}
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];
  return (
    <section className="portfolio-section testimonials-section" aria-labelledby="testimonial-title">
      <SectionHeading label="Testimonials"><span id="testimonial-title">Clients say about me</span></SectionHeading>
      <article className="review-card" data-portfolio-reveal>
        <header><span>{testimonial.initials}</span><div><h3>{testimonial.name}</h3><p>{testimonial.role}</p><i>★★★★★</i></div></header>
        <blockquote>{testimonial.quote}</blockquote>
        <Link href={`/work/${projects[index].slug}`}>Project Page&nbsp; →</Link>
      </article>
      <div className="review-controls"><button type="button" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button><button type="button" onClick={() => setIndex((index + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div>
    </section>
  );
}

function PortfolioContactForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "Not specified");
    const phone = String(form.get("phone") || "Not specified");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Waleed,\n\n${message}\n\nCompany: ${company}\nPhone: ${phone}\nContact: ${email}`);
    setStatus("Opening your email app…");
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
  }
  return (
    <form className="portfolio-contact-form" onSubmit={submit} data-portfolio-reveal>
      <label><span>Your Name*</span><input required name="name" autoComplete="name" /></label>
      <label><span>Company Name</span><input name="company" autoComplete="organization" /></label>
      <label><span>Email Address*</span><input required type="email" name="email" autoComplete="email" /></label>
      <label><span>Phone Number</span><input type="tel" name="phone" autoComplete="tel" /></label>
      <label className="portfolio-contact-form__message"><span>A Few Words*</span><textarea required name="message" rows={4} maxLength={500} /></label>
      <div className="portfolio-contact-form__submit"><button type="submit">Send Message&nbsp; ↗</button><span aria-live="polite">{status}</span></div>
    </form>
  );
}

function Contact() {
  return (
    <section className="portfolio-section contact-section" id="contact" data-portfolio-section>
      <SectionHeading label="Contact">Let&apos;s make something awesome together!</SectionHeading>
      <PortfolioContactForm />
      <footer className="portfolio-contact-footer" data-portfolio-reveal>
        <p>Want to know more about me, tell me about your project, or just say hello? <a href={`mailto:${identity.email}`}>Drop me a line</a> and I&apos;ll get back as soon as possible.</p>
        <dl><div><dt>Location</dt><dd>{identity.location} · Worldwide</dd></div><div><dt>Email</dt><dd><a href={`mailto:${identity.email}`}>{identity.email}</a></dd></div><div><dt>Status</dt><dd>{identity.availability}</dd></div></dl>
        <small>© 2026 Serveekay™</small>
      </footer>
    </section>
  );
}

export function PortfolioHome() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 50 : 850);
    const reveals = [...document.querySelectorAll<HTMLElement>("[data-portfolio-reveal]")];
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((element) => revealObserver.observe(element));

    const sections = [...document.querySelectorAll<HTMLElement>("[data-portfolio-section]")];
    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));
    return () => { window.clearTimeout(timer); revealObserver.disconnect(); sectionObserver.disconnect(); };
  }, []);

  return (
    <div className={`portfolio-home ${dark ? "is-dark" : ""}`}>
      <div className={`portfolio-loader ${ready ? "is-hidden" : ""}`} aria-hidden="true"><span>S</span><i /></div>
      <div className="portfolio-shell">
        <ProfileCard />
        <div className="portfolio-main">
          <DesktopHeader active={active} dark={dark} onTheme={() => setDark((value) => !value)} />
          <Hero /><Portfolio /><About /><Process /><Testimonials /><Contact />
        </div>
      </div>
      <MobileDock active={active} dark={dark} onTheme={() => setDark((value) => !value)} />
    </div>
  );
}
