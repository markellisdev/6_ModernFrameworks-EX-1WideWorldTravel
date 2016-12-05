"use strict";

var app = angular.module("WorldWideTravel", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/guide-list.html',
		controller: 'bookCtrl'
	});
});