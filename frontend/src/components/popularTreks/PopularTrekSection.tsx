import { POPULAR_TREKS } from "@/static/homepageData";
import SectionHeader from "../common/SectionHeader";
import TrekCard from "./TrekCard";
import TrekCarousel from "./TrekCarousel";
import Image from "next/image";

const PopularTrekSection = () => {
  return (
    <section className="relative py-[100px] overflow-hidden">
      <Image
        src="/images/hill.svg"
        alt=""
        fill
        className="object-bottom object-cover pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="page-wrapper relative z-10">
        <SectionHeader
          title="Popular Trek"
          description="Choose from Nepal's most iconic trekking adventures"
        />

        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mt-[60px]">
          {POPULAR_TREKS.map((trek) => (
            <TrekCard
              key={trek.id}
              imageUrl={trek.imageSrc}
              title={trek.title}
              description={trek.description}
              difficulty={trek.difficulty}
              duration={trek.duration}
              altitude={trek.altitude}
              season={trek.bestTime}
              price={trek.price}
              href={trek.href}
            />
          ))}
        </div>

        <div className="lg:hidden mt-[60px]">
          <TrekCarousel treks={POPULAR_TREKS} />
        </div>
      </div>
    </section>
  );
};

export default PopularTrekSection;
