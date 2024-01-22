import { createContext, useState } from "react";

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const [platsCommande, setPlatsCommande] = useState([]);
  const [nbPlatsCommande, setNbPlatsCommande] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addPlatCommande(plat) {
    platsCommande.push(plat);
    setPlatsCommande(platsCommande);
  }

  function setNbPlats() {
    setNbPlatsCommande(platsCommande.length);
    calculateTotalPrice();
  }

  function calculateTotalPrice() {
    platsCommande.forEach((plat) => setTotalPrice(totalPrice + plat.prix));
    console.log(totalPrice);
  }

  return (
    <PanierContext.Provider
      value={{
        platsCommande,
        nbPlatsCommande,
        totalPrice,
        addPlatCommande: addPlatCommande,
        setNbPlats: setNbPlats,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};
