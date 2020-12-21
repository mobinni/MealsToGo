import styled from "styled-components/native";
import { variant, color } from "styled-system";

const defaultTextStyles = {
  fontFamily: "body",
  fontWeight: "regular",
  color: "text.primary",
  flexWrap: "wrap",
  marginTop: 0,
  marginBottom: 0,
};

const textVariants = variant({
  variants: {
    body: {
      ...defaultTextStyles,
      fontSize: "body",
    },
    caption: {
      ...defaultTextStyles,
      fontSize: "caption",
      fontWeight: "bold",
    },
    error: {
      ...defaultTextStyles,
      fontSize: "caption",
      color: "text.error",
    },
    hint: {
      ...defaultTextStyles,
      fontSize: "body",
      color: "text.secondary",
    },
    label: {
      ...defaultTextStyles,
      fontFamily: "heading",
      fontSize: "body",
      fontWeight: "medium",
    },
  },
});

export const Text = styled.Text`
  ${textVariants};
  ${({ center = false }) => (center ? "text-align: center;" : "")}
  ${color};
`;

Text.defaultProps = {
  variant: "body",
};
