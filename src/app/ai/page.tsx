import type { Metadata } from "next";
import { AIPageClient } from "./AIPageClient";

export const metadata: Metadata = {
  title: "AI — Daniela Amórtegui",
  description:
    "Inteligencia Artificial aplicada a producto, flujos de trabajo, documentación y toma de decisiones.",
};

export default function AIPage() {
  return <AIPageClient />;
}
