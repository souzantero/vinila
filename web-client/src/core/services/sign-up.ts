import { PasswordsDoesNotMatchError } from "../errors/passwords-does-not-match-error";
import { User } from "../models";
import { SignUpRepository } from "../repositories/sign-up-repository";
import { SignedUser } from "./signed-user";

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

export class SignUp {
  constructor(
    private readonly signUpRepository: SignUpRepository,
    private readonly signedUser: SignedUser,
  ) {}

  async signUp({
    name,
    email,
    password,
    confirmedPassword,
  }: SignUpParams): Promise<User> {
    if (password !== confirmedPassword) {
      throw new PasswordsDoesNotMatchError();
    }

    const signedUser = await this.signUpRepository.signUp({
      name,
      email,
      password,
    });
    await this.signedUser.set(signedUser);
    return signedUser;
  }
}
