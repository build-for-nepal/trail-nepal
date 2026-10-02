import { ExperienceType } from '../generated/prisma/client.js';

export const EXPERIENCE_DETAIL_DEFINITIONS = {
  [ExperienceType.TREK]: [
    { key: 'overview', title: 'Trek Overview' },
    { key: 'trek-timeline', title: 'Trek Timeline' },
    { key: 'when-should-i-go', title: 'When Should I go' },
    { key: 'what-to-expect', title: 'What to Expect' },
    { key: 'altitude-and-safety', title: 'Altitude & Safety' },
    { key: 'gear-checklist', title: 'Gear Checklist' },
    { key: 'gallery', title: 'Gallery' },
    { key: 'trivia', title: 'Trivia' },
  ],

  [ExperienceType.HIKE]: [
    { key: 'overview', title: 'Overview' },
    { key: 'trail-route', title: 'Trail Route' },
    { key: 'when-should-i-go', title: 'When Should I go' },
    { key: 'what-to-expect', title: 'What to Expect' },
    { key: 'gear-checklist', title: 'Gear Checklist' },
    { key: 'gallery', title: 'Gallery' },
  ],

  [ExperienceType.CULTURAL]: [
    { key: 'overview', title: 'Overview' },
    { key: 'sites-and-itinerary', title: 'Sites & Itinerary' },
    { key: 'when-should-i-go', title: 'When Should I go' },
    { key: 'what-to-expect', title: 'What to Expect' },
    { key: 'gallery', title: 'Gallery' },
  ],
};

export type DetailExperienceType = keyof typeof EXPERIENCE_DETAIL_DEFINITIONS;

export function getExperienceDetailTitle(
  type: DetailExperienceType,
  key: string,
): string | undefined {
  return EXPERIENCE_DETAIL_DEFINITIONS[type].find(
    (detail) => detail.key === key,
  )?.title;
}

export function getExperienceDetailKey(
  type: DetailExperienceType,
  title: string,
): string | undefined {
  return EXPERIENCE_DETAIL_DEFINITIONS[type].find(
    (detail) => detail.title === title,
  )?.key;
}
