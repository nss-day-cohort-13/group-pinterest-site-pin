angular.module('app')
  .factory('firebaseFactory', ($location, $timeout, $http) => {

    let currentUser = null

    // Listener that fires on logout or login state of change
    firebase.auth().onAuthStateChanged(function(user) {
      console.log("fired state of change fucntion on firebase.factory.js");
      if (user) {
        currentUser = user;
        $location.path('/profile');
        $timeout()
      } else {
        currentUser = null;
        $location.path('/');
        $timeout()
      }
    });

    createUser = function (user) {
      let newUser = {
        email: user.email,
        uid: user.uid
      }

      $http.post(`https://site-pin.firebaseio.com/app/user.json`, newUser).then();


    }

    return {
      // register function
      register (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => createUser(user))
        .catch(function(error) {
          // Handle Errors here.
          console.log("Error via register function", error.message);
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      },
      // login function
      login (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          console.log("Error via loging function", error.message);
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      },

      // returning currentUser so it can be accessed through 'firebaseFactory' in other files
      getUser () {
        return currentUser;
      }

    }

})





