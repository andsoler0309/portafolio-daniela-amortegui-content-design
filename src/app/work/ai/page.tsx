import type { Metadata } from "next";
import { AIPageClient } from "./AIPageClient";

export const metadata: Metadata = {
  title: "Proyectos con IA — Daniela Amórtegui",
  description:
    "Exploración y aplicación de inteligencia artificial en contenido, automatización y nuevas narrativas.",
};

export default function AIPage() {
  return <AIPageClient />;
}
