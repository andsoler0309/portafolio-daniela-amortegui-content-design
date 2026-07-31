import type { Metadata } from "next";
import { WorkPageClient } from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Work — Daniela Amórtegui",
  description:
    "Proyectos de producto, comunicación y gestión digital para Mercado Libre, Avianca, Mesfix, Triario y Dattis.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
