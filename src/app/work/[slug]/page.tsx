import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { CaseStudyClient } from "./CaseStudyClient";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} — ${project.client} | Daniela Amortegui`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  return <CaseStudyClient project={project} />;
}
