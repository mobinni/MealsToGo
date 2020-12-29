const functions = require("firebase-functions");
const { Client } = require("@googlemaps/google-maps-services-js");

const { placesRequest } = require("./places");
const { geocodeRequest } = require("./geocode");

const client = new Client({});

exports.places = functions.https.onRequest((request, response) => {
  placesRequest(client, request, response);
});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(client, request, response);
});
