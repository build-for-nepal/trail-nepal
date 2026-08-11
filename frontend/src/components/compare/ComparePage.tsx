'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from 'src/lib/utils';
import { CirclePlus, X } from 'lucide-react';
import CompareSection from './CompareSection';
import TrekSelectModal from './TrekSelectModal';
import type { TrekDetail } from 'src/types/trek';
import { TREK_DETAILS } from 'src/static/trekDetails';

const SLOT_LABELS = ['First', 'Second', 'Third'] as const;

const ALL_TREKS: TrekDetail[] = Object.values(TREK_DETAILS);

const ComparePage = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    ALL_TREKS[0]?.id ?? '',
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const selected = selectedIds
    .map((id) => ALL_TREKS.find((t) => t.id === id))
    .filter(Boolean) as TrekDetail[];

  const handleClearAll = () => {
    // Pre-select first trek after clear
    setSelectedIds(ALL_TREKS[0] ? [ALL_TREKS[0].id] : []);
  };

  const handleRemove = (id: string) => {
    setSelectedIds((prev) => prev.filter((sid) => sid !== id));
  };

  const handleModalConfirm = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const emptySlots = 3 - selected.length;

  return (
    <div className="page-wrapper">
      <div className="flex flex-col gap-4 mt-20">
        <h2 className="text-[48px] font-fraunces text-[#181C1D] font-[400]">
          Compare Expeditions
        </h2>
        <p className="w-full md:w-[80%] lg:w-[50%] text-[#40484A]">
          Detailed side-by-side analysis of our signature high-altitude routes
          to help you choose your next peak performance objective.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <p className="text-[#2D2F27] text-sm">
          Select up to 3 treks to compare side-by-side
        </p>

        <div
          className="flex items-stretch gap-3 overflow-x-auto pb-1"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db transparent',
          }}
        >
          {selected.map((trek, idx) => {
            const heroImg =
              trek.gallery.find((g) => g.type === 'hero') ?? trek.gallery[0];
            return (
              <TrekSelectorCard
                key={trek.id}
                index={idx}
                title={trek.name}
                region={trek.region}
                img={heroImg?.url}
                onRemove={() => handleRemove(trek.id)}
              />
            );
          })}

          {Array.from({ length: emptySlots }).map((_, i) => {
            const slotIndex = selected.length + i;
            const isNext = i === 0;
            return (
              <button
                key={`empty-${i}`}
                onClick={isNext ? () => setModalOpen(true) : undefined}
                disabled={!isNext}
                className={cn(
                  'flex flex-col gap-2 py-6 px-5 rounded-[10px] border border-dashed border-gray-200',
                  'items-center justify-center flex-shrink-0',
                  'w-[220px] min-h-[90px]',
                  'transition-colors duration-150',
                  isNext
                    ? 'cursor-pointer hover:bg-gray-50 hover:border-gray-300'
                    : 'opacity-40 cursor-not-allowed',
                )}
              >
                <CirclePlus className="w-5 h-5 text-[#40484A]" />
                <p className="text-[#40484A] text-sm whitespace-nowrap">
                  Add {SLOT_LABELS[slotIndex]} Trek
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end h-5">
          {selected.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs text-[#4C6309] hover:underline underline-offset-2 transition-opacity leading-none"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <CompareSection treks={selected} />

      <TrekSelectModal
        open={modalOpen}
        currentSelectedIds={selectedIds}
        onConfirm={handleModalConfirm}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ComparePage;

type TrekSelectorCardProps = {
  index: number;
  title: string;
  region: string;
  img?: string;
  onRemove: () => void;
};

const TrekSelectorCard = ({
  index,
  title,
  region,
  img,
  onRemove,
}: TrekSelectorCardProps) => (
  <div className="relative flex items-center gap-3 py-4 pl-4 pr-10 rounded-[10px] shadow-md border border-gray-100 flex-shrink-0 w-[260px] bg-white">
    <button
      onClick={onRemove}
      aria-label={`Remove ${title}`}
      className="absolute top-2.5 right-2.5 p-0.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <X className="w-3.5 h-3.5" />
    </button>

    {img ? (
      <div className="w-12 h-12 rounded-[8px] overflow-hidden flex-shrink-0">
        <Image
          src={img}
          alt={title}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
    ) : (
      <div className="w-12 h-12 rounded-[8px] flex-shrink-0 bg-gray-100 flex items-center justify-center text-lg">
        🏔
      </div>
    )}

    <div className="flex flex-col min-w-0">
      <p className="text-[10px] text-[#4C6309] tracking-widest uppercase mb-0.5">
        Trek {index + 1}
      </p>
      <p className="font-fraunces text-[#181C1D] text-sm leading-snug truncate">
        {title}
      </p>
      <p className="text-[#40484A] text-xs truncate">{region}</p>
    </div>
  </div>
);
