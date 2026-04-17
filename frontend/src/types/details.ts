export interface Accommodation {
  name?: string | null;
  phone?: string | null;
}

export interface TrekDayStats {
  distance?: string | null;
  walk?: string | null;
  elevation?: string | null;
  note?: string | null;
}

export interface TrekDay {
  id: number;
  title?: string | null;
  content?: string | null;
  accommodations?: Accommodation[] | null;
  stats?: TrekDayStats | null;
  price?: string | null;
}
