'use strict';

angular.module('phSite.game.list', ['ngRoute'])
.controller('GameListCtrl', function($scope, $http) {
        //TODO: Abstract into repository
        $http.get('assets/data/content.json').then(function (result) {
            var data = result.data;
            $scope.gameInfoSet = data.gameCardContent;
        });
});