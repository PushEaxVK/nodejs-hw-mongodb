import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';

const router = Router();

router.post(
  '/auth/register',
  validateBody(registerUserSchema),
  registerUserController,
);
router.post('/auth/login', (req, res) => res.json({ message: 'OK' }));
router.post('/auth/refresh', (req, res) => res.json({ message: 'OK' }));
router.post('/auth/logout', (req, res) => res.json({ message: 'OK' }));

export default router;
