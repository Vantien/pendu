var router = angular.module('router', ['ngRoute']);

router.config(['$routeProvider', function($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl : 'input.html',
                controller: 'inputController'
             })
            .when('/pendu/:name', {
                templateUrl : 'pendu.html',
                controller: 'penduController'
            })
            .otherwise({redirectTo : '/'});
}]);