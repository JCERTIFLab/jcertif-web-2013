'use strict';

app.controller('RegisterCtrl', ['$http', '$scope', '$dialog', '$location', 'i18nService', 'backendService', 'loginService', function ($http, $scope, $dialog, $location, i18nService, backendService, loginService) {
    $http.defaults.useXDomain = true;
    var requiredFields = ['email', 'password', 'firstname', 'lastname', 'city', 'country'];
    $scope.passwordError = '';
    $scope.login = function() {
        loginService.login($scope.login.email, $scope.login.password, function(participant, error){
            if(error == undefined) {
                $location.path('/agenda')
            } else {
                $scope.loginError = i18nService.getText('form.badlogin');
            }
        });
    }

    $scope.goToAgenda = false;

    $scope.submitForm = function () {
        if($scope.user['password'].length < 6) {
            $scope.passwordError =  i18nService.getText('form.password.minlength');
        } else {
            $scope.isInProgress = true;
            $http.post(backendUrl + '/participant/register?jsonp=JSON_CALLBACK',  $scope.user)
                .success(function (result) {
                    $scope.isInProgress = false;
                    openConfirmDialog();
                    loginService.login($scope.user.email, $scope.user.password, function(participant, error){

                        if(error == undefined) {
                            if($scope.goToAgenda) {
                                $location.path('/agenda');
                            } else {
                                $scope.goToAgenda = true;
                            }

                        }
                    });
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
        ).open().then(function(result){
            if($scope.goToAgenda) {
                $location.path('/agenda');
            } else {
                $scope.goToAgenda = true;
            }
        });;
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
    };

    $scope.newPassError = '';

    $scope.sendNewPassword = function(email)  {
        if(email == undefined || email.trim() == '' ) {
            $scope.newPassError =  i18nService.getText('form.reinitemail.ko');
        } else {
            backendService.sendNewPassword(email, function(error) {
                if(error) {
                    $scope.newPassError =  i18nService.getText('form.reinitemail.ko');
                } else {
                    $scope.newPassError =  i18nService.getText('form.reinitemail.ok');
                }
            });
        }

    }




}]);
