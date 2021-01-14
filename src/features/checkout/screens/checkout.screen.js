import React, { useState, useEffect, useContext } from "react";
import { List, Colors, Divider } from "react-native-paper";
import { ScrollView } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { KeyboardAvoidingView } from "../../../components/utility/keyboard-avoiding.component";
import { Text } from "../../../components/typography/text.component";
import { CreditCardInput } from "../components/credit-card.component";
import {
  ClearButton,
  PayButton,
  Title,
  CartIconContainer,
  CartIcon,
  NameInput,
  PaymentProcessing,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { payRequest } from "../../../services/checkout/checkout.service";
import { CartContext } from "../../../services/cart/cart.context";

export const CheckoutScreen = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [card, setCard] = useState(null);
  const [sum, setSum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, restaurant, clearCart } = useContext(CartContext);

  const onPay = () => {
    if (!card || !card.id) {
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });
      return;
    }

    if (!name) {
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid name",
      });
      return;
    }

    setIsLoading(true);
    payRequest(card.id, sum, name)
      .then((res) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess", { result: res });
      })
      .catch((e) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: "Something went wrong processing your payment",
        });
      });
  };

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
    }
    setSum(cart.reduce((acc, { price }) => (acc += price), 0));
  }, [cart]);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <KeyboardAvoidingView>
      <SafeArea>
        <RestaurantInfoCard restaurant={restaurant} />
        {isLoading && (
          <PaymentProcessing
            size={128}
            animating={true}
            color={Colors.blue300}
          />
        )}
        <ScrollView>
          <Spacer position="left" size="medium">
            <Spacer position="top" size="large">
              <Title>Your Order</Title>
            </Spacer>
            <List.Section>
              {cart.map(({ item, price }, i) => {
                return (
                  <List.Item
                    key={`item-${i}`}
                    title={`${item} - ${price / 100}`}
                  />
                );
              })}
            </List.Section>

            <Text>Total: {sum / 100}</Text>
          </Spacer>
          <Spacer size="large" />
          <Divider />
          <NameInput
            label="Name"
            value={name}
            onChangeText={(u) => setName(u)}
          />
          {name && (
            <Spacer position="top" size="large">
              <CreditCardInput
                name={name}
                onSuccess={setCard}
                onError={() => {
                  navigation.navigate("CheckoutError", {
                    error:
                      "Something went wrong processing your card information, make sure it's valid",
                  });
                }}
              />
            </Spacer>
          )}
          <Spacer position="top" size="xxl" />
          <PayButton
            disabled={isLoading}
            icon="cash-usd"
            mode="contained"
            onPress={onPay}
          >
            Pay
          </PayButton>
          <Spacer position="top" size="large">
            <ClearButton
              disabled={isLoading}
              icon="cart-off"
              mode="contained"
              onPress={clearCart}
            >
              Clear Cart
            </ClearButton>
          </Spacer>
        </ScrollView>
      </SafeArea>
    </KeyboardAvoidingView>
  );
};
