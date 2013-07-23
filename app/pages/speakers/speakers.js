'use strict';

app.controller('SpeakersCtrl', ['$http', '$scope', '$dialog', function ($http, $scope, $dialog) {
    $http.defaults.useXDomain = true;
    if ($scope.speakers == undefined) {
        $http.get(backendUrl + '/speaker/list')
            .success(function (result) {
                $scope.speakers = result;
            });
    }

    $scope.openDialog = function(speaker){
        var dialogSpeaker = $dialog.dialog({
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            dialogFade: false,
            resolve: {
                speaker: function(){
                    return angular.copy(speaker);
                }
            }
        });
        dialogSpeaker.open('pages/speakers/speakerDetails.html', 'SpeakerDetailsCtrl');
    };

}]);

app.controller('SpeakerDetailsCtrl', ['$scope', '$dialog', 'speaker', function($scope, dialog, speaker){
   $scope.speaker = speaker;
}]);