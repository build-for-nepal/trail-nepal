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
  isHike,
  isCultural,
}: ExploreTrekCardProps) {
  const difficultyTextColor =
    DIFFICULTY_TEXT_COLORS[difficulty.toLowerCase()] ?? 'text-brand-primary';
  const seasons = season.split(/,\s*/);

  return (
    <Link
      href={href}
      className="flex flex-col h-full overflow-hidden rounded-[24px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100/50 transition-transform duration-300 hover:-translate-y-1"
    >
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
          <h3
            className={`font-fraunces text-[18px] font-bold tracking-tight text-text-primary ${
              isHike || isCultural
                ? // Titles here wrap freely and their height is deliberately
                  // NOT reserved or capped (client review: "don't limit the
                  // height of the title"), so a card with a two-line title is
                  // taller than its one-line neighbours. The stats row and CTA
                  // stay bottom-aligned via `mt-auto` on the metrics row.
                  'leading-snug'
                : 'line-clamp-1'
            }`}
          >
            {title}
          </h3>
          <p className="text-[12px] font-medium text-text-secondary/80">
            {region}
          </p>
        </div>

        {/* Description — reserves a consistent block so short descriptions still
            push the metrics down to roughly the same place across cards, but
            grows rather than clipping if a description runs long. */}
        <div className="min-h-[75px] text-[12px] leading-relaxed text-text-secondary/90">
          {description}
        </div>

        {/* Metrics — `mt-auto` lives HERE, not on the CTA. In a row of unequal
            cards the shorter ones have slack to distribute, and the client asked
            for that slack to sit ABOVE the stats so the stats always rest
            directly on top of the button. Pushing this row down carries the CTA
            with it, so the CTA stays flush with the bottom either way. */}
        <div className="mt-auto grid grid-cols-3 items-center pt-1 text-[10px] font-medium text-text-primary">
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
                <span className="hidden @[100px]:inline whitespace-nowrap leading-tight">
                  {season}
                </span>
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

        {/* CTA — sits immediately under the metrics, and lands flush at the
            bottom because the metrics row above it carries `mt-auto`. */}
        <div className="flex w-full items-center justify-center rounded-card bg-brand-primary py-3.5 text-[12px] font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98]">
          See More
        </div>
      </div>
    </Link>
  );
}
