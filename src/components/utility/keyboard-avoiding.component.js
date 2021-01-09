import React from "react";
import styled from "styled-components/native";
import {
  KeyboardAvoidingView as KAV,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const AvoidingView = styled(KAV)`
  flex: 1;
`;

export const KeyboardAvoidingView = ({ children }) => {
  return (
    <AvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </AvoidingView>
  );
};
