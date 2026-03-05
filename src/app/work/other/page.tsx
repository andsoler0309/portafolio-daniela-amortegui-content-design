import type { Metadata } from "next";
import { OtherPageClient } from "./OtherPageClient";

export const metadata: Metadata = {
  title: "Otros Proyectos — Experiencias | Daniela Amórtegui",
  description:
    "Experiencias profesionales en estrategia de contenido, narrativa de marca y comunicación digital.",
};

export default function OtherPage() {
  return <OtherPageClient />;
}
