'use strict';

app.controller('AgendaCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {

    backendService.getSessions(function(sessionsList) {

        var days = [];
        var sessLength = sessionsList.length;
        for(var iSess = 0; iSess < sessLength; iSess++) {
            var startDate = getDate(sessionsList[iSess].start);
            if(!contains(days, startDate)) {
                days[days.length] = startDate;
            }

        }
        $scope.days = ['09/09', '10/09', '11/09', '12/09', '13/09', '14/09', '15/09'];
        $scope.sessions = sessionsList;
    });

    function contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }

    function getDate(dateHour) {
        return dateHour.substr(0, 10);
    }

}]);