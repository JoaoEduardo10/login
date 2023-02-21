import { describe, expect, it } from "vitest";
import { CreateUserController } from "../../../server/controllers/signUp/create-user";
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../../server/controllers/signUp/protocols";
import { IUser } from "../../../server/models/user";
import { mockUser } from "../../repositories/mocks";
import { mockRequest } from "../mock";

class MockCreateUserRepository implements ICreateUserRepository {
  async create(params: ICreateUserParams): Promise<IUser> {
    const { email, name, password } = params;

    return { email, name, password, id: "123" };
  }
}

describe("create-user controllers", () => {
  it("should get the user that was created in the repository", async () => {
    const controllers = await new CreateUserController(
      new MockCreateUserRepository()
    );

    const { body, statusCode } = await controllers.handle(mockRequest);

    expect(statusCode).toBe(201);
    expect(body).toEqual(mockUser);
  });
});
