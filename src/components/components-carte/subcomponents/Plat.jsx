import "./Plat.scss";
import { PanierContext } from "../../../utils/context/PanierContext";
import { useContext } from "react";

function Plat(props) {
  const { addPlatCommande, setNbPlats } = useContext(PanierContext);
  const handleClick = () => {
    addPlatCommande(props.plat);
    setNbPlats();
  };
  return (
    <tr>
      <td>
        <div>
          <img src={props.plat.photo} alt={props.plat.nom} />
        </div>
      </td>
      <td>
        <div className="table-nom">
          <strong>{props.plat.nom}</strong>
        </div>
      </td>
      <td>
        <div className="table-description">{props.plat.description}</div>
      </td>
      <td>
        <div className="table-prix">
          <strong>{props.plat.prix.toFixed(2)} €</strong>
        </div>
      </td>
      <td>
        <div className="table-addbutton">
          <button onClick={() => handleClick()}>Ajouter au panier</button>
        </div>
      </td>
    </tr>
  );
}

export default Plat;
