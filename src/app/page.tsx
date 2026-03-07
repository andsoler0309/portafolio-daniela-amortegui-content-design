import { Hero } from "@/components/Hero";
import { ThreePillars } from "@/components/ThreePillars";
import { AboutTeaser } from "@/components/AboutTeaser";
import { PageBackground } from "@/components/PageBackground";

export default function Home() {
  return (
    <div className="relative">
      {/* 3D animated letters — fixed behind all sections */}
      <PageBackground />

      {/* Content scrolls on top */}
      <div className="relative z-10">
        <Hero />
        <ThreePillars />
        <AboutTeaser />
      </div>
    </div>
  );
}
