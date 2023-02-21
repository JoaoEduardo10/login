import { RequestHandler } from "express";
import { MongoGetAllUserRepository } from "../../repositories/mongo-repository/get-user";
import { GetAllUserController } from "../../controllers/get-users/get-user";

export const GetRouter: RequestHandler = async (req, res) => {
  const mongoGetAllRepository = await new MongoGetAllUserRepository();

  const getAllController = await new GetAllUserController(
    mongoGetAllRepository
  );

  const { body, statusCode } = await getAllController.handle(req);

  res.status(statusCode).json(body);
};
