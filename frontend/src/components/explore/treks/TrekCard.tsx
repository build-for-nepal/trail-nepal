import Image from "next/image";
import Link from "next/link";
import { Clock, Mountain, CalendarDays } from "lucide-react";
import { Trek } from "@/types/explorepage";

const DIFFICULTY_TEXT_COLORS: Record<string, string> = {
  easy: "text-success",
  moderate: "text-brand-primary",
  challenging: "text-warning",
  difficult: "text-danger",
};

export default function TrekCard({
  imageUrl,
  title,
  description,
  difficulty,
  duration,
  altitude,
  season,
  price,
  region,
  href,
}: Trek) {
  const difficultyTextColor =
    DIFFICULTY_TEXT_COLORS[difficulty.toLowerCase()] ?? "text-brand-primary";

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100/50 transition-transform duration-300 hover:-translate-y-1">
      {/* Top Half: Image */}
      <div className="relative h-[250px] w-full bg-gray-100">
        <Image
          src={imageUrl || "/images/placeholder-trek.jpg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Difficulty Pill */}
        <div
          className={`absolute right-4 top-4 rounded-full bg-white px-4 py-1.5 text-[13px] font-bold shadow-sm ${difficultyTextColor}`}
        >
          {difficulty}
        </div>
      </div>

      {/* Bottom Half: Content Flow */}
      <div className="flex flex-col gap-5 p-6">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-otomanopee line-clamp-1 text-[22px] sm:text-[24px] font-bold tracking-tight text-text-primary">
            {title}
          </h3>
          <p className="text-[15px] font-medium text-text-secondary/80">
            {region}
          </p>
        </div>

        <p className="line-clamp-3 text-[14px] leading-relaxed text-text-secondary/90">
          {description}
        </p>

        {/* Metrics/Icons */}
        <div className="flex items-center justify-between pt-1 text-[13px] font-medium text-text-primary">
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" strokeWidth={2.2} />
            {duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Mountain className="size-4" strokeWidth={2.2} />
            {altitude}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4" strokeWidth={2.2} />
            {season}
          </span>
        </div>

        {/* Price Tag */}
        <div className="w-fit rounded-full border-[1.5px] border-text-primary px-4 py-1.5 text-[14px] font-bold text-text-primary">
          ~ Nrs. {price.toLocaleString()}
        </div>

        {/* Action Button */}
        <Link
          href={href}
          className="mt-1 flex w-full items-center justify-center rounded-[16px] bg-brand-primary py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
