import type { TrekDay } from './types';

const NONE = '—';

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

const MONTHS: Record<string, string> = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
};

/** 'March-May, September-November' to 'Mar-May, Sep-Nov', as the web's header does. */
export function shortMonths(seasons: string): string {
  return seasons
    .split(',')
    .map((season) =>
      season
        .trim()
        .replace(
          /January|February|March|April|May|June|July|August|September|October|November|December/g,
          (month) => MONTHS[month],
        ),
    )
    .join(', ');
}

export function paragraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

// The rules below are the web's, from frontend/src/components/details/TreksHero.tsx.

/** Shortest to longest walking day, e.g. '2-10 hrs'. Drive and flight days don't count. */
export function dailyWalkingHours(itinerary: TrekDay[]): string {
  const hours: number[] = [];

  itinerary.forEach((day) => {
    const duration = day.duration;
    if (!duration) return;

    const isDriveOnly =
      /^(?:.*\b(?:drive|jeep|bus|road|transfer)\b)?\s*$/i.test(duration) ||
      (/\b(?:drive|jeep|bus|road|transfer)\b/i.test(duration) &&
        !/\b(?:trek|hik|walk|explor)/i.test(duration));
    if (isDriveOnly) return;

    const parts = duration.split(/[,/+]/);
    const trekParts = parts.filter((part) =>
      /\b(?:trek|hik|walk|explor|round\s*trip)\b/i.test(part),
    );
    const segments =
      trekParts.length > 0
        ? trekParts
        : parts.filter(
            (part) =>
              !/\b(?:drive|jeep|bus|road|transfer|flight|fly)\b/i.test(part),
          );

    segments.forEach((segment) => {
      const range = segment.match(
        /(\d+(?:\.\d+)?)\s*[-–—]\s*(\d+(?:\.\d+)?)\s*(?:hrs?|hours?|minutes?|min)/i,
      );
      if (range) {
        [range[1], range[2]].forEach((n) => {
          let h = Number(n);
          if (/min/i.test(range[0])) h /= 60;
          if (h > 0) hours.push(h);
        });
        return;
      }

      const single = segment.match(
        /(\d+(?:\.\d+)?)\s*(?:hrs?|hours?|minutes?|min)/i,
      );
      if (!single) return;

      let h = Number(single[1]);
      if (/min/i.test(single[0])) h /= 60;
      if (h > 0) hours.push(h);
    });
  });

  return hours.length
    ? `${Math.min(...hours)}-${Math.max(...hours)}\u00A0hrs`
    : NONE;
}

/** Days whose title marks them as acclimatization days. */
export function acclimatizationDays(itinerary: TrekDay[]): string {
  const count = itinerary.filter((day) => /acclimatiz/i.test(day.title)).length;
  if (count === 0) return NONE;
  return count === 1 ? '1\u00A0day' : `${count}\u00A0days`;
}

export type SeasonStatus = 'peak' | 'danger' | 'caution';

export function getSeasonStatus(condition: string): SeasonStatus {
  const n = condition.toLowerCase();
  if (
    n.includes('heavy rain') ||
    n.includes('peak monsoon') ||
    n.includes('extremely cold') ||
    n.includes('heavy snow')
  )
    return 'danger';
  if (
    n.includes('monsoon') ||
    n.includes('freezing') ||
    n.includes('winter') ||
    n.includes('chill') ||
    n.includes('cloudy') ||
    n.includes('muddy')
  )
    return 'caution';
  return 'peak';
}

export const SEASON_BADGE: Record<
  SeasonStatus,
  { label: string; bg: string; text: string }
> = {
  peak: { label: 'Optimal', bg: '#ecfdf5', text: '#059669' },
  danger: { label: 'Danger', bg: '#fff1f2', text: '#f43f5e' },
  caution: { label: 'Caution', bg: '#fffbeb', text: '#d97706' },
};

export const SEASON_ICON_COLOR: Record<SeasonStatus, string> = {
  peak: '#059669',
  danger: '#f43f5e',
  caution: '#f59e0b',
};

export const SEASON_TEXT_COLOR: Record<SeasonStatus, string> = {
  peak: '#059669',
  danger: '#f43f5e',
  caution: '#f59e0b',
};

export const trafficByStatus: Record<SeasonStatus, string> = {
  peak: 'High',
  danger: 'Very low',
  caution: 'Moderate',
};

export function buildSeasonOverview(
  monthName: string,
  label: string,
  detail: string,
  status: SeasonStatus,
): string {
  const traffic = trafficByStatus[status].toLowerCase();
  const framing: Record<SeasonStatus, string> = {
    peak: `${monthName} is one of the prime windows for this trek.`,
    caution: `${monthName} is a transitional month that rewards flexible planning.`,
    danger: `${monthName} is a demanding time to be on the trail.`,
  };
  const closing: Record<SeasonStatus, string> = {
    peak: `Skies are typically stable and visibility is good, and trail traffic tends to be ${traffic}.`,
    caution: `Weather can shift quickly and conditions vary from day to day, with ${traffic} trail traffic.`,
    danger: `Expect tough going and frequently obscured mountain views, with ${traffic} trail traffic.`,
  };
  const conditions = detail
    ? `Conditions are shaped by ${label.trim().toLowerCase()}, bringing ${detail.trim().toLowerCase()}.`
    : `Conditions are shaped by ${label.trim().toLowerCase()}.`;
  return [framing[status], conditions, closing[status]].join(' ');
}
