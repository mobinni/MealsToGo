import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
export const Info = styled.View`cc
  flex-direction: column;
  padding: 0 ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
export const Rating = styled.Text`
  text-shadow: 1px 1px ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.quaternary};
  flex-direction: row;
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.text.primary};
  padding-top: ${(props) => props.theme.space[1]};
`;
export const RestaurantCard = styled(Card)`
  margin: 5px 10px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-bottom: ${(props) => props.theme.space[1]};
  `;
export const RestautantCardCover = styled(Card.Cover)`
  padding: 4px;
  background-color: transparent;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;