import { createContext, useState } from "react";

const getPanierFromLocalStorage = () => {
  const panierString = localStorage.getItem("panier");
  return panierString ? JSON.parse(panierString) : [];
};
const getNbPlatsPanierFromLocalStorage = () => {
  return localStorage.getItem("nbplats")
    ? parseInt(localStorage.getItem("nbplats"))
    : 0;
};
const getTotalPriceFromLocalStorage = () => {
  return localStorage.getItem("totalprice")
    ? parseFloat(localStorage.getItem("totalprice"))
    : 0;
};

const savePanierToLocalStorage = (panier) => {
  localStorage.setItem("panier", JSON.stringify(panier));
};
const saveNbPlatsPanierToLocalStorage = (nbplats) => {
  localStorage.setItem("nbplats", nbplats);
};
const saveTotalPriceToLocalStorage = (total) => {
  localStorage.setItem("totalprice", total);
};

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const [platsCommande, setPlatsCommande] = useState(
    getPanierFromLocalStorage()
  );
  const [nbPlatsCommande, setNbPlatsCommande] = useState(
    getNbPlatsPanierFromLocalStorage()
  );
  const [totalPrice, setTotalPrice] = useState(getTotalPriceFromLocalStorage());

  function addPlatCommande(plat) {
    const existingPlat =
      platsCommande.find((p) => p.plat.id === plat.id) || null;
    if (existingPlat) {
      existingPlat.qte += 1;
    } else {
      platsCommande.push({
        plat: plat,
        id: platsCommande[platsCommande.length - 1] + 1,
        qte: 1,
      });
    }
    setPlatsCommande(platsCommande);
    savePanierToLocalStorage(platsCommande);
    setNbPlats();
  }

  function removePlatCommande(platCommande) {
    platCommande.qte--;
    if (platCommande.qte < 1) {
      const newPlatCommande = platsCommande.filter((p) => p.qte !== 0);
      setPlatsCommande(newPlatCommande);
      savePanierToLocalStorage(newPlatCommande);
      console.log(platCommande);
    }
    setNbPlats();
    console.log(localStorage.getItem("panier"));
  }

  function setNbPlats() {
    let nbPlatsTotal = 0;
    platsCommande.forEach((plat) => (nbPlatsTotal += plat.qte));
    setNbPlatsCommande(nbPlatsTotal);
    saveNbPlatsPanierToLocalStorage(nbPlatsTotal);
    calculateTotalPrice();
  }

  function calculateTotalPrice() {
    let price = 0;
    platsCommande.forEach((plat) => (price += plat.plat.prix * plat.qte));
    setTotalPrice(price);
    saveTotalPriceToLocalStorage(price);
    console.log(totalPrice);
  }

  function resetPanier() {
    setPlatsCommande([]);
    setNbPlatsCommande(0);
    setTotalPrice(0);
    savePanierToLocalStorage([]);
    saveNbPlatsPanierToLocalStorage(0);
    saveTotalPriceToLocalStorage(0);
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
