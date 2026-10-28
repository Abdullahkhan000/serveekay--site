"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Project } from "@/data/site";

const filters = ["All projects", "Web & product", "Mobile"] as const;
const surfaces = ["#b9c7df", "#d0d6ae", "#c2b2d5", "#c3b8e0", "#e1bdc6", "#b3d0d1", "#d8c9af", "#dfbdc9"];
const number = (value: number) => String(value).padStart(2, "0");

function ProjectPanel({ project, index, total }: { project: Project; index: number; total: number }) {
  const fullImage = project.slug === "verdilock";
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const scale = useTransform(scrollYProgress, [0, .4, 1], [.94, 1, 1.015]);
  return <article ref={ref} id={`work-${project.slug}`} className="atelier-project" data-project={project.slug} style={{ "--project-color": surfaces[index % surfaces.length] } as React.CSSProperties}>
    <Link href={`/work/${project.slug}`} className="atelier-project-link" aria-label={`Explore ${project.title}: ${project.description}`}>
      <div className="atelier-project-top"><span>{number(index + 1)} <i>/ {number(total)}</i></span><span>{project.discipline}</span><span>{project.year}</span></div>
      <div className={`atelier-stage${fullImage ? " atelier-stage--full-image" : ""}`}>
        {fullImage ? <Image src="/images/verdilock-full.webp" alt="Verdilock cybersecurity landing page and pricing design" fill unoptimized sizes="(max-width: 760px) 95vw, (max-width: 1100px) 75vw, 1136px" /> : <>
        <span className="atelier-stage-word" aria-hidden="true">{project.title}</span>
        <motion.div className="atelier-artwork" style={reduce ? undefined : { y, scale }}><Image src={project.image} alt={`${project.title} digital product and interface design`} width={project.imageWidth ?? 1500} height={project.imageHeight ?? 952} sizes="(max-width: 760px) 90vw, 65vw" /></motion.div>
        </>}
        <span className="atelier-view">Explore project <span aria-hidden="true">↗</span></span>
        {!fullImage && <span className="atelier-stage-note">Serveekay / Selected work</span>}
      </div>
      <div className="atelier-project-bottom"><div><span className="atelier-small">{project.discipline.split(" / ")[0]} experience</span><h3>{project.title}</h3></div><p>{project.description}</p><span className="atelier-open" aria-hidden="true">↗</span></div>
    </Link>
  </article>;
}

export function WorkCarousel({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All projects");
  const [active, setActive] = useState("");
  const collection = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: collection, offset: ["start center", "end center"] });
  const items = projects.filter(project => project.image && (filter === "All projects" || (filter === "Mobile" ? /Mobile/.test(project.discipline) : !/Mobile/.test(project.discipline))));
  const current = items.findIndex(project => project.slug === active);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const slug = (visible[0]?.target as HTMLElement | undefined)?.dataset.project;
      if (slug) setActive(slug);
    }, { rootMargin: "-20% 0px -35% 0px", threshold: [0, .2, .5] });
    collection.current?.querySelectorAll("[data-project]").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [filter]);
  return <div className="atelier-collection" ref={collection}>
    <div className="atelier-toolbar"><div className="atelier-filters" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} aria-controls="atelier-projects" onClick={() => setFilter(item)}>{item}{item === "All projects" && <sup>{number(projects.filter(project => project.image).length)}</sup>}</button>)}</div><span className="atelier-small" aria-live="polite">{number(items.length)} selected projects</span></div>
    <div className="atelier-layout">
      <aside className="atelier-index" aria-label="Project index"><div className="atelier-index-heading"><span className="atelier-small">The collection</span><span aria-hidden="true">↓</span></div><nav aria-label="Jump to project">{items.map((project, index) => <a key={project.slug} href={`#work-${project.slug}`} aria-current={index === (current < 0 ? 0 : current) ? "location" : undefined}><span>{number(index + 1)}</span>{project.title}<span aria-hidden="true">↗</span></a>)}</nav><div className="atelier-index-footer"><span className="atelier-orbit" aria-hidden="true">✳</span><p>Different challenges.<br />Same attention to detail.</p></div><div className="atelier-progress"><motion.span style={{ scaleX: reduce ? 1 : scrollYProgress }} /></div><div className="atelier-index-count"><span>In the details</span><span>{number((current < 0 ? 0 : current) + 1)} / {number(items.length)}</span></div></aside>
      <div className="atelier-projects" id="atelier-projects">{items.map((project, index) => <ProjectPanel key={project.slug} project={project} index={index} total={items.length} />)}</div>
    </div>
    <div className="atelier-end"><span className="atelier-small">Good work starts with a conversation.</span><Link href="/contact">Your idea. <em>Next in the collection.</em><span aria-hidden="true">↗</span></Link><div><span>Independent in thought. Intentional in every pixel.</span><a href="#work">Back to the collection ↑</a></div></div>
  </div>;
}
