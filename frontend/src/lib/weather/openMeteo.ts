import type { LucideIcon } from 'lucide-react';
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
} from 'lucide-react';

import type { WeatherForecast, WeatherHourly } from '@/types/weather';

type OpenMeteoCurrent = {
  time: string;
  temperature_2m: number;
  weather_code: number;
  wind_speed_10m: number;
};

type OpenMeteoDaily = {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
};

type OpenMeteoHourly = {
  time: string[];
  temperature_2m: number[];
};

type OpenMeteoResponse = {
  current?: OpenMeteoCurrent;
  daily?: OpenMeteoDaily;
  hourly?: OpenMeteoHourly;
};

export type WeatherPresentation = {
  label: string;
  summary: string;
  Icon: LucideIcon;
};

const WMO_PRESENTATION: Record<number, WeatherPresentation> = {
  0: {
    label: 'Clear',
    summary: 'Clear skies and good visibility along the trail.',
    Icon: Sun,
  },
  1: {
    label: 'Mainly clear',
    summary: 'Mostly clear with light cloud cover at higher elevations.',
    Icon: Sun,
  },
  2: {
    label: 'Partly cloudy',
    summary: 'Partly cloudy and mild; views may be briefly obscured.',
    Icon: Cloud,
  },
  3: {
    label: 'Overcast',
    summary: 'Mostly cloudy and humid; mountain views may stay soft.',
    Icon: Cloud,
  },
  45: {
    label: 'Foggy',
    summary: 'Foggy conditions possible, especially in the early morning.',
    Icon: CloudFog,
  },
  48: {
    label: 'Foggy',
    summary: 'Dense fog may reduce visibility on exposed ridges.',
    Icon: CloudFog,
  },
  51: {
    label: 'Light drizzle',
    summary: 'Light drizzle possible; trails may be damp in places.',
    Icon: CloudRain,
  },
  53: {
    label: 'Drizzle',
    summary: 'Steady drizzle expected; pack a waterproof layer.',
    Icon: CloudRain,
  },
  55: {
    label: 'Heavy drizzle',
    summary: 'Persistent drizzle; wet trails and limited views.',
    Icon: CloudRain,
  },
  61: {
    label: 'Light rain',
    summary: 'Light rain at times; afternoon showers possible.',
    Icon: CloudRain,
  },
  63: {
    label: 'Rain',
    summary: 'Rain likely through the day; carry full rain protection.',
    Icon: CloudRain,
  },
  65: {
    label: 'Heavy rain',
    summary: 'Heavy rain expected; trails may be muddy and slippery.',
    Icon: CloudRain,
  },
  71: {
    label: 'Light snow',
    summary: 'Light snow possible at higher camps and passes.',
    Icon: CloudSnow,
  },
  73: {
    label: 'Snow',
    summary: 'Snow likely at elevation; cold wind chill expected.',
    Icon: CloudSnow,
  },
  75: {
    label: 'Heavy snow',
    summary: 'Heavy snow at altitude; pass conditions may be difficult.',
    Icon: CloudSnow,
  },
  77: {
    label: 'Snow grains',
    summary: 'Snow grains and drifting cloud at higher elevations.',
    Icon: CloudSnow,
  },
  80: {
    label: 'Rain showers',
    summary: 'Scattered showers; brief clearing between clouds.',
    Icon: CloudRain,
  },
  81: {
    label: 'Rain showers',
    summary: 'On-and-off showers; afternoon storms possible.',
    Icon: CloudRain,
  },
  82: {
    label: 'Heavy showers',
    summary: 'Heavy showers likely; an afternoon thunderstorm possible.',
    Icon: CloudRain,
  },
  85: {
    label: 'Snow showers',
    summary: 'Snow showers at higher elevations; cold and windy.',
    Icon: CloudSnow,
  },
  86: {
    label: 'Heavy snow showers',
    summary: 'Heavy snow showers; high camps may see accumulation.',
    Icon: CloudSnow,
  },
  95: {
    label: 'Thunderstorm',
    summary:
      'Mostly cloudy and humid; an afternoon thunderstorm in one or two spots.',
    Icon: CloudLightning,
  },
  96: {
    label: 'Thunderstorm',
    summary:
      'Thunderstorms possible; avoid exposed ridges in the afternoon.',
    Icon: CloudLightning,
  },
  99: {
    label: 'Thunderstorm',
    summary:
      'Severe thunderstorms possible; plan to finish hiking before afternoon.',
    Icon: CloudLightning,
  },
};

