angular.module('app')
  .controller('AuthCtrl', function ($location, firebaseFactory) {
    const auth = this // auth is controllerAS

    auth.login = function () {
      console.log("fire login function from auth.ctrl.js", auth.email, auth.password);
      firebaseFactory.login(auth.email, auth.password)
    }

    auth.register = function () {
      firebaseFactory.register(auth.email, auth.password)
    }
  })
