import { NextFunction, Request, Response } from "express";
import { ApiErros } from "../helpers/api-erros";

export const globalsErros = async (
  error: Error & Partial<ApiErros>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;

  return res.status(statusCode).json({ message: error.message });
};
