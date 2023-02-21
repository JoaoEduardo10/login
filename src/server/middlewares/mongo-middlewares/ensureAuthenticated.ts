import { RequestHandler } from "express";
import { Anouthorized } from "../../helpers/api-erros";
import jwt from "jsonwebtoken";
import { User } from "../../models/mongo-models/User";
import { varifyJwt } from "../../helpers/jsonWEbToken";

interface Jwt {
  id: string;
}

export const ensureAuthenticated: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Anouthorized("não autenticado");
  }
  const [type] = authorization.split(" ");
  const token = authorization.split(" ")[1];

  if (type !== "Bearer") {
    throw new Anouthorized("não autenticado");
  }

  const newToken = varifyJwt(token);

  req.headers.uuid = newToken.id as string;

  next();
};
