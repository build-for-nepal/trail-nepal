import { Router } from 'express';
import { experienceRouter } from '../modules/experience/experience.routes.js';

import { profileRouter } from '../modules/profile/profile.routes.js';
import { meRouter } from '../modules/auth/auth.routes.js';

const router = Router();

router.use('/api/me/profile', profileRouter);
router.use('/api/me', meRouter);
router.use('/api/experiences', experienceRouter);

export default router;
