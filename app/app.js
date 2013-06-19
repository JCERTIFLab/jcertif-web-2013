'use strict';

var backendUrl = 'http://jcertif-backend.msomda.cloudbees.net';



var app = angular.module('jcertifWeb2013App', ['ui.bootstrap']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {controller: 'HomeCtrl', templateUrl: 'pages/home/home.html'})
        .when('/register', {controller: 'RegisterCtrl', templateUrl: 'pages/register/register.html'})
        .otherwise({redirectTo: '/home'});
});