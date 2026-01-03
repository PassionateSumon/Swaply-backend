import { Request, ResponseToolkit } from '@hapi/hapi';
import { signupService } from '../service/auth.service.js';
import { error, success } from '../../../common/utils/returnFunctions.js';

export const signupHandler = async (req: Request, h: ResponseToolkit) => {
  try {
    const result = (await signupService()) as any;
    if (result.statusCode !== 200 && result.statusCode !== 201)
      return error(null, result.message, result.statusCode)(h);

    return success(result.user, 'User registered successfully with invitation mail', 201)(h);
  } catch (err: any) {
    return error(null, err.message || 'Internal server error', 500)(h);
  }
};
