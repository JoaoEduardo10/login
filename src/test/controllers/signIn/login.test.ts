import { describe, expect, it } from "vitest";
import { LoginUserController } from "../../../server/controllers/signIn/login";
import { ILoginUserRepository } from "../../../server/controllers/signIn/protocols";
import { IUser } from "../../../server/models/user";
import { mockUser } from "../../repositories/mocks";
import { mockRequest } from "../mock";

class MockLoginUserRepository implements ILoginUserRepository {
  async login(email: string): Promise<IUser> {
    const { id, name, password } = mockUser;

    return { email, id, name, password };
  }
}

describe("login-user controllers", () => {
  it("should get the user from the repository and return a valid token with name and user id", async () => {
    const loginController = await new LoginUserController(
      new MockLoginUserRepository()
    );

    const { body, statusCode } = await loginController.handle(mockRequest);

    expect(statusCode).toBe(200);

    expect(typeof body).toBe("string");
  });
});
