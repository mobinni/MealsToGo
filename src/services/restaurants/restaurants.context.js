import React, { useState, useContext, createContext, useEffect } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
