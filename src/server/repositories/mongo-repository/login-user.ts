import { ILoginUserRepository } from "../../controllers/signIn/protocols";
import { Not_Found } from "../../helpers/api-erros";
import { User } from "../../models/mongo-models/User";
import { IUser } from "../../models/user";

export class MongoLoginUserRepository implements ILoginUserRepository {
  async login(email: string): Promise<IUser> {
    const user = await User.findOne({ email });

    if (!user) throw new Not_Found("Erro no servidor!");

    const { _id, name, password, email: newEmail } = user;

    return { id: _id.toHexString(), name, password, email: newEmail };
  }
}
