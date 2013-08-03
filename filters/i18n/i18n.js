app.filter('i18n',['i18nService', function(i18nService) {
    return function (input) {
        return i18nService.getText(input);
    }
}]);

