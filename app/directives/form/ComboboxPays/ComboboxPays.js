'use strict';

app.directive('jcComboboxPays', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/form/inputText/ComboboxPays.html',
        scope: {
            property: '=',
            label: '=',
       		model: '=',	
        },
        link: function (scope, element, attributes) {

        }
    };
});
