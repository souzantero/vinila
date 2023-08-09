import { User } from '../models';
import {
  SignInRepository,
  SignInRepositoryParams,
} from '../repositories/sign-in-repository';
import { SignedUser } from './signed-user';

export class SignIn {
  constructor(
    private readonly signInRepository: SignInRepository,
    private readonly signedUser: SignedUser,
  ) {}

  async signIn(params: SignInRepositoryParams): Promise<User> {
    const signedUser = await this.signInRepository.signIn(params);
    await this.signedUser.set(signedUser);
    return signedUser;
  }
}
