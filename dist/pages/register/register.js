'use strict';

app.controller('RegisterCtrl', ['$http', '$scope', function ($http, $scope) {
    $http.defaults.useXDomain = true;
    $scope.submitForm = function () {
        $http.post(backendUrl + '/participant/register?jsonp=JSON_CALLBACK',  $scope.user)
            .success(function (result) {
                alert(result);
            });
    }


}]);
