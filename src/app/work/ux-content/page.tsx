import type { Metadata } from "next";
import { UXContentPageClient } from "./UXContentPageClient";

export const metadata: Metadata = {
  title: "Content Design — Proyectos | Daniela Amórtegui",
  description:
    "Proyectos de estrategia de contenidos, UX Writing y narrativa de marca para productos digitales.",
};

export default function UXContentPage() {
  return <UXContentPageClient />;
}
