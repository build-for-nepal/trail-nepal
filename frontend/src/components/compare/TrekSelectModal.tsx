'use client';

import Image from 'next/image';
import { useState, useMemo, useEffect } from 'react';
import { X, Search, Check, Clock, Mountain, CalendarDays } from 'lucide-react';
import { cn } from 'src/lib/utils';
import { TREK_DETAILS } from 'src/static/trekDetails';
import type { TrekDetail } from 'src/types/trek';

const ALL_TREKS: TrekDetail[] = Object.values(TREK_DETAILS);

type TrekSelectModalProps = {
  open: boolean;
  currentSelectedIds: string[];
  onConfirm: (ids: string[]) => void;
  onClose: () => void;
};

const TrekSelectModal = ({
  open,
  currentSelectedIds,
  onConfirm,
  onClose,
}: TrekSelectModalProps) => {
  const [draftIds, setDraftIds] = useState<string[]>(currentSelectedIds);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (open) {
      setDraftIds(currentSelectedIds);
      setQuery('');
    }
  }, [open, currentSelectedIds]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_TREKS;
    return ALL_TREKS.filter(
      (t) =>
        t.name.toLowerCase().includes(q) || t.region.toLowerCase().includes(q),
    );
  }, [query]);

  const toggle = (id: string) => {
    setDraftIds((prev) => {
      if (prev.includes(id)) {
        // Always allow deselect
        return prev.filter((sid) => sid !== id);
      }
      if (prev.length >= 3) return prev; // cap at 3
      return [...prev, id];
    });
  };

  const handleClearAll = () => {
    setDraftIds(ALL_TREKS[0] ? [ALL_TREKS[0].id] : []);
  };

  const handleConfirm = () => {
    onConfirm(draftIds);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[680px] flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div>
            <h2 className="font-fraunces text-[#181C1D] text-2xl">
              Build your Comparison
            </h2>
            <p className="text-[#40484A] text-sm mt-1">
              Select up to 3 treks to compare side-by-side details.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 ml-4 flex-shrink-0">
            <span className="text-sm text-[#40484A]">
              Selected:
              <span
                className={cn(
                  'font-semibold px-2 py-0.5 rounded-full text-xs ml-1',
                  draftIds.length >= 3
                    ? 'bg-[#4C6309] text-white'
                    : 'bg-[#EEF3E0] text-[#4C6309]',
                )}
              >
                {draftIds.length}/3
              </span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-0  top-0 p-1.5 rounded-full cursor-pointer text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 pt-4 pb-3">
          <div className="flex justify-end md:hidden text-sm text-[#40484A] mb-4">
            Selected:
            <span
              className={cn(
                'font-semibold px-2 py-0.5 rounded-full text-xs ml-1',
                draftIds.length >= 3
                  ? 'bg-[#4C6309] text-white'
                  : 'bg-[#EEF3E0] text-[#4C6309]',
              )}
            >
              {draftIds.length}/3
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-200 bg-[#F7F8F6] focus-within:border-[#6AAF1A] focus-within:bg-white transition-colors">
            <Search className="w-4 h-4 text-[#40484A] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search trek names, regions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-[#181C1D] placeholder:text-[#9CA3AF] outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')}>
                <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* Trek Grid */}
        <div
          className="flex-1 overflow-y-auto px-6 pb-2"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db transparent',
          }}
        >
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-[#40484A]">
              <span className="text-4xl mb-3">🏔</span>
              <p className="text-sm">No treks found for "{query}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pb-2">
              {filtered.map((trek) => {
                const heroImg =
                  trek.gallery.find((g) => g.type === 'hero') ??
                  trek.gallery[0];
                const isSelected = draftIds.includes(trek.id);
                const isDisabled = !isSelected && draftIds.length >= 3;

                return (
                  <button
                    key={trek.id}
                    onClick={() => toggle(trek.id)}
                    disabled={isDisabled}
                    className={cn(
                      'relative text-left rounded-xl overflow-hidden border-2 transition-all duration-150',
                      isSelected
                        ? 'border-[#6AAF1A] shadow-md'
                        : isDisabled
                          ? 'border-gray-100 opacity-40 cursor-not-allowed'
                          : 'border-gray-100 hover:border-gray-300 hover:shadow-sm cursor-pointer',
                    )}
                  >
                    {/* Image */}
                    <div className="relative w-full h-32 bg-gray-100">
                      {heroImg ? (
                        <Image
                          src={heroImg.url}
                          alt={heroImg.alt}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl">
                          🏔
                        </div>
                      )}
                      {/* Selected checkmark */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#6AAF1A] flex items-center justify-center shadow">
                          <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-3 bg-white">
                      <p className="font-fraunces text-[#181C1D] text-sm leading-snug line-clamp-1">
                        {trek.name}
                      </p>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1.5">
                        <span className="flex items-center gap-1 text-[10px] text-[#40484A]">
                          <Clock size={10} className="text-black" />
                          {trek.meta.duration}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-[#40484A]">
                          <Mountain size={10} className="text-black" />
                          {trek.meta.maxElevation}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-[#40484A]">
                          <CalendarDays size={10} className="text-black" />
                          {trek.meta.bestSeasons}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
          <button
            onClick={handleClearAll}
            className="text-xs text-[#4C6309] cursor-pointer hover:underline underline-offset-2 transition-opacity"
          >
            Clear All
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg cursor-pointer text-sm text-[#40484A] border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleConfirm}
              disabled={draftIds.length === 0}
              className={cn(
                'px-5 py-2 rounded-lg text-sm font-medium text-white transition-colors cursor-pointer',
                draftIds.length > 0
                  ? 'bg-[#6AAF1A] hover:bg-[#5a9a14]'
                  : 'bg-gray-200 cursor-not-allowed text-gray-400',
              )}
            >
              Compare Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekSelectModal;
