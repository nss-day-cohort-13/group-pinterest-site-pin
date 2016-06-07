angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/login.html'
      })
      .when('/profile', {
        templateUrl: 'app/partials/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile',
      })
      .when('/hello', {
        templateUrl: 'app/partials/hello.html',
        controller: 'HelloCtrl',
        controllerAs: 'hello',
      })
      .when('/hello/:name', {
        templateUrl: 'app/partials/hello-person.html',
        controller: 'HelloPersonCtrl',
        controllerAs: 'helloPerson',
      })
      .otherwise('/')
  })
