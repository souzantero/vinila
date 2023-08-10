import { VinylFetchRepository } from "../../repositories";
import { environment } from "../../config";

export const makeLoadVinylByIdRepository = () => {
  return new VinylFetchRepository(environment.serverHostAddress);
};
