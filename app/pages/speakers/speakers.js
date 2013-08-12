'use strict';

app.controller('SpeakersCtrl', ['$http', '$scope', '$dialog', 'backendService', function ($http, $scope, $dialog, backendService) {

    backendService.getSpeakers(function(speakersList) {
        var speakersWithSession = [];
        angular.forEach(speakersList, function(speaker){
            if(speaker.sessions != undefined) {
                speakersWithSession[speakersWithSession.length] = speaker;
            }

        });
        $scope.speakers = speakersWithSession;
    });


    $scope.openDialog = function(speaker){
        var dialogSpeaker = $dialog.dialog({
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            backdropFade: true,
            dialogFade:true,
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