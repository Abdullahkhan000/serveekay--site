import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { Eyebrow, PageFrame, ButtonLink, Reveal } from '../components/SiteShell';

const principles = ['Clarity over decoration', 'Momentum over perfection', 'Systems with soul'];

export default function AboutPage() {
  return <PageFrame><main className="editorial-page about-page">
    <section className="editorial-hero"><div className="container editorial-hero-grid"><div><Eyebrow>About the studio</Eyebrow><Reveal><h1>Good work starts with a <em>better question.</em></h1></Reveal><p className="editorial-lede">I’m Waleed, an independent designer and developer helping ambitious teams turn complicated ideas into clear, magnetic digital experiences.</p><ButtonLink href="/lets-work-together">Start a conversation</ButtonLink></div><Reveal className="editorial-hero-art"><img src="/assets/waleed-here-768x879.webp" alt="Waleed, independent designer and developer" /><span>01 / human<br />02 / curious<br />03 / obsessive</span></Reveal></div></section>
    <section className="about-manifesto section-pad"><div className="container manifesto-grid"><Eyebrow>My point of view</Eyebrow><div><h2>Design is the space between what a business <em>wants to say</em> and what people are ready to hear.</h2><p>I stay close to the work from the first conversation to the final detail. That means fewer layers, faster learning, and outcomes that feel as good to use as they look.</p></div></div></section>
    <section className="principles-section section-pad"><div className="container"><div className="section-heading-row"><Eyebrow>Studio principles</Eyebrow><p className="section-aside">The standards behind every<br />screen, system, and story.</p></div><div className="principles-grid">{principles.map((item, i) => <div key={item}><span>0{i + 1}</span><h3>{item}</h3><p>Make the important thing easier to understand, easier to choose, and harder to forget.</p></div>)}</div></div></section>
    <section className="about-proof section-pad"><div className="container"><div className="proof-grid"><div><Eyebrow>By the numbers</Eyebrow><h2>Small studio.<br /><em>Big intent.</em></h2></div><div className="proof-stats"><div><strong>08+</strong><span>selected launches</span></div><div><strong>06</strong><span>disciplines crossed</span></div><div><strong>100%</strong><span>close collaboration</span></div></div></div></div></section>
    <section className="about-cta"><div className="container"><Sparkles size={30} /><h2>Have a hard problem<br /><em>worth solving?</em></h2><Link href="/lets-work-together">Let’s make it clear <ArrowUpRight size={20} /></Link></div></section>
  </main></PageFrame>;
}

void Check;
void Reveal;
void Eyebrow;
void ButtonLink;
void PageFrame;
void Link;
void Sparkles;
void ArrowUpRight;
