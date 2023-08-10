import { VinylFetchRepository } from '../../repositories';
import env from '../../config/env';

export const makeRemoveVinylByIdRepository = (authorizationToken: string) => {
  return new VinylFetchRepository(env.serverHostAddress, authorizationToken);
};
