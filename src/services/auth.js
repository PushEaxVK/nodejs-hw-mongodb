import createHttpError from 'http-errors';
import { UsersCollection } from '../db/models/users.js';

export const registerUser = async (payload) => {
  const existingUser = await UsersCollection.findOne({ email: payload.email });

  if (existingUser) {
    throw createHttpError(409, 'Email in use');
  }

  const user = await UsersCollection.create(payload);
  return user;
};
