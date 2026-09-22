"use client";

import { FormEvent, useState } from "react";
import { identity } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const project = String(form.get("project") || "");
    const budget = String(form.get("budget") || "Not specified");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Waleed,\n\n${project}\n\nBudget: ${budget}\nContact: ${email}`);
    setStatus("Opening your email app…");
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="inquiry-form">
      <label>
        <span>01 / Your name</span>
        <input required name="name" autoComplete="name" placeholder="Your name" />
      </label>
      <label>
        <span>02 / Email address</span>
        <input required type="email" name="email" autoComplete="email" placeholder="hello@company.com" />
      </label>
      <label>
        <span>03 / Tell me about the project</span>
        <textarea required name="project" rows={3} placeholder="A few lines about your idea, goals, and timeline…" />
      </label>
      <label>
        <span>04 / Approximate budget</span>
        <select name="budget" defaultValue="">
          <option value="" disabled>Select a range</option>
          <option>$1k — $3k</option>
          <option>$3k — $8k</option>
          <option>$8k — $15k</option>
          <option>$15k+</option>
        </select>
      </label>
      <div className="inquiry-form__submit">
        <button type="submit"><span>Send inquiry</span><i>↗</i></button>
        <span aria-live="polite">{status}</span>
      </div>
    </form>
  );
}
