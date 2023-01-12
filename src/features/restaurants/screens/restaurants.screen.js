import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as StatusBar } from "expo-status-bar";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // The next code line only applies to android
    // For IOS status bar offset SafeAreaView is used
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  search: {
    backgroundColor: "#FCB32B",
    padding: 10,
  },
  searchText: {},
  list: {
    flex: 1,
    backgroundColor: "#FADD91",
    padding: 10,
  },
  listText: {},
});
