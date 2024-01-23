import { createContext, useState, useEffect } from "react";
import { useFetchPlatData } from "../hooks/PlatHook";

export const PlatContext = createContext();

export const PlatProvider = ({ children }) => {
  const recipes = useFetchPlatData();
  const [listOfPlats, setListOfPlats] = useState([]);

  async function deletePlat(plat) {
    await recipes.delData(plat);
  }

  async function addPlat(plat) {
    await recipes.addData(plat);
  }

  useEffect(() => {
    setListOfPlats(recipes.data);
  }, [recipes.data]);

  return (
    <PlatContext.Provider
      value={{ listOfPlats, deletePlat: deletePlat, addPlat: addPlat }}
    >
      {children}
    </PlatContext.Provider>
  );
};
