import React, { useState, createContext, useEffect, useMemo } from "react";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setLocation("37.7749295,-122.4194155");
  };
  return (
    <LocationContext.Provider
      value={{
        search: onSearch,
        location,
        searchTerm,
        isLoading,
        error,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
