import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const Container = styled(SafeAreaView)`
  flex: 1;
  //Next line is to skip the the android statusbar area, the option for IOS is already in SafeAreaView
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: #fada63;
`;
const ViewSearch = styled.View`
  background-color: #fcb32b;
  padding: 10px;
`;

export const RestaurantsScreen = () => {
  return (
    <Container>
      <ViewSearch>
        <Searchbar />
      </ViewSearch>
      <View>
        <RestaurantInfoCard />
      </View>
    </Container>
  );
};
