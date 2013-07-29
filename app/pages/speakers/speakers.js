'use strict';

app.controller('SpeakersCtrl', ['$http', '$scope', '$dialog', 'backendService', function ($http, $scope, $dialog, backendService) {

    backendService.getSpeakers(function(speakersList) {
        $scope.speakers = speakersList;
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