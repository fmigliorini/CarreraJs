'use strict';

var RealTemApp = angular.module('RealTempAppServices', []);

RealTemApp.factory('Temp',function(){
	return {
		celciusToFarenheit : function(temp){
			var tempInFarenheit = 0.0;
			var tempInCelcius = temp;
			tempInFarenheit = tempInCelcius * 9/5 + 32;
			return tempInFarenheit;
		},
		celciusToKelvin : function(temp){
			var tempInKelvin = 0;
			var tempInCelcius = temp;
			tempInKelvin = temp -273.15;
			return tempInKelvin;
		}
	};
})