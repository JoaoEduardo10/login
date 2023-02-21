import { NextFunction, Request, Response } from "express";
import { ApiErros } from "../helpers/api-erros";

export const globalsErros = async (
  error: Error & Partial<ApiErros>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "internal server error";

  return res.status(statusCode).json({ message });
};
