import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import { validate } from '../../middleware/validate.js';
import {
  getProfileController,
  updateProfileController,
} from './profile.controller.js';
import { updateProfileSchema } from './profile.validator.js';

export const profileRouter = Router();

profileRouter.get('/', requireAuth, getProfileController);

profileRouter.patch(
  '/',
  requireAuth,
  validate({ body: updateProfileSchema }),
  updateProfileController,
);
