import { PrismaClient } from "@prisma/client";

const Databases = new PrismaClient();

Databases.$connect()
  .then((v) => console.log("DB connection successful"))
  .catch((e) => console.log("DB Error"));

export default Databases;
