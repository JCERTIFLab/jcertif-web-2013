'use strict';

var backendUrl = 'http://jcertif-backend.msomda.cloudbees.net';
var app = angular.module('jcertifWeb2013App', ['ui.bootstrap',  'ngCookies' ]);
var googleUser = {};

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {controller: 'HomeCtrl', templateUrl: 'pages/home/home.html'})
        .when('/register', {controller: 'RegisterCtrl', templateUrl: 'pages/register/register.html'})
        .when('/speakers', {controller: 'SpeakersCtrl', templateUrl: 'pages/speakers/speakers.html'})
        .when('/sessions', {controller: 'SessionsCtrl', templateUrl: 'pages/sessions/sessions.html'})
        .when('/cfp', {controller: 'CfpCtrl', templateUrl: 'pages/cfp/cfp.html'})
        .when('/agenda', {controller: 'AgendaCtrl', templateUrl: 'pages/agenda/agenda.html'})
        .when('/contact', {controller: 'ContactCtrl', templateUrl: 'pages/contact/contact.html'})
        .otherwise({redirectTo: '/home'});
});

function signinCallback(authResult) {
    if (authResult['access_token']) {
        // Authentification Ok
        document.getElementById('googlePlusButton').setAttribute('style', 'display: none');
        googleUser.access_token = authResult['access_token'];
        gapi.auth.setToken(authResult);
        gapi.client.load('oauth2', 'v2', function() {
            var request = gapi.client.oauth2.userinfo.get();
            request.execute(function(obj) {
                googleUser.email=obj['email'];
            });
        });

        gapi.client.load('plus','v1', function(){
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            request.execute(function(resp) {
                googleUser.photo = resp.image.url;
                googleUser.displayName = resp.displayName;
                googleUser.familyName = resp.name.familyName;
                googleUser.givenName = resp.name.givenName;
                googleUser.placesLived = resp.placesLived;
                document.getElementById('connected').innerHTML = "<img src=\"" + googleUser.photo+ "\" height=\"5px\"> &nbsp;" + resp.displayName;
            });
        });
    } else if (authResult['error']) {
        googleUser.access_token = undefined;
        googleUser.email= undefined;
        googleUser.photo = undefined;
        googleUser.displayName = undefined;
        googleUser.familyName = undefined;
        googleUser.givenName = undefined;
        googleUser.placesLived = undefined;
        document.getElementById('connected').innerHTML = '';
    }
}
