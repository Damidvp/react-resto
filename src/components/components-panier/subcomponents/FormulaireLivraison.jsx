import "./FormulaireLivraison.scss";
import { PanierContext } from "../../../utils/context/PanierContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormulaireLivraison() {
  const { totalPrice, resetPanier } = useContext(PanierContext);
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nom && prenom && adresse) {
      navigate(`/panier/validation/${nom}_${prenom}_${adresse}`);
      resetPanier();
    }
  };
  const handleNom = (e) => {
    setNom(e.target.value);
  };
  const handlePrenom = (e) => {
    setPrenom(e.target.value);
  };
  const handleAdresse = (e) => {
    setAdresse(e.target.value);
  };

  return (
    <div className="panier-content-form">
      <h2>Informations de livraison</h2>
      <form name="form-livraison" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom : </label>
          <input
            id="nom"
            name="nom"
            type="text"
            onInput={(e) => handleNom(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom : </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            onInput={(e) => handlePrenom(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="adresse">Adresse : </label>
          <input
            id="adresse"
            name="adresse"
            type="text"
            onInput={(e) => handleAdresse(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="details">Instructions de livraison : </label>
          <textarea id="details" name="details" />
        </div>
        <div className="panier-content-total">
          <p>Total : {totalPrice.toFixed(2)} €</p>
          <div>
            <button type="submit">Commander</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormulaireLivraison;
