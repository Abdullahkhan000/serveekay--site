import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui";
import { contactDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your project inquiry has been received.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

const nextSteps = [
  ["Review", "I read through your project details and check the fit against current availability."],
  ["Reply", `You hear back ${contactDetails.responseWindow} with questions or a suggested next step.`],
  ["Discovery call", "If it looks like a good fit, we arrange a short call to talk through goals and scope."],
  ["Proposal", "You receive a written scope, timeline, and investment before any work starts."],
];

export default function ThankYouPage() {
  return <section className="container thank-you" aria-labelledby="thank-you-title">
    <p className="eyebrow">/ Inquiry received</p>
    <h1 id="thank-you-title">Your project is one step<br />closer to becoming <em>reality.</em></h1>
    <p className="thank-you-lead">Thanks for sharing the details. Here is exactly what happens next.</p>
    <ol className="thank-you-steps">
      {nextSteps.map(([title, detail], index) => <li key={title}>
        <span>0{index + 1}</span>
        <div><h2>{title}</h2><p>{detail}</p></div>
      </li>)}
    </ol>
    <div className="thank-you-actions">
      <ButtonLink href="/#work">Explore selected work</ButtonLink>
      <Link className="contact-email" href={`mailto:${contactDetails.email}`}>{contactDetails.email} <span aria-hidden="true">↗</span></Link>
    </div>
    <p className="thank-you-note">Need to add something to your inquiry? Reply to the confirmation or send a note directly.</p>
  </section>;
}
