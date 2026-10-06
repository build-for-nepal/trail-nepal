import type {
  AppliedFilter,
  Difficulty,
  DurationBucket,
  FilterSectionId,
  TrekFilters,
} from './types';

export const DIFFICULTY_OPTIONS: readonly {
  value: Difficulty;
  label: string;
}[] = [
  { value: 'easy', label: 'Easy' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'challenging', label: 'Challenging' },
];

export const DURATION_OPTIONS: readonly DurationBucket[] = [
  '0-3',
  '3-5',
  '5-10',
  '10-15',
  '15+',
];

export const REGION_OPTIONS: readonly string[] = [
  'Khumbu',
  'Annapurna',
  'Langtang',
  'Manaslu',
  'Kathmandu Valley',
  'Kavrepalanchok',
  'Lalitpur',
];

export const ELEVATION_MAX = 6000;
export const ELEVATION_STEP = 100;

// Quick chips in FilterBar, in display order.
export const QUICK_FILTERS: readonly {
  section: FilterSectionId;
  label: string;
}[] = [
  { section: 'difficulty', label: 'Difficulty' },
  { section: 'duration', label: 'Duration' },
  { section: 'region', label: 'Region' },
  { section: 'elevation', label: 'Elevation' },
];

export const EMPTY_FILTERS: TrekFilters = {
  difficulty: [],
  duration: [],
  regions: [],
  maxElevation: ELEVATION_MAX,
};

const DIFFICULTY_VALUES: readonly string[] = DIFFICULTY_OPTIONS.map(
  (o) => o.value,
);
const DURATION_VALUES: readonly string[] = DURATION_OPTIONS;

export function isDifficulty(value: string): value is Difficulty {
  return DIFFICULTY_VALUES.includes(value);
}

export function isDurationBucket(value: string): value is DurationBucket {
  return DURATION_VALUES.includes(value);
}

export function formatMetres(value: number): string {
  return `${value.toLocaleString('en-US')} m`;
}

export function formatDays(value: number): string {
  return value === 1 ? '1 day' : `${value} days`;
}

// Chip order follows the sheet's section order.
export function toAppliedFilters(filters: TrekFilters): AppliedFilter[] {
  const applied: AppliedFilter[] = [
    ...filters.difficulty.map(
      (value): AppliedFilter => ({ section: 'difficulty', value }),
    ),
    ...filters.duration.map(
      (value): AppliedFilter => ({ section: 'duration', value }),
    ),
    ...filters.regions.map(
      (value): AppliedFilter => ({ section: 'region', value }),
    ),
  ];
  if (filters.maxElevation < ELEVATION_MAX) {
    applied.push({ section: 'elevation', value: filters.maxElevation });
  }
  return applied;
}

export function appliedFilterLabel(filter: AppliedFilter): string {
  switch (filter.section) {
    case 'difficulty':
      return (
        DIFFICULTY_OPTIONS.find((o) => o.value === filter.value)?.label ??
        filter.value
      );
    case 'duration':
      return `${filter.value} days`;
    case 'region':
      return filter.value;
    case 'elevation':
      return `Up to ${formatMetres(filter.value)}`;
  }
}

export function removeAppliedFilter(
  filters: TrekFilters,
  filter: AppliedFilter,
): TrekFilters {
  switch (filter.section) {
    case 'difficulty':
      return {
        ...filters,
        difficulty: filters.difficulty.filter((v) => v !== filter.value),
      };
    case 'duration':
      return {
        ...filters,
        duration: filters.duration.filter((v) => v !== filter.value),
      };
    case 'region':
      return {
        ...filters,
        regions: filters.regions.filter((v) => v !== filter.value),
      };
    case 'elevation':
      return { ...filters, maxElevation: ELEVATION_MAX };
  }
}

/** Resets one section, or every section when `section` is null. */
export function clearSection(
  filters: TrekFilters,
  section: FilterSectionId | null,
): TrekFilters {
  switch (section) {
    case null:
      return EMPTY_FILTERS;
    case 'difficulty':
      return { ...filters, difficulty: [] };
    case 'duration':
      return { ...filters, duration: [] };
    case 'region':
      return { ...filters, regions: [] };
    case 'elevation':
      return { ...filters, maxElevation: ELEVATION_MAX };
  }
}
