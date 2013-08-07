app.factory('loginService', ['$http','$rootScope', function ($http, $rootScope) {

    function logout(){
        $rootScope.logged = false;
        $rootScope.user = undefined;
        $rootScope.access_token = undefined;
    }

    function saveLogin(participant, token){
        $rootScope.logged = true;
        $rootScope.user = participant;
        $rootScope.access_token = token.access_token;
    }

    function login(email, password, callback) {
        $http.post(
            backendUrl + '/participant/login?jsonp=JSON_CALLBACK',
            {
                email : email,
                password : password
            }
        ).success(function (token) {
                $http.jsonp(backendUrl + '/participant/get/' + email + '?access_token=' + token.access_token + '&provider=userpass&jsonp=JSON_CALLBACK')
                    .success(function (participant) {
                        saveLogin(participant, token);
                        callback(participant, undefined);
                    }
                ).error(function (result) {
                        logout();
                        callback(undefined, 'ERR');
                    });
            }
        ).error(function (result) {
                logout();
                callback(undefined, 'ERR');
            });
    }

    return {
        login : function(email, password, callback) {
            login(email, password, callback);
        },
        logout : function(){
           logout();
        }
    };
}]);