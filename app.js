'use strict';

var backendUrl = 'http://jcertif-backend.msomda.cloudbees.net';



var app = angular.module('jcertifWeb2013App', ['ui.bootstrap']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {controller: 'HomeCtrl', templateUrl: 'pages/home/home.html'})
        .when('/register', {controller: 'RegisterCtrl', templateUrl: 'pages/register/register.html'})
        .when('/speakers', {controller: 'SpeakersCtrl', templateUrl: 'pages/speakers/speakers.html'})
        .when('/sessions', {controller: 'SessionsCtrl', templateUrl: 'pages/sessions/sessions.html'})
        .when('/cfp', {controller: 'CfpCtrl', templateUrl: 'pages/cfp/cfp.html'})
        .when('/contact', {controller: 'ContactCtrl', templateUrl: 'pages/contact/contact.html'})
        .otherwise({redirectTo: '/home'});
});