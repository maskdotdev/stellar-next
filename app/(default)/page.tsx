export const metadata = {
  title: "Home - Stellar",
  description: "Your AI-Powered Study Companion. Go beyond simple notes. Understand more, forget less.",
};

import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import TechnologySection from "@/components/sections/technology-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
    </>
  );
}
