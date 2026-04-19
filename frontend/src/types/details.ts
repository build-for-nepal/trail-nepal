export interface Accommodation {
  name?: string | null;
  phone?: string | null;
}

export interface TrekDayStats {
  distance?: string | null;
  walk?: string | null;
  elevation?: string | null;
  note?: string | null;
  duration?: string | null;
}

export interface TrekDay {
  id?: number | null;
  day?: string | null;
  title?: string | null;
  content?: string | null;
  description?: string | null;
  accommodations?: Accommodation[] | null;
  stats?: TrekDayStats | null;
  price?: string | null;
}

export interface GearItem {
  item: string;
  weight: string;
}

export interface GearChecklist {
  essentials?: GearItem[];
  optional?: GearItem[];
}

export type GearCategoryKey = "essential" | "optional";

export interface GearCategory {
  key: GearCategoryKey;
  label: string;
  items: {
    id: string;
    name: string;
    weight: number;
    checked: boolean;
  }[];
}
