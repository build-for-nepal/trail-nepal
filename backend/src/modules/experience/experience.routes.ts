import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import {
  getExperienceController,
  listExperiencesController,
} from './experience.controller.js';
import {
  getExperienceParamsSchema,
  listExperienceQuerySchema,
} from './internal/experience.validator.js';

export const experienceRouter = Router();

experienceRouter.get('/', validate({ query: listExperienceQuerySchema }), listExperiencesController);

experienceRouter.get(
  '/:slug',
  validate({ params: getExperienceParamsSchema }),
  getExperienceController,
);
