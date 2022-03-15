import DB from "../orm";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user index");
});

router.get("/list", async (req, res) => {
  const list = await DB.teacher.findMany({
    where: {},
  });
  res.send(list);
});

export default router;
