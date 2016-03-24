var APP = angular.module('App', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $routeProvider
    .when('/', {
        templateUrl:'templates/home.html'
    })
    .when('/trabalhos', {
        templateUrl:'templates/trabalhos.html'
    })
    .otherwise({redirectTo:'/'});
}]);