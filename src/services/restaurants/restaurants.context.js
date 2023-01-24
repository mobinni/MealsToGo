import React, { useState, useContext, createContext, useEffect } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
