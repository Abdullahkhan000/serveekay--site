"use client";

import { FormEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { contactDetails } from "@/data/site";
import { offers } from "@/data/offers";
import { Arrow } from "@/components/ui";

export function ContactForm({ defaultEmail = "", service }: { defaultEmail?: string; service?: string }) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formId = useId();
  const router = useRouter();
  const defaultSubject = offers.find((offer) => offer.slug === service)?.title ?? "";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    setIsSubmitting(true);
    setStatus("Sending your inquiry...");

    const form = new FormData(formElement);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sarveekay@gmail.com", {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok || result.success !== "true" && result.success !== true) {
        throw new Error("Submission failed");
      }

      formElement.reset();
      router.push("/thank-you");
    } catch {
      setStatus("Something went wrong. Please try again or send your project details by email.");
      setIsSubmitting(false);
    }
  }

  return <form className="inquiry-form" onSubmit={submit} aria-labelledby={`${formId}-title`}>
    <div className="inquiry-form-heading"><p className="eyebrow">/ Project inquiry</p><h2 id={`${formId}-title`}>Let&apos;s make it happen.</h2><p>Tell me a little about your project, what you want to achieve, and where you are in the process.</p></div>
    <div className="form-row">
      <label htmlFor={`${formId}-name`}>Your name <span className="field-required" aria-hidden="true">*</span><input id={`${formId}-name`} name="name" placeholder="Alex Morgan" autoComplete="name" required maxLength={120} /></label>
      <label htmlFor={`${formId}-email`}>Work email <span className="field-required" aria-hidden="true">*</span><input id={`${formId}-email`} name="email" type="email" defaultValue={defaultEmail} placeholder="you@company.com" autoComplete="email" required /></label>
    </div>
    <div className="form-row">
      <label htmlFor={`${formId}-subject`}>What do you need? <span className="field-required" aria-hidden="true">*</span><input id={`${formId}-subject`} name="subject" defaultValue={defaultSubject} placeholder="e.g. Brand identity, website, or SaaS product" required maxLength={200} /></label>
      <label htmlFor={`${formId}-budget`}>Estimated budget <span className="optional">(optional)</span><select id={`${formId}-budget`} name="budget" defaultValue=""><option value="">Select a range</option><option>$1k — $3k</option><option>$3k — $8k</option><option>$8k — $15k</option><option>$15k+</option></select></label>
    </div>
    <label htmlFor={`${formId}-message`}>Tell me about your project <span className="field-required" aria-hidden="true">*</span><textarea id={`${formId}-message`} name="message" placeholder="What are you building? Share your goals, timeline, and anything else I should know." rows={5} required maxLength={4000} /></label>
    <label htmlFor={`${formId}-website`}>Website or reference <span className="optional">(optional)</span><input id={`${formId}-website`} name="website" type="url" placeholder="https://" /></label>
    <div className="form-submit">
      <button className="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit project inquiry"} <Arrow />
      </button>
      <p>Your details are used only to respond to this inquiry.</p>
    </div>
    <div className="inquiry-form-footnotes">
      <p>Expected response: {contactDetails.responseWindow}.</p>
      <a href={`mailto:${contactDetails.email}`}>Prefer a direct email? <span aria-hidden="true">↗</span></a>
    </div>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
