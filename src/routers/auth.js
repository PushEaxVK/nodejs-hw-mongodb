import { Router } from 'express';

const router = Router();

router.post('/auth/register', (req, res) => res.json({ message: 'OK' }));
router.post('/auth/login', (req, res) => res.json({ message: 'OK' }));
router.post('/auth/refresh', (req, res) => res.json({ message: 'OK' }));
router.post('/auth/logout', (req, res) => res.json({ message: 'OK' }));

export default router;
