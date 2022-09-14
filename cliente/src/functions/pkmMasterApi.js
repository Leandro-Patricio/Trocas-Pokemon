const axios = require("axios");

const pkmMasterApi = async () => {
  const resposta = await axios
    .get("https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json")
    .then((res) => {
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
            desctructureImgTemporaria[index2].image.includes(
              linkProcuradoDasImg
            )
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
    })
    .catch((error) => {
      console.log(error);
    });

  /*   const respostaFinal = JSON.stringify(resposta.data.id); */
};

export default pkmMasterApi;
