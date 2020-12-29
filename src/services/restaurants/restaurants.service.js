import { host, isMock } from "../../utils/env";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(`${host}/places?location=${location}&mock=${isMock}`)
    .then((res) => {
      if (res.status > 200) {
        throw "Something went wrong retrieving the restaurants for this location";
      }
      return res;
    })
    .then((res) => res.json());
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
