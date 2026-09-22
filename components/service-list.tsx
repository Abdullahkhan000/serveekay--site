"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/data/site";

export function ServiceList() {
  const [active, setActive] = useState(0);

  return (
    <div className="service-list">
      {services.map((service, index) => (
        <article className={`service-item ${active === index ? "is-open" : ""}`} key={service.number} data-reveal>
          <button type="button" onClick={() => setActive(index)} aria-expanded={active === index}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <i aria-hidden="true">{active === index ? "−" : "+"}</i>
          </button>
          <div className="service-item__panel" aria-hidden={active !== index}>
            <figure>
              <Image src={service.image} alt={`${service.title} presentation`} fill sizes="(max-width: 900px) 92vw, 44vw" />
            </figure>
            <div className="service-item__detail">
              <span>{service.number} / 05</span>
              <p>{service.description}</p>
              <small>{service.tags}</small>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
