import { createContext, useContext, useState } from "react";

const FavsContext = createContext();

export function FavsProvider({ children }) {
  const [favs, setFavs] = useState([]);

  function toggleFav(item) {
    const key = `${item.category}-${item.id}`;
    if (favs.some((f) => f.key === key)) {
      // eliminar
      setFavs(favs.filter((f) => f.key !== key));
    } else {
      // añadir
      setFavs([...favs, { ...item, key }]);
    }
  }

  function isFav(item) {
    const key = `${item.category}-${item.id}`;
    return favs.some((f) => f.key === key);
  }

  return (
    <FavsContext.Provider value={{ favs, toggleFav, isFav }}>
      {children}
    </FavsContext.Provider>
  );
}

export function useFavs() {
  return useContext(FavsContext);
}
