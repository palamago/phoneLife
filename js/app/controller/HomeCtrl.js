/*globals $,_*/
'use strict';
function HomeCtrl($scope, $routeParams, $http) {

	$scope.brands = [];

	$scope.$on('$viewContentLoaded', function() {
	});

	$scope.init = function(){
		$http.jsonp($scope.SERVICE_ENDPOINT+'select * from cell_brand limit 20').
		    success(function(data, status, headers, config) {
		        $scope.brands = data; 
		    }).
		    error(function(data, status, headers, config) {
		        alert('error');
		    });
    }

    $scope.init();

}


