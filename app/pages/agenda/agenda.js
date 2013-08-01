'use strict';

app.controller('AgendaCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {

    backendService.getSessions(function(sessionsList) {

        var days = [];
        var sessLength = sessionsList.length;
        for(var i = 0; i < sessLength; i++) {
            var startDate = getDate(sessionsList[i].start);
            if(!contains(days, startDate)) {
                days[days.length] = startDate;
            }
        }

        var coolDays = [];

        function addSession(rooms, session) {

            if(isRoomsHasSessionRoom(rooms, session)) {
                for(var i=0; i < rooms.length; i++) {
                    if (rooms[i].name == session.room) {
                        rooms[i].sessions[rooms[i].sessions.length] = session;
                    }
                }
            } else {
                rooms[rooms.length] = {
                    name : session.room,
                    label : session.roomName,
                    sessions : [session]
                }
            }


        }

        function isRoomsHasSessionRoom(rooms, session) {
            for(var i=0; i < rooms.length; i++) {
                if (rooms[i].name == session.room) {
                    return true;
                }
            }
            return false;
        }


        for(var j = 0; j < days.length; j++) {
            var roomsDay=[];
            for(var i = 0; i < sessLength; i++) {
                var startDate = getDate(sessionsList[i].start);
                if(days[j] == startDate) {
                    addSession(roomsDay,sessionsList[i]);
                }
            }
            coolDays[coolDays.length] = {
                day : days[j],
                rooms : roomsDay
            };
        }



        $scope.days = coolDays;
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
        return dateHour.substr(0, 5);
    }

    $scope.openSession = function(session){
        $scope.selectedSession = session;
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