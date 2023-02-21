import { describe, expect, it } from "vitest";
import { IUser } from "../../server/models/user";
import { serverTest } from "./mock";

const mockFilds: Omit<IUser, "id"> = {
  email: "joao@gmail.com",
  password: "123",
  name: "joao",
};

describe("create-middleware", () => {
  it("shuold validate if you sent the filds", async () => {
    const response = await serverTest.post("/users").send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      message: "Os campos de email, name e password são obrigatorios",
    });
  });

  it("shuold validate if you sent more than the required filds", async () => {
    const response = await serverTest
      .post("/users")
      .send({ ...mockFilds, edu: "wdedw" });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      message:
        "Somente os campos de email, name e password pode ser adicionado.",
    });
  });

  it("shuold validate if the name is more than 2 characrers", async () => {
    const response = await serverTest
      .post("/users")
      .send({ ...mockFilds, name: "12" });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      message: "O nome deve conter no minimo 3 caracteres",
    });
  });

  it("shuold validate the email", async () => {
    await serverTest.post("/users").send({ ...mockFilds });

    expect(mockFilds.email).not.toBe("eduardo@gmail.com");
  }, 40000);
});
