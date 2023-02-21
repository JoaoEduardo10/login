import { IUser } from "../../models/user";

export interface IGetAllUserRepository {
  getAll(): Promise<IUser[]>;
}
