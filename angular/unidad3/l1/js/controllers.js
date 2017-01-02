'use strict';

var realTemApp = angular.module('RealTempAppController',[]);

realTemApp.controller('TempController', function($scope, Temp){
	$scope.tempInCelcius = 0.0;
	$scope.resultInFarenheit = 0.0;
	$scope.resultInKelvins = 0.0;

	$scope.convertTemperatures = function(){
		$scope.resultInFarenheit = Temp.celciusToFarenheit($scope.tempInCelcius);
		$scope.resultInKelvins = Temp.celciusToKelvin($scope.tempInCelcius);
	};
});