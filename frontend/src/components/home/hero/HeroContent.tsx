import Image from "next/image";
import type { HeroContentProps } from "../../../types/homepage";

export const HeroContent = ({
  slide,
  onPrev,
  onNext,
  onExplore,
  textElemsRef,
}: HeroContentProps) => (
  <div className="w-full max-w-xl flex flex-col justify-center mt-24 lg:mt-0 items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
    <h1
      ref={(el) => {
        textElemsRef.current[0] = el;
      }}
      className="font-poppins text-6xl md:text-8xl font-bold text-white mb-6 tracking-wide drop-shadow-lg"
    >
      {slide.title}
    </h1>
    <p
      ref={(el) => {
        textElemsRef.current[1] = el;
      }}
      className="font-poppins text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-[90%]"
    >
      {slide.description}
    </p>
    <div
      ref={(el) => {
        textElemsRef.current[2] = el;
      }}
      className="flex flex-col items-center lg:items-start gap-5"
    >
      <div className="hidden lg:flex gap-8 ml-2">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous slide"
          className="text-white hover:opacity-70 transition-opacity p-2 -ml-2 cursor-pointer"
        >
          <Image
            src="/icons/arrow-left.svg"
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next slide"
          className="text-white hover:opacity-70 transition-opacity p-2 cursor-pointer"
        >
          <Image
            src="/icons/arrow-right.svg"
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
          />
        </button>
      </div>
      <button
        type="button"
        onClick={onExplore}
        className="font-poppins px-10 py-4 bg-[#8cc63f] hover:bg-[#7ab034] text-white font-semibold rounded-full transition-transform hover:-translate-y-1 shadow-lg cursor-pointer"
      >
        Explore Now
      </button>
    </div>
  </div>
);
