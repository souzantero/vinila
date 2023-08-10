import { User } from "../models/user";

export type SignUpRepositoryParams = {
  name: string;
  email: string;
  password: string;
};

export interface SignUpRepository {
  signUp(params: SignUpRepositoryParams): Promise<User>;
}
