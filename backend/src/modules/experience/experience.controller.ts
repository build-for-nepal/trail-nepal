import type { Request, Response } from 'express';
import { getExperienceDetail, listExperiences } from './experience.service.js';
import { handleResponse } from '../../utils/handleResponse.js';
import { validatedQuery } from '../../middleware/validate.js';
import type {
  GetExperienceResponse,
  ListExperiencesResponse,
} from './internal/experience.types.js';
import type {
  GetExperienceParams,
  ListExperienceQuery,
} from './internal/experience.validator.js';

// GET /api/experiences - explore and search. Main table only.
export async function listExperiencesController(
  req: Request,
  res: Response,
): Promise<Response<ListExperiencesResponse>> {
  const query = validatedQuery<ListExperienceQuery>(req);

  const result = await listExperiences(query);

  return handleResponse(res, result);
}

// GET /api/experiences/:id - detail sections, timeline, images and route.
export async function getExperienceController(
  req: Request,
  res: Response,
): Promise<Response<GetExperienceResponse>> {
  const { id } = req.params as GetExperienceParams;

  const experience = await getExperienceDetail(id);

  return handleResponse(res, experience);
}