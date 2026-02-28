const antwerp = require("./antwerp");
const chicago = require("./chicago");
const toronto = require("./toronto");
const san_francisco = require("./san_francisco");

module.exports.mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
};

export const mockImages = [
  "https://picsum.photos/seed/burger/600/400",
  "https://picsum.photos/seed/icecream/600/400",
  "https://picsum.photos/seed/cake/600/400",
  "https://picsum.photos/seed/baking/600/400",
  "https://picsum.photos/seed/pancakes/600/400",
  "https://picsum.photos/seed/pizza1/600/400",
  "https://picsum.photos/seed/pizza2/600/400",
];

module.exports.addMockImage = (restaurant) => {
  const randomImage =
    mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
  restaurant.photos = [randomImage];
  return restaurant;
};
