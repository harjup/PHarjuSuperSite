'use strict';

angular.module('phSite.game.detail', ['ngRoute'])
.controller('GameDetailCtrl', function($scope, $http, $routeParams) {
        var vm = $scope;
        vm.gameName = $routeParams.name;

        //TODO: Abstract into repository
        $http.get('assets/data/content.json').then(function (result) {
            var data = result.data;
            var gameCardContent = data.gameCardContent;
            var detailContent = data.detailContent;

            vm.gameInfoSet = gameCardContent;

            vm.info = detailContent[vm.gameName.toLowerCase()];
        });
});