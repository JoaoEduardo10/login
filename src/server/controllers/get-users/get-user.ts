import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { IGetAllUserRepository } from "./protocols";

export class GetAllUserController implements IControllers {
  constructor(private readonly getAllUserRepisitory: IGetAllUserRepository) {}

  async handle(_req: IHttpRequest<any>): Promise<IHttpResponse> {
    const user = await this.getAllUserRepisitory.getAll();

    return {
      body: user,
      statusCode: 200,
    };
  }
}
