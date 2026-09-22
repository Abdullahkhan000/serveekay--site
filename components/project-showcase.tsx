import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";
import { Marquee } from "@/components/ui";

export function ProjectShowcase() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="work" className="project-showcase">
      <Marquee>Selected work</Marquee>
      <div className="project-stack section-pad">
        {featuredProjects.map((project, index) => (
          <article className="project-stack__item" key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className={`project-card ${project.tone}`}
              data-cursor="View"
              aria-label={`View ${project.title} case study`}
            >
              <Image
                src={project.image}
                alt={`${project.title} project presentation`}
                fill
                sizes="(max-width: 767px) 94vw, 90vw"
                priority={index === 0}
              />
              <span className="project-card__shade" aria-hidden="true" />
              <span className="project-card__title">{project.title}<i>_</i></span>
              <span className="project-card__discipline">
                <small>Discipline</small>{project.discipline}
              </span>
              <span className="project-card__description">
                <small>Project</small>{project.description}
              </span>
              <span className="project-card__year">
                <small>Year</small>{project.year}
              </span>
              <span className="project-card__index">0{index + 1}</span>
            </Link>
          </article>
        ))}
      </div>
      <div className="project-showcase__cta">
        <Link href="/contact">+ Your project</Link>
      </div>
    </section>
  );
}
