import React from "react";
import styled from "styled-components/native";

const MyText = styled.Text``;
export const MapCallout = ({ restaurant }) => (
  <MyText>{restaurant.name}</MyText>
);
