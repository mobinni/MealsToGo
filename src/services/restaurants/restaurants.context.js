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
  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout( () => {
      restaurantsRequest().then(restaurantsTransform).then((results) => {
        setIsLoading(false);
        setRestaurants(results);
    }).catch(err => {
      setIsLoading(false);
      setError(err);
    };
    }, 2000);
  }
  
  //useEffect acts when something mounts or changes
  useEffect(() => {
retrieveRestaurants();
  }, []); //use the [] so is not triggering all the time

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
