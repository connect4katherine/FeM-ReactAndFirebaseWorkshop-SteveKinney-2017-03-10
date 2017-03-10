import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDp8FAxb3TiwUJj3cwY4kAuegNFJzqHIpQ",
  authDomain: "spirit-animal-look-book-9d426.firebaseapp.com",
  databaseURL: "https://spirit-animal-look-book-9d426.firebaseio.com",
  storageBucket: "spirit-animal-look-book-9d426.appspot.com",
  messagingSenderId: "1078087573977"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
