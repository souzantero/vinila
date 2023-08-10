import { VinylFetchRepository } from "../../repositories";
import { environment } from "../../config";

export const makeUpdateVinylByIdRepository = (authorizationToken: string) => {
  return new VinylFetchRepository(
    environment.serverHostAddress,
    authorizationToken,
  );
};
