import type { Metadata } from "next";
import { SelferContact } from "@/components/selfer-site";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Waleed at Serveekay about your next project." };

export default function ContactPage() {
  return <SelferContact />;
}
