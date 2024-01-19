import "./Plat.scss";

function Plat(props) {
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
          <button>Ajouter au panier</button>
        </div>
      </td>
    </tr>
  );
}

export default Plat;
