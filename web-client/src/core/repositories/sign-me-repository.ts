import { User } from "../models/user";

export interface SignMeRepository {
  signMe(): Promise<User>;
}
