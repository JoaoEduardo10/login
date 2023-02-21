import supertest from "supertest";
import { server } from "../../server/server";

export const serverTest = supertest(server);
