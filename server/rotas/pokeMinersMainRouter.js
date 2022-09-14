const express = require("express");
const router = express.Router();
const axios = require("axios");
/* const fetch = require("node-fetch"); */

/* import fetch from "node-fetch"; */

router.get("/", (req, res) => {
  res.send("oook");
});

const pokeNomesUnitarios = async () => {
  try {
    const resposta = await axios.get(
      "https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/id/1.json"
    );
    /*   const respostaFinal = JSON.stringify(resposta.data.id); */
    const respostaFinal = resposta.data.id;
    /*     console.log(respostaFinal);*/
    console.log(typeof respostaFinal);
    return respostaFinal;
  } catch (erro) {
    console.log(erro);
  }
};

const pokeNomesTodos = async () => {
  try {
    const resposta = await axios.get(
      "https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json"
    );
    /*   const respostaFinal = JSON.stringify(resposta.data.id); */
    const dataUltimaModificacao = resposta.headers["last-modified"];
    const todosPkm = resposta.data;
    let respostaFinal = [dataUltimaModificacao];
    let pkmTemporario = [];
    let imgPkmTemporaria = [];
    let desctructureImgTemporaria = [];
    const linkProcuradoDasImg = "Addressable%20Assets";

    /* formando o bando de dados */
    for (let index = 0; index < todosPkm.length; index++) {
      desctructureImgTemporaria = todosPkm[index].assetForms;

      /* pegando as imagens na pasta correta */
      for (
        let index2 = 0;
        index2 < desctructureImgTemporaria.length;
        index2++
      ) {
        if (
          desctructureImgTemporaria[index2].image.includes(linkProcuradoDasImg)
        ) {
          imgPkmTemporaria.push({
            imagem: desctructureImgTemporaria[index2].image,
            imagemShinny: desctructureImgTemporaria[index2].shinyImage,
          });
        }
      }

      pkmTemporario = {
        id: index,
        numPokedex: todosPkm[index].dexNr,
        nome: todosPkm[index].names.English,
        imagens: imgPkmTemporaria,
      };
      respostaFinal.push(pkmTemporario);

      pkmTemporario = [];
      imgPkmTemporaria = [];
      desctructureImgTemporaria = [];
    }

    /*  console.log(respostaFinal); */
    return respostaFinal;
  } catch (erro) {
    console.log(erro);
  }
};

/* const checkHearder = async () => {
  try {
    const resposta = await axios.get(
      "https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json"
    );
    const respostaFinal = resposta.headers["last-modified"];
    console.log(respostaFinal);
    return respostaFinal;
  } catch (erro) {
    console.log(erro);
  }
}; */
router.get("/names", (req, res) => {
  pokeNomesTodos().then((nome) => {
    console.log(nome);
    res.send(nome);
  });
});

module.exports = router;
