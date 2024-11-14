const express = require("express");
const SheetsController = require("./src/controllers/SheetsController");
const Env = require("dotenv").config().parsed;

const app = express();
app.use(express.json());

app.get("/:groupName", (request, response) =>
  SheetsController.notifyBirthday({ request, response })
);

app.listen(Env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${Env.PORT}`);
});
