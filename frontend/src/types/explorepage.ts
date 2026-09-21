export const DEFAULT_FILTER_STATE: FilterState = {
  types: [],
  regions: [],
  durations: [],
  difficulties: [],
  minPrice: '',
  maxPrice: '',
  maxElevation: 6000,
};

export type DifficultyLevel = 'Easy' | 'Moderate' | 'Challenging';

export type Region =
  | 'All'
  | 'Khumbu Valley'
  | 'Annapurna Region'
  | 'Langtang Region'
  | 'Manaslu Region'
  | string;

export interface FilterState {
  types: string[];
  regions: string[];
  durations: string[];
  difficulties: string[];
  minPrice: string;
  maxPrice: string;
  maxElevation: number;
}

// Array-valued filter dimensions (checkbox groups).
export type FilterArrayKey = 'types' | 'regions' | 'durations' | 'difficulties';

export type FilterPanelProps = {
  filters: FilterState;
  onToggle: (key: FilterArrayKey, value: string) => void;
  onRangeChange: (
    key: 'minPrice' | 'maxPrice' | 'maxElevation',
    value: string | number,
  ) => void;
  onReset: () => void;
  onSelectOnly?: (key: FilterArrayKey, value: string) => void;
  mobile?: boolean;
  headerHeight?: number;
};
