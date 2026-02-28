import React, { useContext } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <Ionicons
        name={isFavourite ? "heart" : "heart-outline"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
