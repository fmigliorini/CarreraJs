'use strict';

var carAppServices = angular.module('carAppServices',[]);

carAppServices.factory('Car', [ '$http',
	function($http){
		return {
			notify: function(msg){
				alert(msg);
			},
			getCars: function(){
				return $http.get('cars/cars.json');
			}
		};
	}]);