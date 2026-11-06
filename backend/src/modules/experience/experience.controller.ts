import type { Request, Response } from 'express';
import { getExperienceDetail, listExperiences } from './experience.service.js';
import {
  createExperience,
  deleteExperience,
  updateExperience,
} from './experience.write.service.js';
import { handleResponse } from '../../utils/handleResponse.js';
import { validatedQuery } from '../../middleware/validate.js';
import type {
  DeleteExperienceResponse,
  GetExperienceResponse,
  ListExperiencesResponse,
  WriteExperienceResponse,
} from './internal/experience.types.js';
import type {
  GetExperienceParams,
  ListExperienceQuery,
} from './internal/experience.validator.js';
import type {
  CreateExperienceInput,
  UpdateExperienceInput,
} from './internal/experience.write.validator.js';

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

// POST /api/experiences - body is already parsed by validate().
export async function createExperienceController(
  req: Request,
  res: Response,
): Promise<Response<WriteExperienceResponse>> {
  const experience = await createExperience(
    req.body as CreateExperienceInput,
  );

  return handleResponse(res, experience, 'Experience created', 201);
}

// PATCH /api/experiences/:id - omitted fields are left untouched.
export async function updateExperienceController(
  req: Request,
  res: Response,
): Promise<Response<WriteExperienceResponse>> {
  const { id } = req.params as GetExperienceParams;

  const experience = await updateExperience(
    id,
    req.body as UpdateExperienceInput,
  );

  return handleResponse(res, experience, 'Experience updated');
}

// DELETE /api/experiences/:id - hard delete.
export async function deleteExperienceController(
  req: Request,
  res: Response,
): Promise<Response<DeleteExperienceResponse>> {
  const { id } = req.params as GetExperienceParams;

  await deleteExperience(id);

  return handleResponse(res, { id }, 'Experience deleted');
}