import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SelferCase } from "@/components/selfer-site";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return <SelferCase project={project} next={next} />;
}
