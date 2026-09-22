import Link from "next/link";

export default function NotFound() {
  return <div className="selfer" id="top"><main className="selfer-not-found"><div><span>404 / Page not found</span><h1>Wrong turn<span>.</span></h1><p>This page isn&apos;t here, but the work is just around the corner.</p><Link className="selfer-button" href="/">Back to portfolio <span>→</span></Link></div></main></div>;
}
