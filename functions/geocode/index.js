const functions = require("firebase-functions");
const url = require("url");
const { locations: mockLocations } = require("./geocode.mock");

module.exports.geocodeRequest = (client, request, response) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    console.log("got here");
    const mockCity = mockLocations[city];
    return response.json(mockCity);
  }
  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((r) => {
      return response.json(r.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send({ err: e.response.data.error_message });
    });
};
