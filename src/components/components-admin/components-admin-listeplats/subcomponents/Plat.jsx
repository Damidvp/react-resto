import "./Plat.scss";

function Plat(props) {
  return (
    <tr>
      <td>
        <div className="table-body-name">{props.plat.nom}</div>
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
          <button className="btn-update">Modifier</button>
          <button className="btn-delete">Supprimer</button>
        </div>
      </td>
    </tr>
  );
}

export default Plat;
