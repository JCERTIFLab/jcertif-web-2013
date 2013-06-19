'use strict';

app.directive('jcMenu', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/menu/menu.html',
        link: function (scope, element, attributes) {
            scope.menuItems = [
                {'label': 'header.nav.home', 'url': '#/home'},
                {'label': "header.nav.register", 'url': '#/register'},
                {'label':'header.nav.speakers', 'url': '#/speakers'},
                {'label':"header.nav.sessions", 'url': '#/sessions'},
                {'label':"header.nav.videos", 'url': '#/videos'},
                {'label':"header.nav.agenda", 'url': '#/agenda'},
                {'label':"header.nav.contact", 'url': '#/contact'}
            ];
            scope.currentMenuItem = scope.menuItems[0];

            scope.currentMenuItem["class"] = "active";

            scope.selectMenu = function(index) {
                scope.currentMenuItem["class"] = "";
                scope.currentMenuItem = scope.menuItems[index];
                scope.currentMenuItem["class"] = "active";
            }
        }
    };
});