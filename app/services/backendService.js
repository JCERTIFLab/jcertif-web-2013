app.factory('backendService', ['$http', function ($http) {

    var backendData = {};
    var speakers = undefined;
    var sessions = undefined;



    function findAll(entity, callback) {
        if(backendData[entity] == undefined) {
            $http.jsonp(backendUrl + '/' + entity + '/list?jsonp=JSON_CALLBACK')
                .success(function (result) {
                    backendData[entity] = result;
                    callback(result);
                });
        } else {
            callback(backendData[entity]);
        }

    }

    function initSessionsAndSpeakers(callback) {
        findAll('room', function(allRooms) {
            $http.jsonp(backendUrl + '/speaker/list?jsonp=JSON_CALLBACK')
                .success(function (result) {
                    speakers = result;
                    $http.jsonp(backendUrl + '/session/list?jsonp=JSON_CALLBACK')
                        .success(function (result) {
                            sessions = getValidSessions(result);
                            mergeSessionsAndSpeakers(speakers, sessions, allRooms);
                            callback();
                        });
                });
        });

    }

    function getValidSessions(sessions) {
        var sessionsLength = sessions.length;
        var validSessions = [];
        for(var iSes=0;iSes < sessionsLength; iSes++) {
            if(sessions[iSes].start) {
                validSessions[validSessions.length] = sessions[iSes];
            }
        }

        return validSessions;
    };

    function mergeSessionsAndSpeakers(speakers, sessions, allRooms) {
        var sessionsLength = sessions.length;
        var speakersLength = speakers.length;
        for(var iSes=0;iSes < sessionsLength; iSes++) {
            var spLength = sessions[iSes].speakers.length;
            sessions[iSes].roomName = getRoomName(sessions[iSes].room, allRooms);
            for(var iSp=0;iSp < spLength; iSp++) {
                var emailSp = sessions[iSes].speakers[iSp];
                for(var iSpk=0;iSpk < speakersLength; iSpk++) {
                    if(speakers[iSpk].email === emailSp) {
                        joinSpeakerAndSession(speakers[iSpk], sessions[iSes]);
                    }
                }
            }
        }
    }

    function getRoomName(idRoom, allRooms) {
        for(var i=0;i < allRooms.length; i++) {
            if(idRoom === allRooms[i].id) {
                return allRooms[i].name;
            }
        }
    }



    function joinSpeakerAndSession(speaker, session) {

        if(session.fullSpeakers == undefined) {
            session.fullSpeakers = [speaker];
        } else {
            session.fullSpeakers[session.fullSpeakers.length] = speaker;
        }
    }

    function sendNewPassword(email, callback){
        $http.jsonp(backendUrl + '/participant/' + email + '/lostpassword?jsonp=JSON_CALLBACK')
            .success(function (result) {
                callback();
            }
        ).error(function (result) {
                callback('ERR');
            });
    }

    return {
        getSponsors : function(callback) { findAll('sponsor', callback); },
        getCategories : function(callback) { findAll('ref/category', callback); },
        getRooms : function(callback) { findAll('room', callback); },
        sendNewPassword : function(email, callback) {sendNewPassword(email, callback)},
        getSpeakers : function(callback) {
            if(speakers == undefined) {
                initSessionsAndSpeakers(function getSp(){
                    return callback(speakers);
                });
            } else {
                callback(speakers);
            }
        },
        getSessions : function(callback) {
            if(sessions == undefined) {
                initSessionsAndSpeakers(function getSp(){
                    return callback(sessions);
                });
            } else {
                callback(sessions);
            }
        }

    };
}]);