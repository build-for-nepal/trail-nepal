import EstimateCostSection from "@/components/homepage/estimateCost/EstimateCostSection";
import Footer from "@/components/layout/footer/Footer";
import { HeroSection } from "@/components/homepage/hero/HeroSection";
import PopularTrekSection from "@/components/homepage/popularTreks/PopularTrekSection";
import WhyTrialNepalSection from "@/components/whyTrialNepal/WhyTrialNepalSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularTrekSection />
      <WhyTrialNepalSection />
      <EstimateCostSection />
      <Footer />
    </main>
  );
}
