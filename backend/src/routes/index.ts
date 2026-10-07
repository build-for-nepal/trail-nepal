import { Router } from 'express';
import { experienceRouter } from '../modules/experience/experience.routes.js';

const router = Router();

router.use('/api/experiences', experienceRouter);

export default router;
