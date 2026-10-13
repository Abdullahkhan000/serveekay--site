"use client";

import { useState } from "react";
import type { Project } from "@/data/site";
import { ProjectCard } from "@/components/project-showcase";

const filters = ["All work", "Web & product", "Mobile"] as const;

export function WorkCarousel({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const items = projects.filter(project => project.image && (filter === "All work" || (filter === "Mobile" ? /Mobile/.test(project.discipline) : !/Mobile/.test(project.discipline))));
  return <div className="portfolio-collection">
    <div className="portfolio-toolbar">
      <div className="portfolio-filters" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} aria-controls="portfolio-grid" onClick={() => setFilter(item)}>{item}{item === "All work" && <span>{projects.filter(project => project.image).length}</span>}</button>)}</div>
      <p aria-live="polite">{String(items.length).padStart(2, "0")} projects / {filter}</p>
    </div>
    <div className="project-grid portfolio-grid" id="portfolio-grid">{items.map((project, index) => <ProjectCard key={project.slug} project={project} wide={index === 0 && filter === "All work"} index={index + 1} imageLed />)}</div>
    <div className="portfolio-colophon"><span>Thoughtful strategy. Distinctive interfaces.</span><span>Designed by Waleed ↗</span></div>
  </div>;
}
