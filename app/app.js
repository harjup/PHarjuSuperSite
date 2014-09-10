'use strict';

// Declare app level module which depends on views, and components
angular.module('phSite', [
  'ngRoute',
  'phSite.gameList',
  'phSite.view2',
  'phSite.game.card'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/game/:name",
      {
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl'
      })
      .when('/gameList', {
            templateUrl: 'gameList/gameList.tpl.html',
            controller: 'gameListCtrl'
       });
      //.otherwise({redirectTo: '/gameList'});
}]);