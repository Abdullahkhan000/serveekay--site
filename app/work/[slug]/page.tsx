import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioCasePage } from "@/components/portfolio-case-page";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return {};
  const images = [{ url: project.image || "/images/hero-04.webp", alt: `${project.title} — Serveekay` }];
  return { title: project.title, description: project.description, alternates: { canonical: `/work/${project.slug}` }, openGraph: { title: `${project.title} — Serveekay`, description: project.description, url: `/work/${project.slug}`, images }, twitter: { title: `${project.title} — Serveekay`, description: project.description, images } };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const published = projects.filter(item => item.image);
  const publishedIndex = published.findIndex(item => item.slug === slug);
  const next = published[(publishedIndex + 1) % published.length];
  const related = projects.filter(item => item.slug !== slug && item.image).slice(0, 2);
  return <PortfolioCasePage key={slug} project={project} next={next} related={related} />;
}
