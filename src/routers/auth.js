import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginUserValidationSchema,
  registerUserValidationSchema,
} from '../validation/auth.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/auth/register',
  validateBody(registerUserValidationSchema),
  registerUserController,
);
router.post(
  '/auth/login',
  validateBody(loginUserValidationSchema),
  loginUserController,
);
router.post('/auth/refresh', (req, res) => res.json({ message: 'OK' }));
router.post('/auth/logout', (req, res) => res.json({ message: 'OK' }));

export default router;
