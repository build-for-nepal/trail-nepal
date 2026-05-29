'use client';

import { useEffect, useMemo, useState } from 'react';

import SectionHeader from '@/components/common/SectionHeader';
import { useWeatherForecast } from '@/hooks/useWeatherForecast';
import {
  getDefaultLocationId,
  getTrekWeatherLocations,
} from '@/lib/weather/trekWeatherLocations';
import type { TrekTimelineDay } from '@/types/trek';
import type { SeasonViewMode } from '@/types/weather';

import SeasonLegend from './SeasonLegend';
import SeasonViewToggle from './SeasonViewToggle';
import TreksSeasonCalendar from './TreksSeasonCalendar';
import WeatherForecastCard from './WeatherForecastCard';

type Props = {
  trekId: string;
  region: string;
  timeline: TrekTimelineDay[];
};

const TreksSeasonContent = ({
  trekId,
  region,
  timeline,
}: Props) => {
  const locations = useMemo(() => getTrekWeatherLocations(timeline), [timeline]);
  const showForecast = locations.length > 0;

  const defaultLocationId = useMemo(
    () => getDefaultLocationId(locations),
    [locations],
  );

  const [viewMode, setViewMode] = useState<SeasonViewMode>('window');
  const [selectedLocationId, setSelectedLocationId] =
    useState(defaultLocationId);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    setSelectedLocationId(defaultLocationId);
  }, [defaultLocationId]);

  useEffect(() => {
    if (!locations.some((loc) => loc.id === selectedLocationId)) {
      setSelectedLocationId(defaultLocationId);
    }
  }, [locations, selectedLocationId, defaultLocationId]);

  useEffect(() => {
    if (!showForecast && viewMode === 'forecast') {
      setViewMode('window');
    }
  }, [showForecast, viewMode]);

  useEffect(() => {
    if (viewMode === 'forecast') {
      setShouldFetch(true);
    }
  }, [viewMode]);

  const selectedLocation = useMemo(
    () => locations.find((loc) => loc.id === selectedLocationId) ?? null,
    [locations, selectedLocationId],
  );

  const fetchEnabled = shouldFetch;
  const { status, forecast, error, retry } = useWeatherForecast(
    selectedLocation,
    region,
    fetchEnabled,
  );

  const isLoading = status === 'loading' && !forecast;
  const isError = status === 'error' && !forecast;

  return (
    <section
      id="calendar"
      className="flex w-full flex-col justify-center bg-[#F3F4F6] py-16 lg:py-24"
    >
      <div className="page-wrapper mx-auto flex w-full flex-col gap-10 px-6 sm:px-10 lg:gap-12 lg:px-20">
        <SectionHeader
          title="When Should I go?"
          description="Climbing windows for Trek regions."
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SeasonViewToggle
            mode={viewMode}
            onChange={setViewMode}
            showForecast={showForecast}
          />
          {viewMode === 'window' ? <SeasonLegend /> : null}
        </div>

        {viewMode === 'window' ? (
          <TreksSeasonCalendar trekId={trekId} />
        ) : (
          <div aria-busy={isLoading} aria-live="polite" className="-mx-6 sm:mx-0">
            {isLoading ? (
              <WeatherCardSkeleton />
            ) : isError ? (
              <div
                className="rounded-[24px] bg-[#5984C2] px-10 py-8 text-white"
                role="alert"
              >
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {error ?? 'Unable to load weather forecast.'}
                </p>
                <button
                  type="button"
                  onClick={retry}
                  className="mt-4 rounded-full bg-[#B5D334] px-5 py-2 text-sm font-bold text-gray-900"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
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
              />
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};

function WeatherCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-12 overflow-hidden rounded-[24px] bg-[#5984C2] px-10 py-6">
      <div className="flex justify-between gap-4">
        <div className="flex-1 space-y-4">
          <div className="h-6 w-40 rounded bg-white/20" />
          <div className="h-16 w-32 rounded bg-white/20" />
          <div className="h-10 max-w-lg rounded bg-white/15" />
        </div>
        <div className="h-11 w-48 rounded-full bg-white/15" />
      </div>
      <div className="flex gap-6 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="h-[219px] w-[104px] shrink-0 rounded-[24px] bg-white/15 lg:flex-1"
          />
        ))}
      </div>
      <div className="h-[200px] rounded-lg bg-white/10" />
    </div>
  );
}

export default TreksSeasonContent;
