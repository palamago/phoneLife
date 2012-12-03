/*globals $,_*/
'use strict';
function CreateCtrl($scope, $routeParams, $http) {

	$scope.selectedModels = [];

	$scope.shareUrl = '';

	$scope.$on('$viewContentLoaded', function() {
        function log( message ) {
            $( "<div>" ).text( message ).prependTo( "#log" );
            $( "#log" ).scrollTop( 0 );
        }
 
        $( "#mobile" ).autocomplete({
            source: function( request, response ) {
	            $http.jsonp($scope.SERVICE_ENDPOINT+'select name, img, id from cell_model where name LIKE "%'+request.term+'%"').
				    success(function(data, status, headers, config) {
				   	     
						response( $.map( data, function( item ) {
                            return {
                                label: item.name,
                                value: item.id,
                                img: item.img
                            }
                        }));

				    }).
				    error(function(data, status, headers, config) {
				        alert('error');
				    });

            },
            minLength: 3,
            select: $scope.selectModel,
            open: function() {
                $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
            },
            close: function() {
                $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
            },
            delay: 500
        }).data( "autocomplete" )._renderItem = function( ul, item ) {
            return $( "<li>" )
                .data( "item.autocomplete", item )
                .append( "<a>" + item.label + "<br><img height='100' src='" + item.img + "' /></a>" )
                .appendTo( ul );
        };

	});

	$scope.selectModel = function(event, ui){
		event.preventDefault;
        $scope.selectedModels.push(ui.item);
        $scope.refreshUrl();
        $("#mobile").val('');
        $scope.$digest(); //refresh binding
        return false;
    }

    $scope.deleteModel = function(event, ui){
    }

    $scope.refreshUrl = function(){
    	if($scope.selectedModels.length>0){
    		$('#shareUrl').removeAttr('disabled');
    		var ids = [];
	    	angular.forEach($scope.selectedModels, function(value, key){
			  ids.push(value.value);
			});
	    	$scope.shareUrl = $scope.BASE_URL + $scope.HOME_URL + '/show/'+ids.join(',');
    	}else{
    		$scope.shareUrl = '';
    	}

        return false;
    }

}


