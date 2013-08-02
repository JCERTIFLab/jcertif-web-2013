'use strict';

app.controller('RegisterCtrl', ['$http', '$scope', function ($http, $scope) {
    $http.defaults.useXDomain = true;
    var requiredFields = ['email', 'password', 'firstname', 'lastname', 'city', 'country'];
    $scope.submitForm = function () {
        $http.post(backendUrl + '/participant/register?jsonp=JSON_CALLBACK',  $scope.user)
            .success(function (result) {
                alert(result);
            });
    }

    $scope.isValid = function() {
        if($scope.user == undefined) {
            return false;
        }
        for(var i=0; i < requiredFields.length; i++) {
            if( $scope.user[requiredFields[i]] == undefined || $scope.user[requiredFields[i]].trim() == '') {
                return false;
            }
        }
        return  true;
    }
}]);
