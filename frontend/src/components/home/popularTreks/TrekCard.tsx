import Image from 'next/image';
import Link from 'next/link';
import Pill from '@/components/common/Pill';
import { DIFFICULTY_COLORS } from '@/static/constants';
import { Clock, Mountain, CalendarDays } from 'lucide-react';
import { ExploreTrekCardProps } from '@/types/trek';
// import { TrekCardProps } from "@/types/homepage";

const TrekCard = ({
  imageUrl,
  title,
  description,
  difficulty,
  duration,
  altitude,
  season,
  href,
}: ExploreTrekCardProps) => {
  const difficultyColor =
    DIFFICULTY_COLORS[difficulty.toLowerCase()] ?? '#6BBF1F';
  const seasons = season.split(/,\s*/);

  return (
    <Link
      href={href}
      className="group relative w-full h-[405px] lg:h-auto lg:aspect-[3/4] rounded-[1.5rem] overflow-hidden cursor-pointer bg-white shadow-sm border border-gray-100 flex flex-col lg:block"
    >
      <div className="relative w-full flex-1 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:group-hover:h-[calc(100%-220px)] transition-all duration-500 ease-in-out lg:z-0">
        <Image
          src={imageUrl || '/images/placeholder-trek.jpg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 lg:group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        {/* Desktop only — fades out on hover */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent bg-[length:100%_40%] bg-bottom bg-no-repeat lg:transition-opacity lg:duration-500 lg:group-hover:opacity-0" />
        <div className="absolute top-3 right-3 z-10">
          <Pill text={difficulty} color={difficultyColor} />
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4 py-4 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:px-5 lg:pb-5 lg:z-10">
        <h3 className="font-otomanopee font-bold text-black text-lg sm:text-xl line-clamp-1">
          {title}
        </h3>

        {/* Hidden on desktop until hover */}
        <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 delay-100">
          <p className="font-poppins text-gray-600 text-[13px] leading-snug line-clamp-3">
            {description}
          </p>
        </div>

        <div className="font-poppins grid grid-cols-3 items-center text-black">
          <span className="flex items-center gap-1 text-[12px] font-medium whitespace-nowrap">
            <Clock size={13} /> {duration}
          </span>
          <span className="flex items-center gap-1 text-[12px] font-medium whitespace-nowrap">
            <Mountain size={13} /> {altitude}
          </span>
          <span className="@container flex items-center gap-1 text-[12px] font-medium">
            <CalendarDays size={13} className="shrink-0" />
            {seasons.length > 1 ? (
              <>
                <span className="hidden @[130px]:inline whitespace-nowrap leading-tight">
                  {season}
                </span>
                <span className="@[130px]:hidden flex flex-col leading-tight">
                  <span className="whitespace-nowrap">{seasons[0]}</span>
                  <span className="whitespace-nowrap">{seasons[1]}</span>
                </span>
              </>
            ) : (
              <span className="whitespace-nowrap leading-tight">{season}</span>
            )}
          </span>
        </div>

        {/* <span className="font-poppins inline-flex w-fit items-center border border-black rounded-full px-3 py-1 text-[12px] font-medium text-black bg-transparent">
          ~ {price}
        </span> */}

        <div className="block w-full py-3 mt-1 bg-[#8DC63F] hover:bg-[#7ab033] text-white text-[14px] font-bold font-poppins rounded-xl text-center transition-colors">
          See More
        </div>
      </div>
    </Link>
  );
};

export default TrekCard;
