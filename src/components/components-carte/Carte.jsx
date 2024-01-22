import "./Carte.scss";
import { useContext } from "react";
import { PlatContext } from "../../utils/context/PlatContext";

import Plat from "./subcomponents/Plat";

function Carte() {
  const { listOfPlats } = useContext(PlatContext);

  return (
    <div className="carte-content">
      <h1>Ce que nous proposons...</h1>
      <span className="carte-content-livraison">
        <p>
          Profitez de notre service de livraison à dos de chocobo sur la commune
          de Montpellier et aux alentours !
        </p>
      </span>
      <table>
        <tbody>
          {listOfPlats.map((plat) => (
            <Plat key={plat.id} plat={plat} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Carte;
