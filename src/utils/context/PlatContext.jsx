import { createContext, useState, useEffect } from "react";
import { useFetchPlatData } from "../hooks/PlatHook";

export const PlatContext = createContext();

export const PlatProvider = ({ children }) => {
  const recipes = useFetchPlatData("http://localhost:3001/plats");
  const [listOfPlats, setListOfPlats] = useState([]);
  useEffect(() => {
    setListOfPlats(recipes);
  }, [recipes]);

  return (
    <PlatContext.Provider value={{ listOfPlats }}>
      {children}
    </PlatContext.Provider>
  );
};
