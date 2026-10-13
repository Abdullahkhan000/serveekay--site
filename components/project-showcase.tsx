import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/data/site";
import { Arrow } from "@/components/ui";

export function ProjectCard({ project, wide = false, index, imageLed = false }: { project: Project; wide?: boolean; index?: number; imageLed?: boolean }) {
  return <Link href={`/work/${project.slug}`} className={`project-card ${project.tone}${wide ? " project-card--wide" : ""}`}>
    {imageLed && <div className="project-card__meta"><span>{wide ? "Featured project" : project.discipline.split(" / ")[0]}</span><span>{project.year}</span></div>}
    <div className="project-card__image">
      {imageLed ? <Image src={project.image} alt={`${project.title} — ${project.description}`} width={project.imageWidth ?? 1500} height={project.imageHeight ?? 952} sizes={wide ? "(max-width: 760px) 92vw, 90vw" : "(max-width: 760px) 92vw, 44vw"} /> : <><div className="project-card__label"><span>{wide ? "Featured project" : project.discipline.split(" / ")[0]}</span><span>{project.year}</span></div><Image src={project.image} alt={`${project.title} — ${project.description}`} fill sizes={wide ? "(max-width: 760px) 92vw, 90vw" : "(max-width: 760px) 92vw, 44vw"} /><span className="project-card__view">Explore project <Arrow /></span></>}
    </div>
    <div className="project-card__caption"><div className="project-card__title">{index && <span className="project-card__index">{String(index).padStart(2, "0")}</span>}<div><h3>{project.title}</h3><p>{project.discipline}</p></div></div><span className="project-card__open"><Arrow /></span></div>
    <p className="project-card__description">{project.description}</p>{imageLed && <span className="project-card__explore">Explore project <Arrow /></span>}
  </Link>;
}
