import { VinylFetchRepository } from "../../repositories";
import { environment } from "../../config/env";

export const makeAddVinylRepository = (authorizationToken: string) => {
  return new VinylFetchRepository(
    environment.serverHostAddress,
    authorizationToken,
  );
};
