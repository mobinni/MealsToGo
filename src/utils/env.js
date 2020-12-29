export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = isDevelopment
  ? "http://localhost:5001/mealstogo-b2612/us-central1s"
  : "https://us-central1-mealstogo-b2612.cloudfunctions.net";
