import type { Profile } from '../../generated/prisma/client.js';

// Fields that count toward completion (equal weight). middleName is optional
// by nature, so it is excluded. Adding a field here is the only change needed
// to include it in the percentage.
export const COMPLETION_FIELDS = [
  'firstName',
  'lastName',
  'avatarUrl',
  'phone',
  'country',
  'bio',
  'dateOfBirth',
] as const satisfies readonly (keyof Profile)[];

export type CompletionField = (typeof COMPLETION_FIELDS)[number];

export type ProfileCompletion = {
  percentage: number;
  completed: CompletionField[];
  missing: CompletionField[];
};

function isFilled(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim() !== '';
  return true;
}

// Computed on read (never stored) so it cannot go stale. `profile` is null when
// the user has not created one yet -> 0%.
export function computeCompletion(
  profile: Partial<Pick<Profile, CompletionField>> | null,
): ProfileCompletion {
  const completed: CompletionField[] = [];
  const missing: CompletionField[] = [];
  for (const field of COMPLETION_FIELDS) {
    (isFilled(profile?.[field]) ? completed : missing).push(field);
  }
  return {
    percentage: Math.round((completed.length / COMPLETION_FIELDS.length) * 100),
    completed,
    missing,
  };
}
