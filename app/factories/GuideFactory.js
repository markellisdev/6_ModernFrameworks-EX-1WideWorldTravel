"use strict";

app.factory("GuideFactory", function() {

	let getBooks = function(){

		let books = [];
		return new Promise(function(resolve, reject){
			$.ajax({
				url: "../data/guides.json"
			}).done(function(data){
				console.log("data", data);
				resolve(data); //only resolve data in factory
			});
		});
	};

	return {getBooks};
});