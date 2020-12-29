import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`)
    .then((res) => {
      if (res.status > 200) {
        throw "Something went wrong retrieving this location";
      }
      return res;
    })
    .then((res) => res.json());
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
