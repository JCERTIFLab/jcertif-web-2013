app.factory('loginService', ['$http','$rootScope', '$cookieStore', function ($http, $rootScope, $cookieStore) {

    var cookieAccessToken = $cookieStore.get('access_token');
    var cookieEmail = $cookieStore.get('user_email');
    var cookieProvider = $cookieStore.get('provider');

    if(cookieAccessToken && cookieEmail && cookieProvider) {
        findParticipant(cookieEmail,cookieAccessToken, cookieProvider,
            function(participant, error) {
                if(error == undefined) {
                    saveLogin(participant, cookieAccessToken, cookieProvider);
                } else {
                    logout();
                }

            });
    }

    function logout(){
        $rootScope.logged = false;
        $rootScope.user = undefined;
        $rootScope.access_token = undefined;
        $rootScope.provider = undefined;
        $cookieStore.remove('access_token');
        $cookieStore.remove('user_email');
        $cookieStore.remove('provider');
    }

    function saveLogin(participant, access_token, provider){
        $rootScope.logged = true;
        $rootScope.user = participant;
        $rootScope.access_token = access_token;
        $rootScope.provider = provider;
        $cookieStore.put('access_token',access_token);
        $cookieStore.put('user_email',participant.email);
        $cookieStore.put('provider', provider);
    }

    function findParticipant(email, access_token, provider, callback) {
        $http.jsonp(backendUrl + '/participant/get/' + email + '?access_token=' + access_token + '&provider=' + provider + '&jsonp=JSON_CALLBACK')
            .success(function (participant) {
                saveLogin(participant, access_token, provider);
                callback(participant, undefined);
            }
        ).error(function (result) {
                logout();
                callback(undefined, 'ERR');
            });
    }

    function login(email, password, callback) {
        $http.post(
            backendUrl + '/participant/login?jsonp=JSON_CALLBACK',
            {
                email : email,
                password : password
            }
        ).success(function (token) {
                findParticipant(email, token.access_token, 'userpass', callback);
            }).error(function (result) {
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