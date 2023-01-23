import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

//${StatusBar... line is to skip the the android statusbar area, the option for IOS is already in SafeAreaView
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
