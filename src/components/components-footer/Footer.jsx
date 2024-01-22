import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-content">
      <div className="footer-content-copyright">
        <p>© Damidvp - 2024</p>
      </div>
      <div className="footer-content-links">
        <ul>
          <Link className="nav-link" to="/">
            <li>Accueil</li>
          </Link>
          <Link className="nav-link" to="/presentation">
            <li>Présentation</li>
          </Link>
          <Link className="nav-link" to="/carte">
            <li>Carte</li>
          </Link>
          <Link className="nav-link" to="/localisation">
            <li>Localisation</li>
          </Link>
          <Link className="nav-link" to="/plan">
            <li>Plan du site</li>
          </Link>
        </ul>
      </div>
      <div className="footer-content-admin">
        <Link className="nav-link" to="/gestion/login">
          Gestion stock
        </Link>
      </div>
    </div>
  );
}

export default Footer;
