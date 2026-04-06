import Image from "next/image";
import Link from "next/link";
import Pill from "@/components/common/Pill";
import { DIFFICULTY_COLORS } from "@/static/constants";
import { Clock, Mountain, CalendarDays } from "lucide-react";
import { TrekCardProps } from "@/types/homepage";

const TrekCard = ({
  imageUrl,
  title,
  description,
  difficulty,
  duration,
  altitude,
  season,
  price,
  href,
}: TrekCardProps) => {
  const difficultyColor =
    DIFFICULTY_COLORS[difficulty.toLowerCase()] ?? "#6BBF1F";

  return (
    <div className="group relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer bg-white shadow-sm border border-gray-100">
      <div className="absolute top-0 left-0 w-full h-full group-hover:h-[65%] transition-all duration-500 ease-in-out z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent bg-[length:100%_40%] bg-bottom bg-no-repeat transition-opacity duration-500 group-hover:opacity-0" />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <Pill text={difficulty} color={difficultyColor} />
      </div>

      <div className="absolute bottom-[80px] left-0 w-full px-5 flex flex-col justify-end z-10 transition-all duration-500">
        <h3
          className="font-bold text-black text-2xl mb-1"
          style={{ fontFamily: "'poppins', serif" }}
        >
          {title}
        </h3>

        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
          <div className="overflow-hidden">
            <p className="font-poppins  text-gray-600 text-[14px] leading-snug line-clamp-3 mb-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {description}
            </p>
          </div>
        </div>

        <div className="font-poppins flex items-center justify-between mb-4 text-black">
          <span className="flex items-center gap-1.5 text-[13px] font-medium">
            <Clock size={16} /> {duration}
          </span>
          <span className="flex items-center gap-1.5 text-[13px] font-medium">
            <Mountain size={16} /> {altitude}
          </span>
          <span className="flex items-center gap-1.5 text-[13px] font-medium">
            <CalendarDays size={16} /> {season}
          </span>
        </div>

        <div>
          <span className="font-poppins inline-flex items-center border border-black rounded-full px-3 py-1.5 text-[13px] font-medium text-black bg-transparent">
            ~ {price}
          </span>
        </div>
      </div>

      <div className=" absolute bottom-0 left-0 w-full h-[80px] px-5 pb-5 pt-1 z-20 flex items-end">
        <Link
          href={href}
          className=" w-full py-3 bg-[#8DC63F] hover:bg-[#7ab033] text-white text-[15px] font-bold rounded-xl text-center transition-colors"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default TrekCard;
