'use strict';

// Declare app level module which depends on views, and components
angular.module('phSite', [
  'ngRoute',
  'phSite.game'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/game/:name",
      {
          templateUrl: 'app/game/detail/gameDetail.tpl.html',
          controller: 'GameDetailCtrl'
      })
      .when('/gameList', {
            templateUrl: 'app/game/list/gameList.tpl.html',
            controller: 'GameListCtrl'
       })
      .otherwise({redirectTo: '/gameList'});
}]);