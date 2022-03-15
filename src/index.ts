import cors from 'cors';
import express from "express";
import routerUser from './routes/user';

const app = express();

app.use(cors());
app.use("/user", routerUser);

app.get("/", (_, res) => {
  res.send("express prisma mysql demo");
});

app.listen(3001, () => console.log(`Running on port ${3001}`));
