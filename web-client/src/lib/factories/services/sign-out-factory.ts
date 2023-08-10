import { User, SignOut } from "../../../core";
import { AuthenticationFetchRepository } from "../../repositories";
import { environment } from "../../config";
import { makeSignedUser } from "./signed-user-factory";

export const makeSignOut = (signedUser: User) => {
  const authenticationRepository = new AuthenticationFetchRepository(
    environment.serverHostAddress,
    signedUser.authorizationToken,
  );

  return new SignOut(authenticationRepository, makeSignedUser());
};
