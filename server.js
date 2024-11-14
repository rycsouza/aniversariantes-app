const express = require("express");
const SheetsController = require("./src/controllers/SheetsController");
const Env = require("dotenv").config().parsed;

const app = express();
app.use(express.json());

app.get("/", (req, res) => SheetsController.notifyBirthday(req, res));

app.listen(Env.PORT, () => {
  console.log(`Servidor rodando na porta ${Env.PORT}`);
});
