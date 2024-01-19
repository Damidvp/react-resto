import { createContext, useState } from "react";

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const [platsCommande, setPlatsCommande] = useState([]);

  return (
    <PanierContext.Provider value={{ platsCommande }}>
      {children}
    </PanierContext.Provider>
  );
};
