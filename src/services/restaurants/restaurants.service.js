import camelize from "camelize";
import { host, isMock } from "../../utils/env";

import { mocks } from "./mock";

export const restaurantsRequest = (location = "crap") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("location not found");
    }
    resolve(mock);
  });
};
restaurantsRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = [];
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
