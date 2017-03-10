import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDB6KJwGm1F_qXu3tHekXCTXKu10IM1G7s",
    authDomain: "lunch-rush-with-fem.firebaseapp.com",
    databaseURL: "https://lunch-rush-with-fem.firebaseio.com",
    storageBucket: "lunch-rush-with-fem.appspot.com",
    messagingSenderId: "884237205684"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
