angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'AuthCtrl',
        controllerAs: 'auth',
        templateUrl: 'app/partials/login.html'
      })
      .when('/profile', { // ~ /:id/userProfile~
        controller: 'ProfileCtrl',
        controllerAs: 'profile',
        templateUrl: 'app/partials/profile.html',
      })
      .when('/profile/board', { // ~ /:id/userProfile/:id/userboard
        controller: 'BoardCtrl',
        controllerAs: 'board',
        templateUrl: 'app/partials/hello.html',
      })
      .otherwise('/')
  })
