'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { fetchWeatherForecast } from '@/lib/weather/openMeteo';
import type {
  WeatherFetchStatus,
  WeatherForecast,
  WeatherLocation,
} from '@/types/weather';

const CACHE_TTL_MS = 45 * 60 * 1000;
const CACHE_PREFIX = 'trail-nepal-weather:v3:';

type CacheEntry = {
  expiresAt: number;
  forecast: WeatherForecast;
};

function cacheKey(location: WeatherLocation): string {
  return `${location.lat.toFixed(3)},${location.lng.toFixed(3)},${location.elevationM ?? 0}`;
}

function normalizeForecast(raw: unknown): WeatherForecast | null {
  if (!raw || typeof raw !== 'object') return null;

  const data = raw as Partial<WeatherForecast>;
  if (!data.current || !Array.isArray(data.daily)) return null;

  return {
    locationLabel: data.locationLabel ?? '',
    regionLabel: data.regionLabel ?? '',
    fetchedAt: data.fetchedAt ?? '',
    current: data.current,
    daily: data.daily,
    hourly: Array.isArray(data.hourly) ? data.hourly : [],
  };
}

function readCache(key: string): WeatherForecast | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = sessionStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!raw) return null;

    const entry = JSON.parse(raw) as CacheEntry;
    if (entry.expiresAt < Date.now()) {
      sessionStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }

    return normalizeForecast(entry.forecast);
  } catch {
    return null;
  }
}

function writeCache(key: string, forecast: WeatherForecast): void {
  if (typeof window === 'undefined') return;

  try {
    const entry: CacheEntry = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      forecast,
    };
    sessionStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(entry));
  } catch {
    // Ignore quota errors
  }
}

export function useWeatherForecast(
  location: WeatherLocation | null,
  regionLabel: string,
  enabled: boolean,
) {
  const [status, setStatus] = useState<WeatherFetchStatus>('idle');
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const [error, setError] = useState<string | null>(null);

  const memoryCache = useRef<Map<string, WeatherForecast>>(new Map());

  const load = useCallback(
    async (target: WeatherLocation, signal: AbortSignal) => {
      const key = cacheKey(target);
      const fromMemory = memoryCache.current.get(key);
      const cached =
        normalizeForecast(fromMemory) ?? readCache(key) ?? null;

      if (cached) {
        setForecast(cached);
        setStatus('success');
        setError(null);
      } else {
        setStatus('loading');
      }

      try {
        const fresh = await fetchWeatherForecast(
          target.lat,
          target.lng,
          target.label,
          regionLabel,
          target.elevationM,
          signal,
        );

        if (signal.aborted) return;

        memoryCache.current.set(key, fresh);
        writeCache(key, fresh);
        setForecast(fresh);
        setStatus('success');
        setError(null);
      } catch (err) {
        if (signal.aborted) return;

        if (!cached) {
          setForecast(null);
          setStatus('error');
          setError(
            err instanceof Error
              ? err.message
              : 'Unable to load weather forecast',
          );
        }
      }
    },
    [regionLabel],
  );

  useEffect(() => {
    if (!enabled || !location) {
      setStatus('idle');
      setForecast(null);
      setError(null);
      return;
    }

    const controller = new AbortController();
    load(location, controller.signal);

    return () => controller.abort();
  }, [enabled, location, load]);

  const retry = useCallback(() => {
    if (!location || !enabled) return;

    const controller = new AbortController();
    setStatus('loading');
    load(location, controller.signal);
  }, [enabled, location, load]);

  return { status, forecast, error, retry };
}
