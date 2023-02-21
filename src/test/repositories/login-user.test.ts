import { describe, expect, it } from "vitest";
import { MongoLoginUserRepository } from "../../server/repositories/mongo-repository/login-user";
import { stub } from "sinon";
import { mockUser } from "./mocks";

const mockEmail = {
  email: mockUser.email,
};

describe("login-user mongoRepository", () => {
  it("should receive an email and return a user", async () => {
    const mongoLoginRepository = await new MongoLoginUserRepository();

    stub(mongoLoginRepository, "login").returns(Promise.resolve(mockUser));

    const user = await mongoLoginRepository.login(mockEmail.email);

    expect(user.email).toBe(mockUser.email);
  });
});
