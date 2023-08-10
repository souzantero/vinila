import { User } from "../models/user";

export type ConfirmUserEmailRepositoryParams = {
  email: string;
  confirmationCode: string;
};

export interface ConfirmUserEmailRepository {
  confirmUserEmail(params: ConfirmUserEmailRepositoryParams): Promise<User>;
}
