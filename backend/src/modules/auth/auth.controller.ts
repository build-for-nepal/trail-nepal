import type { Request, Response } from 'express';
import { getAuthUser } from '../../middleware/auth.js';
import { handleResponse } from '../../utils/handleResponse.js';
import type { GetMeResponse } from '../profile/internal/profile.types.js';
import { getProfile } from '../profile/profile.service.js';

// GET /api/me - the signed-in account plus (optional) profile and completion.
export async function getMeController(
  req: Request,
  res: Response,
): Promise<Response<GetMeResponse>> {
  const user = getAuthUser(req);
  const profile = await getProfile(user.id);

  return handleResponse(res, { user, ...profile });
}
