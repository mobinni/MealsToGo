import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

//${StatusBar... line is to skip the the android statusbar area, the option for IOS is already in SafeAreaView
const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const SearchContainer = styled.View`
  background-color: #fcb32b;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={[ {name: 1}, {name: 2},{name: 3}, {name: 4},{name: 5}, {name: 6},{name: 7}, {name: 8},]}
        renderItem={() => (
          <Spacer position="bottom" size="small">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 4 }}
      />
    </SafeArea>
  );
};
