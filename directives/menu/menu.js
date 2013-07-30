'use strict';

app.directive('jcMenu',  ['$location', function(location) {
    function getClass(path) {
        if (('#' + location.path()) == path) {
            return "active";
        } else {
            return "";
        }
    }
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/menu/menu.html',
        link: function (scope, element, attributes, location) {
            scope.menuItems = [
                {'label': 'header.nav.home', 'url': '#/home'},
                {'label': "header.nav.register", 'url': '#/register'},
                {'label':"header.nav.cfp", 'url': '#/cfp'},
                {'label':'header.nav.speakers', 'url': '#/speakers'},
                {'label':"header.nav.sessions", 'url': '#/sessions'},
                {'label':"header.nav.agenda", 'url': '#/agenda'},
                {'label':"header.nav.contact", 'url': '#/contact'}
            ];

            scope.getClass = getClass;

        }
    };
}]);