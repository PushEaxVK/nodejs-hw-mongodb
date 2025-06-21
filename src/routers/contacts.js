import { Router } from 'express';
import {
  createContactController,
  deleteContactByIdController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.use('/contacts/:contactId', isValidId);
router.get('/contacts', getContactsController);
router.get('/contacts/:contactId', getContactByIdController);
router.post(
  '/contacts',
  validateBody(createContactSchema),
  createContactController,
);
router.patch(
  '/contacts/:contactId',
  validateBody(updateContactSchema),
  patchContactController,
);
router.delete('/contacts/:contactId', deleteContactByIdController);

export default router;
