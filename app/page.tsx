import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BlogSection } from "@/components/sections/blog";
import { CommunitySection } from "@/components/sections/community";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { PartnersSection } from "@/components/sections/partners";
import { PrivacySection } from "@/components/sections/privacy";
import { VisionSection } from "@/components/sections/vision";
import { Onboarding } from "@/components/layout/onboarding";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Onboarding />
      <Navbar />
      <HeroSection />
      <VisionSection />
      <CommunitySection />
      <PrivacySection />
      <BlogSection />
      <FaqSection />
      <PartnersSection />
      <Footer />
    </ReactLenis>
  );
}
