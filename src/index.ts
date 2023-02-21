import { MongoDb } from "./dataBase/mongodb";
import { server } from "./server/server";

MongoDb.Connect().then(() => {
  const PORT = process.env.PORT;

  server.listen(PORT, () =>
    console.log(`Servidor connectado na porta ${PORT}`)
  );
});
