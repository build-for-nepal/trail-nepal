import type { LucideIcon } from 'lucide-react-native';
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
} from 'lucide-react-native';

import { MONTH_NAMES } from './format';
import type { Forecast, ForecastDay, ForecastLocation } from './types';

// The web's request and wording, from frontend/src/lib/weather/openMeteo.ts. It also asks
// for an hourly series and the wind, which nothing on either side shows, and its code table
// lacks freezing drizzle and freezing rain (56, 57, 66, 67), added here.

const FORECAST_DAYS = 10;
const TIMEOUT_MS = 15_000;

export function forecastUrl(location: ForecastLocation): string {
  const [lat, lng] = location.coordinates;
  const params: Record<string, string> = {
    latitude: String(lat),
    longitude: String(lng),
    current: 'temperature_2m,weather_code',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum',
    timezone: 'Asia/Kathmandu',
    forecast_days: String(FORECAST_DAYS),
  };
  if (location.elevationM != null) {
    params.elevation = String(location.elevationM);
  }
  // Not URLSearchParams: React Native's is only partly implemented.
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  return `https://api.open-meteo.com/v1/forecast?${query}`;
}

const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);

function numbers(value: unknown, length: number): (number | null)[] | null {
  if (!Array.isArray(value) || value.length !== length) return null;
  return value.map((n) => (isNumber(n) ? n : null));
}

/** Throws unless the response has a current reading and at least today's forecast. */
export function parseForecast(raw: unknown, fetchedAt: number): Forecast {
  const data = (raw ?? {}) as {
    current?: Record<string, unknown>;
    daily?: Record<string, unknown>;
  };
  const tempC = data.current?.temperature_2m;
  const weatherCode = data.current?.weather_code;
  const dates = data.daily?.time;
  if (!isNumber(tempC) || !isNumber(weatherCode) || !Array.isArray(dates)) {
    throw new Error('Incomplete forecast');
  }

  const codes = numbers(data.daily?.weather_code, dates.length);
  const maxes = numbers(data.daily?.temperature_2m_max, dates.length);
  const mins = numbers(data.daily?.temperature_2m_min, dates.length);
  const precip = numbers(data.daily?.precipitation_sum, dates.length);
  if (!codes || !maxes || !mins || !precip) {
    throw new Error('Incomplete forecast');
  }

  // Stops at the first day with a gap, so a short forecast still shows what it has.
  const days: ForecastDay[] = [];
  for (let i = 0; i < Math.min(dates.length, FORECAST_DAYS); i++) {
    const date = dates[i];
    const code = codes[i];
    const max = maxes[i];
    const min = mins[i];
    if (
      typeof date !== 'string' ||
      code == null ||
      max == null ||
      min == null
    ) {
      break;
    }
    days.push({
      date,
      weatherCode: code,
      maxC: Math.round(max),
      minC: Math.round(min),
      precipMm: Math.round((precip[i] ?? 0) * 10) / 10,
    });
  }
  if (days.length === 0) throw new Error('Incomplete forecast');

  return {
    fetchedAt,
    current: { tempC: Math.round(tempC), weatherCode },
    days,
  };
}

async function request(
  location: ForecastLocation,
  signal: AbortSignal,
): Promise<Forecast> {
  const response = await fetch(forecastUrl(location), { signal });
  if (!response.ok) {
    throw new Error(`Forecast request failed (${response.status})`);
  }
  return parseForecast(await response.json(), Date.now());
}

/** One Open-Meteo request. A request not finished after 15 s, body included, fails. */
export async function fetchForecast(
  location: ForecastLocation,
): Promise<Forecast> {
  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;
  // The timeout rejects on its own rather than through the abort: expo/fetch's native body
  // read only settles on a complete body, so once headers are in, aborting leaves
  // response.json() pending for good. Trail signal stalls like that.
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      controller.abort();
      reject(new Error('Forecast request timed out'));
    }, TIMEOUT_MS);
  });
  try {
    return await Promise.race([request(location, controller.signal), timeout]);
  } finally {
    clearTimeout(timer);
  }
}

type WeatherLook = { label: string; Icon: LucideIcon };

