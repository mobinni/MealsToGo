/* eslint-disable react/react-in-jsx-scope */
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular, Lato_900Black} from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

const Tab = createBottomTabNavigator();


export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_900Black
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
