'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { WeatherLocation } from '@/types/weather';

type Props = {
  locations: WeatherLocation[];
  region: string;
  value: string;
  onChange: (id: string) => void;
  className?: string;
};

function formatOptionLabel(label: string, region: string): string {
  return `${label}, ${region}`;
}

const WeatherLocationDropdown = ({
  locations,
  region,
  value,
  onChange,
  className,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const selected =
    locations.find((location) => location.id === value) ?? locations[0];

  const triggerLabel = selected
    ? formatOptionLabel(selected.label, region)
    : 'Select location';

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn('relative w-full max-w-full sm:max-w-[300px]', className)}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-full items-center gap-2 rounded-full border px-4 text-left transition hover:bg-white/15 sm:h-11"
        style={{
          fontFamily: "'Poppins', sans-serif",
          borderColor: 'var(--color-forecast-pill-border)',
          backgroundColor: 'var(--color-forecast-glass)',
        }}
      >
        <MapPin size={16} className="shrink-0 text-white" strokeWidth={2.25} />
        <span className="min-w-0 flex-1 truncate text-sm font-semibold text-white">
          {triggerLabel}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            'shrink-0 text-white/90 transition-transform',
            open && 'rotate-180',
          )}
          strokeWidth={2.25}
        />
      </button>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Forecast locations along the route"
          className="absolute right-0 left-0 top-[calc(100%+8px)] z-50 max-h-[240px] overflow-y-auto rounded-sm bg-white py-1 shadow-[0_8px_24px_rgba(15,23,42,0.18)] [scrollbar-width:thin] [scrollbar-color:rgba(29,102,213,0.55)_rgba(0,0,0,0.06)] [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-black/5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[rgba(29,102,213,0.45)]"
        >
          {locations.map((location) => {
            const isSelected = location.id === value;
            const isHighlighted =
              hoveredId === location.id || (hoveredId === null && isSelected);

            return (
              <li key={location.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setHoveredId(location.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => {
                    onChange(location.id);
                    setOpen(false);
                    setHoveredId(null);
                  }}
                  className={cn(
                    'w-full px-4 py-2.5 text-left text-sm font-medium leading-snug transition-colors',
                    isHighlighted
                      ? 'bg-forecast-dropdown-active text-white'
                      : 'text-[#111827] hover:bg-forecast-dropdown-active hover:text-white',
                  )}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {formatOptionLabel(location.label, region)}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default WeatherLocationDropdown;
