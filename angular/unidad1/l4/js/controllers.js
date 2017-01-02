'use strict';

var CookieAppController = angular.module('CookieAppController', []);

CookieAppController.controller('MainController',['$scope', 'cookie',
	function($scope , cookie){
		$scope.value = "";
		$scope.saveCookie = function(value){
			cookie.write('cap_value',value)
		};
		$scope.getCookie = function(){
			return cookie.read('cap_value');
		};
	}]).
	factory('cookie', [function(){ // SERVICIO PARA COOKIE
		return {
			read : function(name){
				var i,c, nameEQ = name + "=";
				var ca = document.cookie.split(';');
				for(i=0; i<ca.length;i++){
					c = ca[i];
					while(c.charAt(0) == ' '){
						c = c.substring(1,c.length)
					}
					if(c.indexOf(nameEQ) == 0){
						return c.substring(nameEQ.length, c.length);
					}
				}
				return "";
			},
			write : function(name,value){
				var date, expires;
				date = new Date();
				date.setTime(date.getTime()+ (72*60*60*1000));
				expires = "; expires = "+ date.toGMTString();
				document.cookie= name+ "=" + value + expires + "; path=/";
			}
		}
	}]);