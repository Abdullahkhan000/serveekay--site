import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./premium.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { serviceMessaging } from "@/data/site";
import { Experience } from "@/components/experience";

const haas = localFont({ src: [{ path: "../public/fonts/haas-roman.ttf", weight: "400", style: "normal" }, { path: "../public/fonts/haas-medium.ttf", weight: "600", style: "normal" }], variable: "--font-haas", display: "swap" });
const brand = localFont({ src: "../public/fonts/bricolage-bold.woff2", variable: "--font-brand", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://serveekay.com"),
  title: { default: "Serveekay — Product Designer", template: "%s — Serveekay" },
  description: serviceMessaging.description,
  keywords: ["product designer", "UI UX designer", "web design", "mobile app design", "Serveekay", "Waleed"],
  icons: { icon: "/favicon.png" },
  openGraph: { title: "Serveekay — Product Designer", description: serviceMessaging.description, type: "website", siteName: "Serveekay", images: [{ url: "/images/hero-04.webp", alt: "Serveekay digital product design" }] },
  twitter: { card: "summary_large_image", title: "Serveekay — Product Designer", description: serviceMessaging.description, images: ["/images/hero-04.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${haas.variable} ${brand.variable}`}><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /><Experience /></body></html>;
}
