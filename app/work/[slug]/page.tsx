import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { ButtonLink } from "@/components/ui";
import { projects } from "@/data/site";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Experience /><Header />
      <main className="shell pb-4 pt-28 md:pt-32">
        <div data-reveal className="flex justify-between border-b border-line py-4 text-xs"><span>Selected work / {String(index + 1).padStart(2, "0")}</span><span className="text-black/65">{project.year}</span></div>
        <section className="section-space pb-16 md:pb-24">
          <p data-reveal className="eyebrow mb-8">{project.discipline}</p>
          <h1 data-reveal className="text-[clamp(5rem,15vw,15rem)] leading-[.72] tracking-[-.075em]">{project.title}</h1>
          <div data-reveal className="mt-14 grid gap-8 border-t border-line pt-5 md:grid-cols-[1fr_2fr]"><p className="eyebrow">The project</p><p className="max-w-3xl text-2xl leading-tight tracking-[-.025em] text-black/65 md:text-4xl">{project.description}</p></div>
        </section>
        <figure data-reveal data-cursor="View" className={`relative m-0 aspect-[16/10] overflow-hidden rounded-[1.4rem] ${project.tone}`}><Image src={project.image} alt={`${project.title} project presentation`} fill priority sizes="100vw" className="object-cover" /></figure>
        <section className="section-space grid gap-12 md:grid-cols-[1fr_2fr] md:gap-[5vw]"><p data-reveal className="eyebrow">Challenge &amp; approach</p><div data-reveal><p className="display-copy">Turning a complex idea into a product that feels clear, confident, and ready to grow.</p><div className="mt-16 grid gap-8 text-lg leading-relaxed text-black/65 md:grid-cols-2"><p>The work began with structure: understanding user needs, removing friction, and deciding what deserved attention at every step.</p><p>From the product language to the final interface, every decision was made to improve clarity while giving the brand a distinct, memorable presence.</p></div></div></section>
        <section data-reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.4rem] bg-white md:grid-cols-4">{[["01", "Discovery"], ["02", "UX Design"], ["03", "UI Design"], ["04", "Delivery"]].map(([number, title]) => <div key={number} className="min-h-52 bg-ink p-5 text-white md:min-h-72 md:p-7"><span className="eyebrow text-white/70">{number}</span><p className="mt-24 text-2xl md:mt-36 md:text-3xl">{title}</p></div>)}</section>
        <section className="section-space text-center"><p data-reveal className="eyebrow mb-8">Have something ambitious in mind?</p><h2 data-reveal className="section-title mx-auto max-w-6xl">Let&apos;s make it<br />unforgettable.</h2><div data-reveal className="mt-10"><ButtonLink href="/contact">Start a project</ButtonLink></div></section>
        <Link href={`/work/${next.slug}`} data-reveal data-cursor="Next" className={`media-zoom block overflow-hidden rounded-[1.4rem] ${next.tone}`}><div className="flex items-center justify-between p-5 md:p-8"><span className="eyebrow">Next project</span><span className="text-3xl tracking-[-.04em] md:text-5xl">{next.title} ↗</span></div><figure className="relative m-0 aspect-[16/8]"><Image src={next.image} alt={`${next.title} project preview`} fill sizes="100vw" className="object-cover" /></figure></Link>
      </main>
      <footer className="shell mt-5 bg-acid py-5"><div className="flex justify-between font-display text-[10px] font-bold uppercase"><span>© 2026 Serveekay™</span><Link href="/#work">All work ↑</Link></div></footer>
    </>
  );
}
