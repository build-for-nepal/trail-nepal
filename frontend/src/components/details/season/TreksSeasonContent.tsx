'use client';

import { useEffect, useMemo, useState } from 'react';

import SectionHeader from '@/components/common/SectionHeader';
import { useWeatherForecast } from '@/hooks/useWeatherForecast';
import {
  getDefaultLocationId,
  getTrekWeatherLocations,
} from '@/lib/weather/trekWeatherLocations';
import type { TrekTimelineDay } from '@/types/trek';

import TreksSeasonCalendar from './TreksSeasonCalendar';
import WeatherForecastCard from './WeatherForecastCard';

type Props = {
  trekId: string;
  region: string;
  timeline: TrekTimelineDay[];
};

const TreksSeasonContent = ({ trekId, region, timeline }: Props) => {
  const locations = useMemo(
    () => getTrekWeatherLocations(timeline),
    [timeline],
  );
  const showForecast = locations.length > 0;

  const defaultLocationId = useMemo(
    () => getDefaultLocationId(locations),
    [locations],
  );

  const [selectedLocationId, setSelectedLocationId] =
    useState(defaultLocationId);

  useEffect(() => {
    setSelectedLocationId(defaultLocationId);
  }, [defaultLocationId]);

  useEffect(() => {
    if (!locations.some((loc) => loc.id === selectedLocationId)) {
      setSelectedLocationId(defaultLocationId);
    }
  }, [locations, selectedLocationId, defaultLocationId]);

  const selectedLocation = useMemo(
    () => locations.find((loc) => loc.id === selectedLocationId) ?? null,
    [locations, selectedLocationId],
  );

  // Both panels are always visible now, so the forecast is fetched up front.
  const { status, forecast, error, retry } = useWeatherForecast(
    selectedLocation,
    region,
    showForecast,
  );

  const today = forecast?.daily?.[0] ?? null;
  const isLoading = status === 'loading' && !forecast;
  const isError = status === 'error' && !forecast;

  return (
    <section
      id="calendar"
      className="flex w-full flex-col justify-center bg-[#FFFFFF] py-16 lg:py-24"
    >
      <div className="page-wrapper mx-auto flex w-full flex-col gap-10 px-6 sm:px-10 lg:gap-12 lg:px-20">
        <SectionHeader
          title="When Should I go?"
          description="Climbing windows for Trek regions."
        />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10">
          <TreksSeasonCalendar trekId={trekId} today={today} />

          {showForecast ? (
            <div className="h-full" aria-busy={isLoading} aria-live="polite">
              {isError ? (
                <div
                  className="rounded-[24px] px-8 py-8 text-white"
                  role="alert"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    backgroundColor: 'var(--color-forecast-card)',
                  }}
                >
                  <p className="text-sm">
                    {error ?? 'Unable to load weather forecast.'}
                  </p>
                  <button
                    type="button"
                    onClick={retry}
                    className="mt-4 rounded-full bg-[#B5D334] px-5 py-2 text-sm font-bold text-gray-900"
                  >
                    Try again
                  </button>
                </div>
              ) : forecast ? (
                <WeatherForecastCard
                  forecast={forecast}
                  region={region}
                  locations={locations}
                  selectedLocationId={selectedLocationId}
                  onLocationChange={setSelectedLocationId}
                  onRefresh={retry}
                  refreshing={status === 'loading'}
                />
              ) : (
                <ForecastSkeleton />
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

function ForecastSkeleton() {
  return (
    <div
      className="flex h-full animate-pulse flex-col gap-5 rounded-[24px] px-6 py-6"
      style={{ backgroundColor: 'var(--color-forecast-card)' }}
    >
      <div className="h-6 w-40 rounded bg-white/20" />
      <div className="flex items-center justify-between">
        <div className="h-12 w-24 rounded bg-white/20" />
        <div className="h-10 w-40 rounded-full bg-white/15" />
      </div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="h-8 rounded bg-white/10" />
        ))}
      </div>
    </div>
  );
}

export default TreksSeasonContent;
