import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { Eyebrow, PageFrame, Reveal } from '../components/SiteShell';
import { projects } from '../data/site';

export default function WorkPage() { return <PageFrame><main className="editorial-page work-page"><section className="work-index-hero"><div className="container"><Eyebrow>Selected work / 2022—25</Eyebrow><Reveal><h1>A few things<br /><em>made useful.</em></h1></Reveal><p>Brand systems, digital products, and websites for people building the next thing.</p></div></section><section className="work-index-list section-pad"><div className="container">{projects.map((project, index) => <Reveal key={project.slug}><Link className="work-index-row" href={`/project/${project.slug}`}><span>0{index + 1}</span><div><h2>{project.name}</h2><p>{project.category} · {project.year}</p></div><img src={project.image} alt="" loading="lazy" /><ArrowUpRight size={22} /></Link></Reveal>)}</div></section></main></PageFrame>; }
