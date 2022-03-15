"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const Databases = new client_1.PrismaClient();
Databases.$connect()
    .then((v) => console.log("DB connection successful"))
    .catch((e) => console.log("DB Error"));
exports.default = Databases;
//# sourceMappingURL=index.js.map