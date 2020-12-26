import * as firebase from "firebase";

const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
