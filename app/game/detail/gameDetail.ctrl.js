'use strict';

angular.module('phSite.game.detail', ['ngRoute'])
.controller('GameDetailCtrl', function($scope, $http, $routeParams) {
        var gameName = $routeParams.name;

        //TODO: Abstract into repository
        $http.get('../assets/data/content.json').then(function (result) {
            var data = result.data;
            var gameCardContent = data.gameCardContent;
            var detailContent = data.detailContent;

            $scope.gameInfoSet = gameCardContent;
            $scope.detailTitle = detailContent[gameName.toLowerCase()].fullTitle;
        });



});