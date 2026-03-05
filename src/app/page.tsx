import { Hero } from "@/components/Hero";
import { ThreePillars } from "@/components/ThreePillars";
import { Services } from "@/components/Services";
import { AboutTeaser } from "@/components/AboutTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <ThreePillars />
      {/* <Services /> */}
      <AboutTeaser />
    </>
  );
}
