import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding-left: 2px;
  padding-bottom: 2px;
  color: white;
  margin-left: 10px;
  font-weight: 700;
  font-size: 20px;
`;
const RestaurantCard = styled(Card)`
  background: red;
`;
const RestautantCardCover = styled(Card.Cover)`
  background-color: transparent;
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
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
