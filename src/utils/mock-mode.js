export const firebaseConfig = {
  apiKey: "<fill in your own>",
  authDomain: "<fill in your own>",
  projectId: "<fill in your own>",
  storageBucket: "<fill in your own>",
  messagingSenderId: "<fill in your own>",
  appId: "<fill in your own>",
};

export const isMockMode = firebaseConfig.apiKey.startsWith("<");
