import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 20px;
  padding-left: 2px;
  padding-bottom: 2px;
  color: ${(props) => props.theme.colors.ui.quaternary};
  margin-left: 10px;
`;
const RestaurantCard = styled(Card)`
  margin: 5px 10px;
  background: ${(props) => props.theme.colors.bg.primary};
`;
const RestautantCardCover = styled(Card.Cover)`
  padding: 4px;
  background-color: transparent;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "vips",
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
