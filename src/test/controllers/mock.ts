import { IHttpRequest } from "../../server/controllers/protocols";
import { IUser } from "../../server/models/user";
import { mockUser } from "../repositories/mocks";

export const mockRequest: IHttpRequest<IUser> = {
  headers: {},
  params: {},
  body: {
    ...mockUser,
  },
};
