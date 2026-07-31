import type { Metadata } from "next";
import { PersonalProjectsPageClient } from "./PersonalProjectsPageClient";

export const metadata: Metadata = {
  title: "Personal Projects — Daniela Amórtegui",
  description:
    "Dani Cruza Metas, Substack y FutFem Colombia: comunidad, contenido y storytelling alrededor del deporte.",
};

export default function PersonalProjectsPage() {
  return <PersonalProjectsPageClient />;
}
