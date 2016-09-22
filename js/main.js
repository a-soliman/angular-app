var app = angular.module('computer', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'ServicesCtrl'
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.when('/services', {
		templateUrl: 'views/services.html',
		controller: 'ServicesCtrl'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl'
	})
	.otherwise({
		redirectTo: '/' 
	})
})

app.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('services.json').then(function(response) {
		$scope.services = response.data
	})
}])