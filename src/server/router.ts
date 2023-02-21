import { Router } from "express";
import { ApiErros, Bad_Request } from "./helpers/api-erros";
import { createMiddleware } from "./middlewares/mongo-middlewares/create-user";
import { loginMiddleware } from "./middlewares/mongo-middlewares/login-user";
import { LoginRouter } from "./useCases/signIn/login-user";
import { createRouter } from "./useCases/signUp/create-user";

const router = Router();

router.post("/users", createMiddleware, createRouter);
router.post("/login", loginMiddleware, LoginRouter);

export { router };
