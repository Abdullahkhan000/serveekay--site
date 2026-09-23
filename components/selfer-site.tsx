"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { capabilities, disciplines, identity, projects, services, testimonials, VIDEO_POSTER, VIDEO_SRC, type Project } from "@/data/site";
import { EncryptedText } from "@/components/encrypted-text";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Kind words" },
  { id: "contact", label: "Contact" },
] as const;

function useReveals() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".selfer");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -40px 0px" });
    root.classList.add("is-motion-ready");
    root.querySelectorAll("[data-animate]").forEach((element) => observer.observe(element));
    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
      root.classList.add("has-pointer");
    };
    const onScroll = () => root.style.setProperty("--scroll-progress", `${window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)}`);
    const parallaxItems = [...root.querySelectorAll<HTMLElement>("[data-parallax-speed]")];
    const updateParallax = () => {
      const viewport = window.innerHeight;
      parallaxItems.forEach((element) => {
        const speed = Number(element.dataset.parallaxSpeed || 0);
        const rect = element.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - viewport / 2) * speed;
        element.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
      });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", updateParallax, { passive: true });
    onScroll();
    updateParallax();
    return () => { observer.disconnect(); window.removeEventListener("pointermove", onPointerMove); window.removeEventListener("scroll", onScroll); window.removeEventListener("scroll", updateParallax); root.classList.remove("is-motion-ready"); };
  }, []);
}

function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (!home || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-28% 0px -62% 0px" });
    links.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [home]);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <header className="selfer-header">
      <div className="selfer-container selfer-header__inner">
        <Link href="/" className="selfer-logo" aria-label="Serveekay home">s<span>.</span></Link>
        <button className={`selfer-menu-button ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="selfer-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /><span /></button>
        <nav id="selfer-navigation" className={`selfer-navigation ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(({ id, label }) => <Link key={id} className={home && active === id ? "is-active" : ""} href={home ? `#${id}` : `/#${id}`} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return <footer className="selfer-footer"><div className="selfer-container"><span>© {new Date().getFullYear()} {identity.studio}. Built with intention.</span><a href={`mailto:${identity.email}`}>{identity.email}</a><a href="#top" aria-label="Back to top">↑</a></div></footer>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="selfer-section-title" data-animate>{children}</h2>;
}

function ServiceIcon({ index }: { index: number }) {
  const paths = [
    <><rect x="4" y="5" width="24" height="20" rx="1" /><path d="M4 11h24M10 16h7M10 21h11" /></>,
    <><rect x="5" y="5" width="9" height="9" /><rect x="18" y="5" width="9" height="9" /><rect x="5" y="18" width="9" height="9" /><rect x="18" y="18" width="9" height="9" /></>,
    <><rect x="3" y="6" width="26" height="19" rx="1" /><path d="M3 12h26M11 17l-3 2 3 2M21 17l3 2-3 2" /></>,
    <><rect x="9" y="3" width="14" height="26" rx="2" /><path d="M14 7h4M15 25h2" /></>,
    <><path d="M16 3l11 6v14l-11 6L5 23V9l11-6Z" /><path d="M5 9l11 7 11-7M16 16v13" /></>,
  ];
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[index % paths.length]}</svg>;
}

function Hero() {
  return <section className="selfer-hero" id="home" aria-labelledby="hero-title">
    <div className="selfer-hero__grid" aria-hidden="true" />
    <div className="selfer-hero__orb selfer-hero__orb--one" aria-hidden="true" />
    <div className="selfer-hero__orb selfer-hero__orb--two" aria-hidden="true" />
    <div className="selfer-hero__photo" data-parallax-speed="-0.06"><Image src="/images/waleed-portrait.webp" alt="" fill priority loading="eager" sizes="(max-width: 700px) 100vw, 70vw" /></div>
    <div className="selfer-container selfer-hero__content">
      <div className="selfer-hero__intro" data-animate>
        <div className="selfer-hero__eyebrow"><span className="selfer-status-dot" /> {identity.availability}<span className="selfer-hero__eyebrow-line" /></div>
        <p className="selfer-hero__index">01 <span>/</span> 04</p>
        <h1 id="hero-title">I am <span>{identity.name}</span></h1>
        <p className="selfer-speech">
          <span>
            <EncryptedText
              text="Product Designer"
              revealDelayMs={100}
            />
          </span>
        </p>
        <p className="selfer-hero__descriptor">Designing digital experiences that feel as good as they work.</p>
        <div className="selfer-hero__actions"><a className="selfer-button" href="#portfolio">Explore selected work <span>↗</span></a><a className="selfer-hero__text-link" href="#about">More about me <span>↓</span></a></div>
      </div>
      <a className="selfer-square-arrow selfer-hero__down" href="#services" aria-label="Explore services">↓</a>
      <span className="selfer-hero__edge">{identity.studio} / Selected work</span>
    </div>
  </section>;
}

