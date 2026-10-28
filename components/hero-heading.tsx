import styles from "./hero-heading.module.css";

const services = [
  "Landing Page & Website",
  "Logo & Brand Identity",
  "Mobile App Design",
  "SaaS Web / Mobile Apps",
  "Shopify Ecommerce Store",
];

export function HeroHeading() {
  return <h1 id="hero-title" className={styles.heading}>
    <span className={styles.intro}>Your Design Partner for</span>
    <span className="sr-only">{services.join(", ")}</span>
    <span className={styles.services} aria-hidden="true">
      {services.map((service, index) => <span key={service} className={`${styles.service} ${styles[`service${index}`]}`}>{service}</span>)}
    </span>
  </h1>;
}
