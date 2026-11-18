import {
  EXPERIENCE_LABELS,
  FLEXIBLE_MONTH,
  type TripPreferences,
} from '@/lib/tripPreferences';

/** What the shown results were searched for, as read-only chips. */
export function SearchSummary({
  preferences,
}: {
  preferences: TripPreferences;
}) {
  const { month, days, experiences, difficulty } = preferences;

  const chips = [
    month === FLEXIBLE_MONTH ? 'Flexible month' : month,
    days != null ? `${days} ${days === 1 ? 'day' : 'days'}` : null,
    experiences.length === 0
      ? 'All interests'
      : experiences.map((key) => EXPERIENCE_LABELS[key]).join(', '),
    difficulty ?? 'Any difficulty',
  ].filter((chip): chip is string => chip !== null);

  return (
    <ul aria-label="Your preferences" className="mt-3 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <li
          key={chip}
          className="rounded-full bg-white px-3 py-1 font-poppins text-xs font-medium text-[#40453b] shadow-sm"
        >
          {chip}
        </li>
      ))}
    </ul>
  );
}
