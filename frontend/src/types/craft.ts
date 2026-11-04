import type { CulturalTourDetail } from '@/types/cultural';

// Arts & crafts workshops share the cultural tour shape, so they reuse the
// cultural page sections (header, trip facts, map, calendar, gallery).
export type CraftTourDetail = CulturalTourDetail;
