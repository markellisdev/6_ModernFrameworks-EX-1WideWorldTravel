"use strict";

app.controller("bookCtrl", function($scope, GuideFactory){
	$scope.books = [];

	GuideFactory.getBooks()
	.then( (data) => {
		console.log("getting data?", data);
		$scope.books = data.guides; //data.guides to return array inside object
		$scope.$apply();

	});

});

// ng-repeat="book in books"
