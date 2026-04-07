import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import FeatureItem from "./FeatureItem";
import { WHY_NEPAL_FEATURES } from "@/static/constants";

const WhyNepalSection = () => {
  return (
    <section className="relative bg-[#949072] overflow-hidden w-full">
      <div className="relative z-10 flex flex-col items-center gap-[50px] py-[100px] px-4 sm:px-8 md:px-[80px] w-full">
        <SectionHeader
          title="Why Trail Nepal?"
          description="Discover what makes Nepal a trekker's paradise"
          light
        />

        <div className="flex flex-col md:flex-row w-full">
          {WHY_NEPAL_FEATURES.map((feature) => (
            <FeatureItem
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNepalSection;
