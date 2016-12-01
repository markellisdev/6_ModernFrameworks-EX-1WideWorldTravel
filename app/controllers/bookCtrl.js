"use strict";

app.controller("bookCtrl", function($scope){
	$scope.books = [];

	function getBooks(){
		return new Promise(function(resolve, reject){
			$.ajax({
				url: "data/guides.json"
			}).done(function(data){
				console.log("data", data);
				$scope.books = data;
				console.log("book title", $scope.books.guides[1].title);
				$scope.$apply();

			});
		});
	}
getBooks();
});

// ng-repeat="book in books"
