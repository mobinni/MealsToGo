import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android'

export default function App() {

  return (
  <>
    <SafeAreaView style={styles.mainView}>
      <View style={styles.searchArea}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View style={styles.listArea}>
        <Text style={styles.listText}>List</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto' />
  </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    // The next line only applies to android
    // For IOS status bar offset SafeAreaView is used
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  searchArea: {
    backgroundColor: 'green',
    padding:10,
  },
  searchText:{

  },
  listArea: {
    flex:1,
    backgroundColor: 'blue',
    padding:10,
  },
  listText: {

  },
})

