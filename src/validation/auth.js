import Joi from 'joi';

export const registerUserValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(12)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/)
    .message({
      'string.pattern.base':
        'Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character.',
    })
    .required(),
});
