import React from "react";
import LottieView from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  // BrandLogo,
  AreYouReady,
  TitlePink,
  AnimationWrapper,
  LogoContainer,
  WelcomeTo
} from "../components/account.styles";
import { colors } from "../../../infrastructure/theme/colors";


export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <WelcomeTo>Welcome to</WelcomeTo>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/shotzanime.json")}
          speed={0.5}
        />
      </AnimationWrapper>
      <LogoContainer>
      <TitlePink>Shotz</TitlePink>
      {/* <BrandLogo source={require("../../../../assets/logo.png")}></BrandLogo>  */}
      <Title> On Me!</Title>
      </LogoContainer>
      <AreYouReady>Are You Ready For Free Shotz?</AreYouReady>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
