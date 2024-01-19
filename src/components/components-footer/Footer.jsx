import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-content">
      <div className="footer-content-copyright">© Damidvp - 2024</div>
      <div className="footer-content-links">
        <ul>
          <li>Accueil</li>
          <li>Présentation</li>
          <li>Carte</li>
          <li>Localisation</li>
          <li>Plan du site</li>
        </ul>
      </div>
      <div className="footer-content-admin">Gestion stock</div>
    </div>
  );
}

export default Footer;
