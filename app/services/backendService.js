app.factory('backendService', ['$http', function ($http) {

    var sponsors = undefined;
    var speakers = undefined;
    var sessions = undefined;
    var categories = undefined;

    function findSponsors(callback) {
        $http.jsonp(backendUrl + '/sponsor/list?jsonp=JSON_CALLBACK')
            .success(function (result) {
                sponsors = result;
                callback(result);
            });
    }

    function findCategories(callback) {
        $http.jsonp(backendUrl + '/ref/category/list?jsonp=JSON_CALLBACK')
            .success(function (result) {
                categories = result;
                callback(result);
            });
    }

    function initSessionsAndSpeakers(callback) {
        $http.jsonp(backendUrl + '/speaker/list?jsonp=JSON_CALLBACK')
            .success(function (result) {
                speakers = result;
                $http.jsonp(backendUrl + '/session/list?jsonp=JSON_CALLBACK')
                    .success(function (result) {
                        sessions = result;
                        mergeSessionsAndSpeakers(speakers, sessions);
                        callback();
                    });
            });
    }

    function mergeSessionsAndSpeakers(speakers, sessions) {
        var sessionsLength = sessions.length;
        var speakersLength = speakers.length;
        for(var iSes=0;iSes < sessionsLength; iSes++) {
            var spLength = sessions[iSes].speakers.length;
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

    function joinSpeakerAndSession(speaker, session) {

        if(session.fullSpeakers == undefined) {
            session.fullSpeakers = [speaker];
        } else {
            session.fullSpeakers[session.fullSpeakers.length] = speaker;
        }
    }

    return {
        getSponsors : function(callback) {
            if(sponsors == undefined) {
                findSponsors(callback);
            } else {
                callback(sponsors);
            }
        },
        getCategories : function(callback) {
            if(categories == undefined) {
                findCategories(callback);
            } else {
                callback(categories);
            }
        },
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