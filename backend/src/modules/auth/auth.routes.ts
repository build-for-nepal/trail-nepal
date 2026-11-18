import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import { getMeController } from './auth.controller.js';

export const meRouter = Router();

meRouter.get('/', requireAuth, getMeController);
