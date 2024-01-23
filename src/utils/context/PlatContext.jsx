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

  async function updPlat(plat) {
    await recipes.updData(plat);
  }

  function sortListOfPlats(isAsc) {
    if (isAsc) {
      setListOfPlats(
        [...listOfPlats].sort((a, b) => a.nom.localeCompare(b.nom))
      );
    } else {
      setListOfPlats(
        [...listOfPlats].sort((a, b) => b.nom.localeCompare(a.nom))
      );
    }
  }

  function resetListOfPlats() {
    setListOfPlats(recipes.data);
  }

  useEffect(() => {
    setListOfPlats(recipes.data);
  }, [recipes.data]);

  return (
    <PlatContext.Provider
      value={{
        listOfPlats,
        deletePlat: deletePlat,
        addPlat: addPlat,
        updPlat: updPlat,
        sortListOfPlats: sortListOfPlats,
        resetListOfPlats: resetListOfPlats,
      }}
    >
      {children}
    </PlatContext.Provider>
  );
};