function Services() {
  return <section className="selfer-section selfer-services" id="services"><div className="selfer-container">
    <SectionTitle>My Services</SectionTitle>
    <div className="selfer-services__grid">
      {services.map((service, index) => <article key={service.number} className="selfer-service" data-animate>
        <div className="selfer-service__icon"><ServiceIcon index={index} /></div>
        <h3>{service.title}</h3><p>{service.description}</p>
        <span className="selfer-service__line" aria-hidden="true" />
      </article>)}
      <a href="#contact" className="selfer-service selfer-service--cta" data-animate><span className="selfer-service__icon" aria-hidden="true">↗</span><h3>Have an idea?</h3><p>Tell me what you&apos;re building. Let&apos;s find the right direction together.</p><span className="selfer-service__line" aria-hidden="true" /></a>
    </div>
  </div></section>;
}

function About() {
  return <section className="selfer-section selfer-about" id="about"><div className="selfer-container">
    <SectionTitle>About Me</SectionTitle>
    <div className="selfer-about__grid">
      <figure className="selfer-about__portrait" data-animate><Image src="/images/waleed-portrait.webp" alt="Waleed, the designer behind Serveekay" fill sizes="(max-width: 700px) 100vw, 500px" /></figure>
      <div className="selfer-about__copy" data-animate>
        <h3 className="selfer-speech selfer-speech--small">Hi There</h3>
        <p>Hey there! I&apos;m {identity.name}, a product designer with a knack for turning “meh” into “WOW!” and solving user problems with creativity, thoughtful aesthetics, and clear product thinking.</p>
        <p>When I&apos;m not obsessing over pixels or user flows, I&apos;m exploring design trends and finding better ways to make digital products feel intuitive.</p>
        <dl className="selfer-facts"><div><dt>Name:</dt><dd>{identity.name}</dd></div><div><dt>Email:</dt><dd><a href={`mailto:${identity.email}`}>{identity.email}</a></dd></div><div><dt>Based in:</dt><dd>{identity.location}</dd></div><div><dt>Focus:</dt><dd>{identity.role}</dd></div></dl>
        <a className="selfer-button" href="#contact">Contact me <span>→</span></a>
      </div>
    </div>
  </div></section>;
}

function Banner() {
  return <section className="selfer-banner" aria-label="Start a project"><div className="selfer-container selfer-banner__inner" data-animate><h2>Let&apos;s work together on your next project.</h2><a className="selfer-button" href="#contact">Get in touch <span>→</span></a></div></section>;
}

function Skills() {
  return <section className="selfer-section selfer-skills" id="skills"><div className="selfer-container"><SectionTitle>My Skills</SectionTitle>
    <div className="selfer-skills__grid"><div data-animate><h3>Every day is a new challenge.</h3><p>I bring product thinking, interface design, and development together to make digital experiences clear, useful, and memorable.</p><p>From first ideas to the final details, I work across the disciplines that make a product feel complete.</p><a className="selfer-button selfer-button--outline" href="#contact">Let&apos;s talk <span>↗</span></a></div>
    <div className="selfer-skills__list" data-animate>{disciplines.map((discipline, index) => <div key={discipline} className="selfer-skill"><div><span>{discipline}</span><span>0{index + 1}</span></div><i /></div>)}</div></div>
  </div></section>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Link href={`/work/${project.slug}`} className={`selfer-work-card selfer-work-card--${index % 4}`} aria-label={`View ${project.title} project`} data-animate>
    <span className="selfer-work-card__number">0{index + 1}</span>
    <figure>{project.image ? <Image src={project.image} alt={`${project.title} project visual`} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /> : <div className="selfer-work-card__placeholder" aria-hidden="true"><span>{project.title}</span><small>Case study in progress</small></div>}</figure>
    <div className="selfer-work-card__overlay"><span>{project.discipline}</span><strong>{project.title}</strong><i>↗</i></div>
  </Link>;
}

function Portfolio() {
  return <section className="selfer-section selfer-portfolio" id="portfolio"><div className="selfer-container"><SectionTitle>Portfolio</SectionTitle>
    <div className="selfer-work-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
  </div></section>;
}

function Highlights() {
  return <section className="selfer-highlights" aria-label="At a glance"><div className="selfer-container selfer-highlights__inner" data-animate>
    <div><strong>{String(projects.length).padStart(2, "0")}</strong><span>Selected projects</span></div>
    <div><strong>{String(services.length).padStart(2, "0")}</strong><span>Ways I can help</span></div>
    <div><strong>UX</strong><span>Thoughtful experiences</span></div>
    <div><strong>PK</strong><span>Based in Pakistan</span></div>
  </div></section>;
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];
  return <section className="selfer-section selfer-testimonials" id="testimonials"><div className="selfer-container"><SectionTitle>Kind Words</SectionTitle>
    <div className="selfer-testimonials__body" data-animate><span className="selfer-quote" aria-hidden="true">“</span><blockquote>{testimonial.quote}</blockquote><p><strong>{testimonial.name}</strong><span>{testimonial.role}</span></p><div className="selfer-testimonials__controls"><button type="button" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button><span>0{index + 1} / 0{testimonials.length}</span><button type="button" onClick={() => setIndex((index + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div></div>
  </div></section>;
}

function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") || "").trim();
    const email = String(values.get("email") || "").trim();
    const subject = String(values.get("subject") || "Project inquiry").trim();
    const message = String(values.get("message") || "").trim();
    const mailSubject = encodeURIComponent(`${subject} — ${name}`);
    const mailBody = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    setStatus("Opening your email app…");
    window.location.href = `mailto:${identity.email}?subject=${mailSubject}&body=${mailBody}`;
  }
  return <form className="selfer-form" onSubmit={submit}>
    <div className="selfer-form__row"><label>Name *<input name="name" placeholder="Your name" autoComplete="name" required /></label><label>Email *<input name="email" type="email" placeholder="Your email" autoComplete="email" required /></label></div>
    <label>Subject *<input name="subject" placeholder="What are you working on?" required /></label>
    <label>Message *<textarea name="message" placeholder="Tell me a little about your project…" rows={5} required /></label>
    <div className="selfer-form__footer"><button className="selfer-button" type="submit">Send a message <span>→</span></button><span role="status" aria-live="polite">{status}</span></div>
  </form>;
}

