import "./PlanSite.scss";
import { Link } from "react-router-dom";

function PlanSite() {
  return (
    <div className="plansite-content">
      <h1>Plan du site</h1>
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/presentation">
          <li>Présentation</li>
        </Link>
        <Link to="/carte">
          <li>Carte</li>
        </Link>
        <Link to="/localisation">
          <li>Localisation</li>
        </Link>
      </ul>
    </div>
  );
}

export default PlanSite;
