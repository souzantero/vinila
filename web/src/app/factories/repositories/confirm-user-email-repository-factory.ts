import { ConfirmUserEmailRepository } from '../../../core';
import { UserFetchRepository } from '../../repositories';
import env from '../../config/env';

export function makeConfirmUserEmailRepository(): ConfirmUserEmailRepository {
  return new UserFetchRepository(env.serverHostAddress);
}
