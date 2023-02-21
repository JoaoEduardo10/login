import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import { Bad_Request } from "./api-erros";

export interface IJwtParams {
  name: string;
  id: string | number;
}

export const createJwt = (data: IJwtParams) => {
  return jwt.sign(data, "secretaabbcccss", { expiresIn: "24h" });
};

export const varifyJwt = (token: string): IJwtParams => {
  const newToken = jwt.verify(token, "secretaabbcccss");

  return newToken as IJwtParams;
};
