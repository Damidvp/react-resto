import "./Panier.scss";
import { PanierContext } from "../../utils/context/PanierContext";
import { useContext } from "react";
import FormulaireLivraison from "./subcomponents/FormulaireLivraison";
import Slider from "./subcomponents/Slider";
import { PlatProvider } from "../../utils/context/PlatContext";

function Panier() {
  const { platsCommande, removePlatCommande } = useContext(PanierContext);
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
                    <img
                      className="panier-content-img"
                      src={plat.plat.photo}
                      alt="Tacos"
                    />
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
          <FormulaireLivraison />
        </div>
      ) : (
        <div className="panier-content-display">
          <p className="no-content">
            Votre panier est vide. Consultez notre carte pour commander.
          </p>
          <PlatProvider>
            <Slider />
          </PlatProvider>
        </div>
      )}
    </div>
  );
}

export default Panier;
