/**
 * Created by Paul on 9/4/2014.
 */
(function () {

var cardModule = angular.module('phSite.game.card', []);

    cardModule.directive('phGameCard', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/game/list/gameCard.tpl.html',
            controller: 'gameCardCtrl',
            scope: {
                gameInfo: '='
            }
        };
    });

    cardModule.directive('phGameCardSmall', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/game/list/gameCardSmall.tpl.html',
            controller: 'gameCardCtrl',
            scope: {
                gameInfo: '='
            }
        };
    });


    cardModule.controller('gameCardCtrl', function($scope, $location) {
        $scope.cardClicked = function () {
            var targetPath = "game/" + $scope.gameInfo.shortName;
            $location.path(targetPath);
        };
    });
})();