import { RequestHandler } from "express";
import { ICreateUserParams } from "../../controllers/signUp/protocols";
import { Bad_Request } from "../../helpers/api-erros";
import validator from "validator";
import { User } from "../../models/mongo-models/User";
import { cryptPassword } from "../../helpers/bcryptPassword";

export const createMiddleware: RequestHandler<
  {},
  {},
  ICreateUserParams
> = async (req, _res, next) => {
  const allFildsOfCreate: (keyof ICreateUserParams)[] = [
    "email",
    "name",
    "password",
  ];

  for (const filds of allFildsOfCreate) {
    if (!req?.body?.[filds]?.length) {
      throw new Bad_Request(
        `Os campos de email, name e password são obrigatorios`
      );
    }
  }

  const allvalidateFilds = Object.keys(req.body).some(
    (key) => !allFildsOfCreate.includes(key as keyof ICreateUserParams)
  );

  if (allvalidateFilds) {
    throw new Bad_Request(
      `Somente os campos de email, name e password pode ser adicionado.`
    );
  }

  if (req.body.name.length < 3) {
    throw new Bad_Request("O nome deve conter no minimo 3 caracteres");
  }

  const validateEmail = validator.isEmail(req.body.email);

  if (!validateEmail) {
    throw new Bad_Request("email invalido. Adicione um @gmail.com");
  }

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    throw new Bad_Request("Email, já existe!");
  }

  const newPassword = await cryptPassword(req.body.password);

  req.body.password = newPassword;

  next();
};
