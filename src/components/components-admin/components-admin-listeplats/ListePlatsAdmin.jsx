import "./ListePlatsAdmin.scss";
import { PlatContext } from "../../../utils/context/PlatContext";
import Plat from "./subcomponents/Plat";
import { useContext, useEffect, useState } from "react";

function ListePlatsAdmin() {
  const { listOfPlats, sortListOfPlats } = useContext(PlatContext);
  const [signButton, setSignButton] = useState("▼");
  const [sortIsAsc, setSortIsAsc] = useState(true);

  const handleSortButton = () => {
    sortListOfPlats(sortIsAsc);
    setSortIsAsc((prevSortIsAsc) => !prevSortIsAsc);
  };

  useEffect(() => {
    setSignButton(sortIsAsc ? "▼" : "▲");
  }, [sortIsAsc]);
  useEffect(() => {
    sortListOfPlats(sortIsAsc);
  });
  return (
    <div className="listeplats-content">
      <h1>Liste actuelle des plats</h1>
      <table>
        <thead>
          <th>
            <div className="table-head-name">
              <div>Nom</div>
              <div>
                <button onClick={() => handleSortButton()}>{signButton}</button>
              </div>
            </div>
          </th>
          <th>
            <div className="table-head-description">
              Description des ingrédients
            </div>
          </th>
          <th>
            <div className="table-head-country">Pays d'origine</div>
          </th>
          <th>
            <div className="table-head-category">Catégorie</div>
          </th>
          <th>
            <div className="table-head-price">Prix</div>
          </th>
          <th></th>
        </thead>
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
