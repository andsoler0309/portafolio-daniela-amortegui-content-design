import type { Metadata } from "next";
import { WorkPageClient } from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Work — Daniela Amortegui",
  description:
    "Selected content strategy, brand narrative, and editorial projects for wellness, sports, and lifestyle brands.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
