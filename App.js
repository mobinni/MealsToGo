import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { RestaurantsScreens } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreens />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // The next code line only applies to android
    // For IOS status bar offset SafeAreaView is used
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  search: {
    backgroundColor: "#FBCC82",
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