const FALLBACK_PRESENTATION: WeatherPresentation = {
  label: 'Unknown',
  summary: 'Conditions may vary; check again before you depart.',
  Icon: Cloud,
};

export function getWeatherPresentation(code: number): WeatherPresentation {
  return WMO_PRESENTATION[code] ?? FALLBACK_PRESENTATION;
}

function buildForecastUrl(lat: number, lng: number, elevationM?: number): string {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    current: 'temperature_2m,weather_code,wind_speed_10m',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum',
    hourly: 'temperature_2m',
    timezone: 'Asia/Kathmandu',
    forecast_days: '10',
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
  });

  if (elevationM != null && elevationM > 0) {
    params.set('elevation', String(elevationM));
  }

  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

function formatHourLabel(isoTime: string): string {
  const date = new Date(isoTime);
  return date
    .toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
    .toLowerCase()
    .replace(/\s/g, '');
}

/** Full calendar day in local timezone, one point every hour (24 slots). */
function buildHourlyChart(
  hourly?: OpenMeteoHourly,
  currentTime?: string,
): WeatherHourly[] {
  if (!hourly?.time?.length || !currentTime) return [];

  const dayPrefix = currentTime.split('T')[0];
  if (!dayPrefix) return [];

  const points: WeatherHourly[] = [];

  for (let hour = 0; hour < 24; hour += 1) {
    const slot = `${dayPrefix}T${String(hour).padStart(2, '0')}:00`;
    const index = hourly.time.indexOf(slot);
    if (index === -1) continue;

    const temp = hourly.temperature_2m[index];
    if (temp == null) continue;

    points.push({
      time: slot,
      tempC: Math.round(temp),
      label: formatHourLabel(slot),
    });
  }

  return points;
}

export function getHourlyChartCaption(currentTime?: string): string {
  if (!currentTime) return 'Today · every hour';

  const dayPrefix = currentTime.split('T')[0];
  const todayPrefix = new Date().toLocaleDateString('en-CA');

  const dayLabel =
    dayPrefix === todayPrefix
      ? 'Today'
      : new Date(`${dayPrefix}T12:00:00`).toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });

  return `${dayLabel} · every 3 hours`;
}

export async function fetchWeatherForecast(
  lat: number,
  lng: number,
  locationLabel: string,
  regionLabel: string,
  elevationM?: number,
  signal?: AbortSignal,
): Promise<WeatherForecast> {
  const response = await fetch(buildForecastUrl(lat, lng, elevationM), {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Weather request failed (${response.status})`);
  }

  const data = (await response.json()) as OpenMeteoResponse;

  if (!data.current || !data.daily) {
    throw new Error('Incomplete weather response');
  }

  const { daily, current, hourly } = data;

  return {
    locationLabel,
    regionLabel,
    fetchedAt: current.time,
    current: {
      tempC: Math.round(current.temperature_2m),
      weatherCode: current.weather_code,
      windKmh: Math.round(current.wind_speed_10m),
    },
    daily: daily.time.slice(0, 10).map((date, index) => ({
      date,
      weatherCode: daily.weather_code[index] ?? 0,
      tempMaxC: Math.round(daily.temperature_2m_max[index] ?? 0),
      tempMinC: Math.round(daily.temperature_2m_min[index] ?? 0),
      precipMm: Math.round((daily.precipitation_sum[index] ?? 0) * 10) / 10,
    })),
    hourly: buildHourlyChart(hourly, current.time),
  };
}

export function formatForecastDayLabel(isoDate: string, index: number): string {
  if (index === 0) return 'Today';

  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
}

export function isToday(isoDate: string): boolean {
  const today = new Date();
  const date = new Date(`${isoDate}T12:00:00`);
  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  );
}