const WEATHER: Record<number, WeatherLook> = {
  0: { label: 'Clear', Icon: Sun },
  1: { label: 'Mainly clear', Icon: Sun },
  2: { label: 'Partly cloudy', Icon: Cloud },
  3: { label: 'Overcast', Icon: Cloud },
  45: { label: 'Foggy', Icon: CloudFog },
  48: { label: 'Foggy', Icon: CloudFog },
  51: { label: 'Light drizzle', Icon: CloudRain },
  53: { label: 'Drizzle', Icon: CloudRain },
  55: { label: 'Heavy drizzle', Icon: CloudRain },
  56: { label: 'Light freezing drizzle', Icon: CloudRain },
  57: { label: 'Freezing drizzle', Icon: CloudRain },
  61: { label: 'Light rain', Icon: CloudRain },
  63: { label: 'Rain', Icon: CloudRain },
  65: { label: 'Heavy rain', Icon: CloudRain },
  66: { label: 'Light freezing rain', Icon: CloudRain },
  67: { label: 'Freezing rain', Icon: CloudRain },
  71: { label: 'Light snow', Icon: CloudSnow },
  73: { label: 'Snow', Icon: CloudSnow },
  75: { label: 'Heavy snow', Icon: CloudSnow },
  77: { label: 'Snow grains', Icon: CloudSnow },
  80: { label: 'Rain showers', Icon: CloudRain },
  81: { label: 'Rain showers', Icon: CloudRain },
  82: { label: 'Heavy showers', Icon: CloudRain },
  85: { label: 'Snow showers', Icon: CloudSnow },
  86: { label: 'Heavy snow showers', Icon: CloudSnow },
  95: { label: 'Thunderstorm', Icon: CloudLightning },
  96: { label: 'Thunderstorm', Icon: CloudLightning },
  99: { label: 'Thunderstorm', Icon: CloudLightning },
};

const UNKNOWN_WEATHER: WeatherLook = { label: 'Unknown', Icon: Cloud };

export function weatherLook(code: number): WeatherLook {
  return WEATHER[code] ?? UNKNOWN_WEATHER;
}

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

/**
 * 'Today', then 'Sat', then '2 Nov' after the first week, where the web's card writes
 * 'Nov 2'. `spoken` is the same day in full words for screen readers.
 */
export function forecastDayLabel(
  isoDate: string,
  index: number,
): { short: string; spoken: string } {
  if (index === 0) return { short: 'Today', spoken: 'Today' };

  // Read by its parts: new Date('2026-10-24') is midnight UTC, the day before west of it.
  const [year, month, day] = isoDate.split('-').map(Number);
  const weekday =
    WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  const monthName = MONTH_NAMES[month - 1];
  if (index <= 6) return { short: weekday.slice(0, 3), spoken: weekday };
  return {
    short: `${day} ${monthName.slice(0, 3)}`,
    spoken: `${weekday} ${day} ${monthName}`,
  };
}

// Nepal is UTC+5:45 all year, the request's Asia/Kathmandu.
const NEPAL_OFFSET_MS = (5 * 60 + 45) * 60 * 1000;

/** Today's date in Nepal as 'YYYY-MM-DD', the form of the forecast's dates. */
export function nepalDate(now: number): string {
  return new Date(now + NEPAL_OFFSET_MS).toISOString().slice(0, 10);
}

/** This month in Nepal, 0 for January. The calendar's "Now" goes by it, as the forecast does. */
export function nepalMonthIndex(now: number): number {
  return Number(nepalDate(now).slice(5, 7)) - 1;
}

/** Drops days already over in Nepal, for a forecast kept from yesterday or longer. */
export function daysFromToday(
  days: readonly ForecastDay[],
  now: number,
): ForecastDay[] {
  const today = nepalDate(now);
  return days.filter((day) => day.date >= today);
}

/** 'Updated just now', 'Updated 5 min ago', 'Updated 2 hrs ago'. */
export function updatedLabel(fetchedAt: number, now: number): string {
  const minutes = Math.max(0, Math.floor((now - fetchedAt) / 60_000));
  if (minutes < 1) return 'Updated just now';
  if (minutes < 60) return `Updated ${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  return hours === 1 ? 'Updated 1 hr ago' : `Updated ${hours} hrs ago`;
}

export function formatMetres(value: number): string {
  return `${value.toLocaleString('en-US')}\u00A0m`;
}

/** The entry marked as the default, or the first. */
export function defaultLocationIndex(
  locations: readonly ForecastLocation[],
): number {
  return Math.max(
    0,
    locations.findIndex((location) => location.isDefault),
  );
}
