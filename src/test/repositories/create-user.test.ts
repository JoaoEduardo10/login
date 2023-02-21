import { describe, expect, it } from "vitest";
import { stub } from "sinon";
import { MongoCreateUserRepository } from "../../server/repositories/mongo-repository/create-user";
import { mockUser } from "./mocks";

const mockCreateParams = {
  name: "joão",
  email: "joao@gmail.com",
  password: "1234",
};

describe("create-user mongoRepository", () => {
  it("should create a user end return the data", async () => {
    const mongoRepository = await new MongoCreateUserRepository();

    stub(mongoRepository, "create").returns(Promise.resolve(mockUser));

    expect((await mongoRepository.create(mockCreateParams)).email).toBe(
      mockUser.email
    );

    expect((await mongoRepository.create(mockCreateParams)).name).toBe(
      mockUser.name
    );

    expect((await mongoRepository.create(mockCreateParams)).password).toBe(
      mockUser.password
    );
  });
});
