import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { BeforeAfterSection } from "@/components/landing/BeforeAfterSection";
import { ProductOutputSection } from "@/components/landing/ProductOutputSection";
import { BusinessAnalysisSection } from "@/components/landing/BusinessAnalysisSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <BeforeAfterSection />
        <ProductOutputSection />
        <BusinessAnalysisSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
