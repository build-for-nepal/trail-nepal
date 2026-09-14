import EstimateCostSection from '@/components/home/estimateCost/EstimateCostSection';
import Footer from '@/components/layout/footer/Footer';
import { HeroSection } from '@/components/home/hero/HeroSection';
import PopularTrekSection from '@/components/home/popularTreks/PopularTrekSection';
import WhyTrialNepalSection from '@/components/home/whyTrialNepal/WhyTrialNepalSection';
import HomeTrivia from '@/components/home/trivia/HomeTrivia';
import HomeTriviaNew from 'src/components/home/trivia/HomeTriviaNew';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularTrekSection />
      <div className="bg-[#EBF0F8]">
        <WhyTrialNepalSection />
        {/* <HomeTrivia /> */}
        <HomeTriviaNew />
        {/* <EstimateCostSection /> */}
        <Footer isMainDisplay={true} />
      </div>
    </main>
  );
}
