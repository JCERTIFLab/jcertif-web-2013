'use strict';

app.controller('HomeCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {
    $scope.carouselInterval = 7000;

    $scope.slides = [
        {image: 'images/banner.jpg'},
        {image: 'images/slide1.jpg'},
        {image: 'images/slide2.jpg'}
    ];

    backendService.getSponsors(function(sponsorsList) {
       $scope.sponsors = sponsorsList;
   });
}]);
