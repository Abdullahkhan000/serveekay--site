import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://serveekay.com"),
  title: { default: "Serveekay — Product Designer", template: "%s — Serveekay" },
  description: "Waleed is a senior product designer crafting intuitive, high-impact digital experiences that drive results.",
  keywords: ["product designer", "UI UX designer", "web design", "mobile app design", "Serveekay", "Waleed"],
  openGraph: { title: "Serveekay — Product Designer", description: "Intuitive digital products designed to drive results.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
