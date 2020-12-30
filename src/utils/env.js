const liveHost = "https://us-central1-mealstogo-b2612.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-b2612/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
