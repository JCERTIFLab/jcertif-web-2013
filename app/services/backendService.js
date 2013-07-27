app.factory('backendService', ['$http', function ($http) {

    var sponsors = undefined;
    var speakers = undefined;

    function findSponsors(callback) {
        $http.jsonp(backendUrl + '/sponsor/list?jsonp=JSON_CALLBACK')
            .success(function (result) {
                sponsors = result;
                callback(result);
            });
    }

    function findSpeakers(callback) {
        $http.jsonp(backendUrl + '/speaker/list?jsonp=JSON_CALLBACK')
            .success(function (result) {
                speakers = result;
                callback(result);
            });
    }

    return {
        getSponsors : function(callback) {
            if(sponsors == undefined) {
                findSponsors(callback);
            } else {
                callback(sponsors);
            }
        },
        getSpeakers : function(callback) {
            if(speakers == undefined) {
                findSpeakers(callback);
            } else {
                callback(speakers);
            }
        }
    };

}]);