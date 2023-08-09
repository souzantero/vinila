import { Vinyl } from '../models/vinyl';

export interface LoadVinylsRepository {
  loadAll(): Promise<Vinyl[]>;
}
