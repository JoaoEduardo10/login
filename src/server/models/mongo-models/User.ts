import { model, Schema } from "mongoose";
import { IUser } from "../user";

const User = model(
  "Users",
  new Schema<Omit<IUser, "id">>({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      min: 3,
    },
    password: {
      type: String,
      required: true,
      select: true,
    },
  })
);

export { User };
