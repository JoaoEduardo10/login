import { createJwt } from "../../helpers/jsonWEbToken";
import { IUser } from "../../models/user";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { ILoginUserRepository } from "./protocols";

export class LoginUserController implements IControllers {
  constructor(private readonly loginUserRepository: ILoginUserRepository) {}

  async handle(req: IHttpRequest<IUser>): Promise<IHttpResponse> {
    const { id, name } = await this.loginUserRepository.login(req.body?.email!);

    const token = createJwt({ id, name });

    return {
      body: token,
      statusCode: 200,
    };
  }
}
