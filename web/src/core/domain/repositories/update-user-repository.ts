import { User } from '../models/user';
export type UpdateUserRepositoryData = Omit<User, 'id'>;
export interface UpdateUserRepository {
  updateById(id: string, data: UpdateUserRepositoryData): Promise<User>;
}
