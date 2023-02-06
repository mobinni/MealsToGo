import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  background-color: #fcb32b;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  if (isLoading) {
    return <ActivityIndicator animating="true" large color="brown" />;
  } else {
    return (
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="small">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 4 }}
        />
      </SafeArea>
    );
  }
};
