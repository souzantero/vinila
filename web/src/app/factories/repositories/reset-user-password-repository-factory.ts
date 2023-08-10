import { ResetUserPasswordRepository } from '../../../core';
import { UserFetchRepository } from '../../repositories';
import env from '../../config/env';

export function makeResetUserPasswordRepository(
  authorizationToken: string,
): ResetUserPasswordRepository {
  return new UserFetchRepository(env.serverHostAddress, authorizationToken);
}
