import { ResetUserPassword } from "../../../core";
import { makeResetUserPasswordRepository } from "../repositories";

export function makeResetUserPassword(
  authorizationToken: string,
): ResetUserPassword {
  return new ResetUserPassword(
    makeResetUserPasswordRepository(authorizationToken),
  );
}
