'use strict';

var carAppControllers = angular.module('carAppControllers', []);

carAppControllers.controller('CarListCtrl', ['$scope', 
	function($scope){
		alert("Welcome To car App");
	}]);	

var testAppControllers = angular.module('testAppControllers',[]);

testAppControllers.controller('TestCtrl',['$scope',
	function($scope){
		alert("Welcome to Test");
	}]);