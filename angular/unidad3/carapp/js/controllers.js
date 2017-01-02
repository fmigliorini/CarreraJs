'use strict';

var carAppControllers = angular.module('carAppControllers', []);

/* TEST HTTP REQUEST ON CONTROLLER 
carAppControllers.controller('CarListCtrl', ['$scope', 'Car', 
	function($scope, Car){
		Car.getCars().success(function(data){
			$scope.cars = data;	
		});
	}]);	
*/

/** TEST HTTP RESQUEST ON CONTROLLER 
carAppControllers.controller('CarListCtrl', ['$scope', 'Car','$http',
	function($scope, Car, $http){
		$http.get('cars/cars.json').success(function(data){
			$scope.cars = data;
		});
	}]);
**/

/* TEST HTTP REQUEST RESTFULL **/
carAppControllers.controller('CarListCtrl', ['$scope', 'Car', 
	function($scope, Car){
		$scope.cars = Car.query();
		$scope.orderPro	= 'model';
	}]);	


carAppControllers.controller('CarDetailCtrl', ['$scope', '$routeParams', 'Car',
	function($scope, $routeParams, Car){
		$scope.car = Car.get({carId: $routeParams.carId}, function(car){
			$scope.mainImageUrl = car.image[0];
		});
		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		}
	}])