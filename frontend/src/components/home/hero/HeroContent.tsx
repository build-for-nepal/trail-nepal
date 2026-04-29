import { memo } from 'react';
import type { HeroContentProps } from '../../../types/homepage';

const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M10.828 12.0002L15.778 16.9502L14.364 18.3642L8 12.0002L14.364 5.63623L15.778 7.05023L10.828 12.0002Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M13.1717 12.0002L8.22168 7.05023L9.63568 5.63623L15.9997 12.0002L9.63568 18.3642L8.22168 16.9502L13.1717 12.0002Z"
      fill="currentColor"
    />
  </svg>
);

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

export const HeroContent = memo(function HeroContent({
  slide,
  onPrev,
  onNext,
  onExplore,
  textElemsRef,
}: HeroContentProps) {
  return (
    <div className="w-full max-w-2xl flex flex-col mt-24 lg:mt-0 items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
      <div className="h-[180px] lg:h-[200px] xl:h-[260px] overflow-hidden">
        <h1
          ref={(el) => {
            textElemsRef.current[0] = el;
          }}
          className="font-otomanopee text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-white mb-6 tracking-wide drop-shadow-lg line-clamp-2"
        >
          {slide.title}
        </h1>
        <p
          ref={(el) => {
            textElemsRef.current[1] = el;
          }}
          className="font-poppins text-sm md:text-base lg:text-sm xl:text-lg text-gray-200 mb-8 leading-relaxed max-w-[90%] lg:max-w-[70%] line-clamp-3"
        >
          {slide.description}
        </p>
      </div>

      <div className="hidden lg:flex gap-8 ml-2 pb-8 text-white">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous slide"
          className={`p-2 -ml-2 rounded cursor-pointer transition-opacity hover:opacity-70 ${focusRing}`}
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next slide"
          className={`p-2 rounded cursor-pointer transition-opacity hover:opacity-70 ${focusRing}`}
        >
          <ArrowRightIcon />
        </button>
      </div>

      <button
        type="button"
        onClick={onExplore}
        className={`font-poppins px-10 py-4 mt-8 lg:mt-0 bg-[#8cc63f] hover:bg-[#7ab034] text-white font-semibold rounded-full shadow-lg cursor-pointer transition-transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
      >
        Explore Now
      </button>
    </div>
  );
});
