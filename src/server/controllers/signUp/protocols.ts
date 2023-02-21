import { IUser } from "../../models/user";

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  create(params: ICreateUserParams): Promise<IUser>;
}
