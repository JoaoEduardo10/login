import jwt, { JwtPayload } from "jsonwebtoken";

export interface IJwtParams {
  name: string;
  id: string | number;
}

export const createJwt = (data: IJwtParams) => {
  return jwt.sign(data, "secretaabbcccss", { expiresIn: "24h" });
};

export const varifyJwt = (token: string) => {
  return jwt.verify(token, "secretaabbcccss");
};
