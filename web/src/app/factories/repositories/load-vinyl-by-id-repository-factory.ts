import { VinylFetchRepository } from '../../repositories';
import env from '../../config/env';

export const makeLoadVinylByIdRepository = () => {
  return new VinylFetchRepository(env.serverHostAddress);
};
