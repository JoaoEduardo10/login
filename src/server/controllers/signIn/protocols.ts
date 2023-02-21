import { IUser } from "../../models/user";

export interface ILoginUserRepository {
  login(email: string): Promise<IUser>;
}
