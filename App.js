import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listText}>List</Text>
        </View>
      </SafeAreaView>
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
    backgroundColor: "#FAA391",
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
