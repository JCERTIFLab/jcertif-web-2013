'use strict';

app.controller('CfpCtrl', ['$http', '$scope', '$rootScope', '$dialog', 'backendService', function ($http, $scope, $rootScope, $dialog, backendService) {

    var userFields = ['biography'];
    var cfpFields = ['category', 'title', 'summary', 'keyword', 'description'];

    $scope.submitForm = function () {
        saveOrUpdateSpeaker('register');
    }


    function saveOrUpdateSpeaker(action) {
        $scope.user.password=$rootScope.access_token;
        $http.post(backendUrl + '/speaker/' + action + '?jsonp=JSON_CALLBACK&access_token=' + $rootScope.access_token + '&provider=' + $rootScope.provider + '&user=' + $rootScope.user.email, $scope.user)
            .success(function (result) {
                $scope.cfp.speakers = [$scope.user.email];
                $http.post(backendUrl + '/session/new?jsonp=JSON_CALLBACK', $scope.cfp)
                    .success(function (result) {
                        openConfirmBox();
                    }).error(function (data, status, headers, config) {
                        openErrorBox();
                    });
            }).error(function (data, status, headers, config) {
                if (action === 'register') {
                    saveOrUpdateSpeaker('update');
                } else {
                    openErrorBox();
                }
            });
    }

    function openErrorBox() {
        $dialog.messageBox('Erreur', 'Veuillez verifier les données saisies').open();

    }

    function openConfirmBox() {
        $dialog.messageBox('Yes !', 'Nous avons bien reçu votre demande').open();
    }

    backendService.getCategories(function (categories) {
        $scope.categories = categories;
    });

    $scope.isValid = function () {
        var valid = true;

        if ($scope.user == undefined || $scope.cfp == undefined) {
            valid = false;
        }

        if (valid) {
            angular.forEach(userFields, function (userField) {
                if ($scope.user[userField] == undefined || $scope.user[userField].trim() == '') {
                    valid = false;
                }
            });
        }

        if (valid) {
            angular.forEach(cfpFields, function (cfpField) {
                if ($scope.cfp[cfpField] == undefined || $scope.cfp[cfpField].trim() == '') {
                    valid = false;
                }
            });
        }
        return valid;
    };
}]);
