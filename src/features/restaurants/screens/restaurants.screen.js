import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  //Next line is to skip the the android statusbar area, the option for IOS is already in SafeAreaView
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;
const SearchContainer = styled.View`
  background-color: #fcb32b;
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
