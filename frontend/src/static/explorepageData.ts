export const FILTER_OPTIONS = {
  regions: [
    'All',
    'Khumbu Valley',
    'Annapurna Region',
    'Langtang Region',
    'Manaslu Region',
  ],
  durations: ['0-3 days', '3-5 days', '5-10 days', '10-15 days', '15+ days'],
  difficulties: ['All', 'Easy', 'Moderate', 'Challenging'],
};

export const DEFAULT_FILTERS = {
  region: 'All',
  duration: 'All',
  difficulty: 'All',
  budgetMin: '0',
  budgetMax: '50000',
  elevation: 6000,
};
export type Props = {
  title: string;
  options: readonly string[];
  selected: string[];
  onToggle: (val: string) => void;
  onSelectOnly?: (val: string) => void;
};
