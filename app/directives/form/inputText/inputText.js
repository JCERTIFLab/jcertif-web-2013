'use strict';

app.directive('jcInputText', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/form/inputText/inputText.html',
        scope: {
            property: '@',
            label: '=',
            model: '=',
            inputType: '@',
            msg: '@'
        }
    };
});

