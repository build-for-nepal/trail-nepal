import { POPULAR_TREKS } from "@/static/homepageData";
import SectionHeader from "../common/SectionHeader";
import TrekCard from "./TrekCard";
import Image from "next/image";

const PopularTrekSection = () => {
  return (
    <section className="relative py-[100px] px-4 md:px-[80px] overflow-hidden">
      <Image
        src="/images/hill.svg"
        alt=""
        fill
        className="object-bottom object-cover pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <SectionHeader
          title="Popular Trek"
          description="Choose from Nepal's most iconic trekking adventures"
        />
        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default PopularTrekSection;
