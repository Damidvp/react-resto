import "./PlanSite.scss";
import { Link } from "react-router-dom";

function PlanSite() {
  return (
    <div className="plansite-content">
      <h1>Plan du site</h1>
      <ul>
        <Link className="link-plan" to="/">
          <li>Accueil</li>
        </Link>
        <Link className="link-plan" to="/presentation">
          <li>Présentation</li>
        </Link>
        <Link className="link-plan" to="/carte">
          <li>Carte</li>
        </Link>
        <Link className="link-plan" to="/localisation">
          <li>Localisation</li>
        </Link>
        <Link className="link-plan-admin" to="/gestion/login">
          <li>Gestion stock</li>
        </Link>
      </ul>
    </div>
  );
}

export default PlanSite;
