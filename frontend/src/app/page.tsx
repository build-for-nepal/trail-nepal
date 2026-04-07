import EstimateCostSection from "@/components/estimateCost/EstimateCostSection";
import { HeroSection } from "@/components/hero/HeroSection";
import PopularTrekSection from "@/components/popularTreks/PopularTrekSection";
import WhyTrialNepalSection from "@/components/whyTrialNepal/WhyTrialNepalSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularTrekSection />
      <WhyTrialNepalSection />
      <EstimateCostSection />
    </main>
  );
}
