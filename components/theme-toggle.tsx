"use client";

import { useSyncExternalStore } from "react";

const storageKey = "serveekay-theme";
const themeEvent = "serveekay-theme-change";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.dispatchEvent(new Event(themeEvent));
}

function subscribe(notify: () => void) {
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const sync = () => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(storageKey); } catch { /* Storage can be unavailable in private contexts. */ }
    applyTheme(saved === "light" || saved === "dark" ? saved : system.matches ? "dark" : "light");
  };
  window.addEventListener(themeEvent, notify);
  window.addEventListener("storage", sync);
  system.addEventListener("change", sync);
  return () => {
    window.removeEventListener(themeEvent, notify);
    window.removeEventListener("storage", sync);
    system.removeEventListener("change", sync);
  };
}

export function ThemeToggle({ tabIndex }: { tabIndex?: number }) {
  const theme = useSyncExternalStore(subscribe, () => document.documentElement.dataset.theme === "dark" ? "dark" : "light", () => "light");
  const next = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} mode`;
  return <button className="theme-toggle" type="button" tabIndex={tabIndex} aria-label={label} title={label} onClick={() => {
    try { localStorage.setItem(storageKey, next); } catch { /* The toggle still works without persistence. */ }
    applyTheme(next);
  }}>
    <svg className="theme-icon-sun" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
    <svg className="theme-icon-moon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 13.2A8.5 8.5 0 0 1 10.8 3.5a8.5 8.5 0 1 0 9.7 9.7Z" /></svg>
  </button>;
}
