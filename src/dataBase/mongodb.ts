import mongoose from "mongoose";

const MongoDb = {
  async Connect(): Promise<void> {
    const url = process.env.MONGODB_URL as string;
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    mongoose.set("strictQuery", true);

    await mongoose.connect(url, { auth: { password, username } }, (error) => {
      if (error) return console.log(`Error: ${error.message}`);

      console.log("Connectado ao banco de dados");
    });
  },
};

export { MongoDb };
