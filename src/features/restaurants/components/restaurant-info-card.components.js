import React from "react";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const star = "⭐";
const open = "🈺";
const Info = styled.View`
  flex-direction: column;
  padding: 0 ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.ui.quaternary};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Rating = styled.Text`
  text-shadow: 1px 1px ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.quaternary};
  flex-direction: row;
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.text.primary};
  padding-top: ${(props) => props.theme.space[1]};
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
    icon = "🍔",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/beautiful-vibrant-shot-of-traditional-korean-meals.jpg",
    ],
    address = "1 Apple Way, San Frisco, CA",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestautantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>{ratingArray.map(() => star)}</Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text
                variant="label"
                style={{ color: "red", backgroundColor: "white" }}
              >
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <Text>{open}</Text>}
            <Text>{icon}</Text>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
