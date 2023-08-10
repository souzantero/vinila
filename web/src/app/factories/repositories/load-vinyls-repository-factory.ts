import { VinylFetchRepository } from '../../repositories';
import env from '../../config/env';

export const makeLoadVinylsRepository = () => {
  return new VinylFetchRepository(env.serverHostAddress);
};
