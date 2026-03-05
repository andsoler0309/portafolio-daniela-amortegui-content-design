import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About — Daniela Amortegui",
  description:
    "Content strategist rooted in wellness, sport, and human psychology. Learn about my approach, values, and the experiences that shape my work.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
