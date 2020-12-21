import styled from "styled-components/native";
import { variant } from "styled-system";

const variantOptions = (key) => ({
  small: {
    [key]: 1,
  },
  medium: {
    [key]: 2,
  },
  large: {
    [key]: 3,
  },
});
const spacerVariants = variant({
  variants: {
    top: variantOptions("marginTop"),
    left: variantOptions("marginLeft"),
    right: variantOptions("marginRight"),
    bottom: variantOptions("marginBottom"),
  },
});

export const Spacer = styled.View`
  ${spacerVariants};
`;

Spacer.defaultProps = {
  variant: "top.small",
};
