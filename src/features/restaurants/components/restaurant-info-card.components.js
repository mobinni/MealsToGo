import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled(Text)`
  paddingLeft: 15,
  color: "white",
  fontWeight: "bold",
  fontSize: "30",
`;
const RestaurantCard = styled(Card)`
  background-color: "red",
`;
const RestautantCardCover = styled(Card.Cover)`
  padding: 4,
  background-color: "transparent",
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Vips",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/beautiful-vibrant-shot-of-traditional-korean-meals.jpg",
    ],
    address = "1 Apple Way, San Frisco, CA",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestautantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
