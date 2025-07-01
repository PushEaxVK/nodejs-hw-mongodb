import { Router } from 'express';
import {
  createContactController,
  deleteContactByIdController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import {
  createContactValidationSchema,
  updateContactValidationSchema,
} from '../validation/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use('/contacts', authenticate);
router.use('/contacts/:contactId', isValidId);
router.get('/contacts', getContactsController);
router.get('/contacts/:contactId', getContactByIdController);
router.post(
  '/contacts',
  validateBody(createContactValidationSchema),
  createContactController,
);
router.patch(
  '/contacts/:contactId',
  validateBody(updateContactValidationSchema),
  patchContactController,
);
router.delete('/contacts/:contactId', deleteContactByIdController);

export default router;
