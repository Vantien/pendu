var router = angular.module('router', ['ngRoute']);

router.config(['$routeProvider', function($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl : 'views/input.html',
                controller: 'inputController'
             })
            .when('/pendu/:name', {
                templateUrl : 'views/pendu.html',
                controller: 'penduController'
            });
          //  .otherwise({redirectTo : '/'});
}]);