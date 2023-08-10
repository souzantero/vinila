import { Vinyl } from "../models/vinyl";

export type AddVinylRepositoryParams = {
  name: string;
};

export interface AddVinylRepository {
  add(params: AddVinylRepositoryParams): Promise<Vinyl>;
}
