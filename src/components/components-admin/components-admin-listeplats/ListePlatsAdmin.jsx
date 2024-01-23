import "./ListePlatsAdmin.scss";
import { PlatContext } from "../../../utils/context/PlatContext";
import Plat from "./subcomponents/Plat";
import { useContext } from "react";

function ListePlatsAdmin() {
  const { listOfPlats } = useContext(PlatContext);
  return (
    <div className="listeplats-content">
      <h1>Liste actuelle des plats</h1>
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

export default ListePlatsAdmin;
