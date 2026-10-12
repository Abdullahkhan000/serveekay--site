"use client";

import { useState } from "react";
import { projects } from "@/data/site";

export function ProjectMarquee() {
  const [paused, setPaused] = useState(false);
  const names = projects.filter(project => project.image).map(project => project.title);
  return <div className={`project-marquee${paused ? " is-paused" : ""}`}>
    <p className="sr-only">Selected projects: {names.join(", ")}</p>
    <div className="marquee-track" aria-hidden="true">{[0, 1].map(copy => <div className="marquee-group" key={copy}>{names.map((name, index) => <span key={name} className={`marquee-name marquee-name--${index % 3}`}>{name}</span>)}</div>)}</div>
    <button className="marquee-pause" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? "Play project animation" : "Pause project animation"} aria-pressed={paused}>{paused ? "▶" : "Ⅱ"}</button>
  </div>;
}
