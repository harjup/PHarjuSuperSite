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
          templateUrl: 'game/detail/gameDetail.tpl.html',
          controller: 'View2Ctrl'
      })
      .when('/gameList', {
            templateUrl: 'game/list/gameList.tpl.html',
            controller: 'gameListCtrl'
       })
      .otherwise({redirectTo: '/gameList'});
}]);