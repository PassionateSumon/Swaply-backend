import { signupHandler } from '../controller/auth.controller';
import { signupValidation } from '../validations/auth.validation';

const prefix = '/auth';

export default [
  {
    method: 'POST',
    path: `${prefix}/signup`,
    handler: signupHandler,
    options: {
      auth: false,
      tags: ['api', 'auth'],
      description: 'User signup',
      validate: signupValidation,
      payload: {
        // this is when you accept file uploads
        parse: true,
        output: 'data',
      },
    },
  },
];
