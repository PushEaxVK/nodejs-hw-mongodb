import { createTransport } from 'nodemailer';
import { getEnvVar } from './getEnvVar.js';
import { ENV_VARS } from '../constants/envVars.js';
import createHttpError from 'http-errors';

const mailClient = createTransport({
  host: getEnvVar(ENV_VARS.SMTP_HOST),
  port: getEnvVar(ENV_VARS.SMTP_PORT),
  auth: {
    user: getEnvVar(ENV_VARS.SMTP_USER),
    pass: getEnvVar(ENV_VARS.SMTP_PASSWORD),
  },
});

export const sendEmail = async () => {
  try {
    await mailClient.sendMail({
      from: 'no-reply@localhost',
      to: process.env.APP_DOMAIN,
      subject: 'Reset password',
      html: '<h1>Reset password</h1>',
    });
  } catch (error) {
    console.error(error);
    throw createHttpError(
      500,
      'Failed to send the email, please try again later.',
    );
  }
};
