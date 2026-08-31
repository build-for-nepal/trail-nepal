'use client';

import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';

import { cn } from '@/lib/utils';
import { getWeatherPresentation } from '@/lib/weather/openMeteo';
import type { WeatherForecast, WeatherLocation } from '@/types/weather';

import WeatherLocationDropdown from './WeatherLocationDropdown';

type Props = {
  forecast: WeatherForecast;
  region: string;
  locations: WeatherLocation[];
  selectedLocationId: string;
  onLocationChange: (id: string) => void;
  onRefresh?: () => void;
  refreshing?: boolean;
};

function formatRelative(fetchedAt: string, now: number): string {
  const then = new Date(fetchedAt).getTime();
  if (Number.isNaN(then)) return 'just now';

  const diffMin = Math.max(0, Math.floor((now - then) / 60_000));
  if (diffMin < 1) return 'just now';
  if (diffMin === 1) return '1 min ago';
  if (diffMin < 60) return `${diffMin} min ago`;

  const diffHr = Math.floor(diffMin / 60);
  return diffHr === 1 ? '1 hr ago' : `${diffHr} hrs ago`;
}

/** Re-render every minute so the "Updated …" label stays accurate. */
function useUpdatedLabel(fetchedAt: string): string {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const relative = formatRelative(fetchedAt, now);
  const clock = fetchedAt
    ? new Date(fetchedAt).toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
      })
    : '';

  return clock ? `Updated ${relative} · ${clock}` : `Updated ${relative}`;
}

function formatDayLabel(isoDate: string, index: number): string {
  if (index === 0) return 'Today';

  const date = new Date(`${isoDate}T12:00:00`);
  if (index <= 6) {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  }
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
}

// Forecast card: live Open-Meteo data with a manual refresh control.
const WeatherForecastCard = ({
  forecast,
  region,
  locations,
  selectedLocationId,
  onLocationChange,
  onRefresh,
  refreshing = false,
}: Props) => {
  const daily = forecast.daily ?? [];
  const updatedLabel = useUpdatedLabel(forecast.fetchedAt);

  // The refetch often resolves from cache almost instantly, so drive the spin
  // for a fixed, visible window whenever the user triggers a refresh.
  const [manualSpin, setManualSpin] = useState(false);

  useEffect(() => {
    if (!manualSpin) return;
    const id = window.setTimeout(() => setManualSpin(false), 900);
    return () => window.clearTimeout(id);
  }, [manualSpin]);

  const spinning = refreshing || manualSpin;

  const handleRefresh = () => {
    if (!onRefresh || manualSpin) return;
    setManualSpin(true);
    onRefresh();
  };

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-[24px] bg-forecast-card px-6 py-6 font-poppins text-white">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-2xl font-bold leading-tight">10 Day Forecast</h3>
          <p className="flex items-center gap-1.5 text-xs font-medium text-white/70">
            <span
              className="inline-block size-1.5 rounded-full bg-emerald-300"
              aria-hidden
            />
            {updatedLabel}
          </p>
        </div>

        {onRefresh ? (
          <button
            type="button"
            onClick={handleRefresh}
            disabled={spinning}
            aria-label="Refresh forecast"
            title="Refresh forecast"
            className="shrink-0 rounded-full border border-white/25 bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <RefreshCw
              size={16}
              strokeWidth={2.25}
              className={cn(spinning && 'animate-spin')}
            />
          </button>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-start gap-1">
          <span className="text-[40px] font-semibold leading-none tracking-tight">
            {Math.round(forecast.current.tempC)}°
          </span>
          <span className="mt-1 text-xs font-semibold text-white/75">C/F</span>
        </div>

        <WeatherLocationDropdown
          locations={locations}
          region={region}
          value={selectedLocationId}
          onChange={onLocationChange}
          className="w-auto max-w-[150px]"
        />
      </div>

      <ul className="flex flex-1 flex-col justify-between">
        {daily.map((day, index) => {
          const { Icon } = getWeatherPresentation(day.weatherCode);
          const isToday = index === 0;

          return (
            <li
              key={day.date}
              className={cn(
                'grid grid-cols-[1fr_auto_auto] items-center gap-4 border-t border-white/15 py-3 first:border-t-0',
                isToday && 'font-semibold',
              )}
            >
              <span className=" text-white">
                {formatDayLabel(day.date, index)}
              </span>

              <Icon
                size={22}
                strokeWidth={1.75}
                className="justify-self-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
              />

              <span className="flex w-14 items-center justify-end gap-2 font-semibold tabular-nums">
                <span className="text-white">{Math.round(day.tempMaxC)}°</span>
                <span className="text-white/55">
                  {Math.round(day.tempMinC)}°
                </span>
              </span>
            </li>
          );
        })}
      </ul>

      <p className="sr-only">
        Forecast data provided by Open-Meteo. Mountain weather changes quickly.
      </p>
    </div>
  );
};

export default WeatherForecastCard;
