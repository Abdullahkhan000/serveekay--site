import Link from "next/link";
import { RollingText } from "@/components/rolling-text";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function ButtonLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link className={cn("button", light && "button--light")} href={href}>{typeof children === "string" ? <RollingText text={children} /> : children}<Arrow /></Link>;
}

export function SectionHeading({ label, children, copy }: { label: string; children: ReactNode; copy?: string }) {
  return <header className="section-heading" data-reveal><p className="eyebrow">/ {label}</p><h2>{children}</h2>{copy && <p className="section-copy">{copy}</p>}</header>;
}
