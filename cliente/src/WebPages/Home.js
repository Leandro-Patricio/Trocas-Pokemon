import pkmMasterApi from "../functions/pkmMasterApi";

const Home = () => {
  const infoApi = pkmMasterApi().then((nome) => {
    console.log(nome);
    res.send(nome);
  });
  return (
    <section>
      <div>eweqwewqe</div>
      <div>dsdas</div>
    </section>
  );
};

export default Home;

/*  */
