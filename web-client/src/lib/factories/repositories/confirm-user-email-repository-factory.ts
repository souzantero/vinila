import { ConfirmUserEmailRepository } from "../../../core";
import { UserFetchRepository } from "../../repositories";
import { environment } from "../../config/env";

export function makeConfirmUserEmailRepository(): ConfirmUserEmailRepository {
  return new UserFetchRepository(environment.serverHostAddress);
}
