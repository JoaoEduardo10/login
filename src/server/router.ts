import { Router } from "express";
import { createMiddleware } from "./middlewares/mongo-middlewares/create-user";
import { ensureAuthenticated } from "./middlewares/mongo-middlewares/ensureAuthenticated";
import { loginMiddleware } from "./middlewares/mongo-middlewares/login-user";
import { GetRouter } from "./useCases/getAll/get-user";
import { LoginRouter } from "./useCases/signIn/login-user";
import { createRouter } from "./useCases/signUp/create-user";

const router = Router();

router.get("/users", ensureAuthenticated, GetRouter);
router.post("/users", createMiddleware, createRouter);
router.post("/login", loginMiddleware, LoginRouter);

export { router };
