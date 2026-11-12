import { db } from '../../config/db.js';
import { computeCompletion } from './profile.completion.js';
import type {
  ProfileWithCompletion,
  ProfileWriteData,
  ProviderProfileInfo,
  SplitName,
} from './internal/profile.types.js';
import type { UpdateProfileInput } from './profile.validator.js';

export async function getProfile(
  userId: string,
): Promise<ProfileWithCompletion> {
  const profile = await db.profile.findUnique({ where: { userId } });
  return { profile, completion: computeCompletion(profile) };
}

// Drops undefined keys so "omitted" never reaches Prisma; null still clears.
function toWriteData(input: UpdateProfileInput): ProfileWriteData {
  return {
    ...(input.firstName !== undefined && { firstName: input.firstName }),
    ...(input.middleName !== undefined && { middleName: input.middleName }),
    ...(input.lastName !== undefined && { lastName: input.lastName }),
    ...(input.avatarUrl !== undefined && { avatarUrl: input.avatarUrl }),
    ...(input.phone !== undefined && { phone: input.phone }),
    ...(input.country !== undefined && { country: input.country }),
    ...(input.bio !== undefined && { bio: input.bio }),
    ...(input.dateOfBirth !== undefined && { dateOfBirth: input.dateOfBirth }),
  };
}

// Creates the profile on first write; the account never needs one to exist.
// Omitted keys are left untouched and null clears a field.
export async function updateProfile(
  userId: string,
  input: UpdateProfileInput,
): Promise<ProfileWithCompletion> {
  const data = toWriteData(input);
  const profile = await db.profile.upsert({
    where: { userId },
    create: { userId, ...data },
    update: data,
  });
  return { profile, completion: computeCompletion(profile) };
}

// Splits a provider "full name" into first / last (best effort).
export function splitName(name?: string | null): SplitName {
  const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: null, lastName: null };
  return {
    firstName: parts[0] ?? null,
    lastName: parts.length > 1 ? parts.slice(1).join(' ') : null,
  };
}

// Seeds a profile from social-provider data. Never overwrites existing values.
export async function seedProfileFromProvider(
  userId: string,
  info: ProviderProfileInfo,
): Promise<void> {
  const { firstName, lastName } = splitName(info.name);
  const avatarUrl = info.image || null;
  if (!firstName && !avatarUrl) return;
  await db.profile.upsert({
    where: { userId },
    create: { userId, firstName, lastName, avatarUrl },
    update: {},
  });
}
