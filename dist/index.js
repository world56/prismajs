"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/user", user_1.default);
app.get("/", (_, res) => {
    res.send("express prisma mysql demo");
});
app.listen(3001, () => console.log(`Running on port ${3001}`));
//# sourceMappingURL=index.js.map