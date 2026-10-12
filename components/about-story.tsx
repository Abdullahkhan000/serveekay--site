"use client";

import { useState } from "react";
import { biography } from "@/data/site";

export function AboutStory() {
  const [expanded, setExpanded] = useState(false);
  return <div className="about-story">
    {biography.slice(0, 2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    <div id="full-biography" hidden={!expanded}>{biography.slice(2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    <button className="read-more" type="button" aria-expanded={expanded} aria-controls="full-biography" onClick={() => setExpanded(value => !value)}>{expanded ? "Read less" : "Read more"}<span aria-hidden="true">{expanded ? "−" : "+"}</span></button>
  </div>;
}
