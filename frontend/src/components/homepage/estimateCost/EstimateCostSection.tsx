import SectionHeader from "@/components/common/SectionHeader";
import TrekInfo from "./TrekInfo";
import CostBreakdownCard from "./CostBreakdownCard";
import { COST_DATA, TREK_INFO } from "@/static/homepageData";

export default function EstimateCostSection() {
  const trekTier = TREK_INFO.tier;
  const trekCosts = COST_DATA[trekTier];

  return (
    <section className="relative bg-[url('/images/ESbg.png')] bg-lightgray bg-center bg-cover bg-no-repeat pb-[350px] [background-clip:content-box]">
      <div className="absolute inset-0 bottom-[350px]" aria-hidden="true" />

      <div className="relative z-10 flex w-full flex-col items-center px-6 pb-[60px] pt-[80px] gap-[60px] lg:min-h-[1000px] lg:px-[80px] lg:pb-[200px] lg:pt-[100px]">
        <div className="page-wrapper">
          <SectionHeader
            title="Estimate Cost"
            description="Get an instant cost estimate for your adventure"
          />
        </div>
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex w-full justify-center lg:flex-1 lg:justify-start">
            <TrekInfo trek={TREK_INFO} />
          </div>
          <div className="w-full lg:w-[580px] lg:shrink-0">
            <CostBreakdownCard costs={trekCosts} tier={trekTier} />
          </div>
        </div>
      </div>
    </section>
  );
}
