import styled from "styled-components/native";
import {
  Button,
  Avatar,
  TextInput,
  ActivityIndicator,
} from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: 20px;
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const PaymentProcessing = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
