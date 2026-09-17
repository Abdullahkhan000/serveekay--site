import { ButtonLink, Eyebrow, PageFrame } from '../components/SiteShell';

export default function NotFound() {
  return <PageFrame><div className="not-found"><Eyebrow>404 / Not found</Eyebrow><h1>This page took<br /><span className="serif-italic">a wrong turn.</span></h1><p>But the good stuff is still here.</p><ButtonLink href="/">Back home</ButtonLink></div></PageFrame>;
}
