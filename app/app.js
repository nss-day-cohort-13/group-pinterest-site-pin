angular.module('app', ['ngRoute', 'ui.bootstrap'])
  console.log("hello");

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyDg3zBig4U-92EYcbDUvZrOofB8A_UOAN8",
    authDomain: "site-pin.firebaseapp.com",
    databaseURL: "https://site-pin.firebaseio.com",
    storageBucket: "site-pin.appspot.com",
  });
firebase.auth().signOut()