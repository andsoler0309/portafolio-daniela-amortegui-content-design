import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Daniela Amórtegui",
  description: "Escríbeme por LinkedIn, email, Instagram o Substack.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
