'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from 'src/lib/utils';
import type { TrekDetail } from 'src/types/trek';
import { Fragment } from 'react';

type CompareSectionProps = { treks: TrekDetail[] };

type RowKey =
  | 'duration'
  | 'difficulty'
  | 'maxElevation'
  | 'region'
  | 'bestSeasons'
  | 'popularity'
  | 'budgetCost'
  | 'midRangeCost'
  | 'comfortCost';

const ROWS: { label: string; key: RowKey }[] = [
  { label: 'Duration', key: 'duration' },
  { label: 'Difficulty', key: 'difficulty' },
  { label: 'Max Altitude', key: 'maxElevation' },
  { label: 'Region', key: 'region' },
  { label: 'Peak Season', key: 'bestSeasons' },
  { label: 'Popularity', key: 'popularity' },
  { label: 'Budget Cost', key: 'budgetCost' },
  { label: 'Mid-range Cost', key: 'midRangeCost' },
  { label: 'Comfort Cost', key: 'comfortCost' },
];

const DIFFICULTY_MAP: Record<string, number> = {
  Easy: 1,
  Moderate: 2,
  'Moderately Challenging': 3,
  Challenging: 4,
  Extreme: 5,
};

const getCellValue = (trek: TrekDetail, key: RowKey): string => {
  switch (key) {
    case 'duration':
      return trek.meta.duration;
    case 'difficulty':
      return trek.meta.difficulty;
    case 'maxElevation':
      return trek.meta.maxElevation;
    case 'region':
      return trek.region;
    case 'bestSeasons':
      return trek.meta.bestSeasons;
    case 'popularity':
      return (trek as any).popularity ?? 'High';
    case 'budgetCost':
      return (trek as any).budgetCost ?? '—';
    case 'midRangeCost':
      return (trek as any).midRangeCost ?? '—';
    case 'comfortCost':
      return (trek as any).comfortCost ?? '—';
    default:
      return '—';
  }
};

const DifficultyIndicator = ({ label }: { label: string }) => {
  const filled = DIFFICULTY_MAP[label] ?? 3;
  return (
    <div className="flex gap-[3px] items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 14 14"
          fill={i < filled ? '#376BB6' : 'none'}
          stroke="#376BB6"
          strokeWidth="1.5"
        >
          <polygon points="7,1 13,13 1,13" />
        </svg>
      ))}
    </div>
  );
};

const Cell = ({
  rowKey,
  value,
  className,
}: {
  rowKey: RowKey;
  value: string;
  className?: string;
}) => {
  if (rowKey === 'difficulty') return <DifficultyIndicator label={value} />;
  if (rowKey === 'maxElevation') {
    const match = value.match(/^([\d,]+)\s*(.*)$/);
    if (match)
      return (
        <span className={cn('text-[#181C1D] text-sm', className)}>
          {match[1]}{' '}
          <span className="text-[#404337] text-xs">{match[2] || 'metres'}</span>
        </span>
      );
  }
  return (
    <span className={cn('text-[#404337] text-sm', className)}>
      {value || '—'}
    </span>
  );
};

const MobileTrekCard = ({ trek }: { trek: TrekDetail }) => {
  const heroImg =
    trek.gallery.find((g) => g.type === 'hero') ?? trek.gallery[0];
  return (
    <div className="rounded-[12px] overflow-hidden shadow-sm border border-gray-100 bg-white">
      <div className="relative w-full h-52 bg-gray-100">
        {heroImg ? (
          <Image
            src={heroImg.url}
            alt={heroImg.alt}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">
            🏔
          </div>
        )}
      </div>
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <h3 className="font-fraunces text-[#181C1D] text-lg">{trek.name}</h3>
      </div>
      {ROWS.map(({ label, key }, i) => {
        const value = getCellValue(trek, key);

        return (
          <div
            key={key}
            className={cn(
              'flex items-center justify-between px-5 py-3 border-b border-gray-100 last:border-b-0',
              i % 2 !== 0 ? 'bg-[#F7F8F6]' : 'bg-white',
            )}
          >
            <span className="text-[#46645C] text-sm">{label}</span>
            <Cell
              rowKey={key}
              value={value}
              className={
                label === 'Best Months' ? 'w-50 md:w-70 lg:w-auto text-end' : ''
              }
            />
          </div>
        );
      })}
      <div className="px-5 py-4">
        <Link
          href={`/treks/${trek.id}`}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-[8px] bg-[#6AAF1A] hover:bg-[#5a9a14] transition-colors text-white text-sm font-medium"
        >
          View Detail <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const DesktopTable = ({ treks }: { treks: TrekDetail[] }) => {
  const colCount = treks.length;
  const LABEL_W = 160; // px
  const gridTemplateColumns = `${LABEL_W}px repeat(${colCount}, 1fr)`;

  return (
    <div
      className="w-full"
      style={{ display: 'grid', gridTemplateColumns, gap: 0 }}
    >
      <div className="pb-2" />

      {/* img cells */}
      {treks.map((trek, i) => {
        const heroImg =
          trek.gallery.find((g) => g.type === 'hero') ?? trek.gallery[0];
        return (
          <div
            key={trek.id}
            className={cn('pb-2', i < colCount - 1 ? 'pr-3' : '')}
          >
            <div className="relative h-44 w-full rounded-[10px] overflow-hidden bg-gray-100">
              {heroImg ? (
                <Image
                  src={heroImg.url}
                  alt={heroImg.alt}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  🏔
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* empty label cell */}
      <div
        // className="border-b border-gray-200"
        key="empty-label-start"
      />

      {treks.map((trek, i) => (
        <div
          key={trek.id}
          className={cn(
            'px-4 py-3 bg-white border-b border-gray-200',
            i < colCount - 1 ? 'pr-3' : '',
          )}
        >
          <p className="font-fraunces text-[#181C1D] text-base text-center">
            {trek.name}
          </p>
        </div>
      ))}

      {ROWS.map(({ label, key }) => (
        <Fragment key={key}>
          {/* Label cell */}
          <div
            key={`label-${key}`}
            className={cn(
              'flex items-center px-4 py-4 bg-[#F0F4F5] my-1',
              // 'border-b border-gray-200',
            )}
          >
            <span className="text-[#46645C]   text-sm">{label}</span>
          </div>

          {treks.map((trek, i) => (
            <div
              key={`${trek.id}-${key}`}
              className={cn(
                'flex items-center px-4 py-4 bg-white border-b border-gray-200',
              )}
            >
              <Cell rowKey={key} value={getCellValue(trek, key)} />
            </div>
          ))}
        </Fragment>
      ))}

      {/* empty label cell */}
      <div className="pt-5" key="empty-start" />

      {treks.map((trek, i) => (
        <div
          key={trek.id}
          className={cn('pt-5', i < colCount - 1 ? 'pr-3' : '')}
        >
          <Link
            href={`/treks/${trek.id}`}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-[8px] bg-[#6AAF1A] hover:bg-[#5a9a14] transition-colors text-white text-sm font-medium"
          >
            View Detail <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </div>
  );
};

const CompareSection = ({ treks }: CompareSectionProps) => {
  if (!treks || treks.length === 0) return null;
  return (
    <div className="mt-10 pb-20">
      <div className="flex flex-col gap-6 lg:hidden">
        {treks.map((trek) => (
          <MobileTrekCard key={trek.id} trek={trek} />
        ))}
      </div>
      <div className="hidden lg:block">
        <DesktopTable treks={treks} />
      </div>
    </div>
  );
};

export default CompareSection;
