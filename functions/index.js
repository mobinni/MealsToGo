const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});
