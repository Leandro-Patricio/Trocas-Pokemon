import Arrow from "../../images/arrow-right.png";
import "./Loading.css";
import Pokebola from "../../images/pokeball.png";

export const Loading = () => {
  return (
    <div className="Container">
      <div className="Loading">
        <img alt="flecha" src={Arrow} className="seta cima" />
        <img alt="pokebola " src={Pokebola} className="pokebola invisivel" />

        <img alt="flecha" src={Arrow} className="seta baixo" />
      </div>
      <img alt="pokebola" src={Pokebola} className="pokebola" />
    </div>
  );
};
