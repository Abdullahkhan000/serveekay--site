import Image from "next/image";
import { services } from "@/data/site";

export function ServiceList() {
  return <div className="service-list">{services.map(service => <details className="service-item" key={service.number} data-reveal>
    <summary><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><span className="disclosure-icon" aria-hidden="true">+</span></summary>
    <div className="service-detail"><div className="service-image"><Image src={service.image} alt={`${service.title} presentation`} fill sizes="(max-width: 760px) 80vw, 420px" /></div><p>{service.tags}</p></div>
  </details>)}</div>;
}
