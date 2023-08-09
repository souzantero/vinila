import { User } from '../models';
import { SignMeRepository } from '../repositories/sign-me-repository';
import { SignedUser } from './signed-user';

export class SignMe {
  constructor(
    private readonly signMeRepository: SignMeRepository,
    private readonly signedUser: SignedUser,
  ) {}

  async signMe(): Promise<User> {
    const signedUser = await this.signMeRepository.signMe();
    await this.signedUser.set(signedUser);
    return signedUser;
  }
}
