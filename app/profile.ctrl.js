angular.module('app')
  .controller('ProfileCtrl', function (firebaseFactory) {
    const profile = this // profile is controllerAS

    profile.user = firebaseFactory.getUser()
    console.log("yup",profile.user );


  })