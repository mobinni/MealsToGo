import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (item) => {
    setFavourites([...favourites, item]);
  };

  const remove = (item) => {
    const newFavourites = favourites.filter((x) => x.placeId !== item.placeId);
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        addToFavourites: (item) => add(item),
        removeFromFavourites: (item) => remove(item),
        favourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
