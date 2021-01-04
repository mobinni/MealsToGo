import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const saveCart = async (res, crt, uid) => {
    try {
      const jsonValue = JSON.stringify({ restaurant: res, cart: crt });
      await AsyncStorage.setItem(`@cart-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadCart = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@cart-${uid}`);
      if (value !== null) {
        const { restaurant: res, cart: crt } = JSON.parse(value);
        setCart(crt);
        setRestaurant(res);
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (item, res) => {
    if (!restaurant || restaurant.placeId !== res.placeId) {
      setRestaurant(res);
      setCart([item]);
      return;
    }
    setCart([...cart, item]);
  };

  const remove = (item) => {
    const newCart = cart.filter((x) => x !== item);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadCart(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid) {
      saveCart(restaurant, cart, user.uid);
    }
  }, [restaurant, cart, user]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: add,
        removeFromCart: remove,
        clearCart: clear,
        restaurant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
