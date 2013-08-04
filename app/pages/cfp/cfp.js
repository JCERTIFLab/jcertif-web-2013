'use strict';

app.controller('CfpCtrl', ['$http', '$scope', '$dialog', 'backendService', function ($http, $scope, $dialog, backendService) {

    var userFields = ['email', 'password', 'firstname', 'lastname', 'city', 'country'];
    var cfpFields = ['category', 'title', 'summary', 'keyword', 'description'];

    $scope.submitForm = function () {
        if($scope.speakerFoundEmail == '') {
            saveOrUpdateSpeaker('register');
        } else {
            saveOrUpdateSpeaker('update');
        }

    }

    function saveOrUpdateSpeaker(action) {
        $http.post(backendUrl + '/speaker/' + action + '?jsonp=JSON_CALLBACK',  $scope.user)
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

    $scope.speakerFoundEmail = '';

    $scope.checkSpeaker = function() {

        if($scope.user != undefined && $scope.user.email != undefined &&  $scope.speakerFoundEmail != $scope.user.email) {
            backendService.getSpeakers(function(speakers) {
                for(var i= 0; i < speakers.length; i++) {
                    if($scope.user != undefined && $scope.user.email != undefined && speakers[i].email == $scope.user.email) {
                        $scope.user.firstname = speakers[i].firstname;
                        $scope.user.lastname = speakers[i].lastname;
                        $scope.user.city = speakers[i].city;
                        $scope.user.country = speakers[i].country;
                        $scope.user.biography = speakers[i].biography;
                        $scope.speakerFoundEmail = $scope.user.email;
                        return true;
                    }
                }
                $scope.speakerFoundEmail = '';
            });
        }


        return true;
    };

    function openErrorBox(){
        $dialog.messageBox('Erreur', 'Veuillez verifier les données saisies').open();

    };

    function openConfirmBox(){
        $dialog.messageBox('Yes !', 'Nous avons bien reçu votre demande').open();

    };

    backendService.getCategories(function(categories) {
        $scope.categories = categories;
    });

    $scope.isValid = function() {
        if($scope.user == undefined) {
            return false;
        }
        for(var i=0; i < userFields.length; i++) {
            if( $scope.user[userFields[i]] == undefined || $scope.user[userFields[i]].trim() == '') {
                return false;
            }
        }
        for(var i=0; i < cfpFields.length; i++) {
            if( $scope.cfp[cfpFields[i]] == undefined || $scope.cfp[cfpFields[i]].trim() == '') {
                return false;
            }
        }
        return  true;
    };


}]);
