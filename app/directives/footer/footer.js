'use strict';

app.directive('jcFooter', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'directives/footer/footer.html',
        link: function (scope, element, attributes) {
            scope.menuItems = [
                {'label':'header.nav.home', 'url': '#/home'},
                {'label':'header.nav.about', 'url': '#/about'},
                {'label':'header.nav.speakers', 'url': '#/speakers'},
                {'label':'header.nav.sessions', 'url': '#/sessions'},
                {'label':'header.nav.videos', 'url': '#/videos'},
                {'label':'header.nav.agenda', 'url': '#/agenda'},
                {'label':'header.nav.contact', 'url': '#/contact'}
            ];
            scope.menuItems[0]['class'] = 'active';
        }
	};
});

