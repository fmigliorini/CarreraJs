'use strict';

var carListApp = angular.module('carListAppController', []);

carListApp.controller('ListController', function($scope){
	$scope.AppTitle = "CarListApp 2014";
	$scope.formHeader = "Agregar un carro a tu increíble lista";
	$scope.deleteText = "Eliminar";
	$scope.addText = "agregar";
	$scope.formTextBrand = "Marca";
	$scope.formTextYear = "Año";

	$scope.brand;
	$scope.year;

	$scope.cars = [
		{
			brand : "BMW M4 Coupe",
			year : "2014"
		},
		{
			brand : "Chevrolet Corvette Stringray",
			year : "2013"
		},
		{
			brand : "Ford Mustang",
			year : "2015"
		},
		{
			brand : 'McLaren F1',
			year : '2010'
		},
		{
			brand : 'Chevrolet Camaro SS',
			year : '2011'
		},
		{
			brand : 'Chevrolet Corvette Z06',
			year : '2013'
		},
		{
			brand : 'Ferrari California',
			year : '2008'
		}
	];

	$scope.addCar = function(){
		var car = {
			brand : $scope.brand,
			year : $scope.year
		};
		$scope.cars.push(car);
	};

	$scope.deleteCar = function(idx){
		$scope.cars.splice(idx,1);
	}
});