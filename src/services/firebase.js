import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAC_-i_3CS3Ie4Np3lmLYaLyfFrKWnlp1o",
  authDomain: "reactdemoapp-70f51.firebaseapp.com",
  databaseURL: "https://reactdemoapp-70f51.firebaseio.com",
  storageBucket: "reactdemoapp-70f51.appspot.com",
  messagingSenderId: "1051245483098"
};
var fire = firebase.initializeApp(config);
export default fire;