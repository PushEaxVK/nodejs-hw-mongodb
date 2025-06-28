import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/auth.js';

const router = Router();

router.post('/auth/register', validateBody(registerUserSchema), (req, res) =>
  res.json({ message: 'OK' }),
);
router.post('/auth/login', (req, res) => res.json({ message: 'OK' }));
router.post('/auth/refresh', (req, res) => res.json({ message: 'OK' }));
router.post('/auth/logout', (req, res) => res.json({ message: 'OK' }));

export default router;
