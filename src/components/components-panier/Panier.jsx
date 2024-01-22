import "./Panier.scss";
import { PanierContext } from "../../utils/context/PanierContext";
import { useContext } from "react";

function Panier() {
  const { platsCommande, totalPrice, removePlatCommande } =
    useContext(PanierContext);
  return (
    <div className="panier-content">
      <h1>Mon panier</h1>
      {platsCommande.length > 0 ? (
        <div className="panier-content-display">
          <table>
            <tbody>
              {platsCommande.map((plat) => (
                <tr key={plat.plat.id}>
                  <td>
                    <img src={plat.plat.photo} alt="Tacos" />
                  </td>
                  <td>
                    <div className="panier-content-name">
                      <strong>{plat.plat.nom}</strong>
                    </div>
                  </td>
                  <td>
                    <div className="panier-content-qty">
                      Quantité : {plat.qte}
                    </div>
                  </td>
                  <td>
                    <div className="panier-content-price">
                      {plat.plat.prix.toFixed(2)} €
                    </div>
                  </td>
                  <td>
                    <button onClick={() => removePlatCommande(plat)}>-</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="panier-content-form">
            <h2>Informations de livraison</h2>
            <form>
              <div>
                <label htmlFor="nom">Nom : </label>
                <input id="nom" name="nom" type="text" />
              </div>
              <div>
                <label htmlFor="prenom">Prénom : </label>
                <input id="prenom" name="prenom" type="text" />
              </div>
              <div>
                <label htmlFor="adresse">Adresse : </label>
                <input id="adresse" name="adresse" type="text" />
              </div>
              <div>
                <label htmlFor="details">Instructions de livraison : </label>
                <textarea id="details" name="details" />
              </div>
            </form>
          </div>
          <div className="panier-content-total">
            <p>Total : {totalPrice.toFixed(2)} €</p>
            <div>
              <button>Commander</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="panier-content-display">
          <p className="no-content">
            Votre panier est vide. Consultez notre carte pour commander.
          </p>
        </div>
      )}
    </div>
  );
}

export default Panier;
