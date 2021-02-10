const url = require("url");
const functions = require("firebase-functions");

module.exports.fetchRestaurantDetails = (request, response, client) => {
  const { location, name } = url.parse(request.url, true).query;

  client
    .search({
      term: name,
      location,
    })
    .then((res) => {
      return response.json(res.jsonBody);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
