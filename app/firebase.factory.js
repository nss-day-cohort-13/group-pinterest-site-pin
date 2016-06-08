angular.module('app')
  .factory('firebaseFactory', () => {

    let currentUser = null

    return {

    // .auth() - Authenticates a Firebase client using the provided authentication token or Firebase Secret.
    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //         // User is signed in
    //         var email = user.email;
    //         // ...
    //     } else {
    //         // User is not signed in
    //         // ...
    //     }
    // });
    // firebase.auth().signInWithEmailAndPassword(email, password);
    // }






    //
    var ref = new Firebase("https://site-pin.firebaseio.com");
     ref.auth(function(authData) {
      if (authData) {
        console.log("Authenticated with uid:", authData.uid);
      } else {
        console.log("Client unauthenticated.")
      }
    });
    // returning currentUser so it can be accessed through 'firebaseFactory' in other files
    getUser () {
      return currentUser;
    }



    // var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
    // ref.auth("AUTH_TOKEN", function(error, result) {
    //   if (error) {
    //     console.log("Authentication Failed!", error);
    //   } else {
    //     console.log("Authenticated successfully with payload:", result.auth);
    //     console.log("Auth expires at:", new Date(result.expires * 1000));
    //   }
    // });

  })






