import { createContext, useState } from "react";

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const [platsCommande, setPlatsCommande] = useState([]);
  const [nbPlatsCommande, setNbPlatsCommande] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addPlatCommande(plat) {
    const existingPlat = platsCommande.find((p) => p.plat.id === plat.id);
    if (existingPlat) {
      existingPlat.qte += 1;
    } else {
      platsCommande.push({
        plat: plat,
        id: platsCommande[platsCommande.length - 1] + 1,
        qte: 1,
      });
    }
    console.log(platsCommande);
    setPlatsCommande(platsCommande);
    setNbPlatsCommande(platsCommande.length);
  }

  function removePlatCommande(platCommande) {
    platCommande.qte--;
    if (platCommande.qte < 1) {
      setPlatsCommande(platsCommande.filter((p) => p.qte !== 0));
      setNbPlatsCommande(platsCommande.length);
    }
    setNbPlats();
  }

  function setNbPlats() {
    let nbPlatsTotal = 0;
    platsCommande.forEach((plat) => (nbPlatsTotal += plat.qte));
    setNbPlatsCommande(nbPlatsTotal);
    calculateTotalPrice();
  }

  function calculateTotalPrice() {
    let price = 0;
    platsCommande.forEach((plat) => (price += plat.plat.prix * plat.qte));
    setTotalPrice(price);
    console.log(totalPrice);
  }

  function resetPanier() {
    setPlatsCommande([]);
    setNbPlatsCommande(0);
    setTotalPrice(0);
  }

  return (
    <PanierContext.Provider
      value={{
        platsCommande,
        nbPlatsCommande,
        totalPrice,
        addPlatCommande: addPlatCommande,
        setNbPlats: setNbPlats,
        removePlatCommande: removePlatCommande,
        resetPanier: resetPanier,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};
