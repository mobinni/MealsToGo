const functions = require("firebase-functions");
const url = require("url");
const { mocks: mockPlaces, addMockImages } = require("./mock");

const transformPhotos = (data) => {
  data.results = data.results.map((restaurant) => {
    if (!restaurant.photos.length) {
      restaurant.photos = [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ];
      return restaurant;
    } else {
      const ref = restaurant.photos[0].photo_reference;
      if (!ref) {
        restaurant.photos = [];
      } else {
        restaurant.photos = [
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
            functions.config().google.key
          }`,
        ];
      }
    }
    return restaurant;
  });
  return data;
};

module.exports.placesRequest = (client, request, response) => {
  const { location, mock } = url.parse(request.url, true).query;

  if (mock === "true") {
    const mockCity = mockPlaces[location];
    mockCity.results = mockCity.results.map(addMockImages);
    return response.json(mockCity);
  }

  client
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((r) => {
      return response.json(transformPhotos(r.data, false));
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
