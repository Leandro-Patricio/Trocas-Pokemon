const express = require("express");
const router = express.Router();

const veiculos = ["uno", "dos", "tres"];

router.get("/", (req, res) => {
  res.send(veiculos);
});

router.get("/:veiculoID", (req, res) => {
  const { veiculoID } = req.params;
  const veiculoIDNumber = Number(veiculoID);

  if (veiculoIDNumber < 0 || veiculoIDNumber >= veiculos.length) {
    res.status(404).send("veículo não encontrado");
  } else if (Number.isNaN(veiculoIDNumber)) {
    res.status(400).send("id inválido");
  } else {
    const veiculo = veiculos[veiculoIDNumber];
    res.send(veiculo);
  }
});

router.post("/", (req, res) => {
  const { veiculoName } = req.body;
  res.send(`O nome do veículo é ${veiculoName}`);
  veiculos.push(veiculoName);
  res.status(201).send(veiculoName);
});

router.put("/:veiculosID", (req, res) => {
  const { novoNomeDoVeiculo } = req.body;
  const { veiculoID } = req.params;
  const veiculoIDNumber = Number(veiculoID);
  console.log(novoNomeDoVeiculo);
  veiculos[veiculoIDNumber] = novoNomeDoVeiculo;
  console.log(veiculos[veiculoIDNumber]);
  res.send(`O nome do veículo foi alterado para ${novoNomeDoVeiculo}`);
});

/* router.delete("/:veiculosID", (req, res) => {
  const { veiculoID } = req.params;
  const veiculoIDNumber = Number(veiculoID);
  veiculos[veiculoIDNumber] = novoNomeDoVeiculo;
}); */

module.exports = router;
