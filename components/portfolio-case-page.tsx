"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { identity, type Project } from "@/data/site";

const process = [
  ["01", "Discovery", "Goals, context, and the information needed to set a clear direction."],
  ["02", "UX direction", "A focused structure that keeps the product experience clear and useful."],
  ["03", "Interface design", "A visual system that gives the experience a recognisable, considered feel."],
  ["04", "Delivery", "Polished, responsive details prepared for the next stage of the project."],
] as const;

export function PortfolioCasePage({ project, next, related }: { project: Project; next: Project; related: Project[] }) {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 50 : 600);
    const elements = [...document.querySelectorAll<HTMLElement>("[data-case-reveal]")];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: .08, rootMargin: "0px 0px -8% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => { window.clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <div className={`portfolio-home portfolio-case ${dark ? "is-dark" : ""}`}>
      <div className={`portfolio-loader ${ready ? "is-hidden" : ""}`} aria-hidden="true"><span>S</span><i /></div>
      <div className="portfolio-shell">
        <aside className="profile-card case-profile" aria-label="Project profile">
          <Link className="profile-card__brand" href="/" aria-label="Return to Serveekay home">
            <span className="profile-card__mark" aria-hidden="true">S</span>
            <p><strong>{identity.name}</strong><strong>{identity.studio}</strong></p>
          </Link>
          <figure className="profile-card__portrait">
            <Image src="/images/waleed-portrait.webp" alt="Waleed, product designer behind Serveekay" fill priority sizes="(max-width: 1023px) calc(100vw - 60px), 300px" />
          </figure>
          <dl className="profile-card__facts">
            <div><dt>Selected project:</dt><dd>{project.title}</dd></div>
            <div><dt>Project status:</dt><dd>{project.year === "In progress" ? "Case study in progress" : `${project.year} · ${project.discipline}`}</dd></div>
          </dl>
          <nav className="profile-card__quick" aria-label="Project shortcuts">
            <Link href="/" aria-label="Back to home">⌂</Link>
            <Link href="/#portfolio" aria-label="View all projects">⌘</Link>
            <a href={`mailto:${identity.email}`} aria-label="Send email">@</a>
            <Link href="/#process" aria-label="View process">▤</Link>
            <Link href="/#contact" aria-label="Contact Serveekay">↗</Link>
          </nav>
          <Link className="profile-card__cta" href="/#contact">Let&apos;s Work Together!</Link>
        </aside>

        <main className="portfolio-main" id="top">
          <header className="portfolio-header case-header">
            <nav aria-label="Project navigation">
              <Link href="/">Home</Link><Link href="/#portfolio">Portfolio</Link><Link href="/#about">About</Link><Link href="/#process">Process</Link><Link href="/#contact">Contact</Link>
            </nav>
            <button className="theme-switch" type="button" onClick={() => setDark((value) => !value)} aria-label={`Use ${dark ? "light" : "dark"} theme`}>{dark ? "☀" : "☾"}</button>
            <Link className="header-talk" href="/#contact">Let&apos;s Talk <span>▢</span></Link>
          </header>

          <section className="case-solid-hero">
            <div data-case-reveal>
              <span className="portfolio-kicker">✦&nbsp; Selected work / case study</span>
              <p className="case-solid-hero__meta">{project.discipline} <i>•</i> {project.year}</p>
              <h1>{project.title}<em>.</em></h1>
              <p className="case-solid-hero__description">{project.description}</p>
              <div className="portfolio-actions"><Link href="#project-overview">Project overview <span>↓</span></Link><Link href="/#contact">Start a project <span>↗</span></Link></div>
            </div>
            <figure className="case-solid-hero__visual" data-case-reveal>
              <Image src={project.image} alt={`${project.title} project presentation`} fill priority sizes="(max-width: 1023px) calc(100vw - 32px), 900px" />
              <figcaption>{project.title} <span>↗</span></figcaption>
            </figure>
          </section>

          <section className="case-solid-section" id="project-overview">
            <header className="portfolio-heading" data-case-reveal><span>✦&nbsp; Overview</span><h2>A focused project, presented with clarity.</h2></header>
            <div className="case-info-grid" data-case-reveal>
              <article><span>Project</span><strong>{project.title}</strong></article>
              <article><span>Focus</span><strong>{project.discipline}</strong></article>
              <article><span>Timing</span><strong>{project.year}</strong></article>
            </div>
            <p className="case-overview-copy" data-case-reveal>{project.year === "In progress" ? "The INKA case study is being prepared. This page keeps its presentation ready for the project story, imagery, and outcomes as they become available." : "A compact case-study format that brings the project context, visual direction, and delivery process into one clear narrative."}</p>
          </section>

          <section className="case-solid-section case-process-solid">
            <header className="portfolio-heading" data-case-reveal><span>✦&nbsp; Approach</span><h2>A deliberate path from direction to delivery.</h2></header>
            <div className="case-step-list">
              {process.map(([number, title, detail]) => <article key={number} data-case-reveal><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div><i>↗</i></article>)}
            </div>
          </section>

          <section className="case-solid-section case-related">
            <header className="portfolio-heading" data-case-reveal><span>✦&nbsp; More work</span><h2>Keep exploring selected projects.</h2></header>
            <div className="featured-grid case-related__grid">
              {related.map((item) => <figure className="featured-card" key={item.slug} data-case-reveal><Link href={`/work/${item.slug}`} aria-label={`View ${item.title} case study`}><Image src={item.image} alt={`${item.title} project`} fill sizes="(max-width: 700px) calc(100vw - 32px), 410px" /></Link><figcaption><span>{item.title}</span><span>{item.discipline}</span></figcaption></figure>)}
            </div>
            <Link className="case-next-link" href={`/work/${next.slug}`} data-case-reveal>Next case: <strong>{next.title}</strong> <span>↗</span></Link>
          </section>

          <section className="case-solid-cta" data-case-reveal>
            <span>Have a project in mind?</span><h2>Let&apos;s make<br />something memorable.</h2><Link href="/#contact">Start a conversation <span>↗</span></Link>
          </section>
        </main>
      </div>
      <nav className="mobile-dock case-mobile-dock" aria-label="Mobile project navigation">
        <Link href="/" aria-label="Home">⌂</Link><Link href="/#portfolio" aria-label="Portfolio">⌘</Link><Link href="#project-overview" aria-label="Project overview">▤</Link><a href={`mailto:${identity.email}`} aria-label="Email">✉</a>
        <button type="button" onClick={() => setDark((value) => !value)} aria-label={`Use ${dark ? "light" : "dark"} theme`}>{dark ? "☀" : "☾"}</button><Link className="mobile-dock__talk" href="/#contact" aria-label="Let's talk">▢</Link>
      </nav>
    </div>
  );
}
