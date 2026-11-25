import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import {
  createExperienceController,
  deleteExperienceController,
  getExperienceBySlugController,
  getExperienceController,
  listExperiencesController,
  updateExperienceController,
} from './experience.controller.js';
import {
  getExperienceBySlugParamsSchema,
  getExperienceParamsSchema,
  listExperienceQuerySchema,
} from './internal/experience.validator.js';
import {
  createExperienceSchema,
  updateExperienceSchema,
} from './internal/experience.write.validator.js';

export const experienceRouter = Router();

experienceRouter.get('/', validate({ query: listExperienceQuerySchema }), listExperiencesController);

experienceRouter.get(
  '/slug/:slug',
  validate({ params: getExperienceBySlugParamsSchema }),
  getExperienceBySlugController,
);

experienceRouter.get(
  '/:id',
  validate({ params: getExperienceParamsSchema }),
  getExperienceController,
);

experienceRouter.post(
  '/',
  validate({ body: createExperienceSchema }),
  createExperienceController,
);

experienceRouter.patch(
  '/:id',
  validate({ params: getExperienceParamsSchema, body: updateExperienceSchema }),
  updateExperienceController,
);

experienceRouter.delete(
  '/:id',
  validate({ params: getExperienceParamsSchema }),
  deleteExperienceController,
);
