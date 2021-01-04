import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";

export const CheckoutErrorScreen = ({ route }) => {
  const { error } = route.params;
  return (
    <SafeArea>
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="close" bg={colors.ui.error} />
          <Text variant="label">{error}</Text>
        </CartIconContainer>
      </SafeArea>
    </SafeArea>
  );
};
