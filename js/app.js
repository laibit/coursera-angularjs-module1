(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {
  	//$scope.dishes = $scope.dishes.replace(/ /g,''); // alt way for remove all white spaces
  	$scope.dishes = $scope.dishes.trim();

  	// the next two lines are intended to check if after removing all white spaces and
  	// all commas, the result is an empty string. If it is, it should be considered 'Empty'
  	var aux = $scope.dishes.replace(/ /g,''); // cloned list whith all white spaces removed
  	aux = aux.replace(/,/g,''); // then remove all the commas

  	if($scope.dishes == "" || aux == "") {
  		$scope.message = "Please enter data first";
  		$scope.messageColor = "red";
  	}
  	else {
	  	var dishes = $scope.dishes.split(",");

	  	if(dishes.length <= 3)
	      $scope.message = "Enjoy!";
	    else
	      $scope.message = "Too much!"; 

	    $scope.messageColor = "green";	
  	}

  };
}

})();
