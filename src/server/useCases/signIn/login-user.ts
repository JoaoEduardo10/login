import { RequestHandler } from "express";
import { LoginUserController } from "../../controllers/signIn/login";
import { IJwtParams } from "../../helpers/jsonWEbToken";
import { MongoLoginUserRepository } from "../../repositories/mongo-repository/login-user";

export const LoginRouter: RequestHandler = async (req, res) => {
  const mongoLoginUserRepository = await new MongoLoginUserRepository();

  const loginUserController = await new LoginUserController(
    mongoLoginUserRepository
  );

  const { body, statusCode } = await loginUserController.handle(req);

  res.status(statusCode).json(body);
};
