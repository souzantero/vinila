import { VinylFetchRepository } from "../../repositories";
import { environment } from "../../config";

export const makeLoadVinylsRepository = () => {
  return new VinylFetchRepository(environment.serverHostAddress);
};
