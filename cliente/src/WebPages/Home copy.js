import pkmMasterApi from "../functions/pkmMasterApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [todosPkm, setTodosPkm] = useState([]);
  const [dataDeUltimaModificacao, setDataDeUltimaModificacao] = useState("");

  useEffect(() => {
    const qualquercoisa = async () => {
      const respostaDaApi = await pkmMasterApi();
      const { dataDeUltimaModificacao } = respostaDaApi[0];
      setDataDeUltimaModificacao(dataDeUltimaModificacao);

      const infoDosPkm = respostaDaApi.slice(1);
      console.log(respostaDaApi);
      setTodosPkm(infoDosPkm);

      console.log(todosPkm);
    };
    qualquercoisa();
  }, []);

  /*   const funcaoAutoInvocada = async () => {
    const respostaDaApi = await pkmMasterApi();
    const { dataDeUltimaModificacao } = respostaDaApi[0];
    setDataDeUltimaModificacao(dataDeUltimaModificacao);

    const infoDosPkm = respostaDaApi.slice(1);
    setTodosPkm(infoDosPkm);

  }; */
  /* 
  const [todosPkm, setTodosPkm] = useState(await qualquerCoisa()); */

  const handleOnClick = async () => {
    console.log(todosPkm);
    /*     const respostaDaApi = await pkmMasterApi();
    const { dataDeUltimaModificacao } = respostaDaApi[0];
    setDataDeUltimaModificacao(dataDeUltimaModificacao);

    const infoDosPkm = respostaDaApi.slice(1);
    setTodosPkm(infoDosPkm); */
  };
  return (
    <section>
      <div onClick={() => handleOnClick()}>Clique aqui</div>
      <div>
        {dataDeUltimaModificacao ? dataDeUltimaModificacao : "Carregando..."}
      </div>

      {todosPkm[0] ? (
        <ul>
          {todosPkm.map((pkm) => {
            return (
              <li>
                {pkm.numPokedex}
                <span>{pkm.nome}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        "Carregando..."
      )}

      {/*       <ul>
        {todosPkm.map((pkm) => {
          <li>
            {pkm.numPokedex} <span>{pkm.nome}</span>
          </li>;
        })}
      </ul> */}
    </section>
  );
};

export default Home;

/*  */
