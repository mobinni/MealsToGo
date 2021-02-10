const functions = require("firebase-functions");
const yelp = require("yelp-fusion");
const { Client } = require("@googlemaps/google-maps-services-js");
const stripeClient = require("stripe")(functions.config().stripe.key);

const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay");
const { fetchRestaurantDetails } = require("./yelp");

const googleClient = new Client({});
const yelpClient = yelp.client(functions.config().yelp.key);
exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

exports.pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});

exports.fetchRestaurantDetails = functions.https.onRequest(
  (request, response) => {
    fetchRestaurantDetails(request, response, yelpClient);
  }
);
