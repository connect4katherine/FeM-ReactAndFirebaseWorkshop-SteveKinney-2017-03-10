import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAnrgepCUF_sd_lXp9-eoxter4vz1dYb6M",
  authDomain: "first-flight-with-fem-8cbe3.firebaseapp.com",
  databaseURL: "https://first-flight-with-fem-8cbe3.firebaseio.com",
  storageBucket: "first-flight-with-fem-8cbe3.appspot.com",
  messagingSenderId: "276798688908"
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
