import type { Profile } from '../../../generated/prisma/client.js';
import type { AuthUser } from '../../../middleware/auth.js';
import type { ApiResponse } from '../../../utils/handleResponse.js';
import type { ProfileCompletion } from '../profile.completion.js';
import type { UpdateProfileInput } from '../profile.validator.js';

// The stored row, straight from Prisma so it cannot drift from the schema.
export type ProfileData = Profile;

// Only the columns a client may write, with omitted keys truly absent (not
// `undefined`), which is what Prisma requires under exactOptionalPropertyTypes.
export type ProfileWriteData = Partial<Pick<Profile, keyof UpdateProfileInput>>;

// What GET and PATCH /api/me/profile return. `profile` is null until the user
// first saves one.
export type ProfileWithCompletion = {
  profile: ProfileData | null;
  completion: ProfileCompletion;
};

// GET /api/me - the Better Auth account alongside its profile.
export type MeData = ProfileWithCompletion & { user: AuthUser };

// Social-provider data used to seed an empty profile.
export type ProviderProfileInfo = {
  name?: string | null;
  image?: string | null;
};

export type SplitName = {
  firstName: string | null;
  lastName: string | null;
};

export type GetProfileResponse = ApiResponse<ProfileWithCompletion>;
export type UpdateProfileResponse = GetProfileResponse;
export type GetMeResponse = ApiResponse<MeData>;
