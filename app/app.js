angular.module('app', ['ngRoute', 'ui.bootstrap'])
  console.log("hello");
  // .constant('FB_URL', 'https://site-pin.firebaseio.com/app/user.json')

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyDg3zBig4U-92EYcbDUvZrOofB8A_UOAN8",
    authDomain: "site-pin.firebaseapp.com",
    databaseURL: "https://site-pin.firebaseio.com",
    storageBucket: "site-pin.appspot.com",
  });

  // hardcoded logout, comment out / delete once we make a logout button
  firebase.auth().signOut()