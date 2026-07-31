import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About — Daniela Amórtegui",
  description:
    "Comunicadora con más de ocho años liderando proyectos digitales, estrategias de comunicación y experiencias de producto.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
