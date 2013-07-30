'use strict';

app.directive('jcTextArea', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/form/textArea/textArea.html',
        scope: {
            property: '@',
            label: '=',
            model: '='
        }
    };
});