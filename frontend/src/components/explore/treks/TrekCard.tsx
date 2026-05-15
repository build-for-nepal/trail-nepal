import Image from 'next/image';
import Link from 'next/link';
import { Clock, Mountain, CalendarDays } from 'lucide-react';
import { ExploreTrekCardProps } from '@/types/trek';

const DIFFICULTY_TEXT_COLORS: Record<string, string> = {
  easy: 'text-success',
  moderate: 'text-brand-primary',
  challenging: 'text-warning',
  difficult: 'text-danger',
  strenuous: 'text-danger',
};

export default function TrekCard({
  imageUrl,
  title,
  description,
  difficulty,
  duration,
  altitude,
  season,
  region,
  href,
}: ExploreTrekCardProps) {
  const difficultyTextColor =
    DIFFICULTY_TEXT_COLORS[difficulty.toLowerCase()] ?? 'text-brand-primary';
  const seasons = season.split(/,\s*/);

  return (
    <Link href={href} className="flex flex-col h-full overflow-hidden rounded-[24px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100/50 transition-transform duration-300 hover:-translate-y-1">
      {/* Image — aspect-ratio drives height, not a fixed px value */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          src={imageUrl || '/images/placeholder-trek.jpg'}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div
          className={`absolute right-4 top-4 rounded-full bg-white px-4 py-1.5 text-[10px] font-bold shadow-sm ${difficultyTextColor}`}
        >
          {difficulty}
        </div>
      </div>

      {/* Content — flex-1 so all cards in a row stretch to equal height */}
      <div className="flex flex-1 flex-col gap-3 p-[18px]">
        {/* Title + Region */}
        <div className="flex flex-col gap-0.5">
          <h3 className="font-otomanopee line-clamp-1 text-[18px] font-bold tracking-tight text-text-primary">
            {title}
          </h3>
          <p className="text-[12px] font-medium text-text-secondary/80">
            {region}
          </p>
        </div>

        {/* Description — fixed 3 lines always */}
        <p className="line-clamp-3 text-[12px] leading-relaxed text-text-secondary/90">
          {description}
        </p>

        {/* Spacer — pushes metrics/price/button to the bottom */}
        <div className="flex-1" />

        {/* Metrics */}
        <div className="grid grid-cols-3 items-center pt-1 text-[10px] font-medium text-text-primary">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="size-4" strokeWidth={2.2} />
            {duration}
          </span>
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <Mountain className="size-4" strokeWidth={2.2} />
            {altitude}
          </span>
          <span className="@container flex items-center gap-1.5">
            <CalendarDays className="size-4 shrink-0" strokeWidth={2.2} />
            {seasons.length > 1 ? (
              <>
                <span className="hidden @[100px]:inline whitespace-nowrap leading-tight">{season}</span>
                <span className="@[100px]:hidden flex flex-col leading-tight">
                  <span className="whitespace-nowrap">{seasons[0]}</span>
                  <span className="whitespace-nowrap">{seasons[1]}</span>
                </span>
              </>
            ) : (
              <span className="whitespace-nowrap leading-tight">{season}</span>
            )}
          </span>
        </div>

        {/* <div className="w-fit rounded-full border-[1.5px] border-text-primary px-4 py-1.5 text-[10px] font-bold text-text-primary">
          ~ Nrs. {price.toLocaleString()}
        </div> */}

        {/* CTA — always pinned at bottom */}
        <div className="mt-1 flex w-full items-center justify-center rounded-card bg-brand-primary py-3.5 text-[12px] font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98]">
          See More
        </div>
      </div>
    </Link>
  );
}
