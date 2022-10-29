import express from "express";
import { conn } from "./db.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to root server");
});

app.get("/ping", async (req, res) => {
  const resp = await conn.query('SELECT "hello word" as RESULT');
  console.log(resp);
  res.send(resp);
});
app.listen(8080, console.log(`listening on port 8080`));
