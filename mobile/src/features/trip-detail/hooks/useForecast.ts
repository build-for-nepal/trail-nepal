import { useEffect, useSyncExternalStore } from 'react';
import { AppState } from 'react-native';

import type { Forecast, ForecastLocation } from '../types';
import { fetchForecast } from '../weather';

// The web keeps a forecast 45 minutes, in sessionStorage. This is in memory, so it lasts
// until the app restarts.
const FRESH_MS = 45 * 60 * 1000;

type Entry = {
  forecast?: Forecast;
  loading: boolean;
  /** The last request failed. Any older forecast stays. */
  failed: boolean;
};

const EMPTY: Entry = { loading: false, failed: false };
const entries = new Map<string, Entry>();
/** Requests under way, by place, so a second caller waits for one instead of sending another. */
const requests = new Map<string, Promise<boolean>>();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function write(key: string, entry: Entry) {
  entries.set(key, entry);
  listeners.forEach((listener) => listener());
}

function keyOf(location: ForecastLocation): string {
  const [lat, lng] = location.coordinates;
  return `${lat.toFixed(3)},${lng.toFixed(3)},${location.elevationM ?? ''}`;
}

const isStale = (entry: Entry, now: number) =>
  !entry.forecast || now - entry.forecast.fetchedAt >= FRESH_MS;

/**
 * Asks Open-Meteo for a place, unless a request for it is already out, which is returned
 * instead, or, without `force`, its forecast is under 45 minutes old. Resolves true once
 * the place has a forecast, false if the request failed. Safe to call as often as an
 * effect runs.
 */
export function loadForecast(
  location: ForecastLocation,
  force = false,
): Promise<boolean> {
  const key = keyOf(location);
  const pending = requests.get(key);
  if (pending) return pending;
  const entry = entries.get(key) ?? EMPTY;
  if (!force && !isStale(entry, Date.now())) return Promise.resolve(true);

  const request = fetchForecast(location).then(
    (forecast) => {
      requests.delete(key);
      write(key, { forecast, loading: false, failed: false });
      return true;
    },
    () => {
      requests.delete(key);
      write(key, { forecast: entry.forecast, loading: false, failed: true });
      return false;
    },
  );
  requests.set(key, request);
  write(key, { forecast: entry.forecast, loading: true, failed: false });
  return request;
}

/**
 * The 10-day forecast for one place, shared by every screen that shows it. `now`, from
 * useNow, makes the screen check the 45 minutes again each minute it stays open.
 */
export function useForecast(
  location: ForecastLocation | undefined,
  now: number,
) {
  const key = location ? keyOf(location) : '';
  const read = () => entries.get(key) ?? EMPTY;
  // Also the server snapshot: the static web export renders screens in Node.
  const entry = useSyncExternalStore(subscribe, read, read);

  useEffect(() => {
    if (!location) return;
    loadForecast(location);
    const subscription = AppState.addEventListener('change', (state) => {
      if (state !== 'active') return;
      // A request out when the app went to the background tends to fail on the way back:
      // its timeout counted the time away, or iOS dropped the connection. One more try
      // after it keeps that from showing as an error.
      const wasPending = requests.has(keyOf(location));
      loadForecast(location).then((ok) => {
        if (!ok && wasPending) loadForecast(location);
      });
    });
    return () => subscription.remove();
  }, [location]);

  // A forecast past its 45 minutes is fetched again, even with the screen left open or
  // under the packing screen. Not after a failure: that waits for Try again, the app
  // coming back, or the screen opening again, rather than retrying every minute.
  useEffect(() => {
    if (!location) return;
    const current = entries.get(keyOf(location)) ?? EMPTY;
    if (current.forecast && !current.failed && isStale(current, now)) {
      loadForecast(location);
    }
  }, [location, now]);

  return {
    forecast: entry.forecast,
    loading: entry.loading,
    failed: entry.failed,
    /** Resolves true once there is a fresh forecast, false if the request failed. */
    refresh: () =>
      location ? loadForecast(location, true) : Promise.resolve(false),
  };
}
