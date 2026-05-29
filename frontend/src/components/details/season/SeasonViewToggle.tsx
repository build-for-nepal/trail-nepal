'use client';

import { cn } from '@/lib/utils';
import type { SeasonViewMode } from '@/types/weather';

type Props = {
  mode: SeasonViewMode;
  onChange: (mode: SeasonViewMode) => void;
  showForecast: boolean;
};

const SeasonViewToggle = ({ mode, onChange, showForecast }: Props) => {
  const isForecast = mode === 'forecast';

  return (
    <div className="flex items-center gap-3 sm:gap-4 ">
      <button
        type="button"
        onClick={() => onChange('window')}
        className={cn(
          'text-sm font-bold tracking-wide transition-colors cursor-pointer',
          !isForecast ? 'text-[#9BC02A]' : 'text-gray-500 hover:text-gray-700',
        )}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        WINDOW
      </button>

      <button
        type="button"
        role="switch"
        aria-checked={isForecast}
        aria-label={isForecast ? 'Show forecast' : 'Show climbing window'}
        disabled={!showForecast}
        onClick={() => {
          if (!showForecast) return;
          onChange(isForecast ? 'window' : 'forecast');
        }}
        className="relative h-7 w-[52px] shrink-0 cursor-pointer rounded-full border border-[#DBDBDB] bg-[#D1D5DB] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span
          className={cn(
            'absolute top-px left-0.5 h-6 w-6 rounded-full bg-[#88B112] shadow-sm transition-transform duration-200',
            isForecast && 'translate-x-[22px]',
          )}
        />
      </button>

      <button
        type="button"
        disabled={!showForecast}
        onClick={() => showForecast && onChange('forecast')}
        className={cn(
          'text-sm font-bold tracking-wide transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-40',
          isForecast ? 'text-[#9BC02A]' : 'text-gray-500 hover:text-gray-700',
        )}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        WEATHER FORECAST
      </button>
    </div>
  );
};

export default SeasonViewToggle;
