const getInfoPkm = async () => {
  const reposta = await fetch(
    "https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json"
  );
  return await reposta;
};

const pkmMasterApi = async () => {
  const infoBrutaApi = await getInfoPkm();
  const dataUltimaModificacao = infoBrutaApi.headers.get("Last-Modified");

  const todosPkm = await infoBrutaApi.json();

  let respostaFinal = [{ dataDeUltimaModificacao: dataUltimaModificacao }];
  let pkmTemporario = [];
  let imgPkmTemporaria = [];
  let infoTempImg = [];
  const linkProcuradoDasImg = "Addressable%20Assets";

  /* formando o bando de dados */
  for (let index = 0; index < todosPkm.length; index++) {
    infoTempImg = todosPkm[index].assetForms;

    /* pegando as imagens na pasta correta */
    for (let index2 = 0; index2 < infoTempImg.length; index2++) {
      if (infoTempImg[index2].image.includes(linkProcuradoDasImg)) {
        imgPkmTemporaria.push({
          imagem: infoTempImg[index2].image,
          imagemShinny: infoTempImg[index2].shinyImage,
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
    infoTempImg = [];
  }
  return respostaFinal;
};

export default pkmMasterApi;
