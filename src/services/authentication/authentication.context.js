import React, { useState, createContext, useRef } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

import { loginRequest } from "./authentication.service";
import { isMockMode } from "../../../App";

export const AuthenticationContext = createContext();

const MOCK_USER = { uid: "mock", email: "mock@dev.com" };

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(isMockMode ? MOCK_USER : null);
  const [error, setError] = useState(null);
  const auth = useRef(isMockMode ? null : getAuth()).current;

  if (auth) {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }

  const onLogin = (email, password) => {
    if (!auth) return setUser(MOCK_USER);
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (!auth) return setUser(MOCK_USER);
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    if (!auth) return setUser(null);
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
