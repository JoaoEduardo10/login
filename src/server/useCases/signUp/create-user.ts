import { RequestHandler } from "express";
import { CreateUserController } from "../../controllers/signUp/create-user";
import { ICreateUserParams } from "../../controllers/signUp/protocols";
import { MongoCreateUserRepository } from "../../repositories/mongo-repository/create-user";

export const createRouter: RequestHandler<{}, {}, ICreateUserParams> = async (
  req,
  res
) => {
  const mongoCeateUserRepository = await new MongoCreateUserRepository();

  const createUserController = await new CreateUserController(
    mongoCeateUserRepository
  );

  const { body, statusCode } = await createUserController.handle(req);

  res.status(statusCode).json(body);
};
