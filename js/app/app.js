var phoneLife = angular.module('phone-life', [], function($routeProvider, $locationProvider){

	//ROUTES
	$routeProvider.
    when('/home',           {templateUrl: './partials/home.html',         controller: HomeCtrl}).
    when('/create',         {templateUrl: './partials/create.html',       controller: CreateCtrl}).
    when('/show/:ids',      {templateUrl: './partials/show.html',         controller: ShowCtrl}).
    otherwise({redirectTo: '/home'});

});

phoneLife.run(function($rootScope,$http) {

  $rootScope.BASE_URL = 'http://arena.palamago.com.ar'; 
  $rootScope.HOME_URL =  '/phoneLife/#';

  //DEV
  //$rootScope.BASE_URL = 'http://localhost'; 
  //$rootScope.HOME_URL =  '/arena/phoneLife/#';

  $rootScope.SERVICE_ENDPOINT = "https://api.scraperwiki.com/api/1.0/datastore/sqlite?format=jsondict&name=test_357&callback=JSON_CALLBACK&query=";

});