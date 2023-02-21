import { IGetAllUserRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/mongo-models/User";
import { IUser } from "../../models/user";

export class MongoGetAllUserRepository implements IGetAllUserRepository {
  async getAll(): Promise<IUser[]> {
    const user = await User.find();

    return user.map(({ _id, name, password, email }) => ({
      id: _id.toHexString(),
      name,
      password,
      email,
    }));
  }
}
