import env from '../../config/env';
import { SignIn } from '../../../core';
import { AuthenticationFetchRepository } from '../../repositories';
import { makeSignedUser } from './signed-user-factory';

export const makeSignIn = (remind: boolean) => {
  const authenticationRepository = new AuthenticationFetchRepository(
    env.serverHostAddress,
  );
  const signedUser = makeSignedUser(remind);
  return new SignIn(authenticationRepository, signedUser);
};
