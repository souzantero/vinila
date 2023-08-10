import { ForgetUserPasswordRepository } from '../../../core';
import { UserFetchRepository } from '../../repositories';
import env from '../../config/env';

export function makeForgetUserPasswordRepository(): ForgetUserPasswordRepository {
  return new UserFetchRepository(env.serverHostAddress);
}
