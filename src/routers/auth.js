import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginUserValidationSchema,
  registerUserValidationSchema,
} from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
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
router.post('/auth/refresh', refreshUserSessionController);
router.post('/auth/logout', logoutUserController);
router.post('/auth/send-reset-email', (req, res) => {
  res.json({ message: 'OK' });
});

export default router;
