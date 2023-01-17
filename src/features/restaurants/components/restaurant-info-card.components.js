import React from "react";
import { Card } from "react-native-paper";
import { Text } from "react-native";
import styled from "styled-components/native";

const star = "⭐";
const Info = styled(Text)`
  padding-left: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.ui.quaternary};
`;
const Rating = styled.Text`
  text-shadow: 1px 1px white;
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.quaternary};
  flex-direction: row;
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.text.primary};
  padding-left: ${(props) => props.theme.space[1]};
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
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray =Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestautantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            star
          ))}
        </Rating>
        <Address>{'\n'}{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
