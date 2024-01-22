import "./Panier.scss";
import { PanierContext } from "../../utils/context/PanierContext";
import { useContext } from "react";

function Panier() {
  const { platsCommande, totalPrice } = useContext(PanierContext);
  return (
    <div className="panier-content">
      <h1>Mon panier</h1>
      {platsCommande.length > 0 ? (
        <div className="panier-content-display">
          <table>
            {platsCommande.map((plat) => (
              <tr>
                <td>
                  <img src={plat.photo} alt="Tacos" />
                </td>
                <td>
                  <div className="panier-content-name">
                    <strong>{plat.nom}</strong>
                  </div>
                </td>
                <td>
                  <div className="panier-content-qty">Quantité : 1</div>
                </td>
                <td>
                  <div className="panier-content-price">
                    {plat.prix.toFixed(2)} €
                  </div>
                </td>
                <td>
                  <button>Supprimer</button>
                </td>
              </tr>
            ))}
          </table>
          <div className="panier-content-form">
            <h2>Informations de livraison</h2>
            <form>
              <div>
                <label for="nom">Nom : </label>
                <input id="nom" name="nom" type="text" />
              </div>
              <div>
                <label for="nom">Prénom : </label>
                <input id="prenom" name="prenom" type="text" />
              </div>
              <div>
                <label for="nom">Adresse : </label>
                <input id="adresse" name="adresse" type="text" />
              </div>
              <div>
                <label for="nom">Instructions de livraison : </label>
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
