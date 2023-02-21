import { describe, expect, it } from "vitest";
import { validatePasswordHash } from "../../server/helpers/bcryptPassword";
import { serverTest } from "./mock";

describe("login-user-middleware loginMiddleware", () => {
  it("should validadte if you sent the amils or password", async () => {
    const response = await serverTest.post("/login").send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      message: "É nessesario enviar o email e o password!",
    });
  });

  it("should validate passowd ", async () => {
    const password = "123";

    const validatePassword = await validatePasswordHash(password, "123");

    expect(false).toBe(validatePassword);
  }, 30000);
});
