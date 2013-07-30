'use strict';

app.controller('CfpCtrl', ['$http', '$scope', '$dialog', 'backendService', function ($http, $scope, $dialog, backendService) {

    $scope.submitForm = function () {
        $http.post(backendUrl + '/speaker/register?jsonp=JSON_CALLBACK',  $scope.user)
            .success(function (result) {
                $scope.cfp.speakers = [$scope.user.email];
                $http.post(backendUrl + '/session/new?jsonp=JSON_CALLBACK',  $scope.cfp)
                    .success(function (result) {
                        openConfirmBox();
                    }).error(function(data, status, headers, config) {
                        openErrorBox(data);
                    });
            }).error(function(data, status, headers, config) {
                openErrorBox(data);
            });
    }

    function openErrorBox(){
        $dialog.messageBox('Erreur', 'Veuillez verifier les données saisies').open();

    };

    function openConfirmBox(){
        $dialog.messageBox('Yes !', 'Nous avons bien reçu votre demande').open();

    };

    backendService.getCategories(function(categories) {
        $scope.categories = categories;
    });


}]);
