'use strict';
function ShowCtrl($scope, $routeParams, $http) {

	$scope.$on('$viewContentLoaded', function() {
	});

	$scope.loading = true;

	$scope.models = {};

	$scope.order = [];

	$scope.init = function(){
		$scope.order = $routeParams.ids.split(',');

		$http.jsonp($scope.SERVICE_ENDPOINT+'select * from cell_model where id in ('+$routeParams.ids+')').
		    success(function(data, status, headers, config) {
		        
		        angular.forEach(data, function(value, key){
				  $scope.models[''+value.id] = value;
				});

				$scope.loading = false;

		    }).
		    error(function(data, status, headers, config) {
		        alert('error');
		    });
		
    }

    $scope.init();

}


