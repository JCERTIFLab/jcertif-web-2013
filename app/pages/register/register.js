'use strict';

app.controller('RegisterCtrl', ['$http', '$scope', '$dialog', 'i18nService', function ($http, $scope, $dialog, i18nService) {
    $http.defaults.useXDomain = true;
    var requiredFields = ['email', 'password', 'firstname', 'lastname', 'city', 'country'];
    $scope.passwordError = '';
    $scope.submitForm = function () {
        if($scope.user['password'].length < 6) {
            $scope.passwordError =  i18nService.getText('form.password.minlength');
        } else {
            $scope.isInProgress = true;
            $http.post(backendUrl + '/participant/register?jsonp=JSON_CALLBACK',  $scope.user)
                .success(function (result) {
                    $scope.isInProgress = false;
                    openConfirmDialog();
                    $scope.user = {};
                })
                .error(function (result) {
                    $scope.isInProgress = false;
                    openErrorDialog();
                });
        }

    }

    function openConfirmDialog() {
        $dialog.messageBox(
            i18nService.getText('form.register.ok'),
            i18nService.getText('form.register.ok.msg')
        ).open();
    }

    function openErrorDialog() {
        $dialog.messageBox(
            i18nService.getText('form.register.ko'),
            i18nService.getText('form.register.ko.msg')
        ).open();
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
        if($scope.user['password'].length > 4) {
            $scope.passwordError = '';
        }
        return  true;
    }

}]);
