export const DEFAULT_FILTER_STATE: FilterState = {
  regions: [],
  durations: [],
  difficulties: [],
  minPrice: "",
  maxPrice: "",
  maxElevation: 6000,
};

export type DifficultyLevel = "Easy" | "Moderate" | "Challenging" | "Difficult";

export type Region =
  | "All"
  | "Khumbu Valley"
  | "Annapurna Region"
  | "Langtang Region"
  | "Manaslu Region"
  | string;

export interface Trek {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  duration: string;
  altitude: string;
  season: string;
  price: number;
  imageUrl: string;
  region: Region;
  href: string;
}

export interface FilterState {
  regions: string[];
  durations: string[];
  difficulties: string[];
  minPrice: string;
  maxPrice: string;
  maxElevation: number;
}
export type FilterPanelProps = {
  filters: FilterState;
  onToggle: (
    key: "regions" | "durations" | "difficulties",
    value: string,
  ) => void;
  onRangeChange: (
    key: "minPrice" | "maxPrice" | "maxElevation",
    value: string | number,
  ) => void;
  onReset: () => void;
  mobile?: boolean;
  headerHeight?: number;
};
