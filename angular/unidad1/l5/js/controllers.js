'use strict';

var RandomizeAppController = angular.module('RandomizeAppController', []);

RandomizeAppController.controller('MainController', ['$scope',function($scope){
	$scope.randomNumber = 0.0;
	$scope.getNumber = function(){
		$scope.randomNumber = "Aquí tienes tu número : " + Math.random();
	}
}]);