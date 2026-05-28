'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import {
  formatForecastDayLabel,
  getWeatherPresentation,
} from '@/lib/weather/openMeteo';
import type { WeatherForecast, WeatherLocation } from '@/types/weather';

import WeatherLocationDropdown from './WeatherLocationDropdown';
import WeatherTemperatureChart from './WeatherTemperatureChart';

type Props = {
  forecast: WeatherForecast;
  region: string;
  locations: WeatherLocation[];
  selectedLocationId: string;
  onLocationChange: (id: string) => void;
};

const poppins = { fontFamily: "'Poppins', sans-serif" } as const;

const WeatherForecastCard = ({
  forecast,
  region,
  locations,
  selectedLocationId,
  onLocationChange,
}: Props) => {
  const dayScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = dayScrollRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, []);

  const { summary } = getWeatherPresentation(forecast.current.weatherCode);
  const daily = forecast.daily ?? [];
  const hourly = forecast.hourly ?? [];

  return (
    <div
      className="flex w-full min-w-0 flex-col text-white"
      style={{
        ...poppins,
        backgroundColor: 'var(--color-forecast-card)',
        borderRadius: '24px',
        padding: '24px 40px 0 40px',
        gap: '48px',
        alignSelf: 'stretch',
      }}
    >
      {/* Header — Figma: vertical flow, gap 48 to next section */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold leading-tight">10 Day Forecast</h3>

          <div className="mt-4 flex items-end gap-2">
            <span className="text-[56px] font-semibold leading-none tracking-tight lg:text-[64px]">
              {forecast.current.tempC}°
            </span>
            <span className="mb-2 text-base font-bold text-white lg:mb-3">C</span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90">
            {summary}
          </p>
        </div>

        <div className="w-full min-w-0 sm:ml-auto sm:w-auto sm:max-w-[300px]">
          <WeatherLocationDropdown
            locations={locations}
            region={region}
            value={selectedLocationId}
            onChange={onLocationChange}
          />
        </div>
      </div>

      {/* 10-day cards */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => dayScrollRef.current?.scrollBy({ left: -(104 + 24) * 3, behavior: 'smooth' })}
          className={`shrink-0 text-white/70 hover:text-white transition-colors ${!canScrollLeft ? 'invisible' : ''}`}
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        <div ref={dayScrollRef} className="flex-1 flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {daily.map((day, index) => {
            const { Icon } = getWeatherPresentation(day.weatherCode);

            return (
              <div
                key={day.date}
                className="flex flex-auto w-[104px] shrink-0 snap-start flex-col items-center justify-between backdrop-blur-[10px]"
                style={{
                  minHeight: '219px',
                  borderRadius: '24px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '22px',
                  paddingBottom: '22px',
                  backgroundColor: 'var(--color-forecast-glass)',
                  gap: '24px',
                }}
              >
                <span className="text-center text-xs font-semibold text-white">
                  {formatForecastDayLabel(day.date, index)}
                </span>

                <span
                  className="h-px w-10"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(131, 172, 255, 0.30) 0%, #FFF 48.5%, rgba(131, 172, 255, 0.30) 100%)',
                  }}
                  aria-hidden
                />

                <div className="flex flex-1 items-center justify-center py-1">
                  <Icon
                    size={40}
                    strokeWidth={1.35}
                    className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                  />
                </div>

                <span className="text-center text-[15px] font-bold text-white">
                  {day.tempMaxC}°C
                </span>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => dayScrollRef.current?.scrollBy({ left: (104 + 24) * 3, behavior: 'smooth' })}
          className={`shrink-0 text-white/70 hover:text-white transition-colors ${!canScrollRight ? 'invisible' : ''}`}
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* Temperature chart */}
      {hourly.length > 0 ? (
        <div className="w-full min-w-0">
          <WeatherTemperatureChart hourly={hourly} />
        </div>
      ) : null}

      <p className="sr-only">
        Forecast data provided by Open-Meteo. Mountain weather changes quickly.
      </p>
    </div>
  );
};

export default WeatherForecastCard;
