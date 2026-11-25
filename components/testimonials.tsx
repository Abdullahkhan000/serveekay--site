import { testimonials } from "@/data/site";

export function Testimonials() {
  return <div className="testimonial-wall">
    {testimonials.map((testimonial) => <figure className="testimonial-card" key={testimonial.name} data-reveal>
      <blockquote><span aria-hidden="true">“</span>{testimonial.quote}</blockquote>
      <figcaption className="testimonial-author">
        <span className="avatar-initials" aria-hidden="true">{testimonial.initials}</span>
        <p><strong>{testimonial.name}</strong><span>{testimonial.role}</span></p>
        <span className="testimonial-type">{testimonial.projectType}</span>
      </figcaption>
      <details className="testimonial-full">
        <summary>Read the full testimonial <span aria-hidden="true">+</span></summary>
        <blockquote>{testimonial.fullQuote}</blockquote>
      </details>
    </figure>)}
  </div>;
}
