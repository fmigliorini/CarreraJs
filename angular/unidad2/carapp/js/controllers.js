'use strict';

var carAppControllers = angular.module('carAppControllers', []);


carAppControllers.controller('CarListCtrl', ['$scope', 'Car',
	function($scope, Car){
		Car.getCars().success(function(data){
			$scope.cars = data;	
		});
	}]);	

/** TEST HTTP RESQUEST ON CONTROLLER
carAppControllers.controller('CarListCtrl', ['$scope', 'Car','$http',
	function($scope, Car, $http){
		$http.get('cars/cars.json').success(function(data){
			$scope.cars = data;
		});
	}]);
**/
