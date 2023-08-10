import { User } from "../models/user";

export type SignInRepositoryParams = {
  email: string;
  password: string;
};

export interface SignInRepository {
  signIn(params: SignInRepositoryParams): Promise<User>;
}
