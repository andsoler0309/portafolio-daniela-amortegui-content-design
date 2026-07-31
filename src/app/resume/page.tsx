import type { Metadata } from "next";
import { ResumePageClient } from "./ResumePageClient";

export const metadata: Metadata = {
  title: "Resume — Daniela Amórtegui",
  description:
    "Hoja de vida de Daniela Amórtegui — estrategia de producto, comunicación y gestión de proyectos digitales.",
};

export default function ResumePage() {
  return <ResumePageClient />;
}
