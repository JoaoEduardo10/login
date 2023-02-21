import { RequestHandler } from "express";
import { Bad_Request, Not_Found } from "../../helpers/api-erros";
import { validatePasswordHash } from "../../helpers/bcryptPassword";
import { User } from "../../models/mongo-models/User";
import { IUser } from "../../models/user";
import { ObjectId } from "mongoose";

export const loginMiddleware: RequestHandler<{}, {}, IUser> = async (
  req,
  _res,
  next
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Bad_Request("É nessesario enviar o email e o password!");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Not_Found("Email invalido!");
  }

  const validatePassword = await validatePasswordHash(password, user.password);

  if (!validatePassword) {
    throw new Bad_Request("Password invalido!");
  }

  next();
};
