import Link from "next/link";
import { clientChallenges } from "@/data/site";
import { Arrow } from "@/components/ui";

export function ClientChallenges() {
  return <section className="section container challenges-section" id="challenges" data-nav-theme="light" aria-labelledby="challenges-title">
    <div className="challenges-heading">
      <header className="section-heading" data-reveal>
        <p className="eyebrow">/ Where you are</p>
        <h2 id="challenges-title">What are you<br />looking to <em>build?</em></h2>
      </header>
      <p className="challenges-intro" data-reveal>Every business is at a different stage. Whether you&apos;re launching something new or improving what already exists, there&apos;s a clear place to start.</p>
    </div>
    <div className="challenges-grid">
      {clientChallenges.map((challenge) => <Link className="challenge-card" href={challenge.href} key={challenge.number} data-reveal>
        <span className="challenge-number">{challenge.number}</span>
        <h3>{challenge.title}</h3>
        <p>{challenge.description}</p>
        <span className="challenge-cta">{challenge.cta}<Arrow /></span>
      </Link>)}
    </div>
  </section>;
}
