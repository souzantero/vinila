import { SignUp } from "../../../core";
import { AuthenticationFetchRepository } from "../../repositories";
import { environment } from "../../config";
import { makeSignedUser } from "./signed-user-factory";

export const makeSignUp = () => {
  const authenticationRepository = new AuthenticationFetchRepository(
    environment.serverHostAddress,
  );
  return new SignUp(authenticationRepository, makeSignedUser());
};
