import { User, SignMe } from "../../../core";
import { AuthenticationFetchRepository } from "../../repositories";
import { environment } from "../../config";
import { makeSignedUser } from "./signed-user-factory";

export const makeSignMe = (signedUser: User, remind: boolean) => {
  const authenticationRepository = new AuthenticationFetchRepository(
    environment.serverHostAddress,
    signedUser.authorizationToken,
  );

  return new SignMe(authenticationRepository, makeSignedUser(remind));
};
