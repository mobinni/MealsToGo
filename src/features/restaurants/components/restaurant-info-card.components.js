import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Vips",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/beautiful-vibrant-shot-of-traditional-korean-meals.jpg",
    ],
    address = "1 Apple Way, San Frisco, CA",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.restaurantName}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
  },
  cover: {
    padding: 4,
    backgroundColor: "transparent",
  },
  restaurantName: {
    paddingLeft: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: "30",
  },
});
