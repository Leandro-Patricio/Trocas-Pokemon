import pkmMasterApi from "../functions/pkmMasterApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [dataDeUltimaModificacao, setDataDeUltimaModificacao] = useState("");

  useEffect(() => {
    const qualquercoisa = async () => {
      const respostaDaApi = await pkmMasterApi();
      const { dataDeUltimaModificacao } = respostaDaApi[0];
      setDataDeUltimaModificacao(dataDeUltimaModificacao);
    };
    qualquercoisa();
  }, []);

  const handleOnClick = async () => {
    console.log("nada aqui");
  };
  return (
    <>
      {!dataDeUltimaModificacao ? (
        "Carregando..."
      ) : (
        <section>
          <h1>Seja bem vindo à Poke-Trocas</h1>

          <div onClick={() => handleOnClick()}>Clique aqui</div>
          <div></div>
        </section>
      )}
    </>
  );
};

export default Home;

/*  */
