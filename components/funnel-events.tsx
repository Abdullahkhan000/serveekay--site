"use client";
import { useEffect } from "react";
// Local events only. Connect a consent-aware provider here when configured.
export function FunnelEvents() {
  useEffect(() => {
    const emit = (name: string, properties: Record<string, string>) => window.dispatchEvent(new CustomEvent("serveekay:analytics", { detail: { name, properties } }));
    const path = window.location.pathname;
    if (path.startsWith("/services/")) emit("service_view", { service: path.split("/")[2] });
    if (path.startsWith("/work/")) emit("case_study_view", { slug: path.split("/")[2], content: "visual-overview" });
    const click = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a.button, a.text-link") : null;
      if (link) emit("primary_cta_click", { location: path, destination: link.getAttribute("href") || "" });
    };
    let started = false;
    const focus = (event: FocusEvent) => {
      if (!started && event.target instanceof Element && event.target.closest(".project-form")) { started = true; emit("project_form_start", { location: path }); }
    };
    document.addEventListener("click", click);
    document.addEventListener("focusin", focus);
    return () => { document.removeEventListener("click", click); document.removeEventListener("focusin", focus); };
  }, []);
  return null;
}
