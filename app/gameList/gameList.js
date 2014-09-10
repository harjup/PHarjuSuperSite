'use strict';

angular.module('phSite.gameList', ['ngRoute'])
.controller('gameListCtrl', function($scope) {
        $scope.gameInfoSet = [
            {
                 title: "Ponbox",
                 secondaryTitle: "A simple rhythm game",
                 tertiaryTitle: "My first game I was ever proud of...",
                 style: {'background-color': 'darkslateblue'},
                 shortName: "Ponbox"

            },
            {
                title: "Conflict of the Orbs",
                secondaryTitle: "Sonic Physics Platformer",
                tertiaryTitle: "My first platformer...",
                style: {'background-color': 'darkolivegreen'},
                shortName: "Orbs"
            },
            {
                title: "SleepKnight",
                secondaryTitle: "An adventure edutainment title",
                tertiaryTitle: "Learn French, teach hens how to sleep.",
                style: {'background-color': 'darkslateblue'},
                shortName: "Sleep"
            },
            {
                title: "Wizard Broadcast Special",
                secondaryTitle: "Webby TV Adventure Thing",
                tertiaryTitle: "Play with a friend.",
                style: {'background-color': 'darkolivegreen'},
                shortName: "Wizard"
            }
        ];
});