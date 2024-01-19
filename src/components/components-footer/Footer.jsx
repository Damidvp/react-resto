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
          <li>Plan du site</li>
        </ul>
      </div>
      <div className="footer-content-admin">Gestion stock</div>
    </div>
  );
}

export default Footer;
