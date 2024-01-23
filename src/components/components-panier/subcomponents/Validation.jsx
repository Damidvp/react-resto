import "./Validation.scss";
import { useParams } from "react-router-dom";

function Validation() {
  const { destinataire } = useParams();
  const [nom, prenom, adresse] = destinataire.split("_");

  return (
    <div className="validation-content">
      <h1>Commande en route !</h1>
      <div className="validation-content-message">
        <p>
          Nos meilleurs livreurs mettent tout en oeuvre pour vous livrer au plus
          vite, à dos des meilleurs chocobos de la région !
        </p>
      </div>

      <img src="/img/chocobo.png" alt="Livreur à chocobo" />
      <div className="validation-content-destination">
        <h2>Destination</h2>
        <div className="validation-content-destination-name">
          <p>
            {prenom} {nom.toLocaleUpperCase()}
          </p>
        </div>
        <div className="validation-content-destination-address">
          <p>{adresse}</p>
        </div>
      </div>
    </div>
  );
}

export default Validation;
