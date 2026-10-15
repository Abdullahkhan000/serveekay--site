"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Project } from "@/data/site";

export function CaseExperience({ children, title, hasImage }: { children: React.ReactNode; title: string; hasImage: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return <div ref={ref} className="case-editorial">
    <nav className="case-dock" aria-label="Project sections"><Link href="/#work" aria-label="Back to all projects">↖<span>All work</span></Link><span className="case-dock-title">{title}</span><div>{hasImage && <a href="#project-presentation">Showcase</a>}<a href="#case-story">Overview</a><a href="#case-next">Up next ↗</a></div><motion.span className="case-reading-progress" style={{ scaleX: scrollYProgress }} /></nav>
    {children}
  </div>;
}

export function CaseArtwork({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const scale = useTransform(scrollYProgress, [0, .45, 1], [.94, 1, 1.015]);
  return <figure ref={ref} className="case-artwork" id="project-presentation"><div className="case-artwork-stage"><span className="case-artwork-watermark" aria-hidden="true">{project.title}</span><motion.div className="case-artwork-image" style={reduce ? undefined : { y, scale }}><Image src={project.image} alt={`${project.title}: ${project.description}`} width={project.imageWidth ?? 1500} height={project.imageHeight ?? 952} preload sizes="(max-width: 760px) 92vw, 86vw" /></motion.div><span className="case-artwork-corner">Serveekay / {project.year}</span><span className="case-artwork-corner">Designed with intention ↗</span></div><figcaption><span>01 / The visual experience</span><span>{project.discipline}</span></figcaption></figure>;
}
