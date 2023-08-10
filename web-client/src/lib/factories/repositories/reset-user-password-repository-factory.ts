import { ResetUserPasswordRepository } from "../../../core";
import { UserFetchRepository } from "../../repositories";
import { environment } from "../../config";

export function makeResetUserPasswordRepository(
  authorizationToken: string,
): ResetUserPasswordRepository {
  return new UserFetchRepository(
    environment.serverHostAddress,
    authorizationToken,
  );
}
