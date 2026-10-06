import type { DetailRow, ExperienceRow } from './experience.query.js';
import {
  EXPERIENCE_DETAIL_DEFINITIONS,
  getExperienceDetailTitle,
  type DetailExperienceType,
} from '../../../constants/experience-detail.js';

// labels: '12' into '12 Days'
export function toListItem(row: ExperienceRow) {
  return {
    ...row,
    durationLabel: `${row.durationDays} ${row.durationDays === 1 ? 'Day' : 'Days'}`,
    elevationLabel: row.maxElevationM ? `${row.maxElevationM}m` : null,
  };
}

// Order comes from the constants, not the table: experience_detail has no
// order column. Sections with no content are dropped; titles fall back to the
// canonical one since the column is nullable.
export function orderDetailsByType(type: string, details: DetailRow[]) {
  const definitions =
    EXPERIENCE_DETAIL_DEFINITIONS[type as DetailExperienceType];

  // SIGHTSEEING and ACTIVITY have no definitions yet, so they keep stored order.
  if (!definitions) return details;

  return definitions.flatMap((definition) => {
    const detail = details.find(
      (candidate) => candidate.key === definition.key,
    );

    if (!detail) return [];

    return [
      {
        ...detail,
        title:
          detail.title?.trim() ||
          getExperienceDetailTitle(
            type as DetailExperienceType,
            definition.key,
          ),
      },
    ];
  });
}
