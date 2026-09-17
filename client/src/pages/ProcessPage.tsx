import { ArrowUpRight, Compass, FlaskConical, Layers3, Rocket } from 'lucide-react';
import { Link } from 'wouter';
import { ButtonLink, Eyebrow, PageFrame, Reveal } from '../components/SiteShell';

const steps = [{ n:'01', icon: Compass, title:'Find the signal', body:'We get close to the business, the audience, and the tension hiding inside the brief. The goal is a sharp starting point, not a bigger pile of documents.' }, { n:'02', icon: FlaskConical, title:'Make it tangible', body:'Ideas become flows, frames, prototypes, and real conversations. We use making as a way to think, learn, and create alignment early.' }, { n:'03', icon: Layers3, title:'Build the system', body:'Once the direction earns its place, we give it a flexible visual language that can stretch across product, brand, content, and code.' }, { n:'04', icon: Rocket, title:'Make it matter', body:'The final handoff is not the finish line. We ship with care, measure what matters, and leave your team with momentum.' }];

export default function ProcessPage() { return <PageFrame><main className="editorial-page process-page"><section className="process-intro"><div className="container"><Eyebrow>How we work</Eyebrow><Reveal><h1>Less theatre.<br /><em>More traction.</em></h1></Reveal><p>Good process should make the work feel lighter, not slower. Here’s how we move from a fuzzy opportunity to something people can actually use.</p></div></section><section className="process-steps section-pad"><div className="container"><div className="process-timeline">{steps.map(({ n, icon: Icon, title, body }) => <div className="process-step" key={n}><div className="process-step-top"><span>{n}</span><Icon size={25} /></div><h2>{title}</h2><p>{body}</p></div>)}</div></div></section><section className="process-note"><div className="container"><span className="process-note-mark">✳</span><h2>Every project is different.<br /><em>The care is constant.</em></h2><ButtonLink dark href="/lets-work-together">Tell me what you’re building</ButtonLink></div></section></main></PageFrame>; }

void Link;
void ArrowUpRight;
void Reveal;
