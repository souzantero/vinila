import { PasswordsDoesNotMatchError } from "../errors/passwords-does-not-match-error";
import { ResetUserPasswordRepository } from "../repositories/reset-user-password-repository";

export type ResetUserPasswordParams = {
  newPassword: string;
  confirmedPassword: string;
};

export class ResetUserPassword {
  constructor(
    private readonly resetUserPasswordRepository: ResetUserPasswordRepository,
  ) {}

  reset({
    newPassword,
    confirmedPassword,
  }: ResetUserPasswordParams): Promise<void> {
    if (newPassword !== confirmedPassword) {
      throw new PasswordsDoesNotMatchError();
    }

    return this.resetUserPasswordRepository.resetUserPassword(newPassword);
  }
}
