'use strict';

var carAppControllers = angular.module('carAppControllers', []);

carAppControllers.controller('CarListCtrl', ['$scope', 
	function($scope, Car){
		$scope.cars = [{
			"name" : "NEW QASHQA",
			"snippet" : "MADE WIDTH YOU IN MIND TO GIVE YOU THE HIGHEST QUALITY"
		},
		{
			"name" : "Veloster",
			"snippet" : "SPORTY LIKE A COUPE. ROOMY LIKE A SEDAN."
		},
		{
			"name" : "Navara",
			"snippet" : "The Navara is all about freedom including freedom of choice."
		}];
	}]);	
