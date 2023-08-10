import { VinylFetchRepository } from "../../repositories";
import { environment } from "../../config";

export const makeRemoveVinylByIdRepository = (authorizationToken: string) => {
  return new VinylFetchRepository(
    environment.serverHostAddress,
    authorizationToken,
  );
};
