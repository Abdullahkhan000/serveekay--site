"use client";

import { useState } from "react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];
  return <div className="testimonial">
    <div className="testimonial-content" aria-live="polite" aria-atomic="true"><blockquote key={testimonial.name}><span aria-hidden="true">“</span>{testimonial.quote}</blockquote><div className="testimonial-author"><span className="avatar-initials" aria-hidden="true">{testimonial.initials}</span><p><strong>{testimonial.name}</strong><span>{testimonial.role}</span></p></div></div>
    <details className="testimonial-full" key={testimonial.name}><summary>Read full testimonial <span aria-hidden="true">+</span></summary><blockquote>{testimonial.fullQuote}</blockquote></details>
    <div className="testimonial-controls"><button type="button" aria-label="Previous testimonial" onClick={() => setIndex(value => (value - 1 + testimonials.length) % testimonials.length)}>←</button><span>0{index + 1} / 0{testimonials.length}</span><button type="button" aria-label="Next testimonial" onClick={() => setIndex(value => (value + 1) % testimonials.length)}>→</button></div>
  </div>;
}
