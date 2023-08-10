import { ForgetUserPasswordRepository } from "../../../core";
import { UserFetchRepository } from "../../repositories";
import { environment } from "../../config";

export function makeForgetUserPasswordRepository(): ForgetUserPasswordRepository {
  return new UserFetchRepository(environment.serverHostAddress);
}
