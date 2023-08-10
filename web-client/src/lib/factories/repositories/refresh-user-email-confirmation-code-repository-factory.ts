import { RefreshUserEmailConfirmationCodeRepository } from "../../../core";
import { UserFetchRepository } from "../../repositories";
import { environment } from "../../config";

export function makeRefreshUserEmailConfirmationCodeRepository(): RefreshUserEmailConfirmationCodeRepository {
  return new UserFetchRepository(environment.serverHostAddress);
}
