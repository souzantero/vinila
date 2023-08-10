import { Vinyl } from "../models/vinyl";

export type UpdateVinylByIdRepositoryData = {
  name: string;
};

export interface UpdateVinylByIdRepository {
  updateById(id: string, data: UpdateVinylByIdRepositoryData): Promise<Vinyl>;
}
