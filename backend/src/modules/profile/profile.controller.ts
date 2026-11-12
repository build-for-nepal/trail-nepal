import type { Request, Response } from 'express';
import { getAuthUser } from '../../middleware/auth.js';
import { handleResponse } from '../../utils/handleResponse.js';
import type {
  GetProfileResponse,
  UpdateProfileResponse,
} from './internal/profile.types.js';
import { getProfile, updateProfile } from './profile.service.js';
import type { UpdateProfileInput } from './profile.validator.js';

// GET /api/me/profile - profile (null until first saved) + completion %.
export async function getProfileController(
  req: Request,
  res: Response,
): Promise<Response<GetProfileResponse>> {
  const result = await getProfile(getAuthUser(req).id);

  return handleResponse(res, result);
}

// PATCH /api/me/profile - body is already parsed by validate(). Creates the
// profile if missing.
export async function updateProfileController(
  req: Request,
  res: Response,
): Promise<Response<UpdateProfileResponse>> {
  const result = await updateProfile(
    getAuthUser(req).id,
    req.body as UpdateProfileInput,
  );

  return handleResponse(res, result, 'Profile updated');
}
