import { createContext, useState } from "react";

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const [platsCommande, setPlatsCommande] = useState([]);
  const [nbPlatsCommande, setNbPlatsCommande] = useState(0);

  function addPlatCommande(plat) {
    platsCommande.push(plat);
    setNbPlatsCommande(nbPlatsCommande + 1);
    console.log(nbPlatsCommande);
  }

  return (
    <PanierContext.Provider
      value={{
        platsCommande,
        nbPlatsCommande,
        addPlatCommande: addPlatCommande,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};
