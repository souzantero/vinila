import { Vinyl } from "../models/vinyl";

export interface LoadVinylByIdRepository {
  loadOneById(id: string): Promise<Vinyl | null>;
}
