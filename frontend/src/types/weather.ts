export type WeatherLocation = {
  id: string;
  label: string;
  lat: number;
  lng: number;
  elevationM?: number;
  dayIndex: number;
};

export type WeatherCurrent = {
  tempC: number;
  weatherCode: number;
  windKmh: number;
};

export type WeatherDaily = {
  date: string;
  weatherCode: number;
  tempMaxC: number;
  tempMinC: number;
  precipMm: number;
};

export type WeatherHourly = {
  time: string;
  tempC: number;
  label: string;
};

export type WeatherForecast = {
  locationLabel: string;
  regionLabel: string;
  fetchedAt: string;
  current: WeatherCurrent;
  daily: WeatherDaily[];
  hourly: WeatherHourly[];
};

export type WeatherFetchStatus = 'idle' | 'loading' | 'success' | 'error';

export type SeasonViewMode = 'window' | 'forecast';
