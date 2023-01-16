/* eslint-disable react/react-in-jsx-scope */
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
