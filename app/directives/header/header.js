'use strict';

app.directive('jcHeader', ['i18nService', 'loginService', '$window',  function (i18nService, loginService, $window) {


    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/header/header.html',
        link: function (scope, element, attributes) {
            scope.changeLang = function(lang){
                i18nService.setLang(lang);
                if(i18nService.getCurrentLang() == 'FR') {
                    scope.FRClass = 'current-lang';
                    scope.ENClass = '';
                } else {
                    scope.ENClass = 'current-lang';
                    scope.FRClass = '';
                }
            };

            if(scope.FRClass == undefined) {
                if($window.navigator.language != undefined && $window.navigator.language.indexOf('FR') != -1) {
                    scope.changeLang('FR');
                } else {
                    scope.changeLang('EN');
                }
            }

            scope.logout = function() {
                loginService.logout();
            }

        }

    };
}]);

