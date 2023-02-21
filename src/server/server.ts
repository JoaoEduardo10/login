import "express-async-errors";
import express from "express";
import { globalsErros } from "./middlewares/globals-error";
import { router } from "./router";
import "dotenv/config";

const server = express();
server.use(express.json());

server.use(router);

server.use(globalsErros);

export { server };
