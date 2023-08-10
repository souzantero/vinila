import { SignUp } from '../../../core';
import { AuthenticationFetchRepository } from '../../repositories';
import env from '../../config/env';
import { makeSignedUser } from './signed-user-factory';

export const makeSignUp = () => {
  const authenticationRepository = new AuthenticationFetchRepository(
    env.serverHostAddress,
  );
  return new SignUp(authenticationRepository, makeSignedUser());
};
