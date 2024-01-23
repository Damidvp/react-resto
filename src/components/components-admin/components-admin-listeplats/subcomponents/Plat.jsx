import "./Plat.scss";
import { PlatContext } from "../../../../utils/context/PlatContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Plat(props) {
  const { deletePlat } = useContext(PlatContext);
  const handleDeleteButton = (plat) => {
    let confirmation = window.confirm(
      "Voulez-vous supprimer ce plat : " + plat.id + " (" + plat.nom + ") ?"
    );
    if (confirmation) {
      deletePlat(plat);
    }
  };
  return (
    <tr className="table-row">
      <td>
        <Link className="link" to={"/gestion/update-plat/" + props.plat.id}>
          <div className="table-body-name">{props.plat.nom}</div>
        </Link>
      </td>
      <td>
        <div className="table-body-description">{props.plat.description}</div>
      </td>
      <td>
        <div className="table-body-country">{props.plat.pays}</div>
      </td>
      <td>
        <div className="table-body-category">{props.plat.categorie}</div>
      </td>
      <td>
        <div className="table-body-price">{props.plat.prix.toFixed(2)} €</div>
      </td>
      <td>
        <div className="table-body-actions">
          <button
            className="btn-delete"
            onClick={() => handleDeleteButton(props.plat)}
          >
            Supprimer
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Plat;
