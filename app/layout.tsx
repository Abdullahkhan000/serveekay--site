import type { Metadata } from "next";
import "./globals.css";
import "./selfer.css";
import "lenis/dist/lenis.css";

import SmoothScroll from "@/components/smooth-scroll";
import CursorTrail from "@/components/CursorTrail";

export const metadata: Metadata = {
  metadataBase: new URL("https://serveekay.com"),
  title: {
    default: "Serveekay — Product Designer",
    template: "%s — Serveekay",
  },
  description:
    "Waleed is a product designer crafting clear, useful digital experiences at Serveekay.",
  keywords: [
    "product designer",
    "UI UX designer",
    "web design",
    "mobile app design",
    "Serveekay",
    "Waleed",
  ],
  openGraph: {
    title: "Serveekay — Product Designer",
    description: "Intuitive digital products designed to drive results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SmoothScroll />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}