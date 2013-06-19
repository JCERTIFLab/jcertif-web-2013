'use strict';

app.directive('jcHeader', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/header/header.html'

    };
});

