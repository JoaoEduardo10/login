import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { ICreateUserParams, ICreateUserRepository } from "./protocols";

export class CreateUserController implements IControllers {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}
  async handle(req: IHttpRequest<ICreateUserParams>): Promise<IHttpResponse> {
    const { email, name, password } = req.body!;

    const user = await this.createUserRepository.create({
      email,
      name,
      password,
    });

    return {
      body: user,
      statusCode: 201,
    };
  }
}
