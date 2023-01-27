import React from "react";
import { Card } from "react-native-paper";
import { View } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestautantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
} from "./restaurant-info-card.styles";

const star = "⭐";
const open = "🈺";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Los pollos hermanos",
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
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>{ratingArray.map(() => star)}</Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="small">
              {isOpenNow && <Text>{open}</Text>}
            </Spacer>
            <Spacer position="left" size="small">
              <Text>{icon}</Text>
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
