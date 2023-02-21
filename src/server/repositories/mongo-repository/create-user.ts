import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../controllers/signUp/protocols";
import { Internal_Server_Error } from "../../helpers/api-erros";
import { User } from "../../models/mongo-models/User";
import { IUser } from "../../models/user";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async create(params: ICreateUserParams): Promise<IUser> {
    const user = await User.create(params);

    if (!user) throw new Internal_Server_Error("Usuario não criado!");

    const { _id, name, email, password } = user;

    return { id: _id.toHexString(), name, email, password };
  }
}
