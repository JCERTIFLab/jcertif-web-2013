'use strict';

app.directive('jcFooter', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'directives/footer/footer.html',
        link: function (scope, element, attributes) {
        }
	};
});

