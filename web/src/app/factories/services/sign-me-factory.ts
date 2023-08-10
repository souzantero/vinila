import { User, SignMe } from '../../../core';
import { AuthenticationFetchRepository } from '../../repositories';
import env from '../../config/env';
import { makeSignedUser } from './signed-user-factory';

export const makeSignMe = (signedUser: User, remind: boolean) => {
  const authenticationRepository = new AuthenticationFetchRepository(
    env.serverHostAddress,
    signedUser.authorizationToken,
  );

  return new SignMe(authenticationRepository, makeSignedUser(remind));
};