function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return <section className={`selfer-contact ${standalone ? "selfer-contact--standalone" : ""}`} id="contact"><div className="selfer-container"><SectionTitle>Get In Touch</SectionTitle>
    <div className="selfer-contact__lead" data-animate><h3>Let&apos;s connect.</h3><p>Have a product, a fresh idea, or a question? I&apos;d love to hear about it.</p><a href={`mailto:${identity.email}`}>{identity.email} <span>↗</span></a></div>
    <div className="selfer-contact__form-wrap" data-animate><h3>Send me a message</h3><ContactForm /></div>
  </div></section>;
}

export function SelferHome() {
  useReveals();
  return <div className="selfer" id="top"><SiteHeader home /><main><Hero /><Services /><About /><Banner /><Skills /><Portfolio /><Highlights /><Testimonials />{VIDEO_SRC && <section className="selfer-section selfer-video" aria-label="Selected work video"><div className="selfer-container"><SectionTitle>In Motion</SectionTitle><video src={VIDEO_SRC} poster={VIDEO_POSTER} autoPlay muted loop playsInline controls preload="metadata">Your browser does not support video.</video></div></section>}<ContactSection /></main><Footer /></div>;
}

export function SelferContact() {
  useReveals();
  return <div className="selfer" id="top"><SiteHeader /><main><ContactSection standalone /></main><Footer /></div>;
}

export function SelferCase({ project, next }: { project: Project; next: Project }) {
  useReveals();
  const isInProgress = project.year === "In progress";
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 4);
  return <div className="selfer" id="top"><SiteHeader /><main>
    <section className="selfer-case-hero"><div className="selfer-container selfer-case-hero__inner" data-animate>
      <span className="selfer-case-eyebrow">Selected work <span>/</span> {project.discipline}</span>
      <h1>{project.title}<span>.</span></h1><p>{project.description}</p>
      <a className="selfer-square-arrow" href="#case-story" aria-label="Explore project">↓</a>
    </div><div className="selfer-case-hero__ghost" aria-hidden="true">{project.title}</div></section>
    <section className="selfer-case-story" id="case-story"><div className="selfer-container">
      <div className="selfer-case-story__meta" data-animate><div><span>Project</span><strong>{project.title}</strong></div><div><span>Focus</span><strong>{project.discipline}</strong></div><div><span>{isInProgress ? "Status" : "Year"}</span><strong>{project.year}</strong></div></div>
      <div className="selfer-case-story__intro" data-animate><div><span className="selfer-overline">01 / Project overview</span><h2>{project.title}</h2></div><p>{isInProgress ? "The INKA case study is being prepared. Project-specific images, details, and outcomes can be added here when they are ready." : project.description}</p></div>
      <figure className="selfer-case-story__image" data-animate>{project.image ? <Image src={project.image} alt={`${project.title} project presentation`} fill priority sizes="(max-width: 700px) 100vw, 1110px" /> : <div className="selfer-case-story__placeholder"><span>{project.title}</span><small>Project imagery coming soon</small></div>}<figcaption>{isInProgress ? "Project imagery pending" : `${project.title} / Selected work`}</figcaption></figure>
      <div className="selfer-case-story__outro" data-animate><span className="selfer-overline">02 / What matters</span><h2>Good design starts with the right questions.</h2><div>{capabilities.map((capability) => <p key={capability.mark}><span>{capability.mark}</span><strong>{capability.title}</strong><small>{capability.description}</small></p>)}</div></div>
    </div></section>
    <section className="selfer-case-more"><div className="selfer-container"><div className="selfer-case-more__heading"><SectionTitle>More Work</SectionTitle><Link href={`/work/${next.slug}`}>Next: {next.title} ↗</Link></div><div className="selfer-case-more__grid">{related.map((item, index) => <ProjectCard key={item.slug} project={item} index={index} />)}</div></div></section>
    <div className="selfer-case-cta"><div className="selfer-container"><h2>Have something in mind?</h2><Link className="selfer-button" href="/contact">Let&apos;s talk <span>→</span></Link></div></div>
  </main><Footer /></div>;
}
