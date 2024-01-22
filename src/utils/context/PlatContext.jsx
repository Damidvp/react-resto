import { createContext, useState, useEffect } from "react";
import { useFetchPlatData } from "../hooks/PlatHook";

export const PlatContext = createContext();

export const PlatProvider = ({ children }) => {
  const recipes = useFetchPlatData(
    "https://damidvp.github.io/react-resto-api/data.json"
  );
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
