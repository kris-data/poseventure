import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { BeforeAfterExampleSection } from "@/components/landing/BeforeAfterExampleSection";
import { ProductOutputSection } from "@/components/landing/ProductOutputSection";
import { BusinessAnalysisSection } from "@/components/landing/BusinessAnalysisSection";
import { DifferentiationSection } from "@/components/landing/DifferentiationSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <BeforeAfterExampleSection />
        <ProductOutputSection />
        <BusinessAnalysisSection />
        <DifferentiationSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
