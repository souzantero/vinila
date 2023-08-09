export interface RemoveVinylByIdRepository {
  removeById(id: string): Promise<void>;
}
