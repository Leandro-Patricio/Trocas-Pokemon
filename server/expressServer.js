const express = require("express");
const app = express();

app.use(express.json());

const veiculosRouter = require("./veiculosRouter.js");
const pokeMinersMain = require("../server/rotas/pokeMinersMainRouter.js");

app.get("/hello", (req, res) => {
  res.send("ola");
});

app.get("/teste", (req, res) => {
  res.send("Teste ok");
});

app.use("/veiculos", veiculosRouter);

app.use("/pokeMinerMain", pokeMinersMain);

app.use("*", (req, res) => {
  res.send("Não há mapeamento para esta rota");
});

app.listen(8080);
