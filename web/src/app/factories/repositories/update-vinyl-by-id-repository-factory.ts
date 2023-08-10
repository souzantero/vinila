import { VinylFetchRepository } from '../../repositories';
import env from '../../config/env';

export const makeUpdateVinylByIdRepository = (authorizationToken: string) => {
  return new VinylFetchRepository(env.serverHostAddress, authorizationToken);
};
