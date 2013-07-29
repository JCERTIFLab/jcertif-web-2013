'use strict';

app.controller('SessionsCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {

    backendService.getSessions(function(sessionsList) {
        $scope.sessions = sessionsList;
    });

    $scope.open = function(speaker){
        $scope.selectedSpeaker = speaker;
        $scope.shouldBeOpen = true;
    }

    $scope.close = function(){
        $scope.shouldBeOpen = false;
    }

    $scope.opts = {
        backdropFade: true,
        dialogFade:true
    };
}]);