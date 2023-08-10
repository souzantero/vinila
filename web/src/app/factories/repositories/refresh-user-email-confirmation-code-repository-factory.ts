import { RefreshUserEmailConfirmationCodeRepository } from '../../../core';
import { UserFetchRepository } from '../../repositories';
import env from '../../config/env';

export function makeRefreshUserEmailConfirmationCodeRepository(): RefreshUserEmailConfirmationCodeRepository {
  return new UserFetchRepository(env.serverHostAddress);
}
