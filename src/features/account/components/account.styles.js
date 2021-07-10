import styled from "styled-components/native";
import { Button, Colors, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/login.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #43d9e8;
  opacity: 0.8;
  z-index: 0;
  /* flex: 1;
  justify-content: space-evenly; */
`;
export const LogoContainer = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

export const BrandLogo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[4]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  padding-top: 120px;
  font-size: 50px;
  color: #fd5d5d;
`;
export const TitlePink = styled(Text)`
  font-size: 50px;
  color: #fef851;
  padding-top: 120px;
  /* primary: "#43D9E8" ,
    secondary: "#5D6CC6",
    muted: "#FD5D5D",
    yellow: "#FEF851" */
`;
export const AreYouReady = styled(Text)`
  font-size: 30px;
  align-items: center;
  text-align: center;
  padding-top: 80px;
  width: 80%;
  `;
export const WelcomeTo = styled(Text)`
  font-size: 35px;
  position: absolute;
  top: 80px;
  z-index: 3;
  /* padding-top: 80px; */
  /* flex: 0.1; */
  /* text-align: center; */
`;


export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
