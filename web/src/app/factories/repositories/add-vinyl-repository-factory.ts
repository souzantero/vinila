import { VinylFetchRepository } from '../../repositories';
import env from '../../config/env';

export const makeAddVinylRepository = (authorizationToken: string) => {
  return new VinylFetchRepository(env.serverHostAddress, authorizationToken);
};
